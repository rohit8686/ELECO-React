import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsPage } from "../pages/Products/ProductsPage";
import Mockman from "mockman-js";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup/Signup";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { Cart } from "../pages/Cart/Cart";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { Product } from "../pages/Product/Product";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
