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
import { PaginationProvider } from "./frontend/contexts/pagination-context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <AddressProvider>
              <PaginationProvider>
                <App />
              </PaginationProvider>
            </AddressProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
