import { Outlet } from "react-router-dom";
import Header from "./Header";
const SidebarRoute = () => {
  return (
    <>
      <div className="sidebar-container">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default SidebarRoute;
