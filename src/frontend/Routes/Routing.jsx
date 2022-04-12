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
import { Checkout } from "../pages/Checkout/Checkout";
import { Address } from "../pages/Address/Address";
import { Profile } from "../pages/Profile/Profile";
import { AddressDetails } from "../pages/AddressDetails/AddressDetails";
import { OrderDetails } from "../pages/OrderDetails/OrderDetails";
import { UserProfile } from "../pages/UserProfile/UserProfile";

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
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/address" element={<Address />} />
      <Route path="/profile" element={<Profile />}>
        <Route index element={<UserProfile />} />
        <Route path="addressDetails" element={<AddressDetails />} />
        <Route path="orderDetails" element={<OrderDetails />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
