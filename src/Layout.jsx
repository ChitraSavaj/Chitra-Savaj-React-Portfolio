//Layout, Chitra Savaj, 301384748, 24/09/2024
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Layout;
