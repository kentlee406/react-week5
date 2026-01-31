import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap";
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;
function Cart() {
  const [cart, setCart] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0);
  const getCartData = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/${API_PATH}/cart`);
      setCart(response.data.data.carts);
      setFinalTotal(response.data.data.final_total);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">產品</th>
            <th>單價</th>
            <th>數量</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.product.imageUrl || null}
                    alt={item.product.title}
                    width="100"
                  />
                </td>
                <td>{item.product.title}</td>
                <td>{item.product.price}</td>
                <td>
                  {item.qty}
                  {item.product.unit}
                </td>
                <td>{item.final_total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">購物車已清空</td>
            </tr>
          )}
          <tr>
            <td colSpan="4">
              <b>總金額</b>
            </td>
            <td>
              <b>{finalTotal}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Cart;
