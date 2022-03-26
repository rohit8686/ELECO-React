import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./frontend/contexts/product-context";
import { AuthProvider } from "./frontend/contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
