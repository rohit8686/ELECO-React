import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsPage } from "../pages/Products/ProductsPage";
import Mockman from "mockman-js";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
