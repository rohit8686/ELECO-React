import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsPage } from "../pages/Products/ProductsPage";
import Mockman from "mockman-js";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup/Signup";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
