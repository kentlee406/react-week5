import { NavLink, Outlet } from "react-router";
import "./scss/all.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./component/Loading";
import { Notification } from "./component/Notification";

function Layout() {
  return (
    <div className="container">
      <Loading />
      <Notification />
      <header>
        <h1>Tech Choice 3C電子商務</h1>
        <nav>
          <NavLink to="">首頁</NavLink>|<NavLink to="/products">產品</NavLink>|
          <NavLink to="/cart">購物車</NavLink>|
          <NavLink to="/login">後台登入</NavLink>
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
