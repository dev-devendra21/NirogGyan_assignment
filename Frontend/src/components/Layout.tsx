import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <main className="container">
      <ToastContainer position="top-right" autoClose={3000} />
      <Outlet />
    </main>
  );
};

export default Layout;
