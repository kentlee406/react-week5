import { NavLink, Outlet } from "react-router";
import "./scss/all.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div className="container">
      <header>
        <h1>TC 3C電子商務</h1>
        <nav>
          <NavLink to="">首頁</NavLink>|<NavLink to="/products">產品</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>TC電腦有限公司 版權所有 轉載必究</p>
      </footer>
    </div>
  );
}
export default Layout;
