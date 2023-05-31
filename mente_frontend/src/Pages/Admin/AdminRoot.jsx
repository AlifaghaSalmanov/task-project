import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Admin/Navbar/Navbar";
import Footer from "../../Components/Admin/Footer/Footer";

const AdminRoot = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminRoot;
