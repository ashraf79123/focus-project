import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "../MainHome";
import Products from "../Product-section/products";

import Mainabout from "../about-section/Mainabout";
import LoginPage from "../about-section/login";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<Mainabout />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoute;
