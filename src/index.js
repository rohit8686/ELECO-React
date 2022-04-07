import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  CartProvider,
  WishlistProvider,
  AuthProvider,
  ProductProvider,
  AddressProvider,
} from "./frontend/contexts/providers-export";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
