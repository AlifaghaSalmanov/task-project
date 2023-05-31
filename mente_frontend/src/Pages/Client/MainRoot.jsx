import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Client/Navbar/Navbar";
import Footer from "../../Components/Client/Footer/Footer";

const MainRoot = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoot;
