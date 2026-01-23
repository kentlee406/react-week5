import { NavLink, Outlet } from "react-router";
function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="">首頁</NavLink>|<NavLink to="/products">產品</NavLink>
      </nav>
      <Outlet />
      <footer>表尾</footer>
    </div>
  );
}
export default Layout;
