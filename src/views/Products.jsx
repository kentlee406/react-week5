import axios from "axios";
import "bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;
function Products() {
  const [products, setProducts] = useState([]);
  const getProductData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/${API_PATH}/products/all`,
      );
      setProducts(response.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <h2>產品列表</h2>
      <div className="cards">
        <div className="row g-4">
          {products && products.length > 0
            ? products.map((product) => {
                return (
                  <div className="col-4">
                    <div className="card">
                      <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <Link to={`/product/${product.id}`}>
                            {product.title}
                          </Link>
                          <span className="badge bg-primary ms-2">
                            {product.category}
                          </span>
                        </h5>
                        <p className="card-text">{product.content}</p>
                        <div className="d-flex">
                          <p className="card-text text-secondary">
                            <del>{product.origin_price}</del>
                          </p>
                          &nbsp;元 / {product.price} 元
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "目前尚無產品資料"}
        </div>
      </div>
    </>
  );
}
export default Products;
