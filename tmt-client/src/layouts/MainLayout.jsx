import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar /> 
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
