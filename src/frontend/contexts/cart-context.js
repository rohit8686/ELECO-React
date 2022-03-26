import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth-context";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const initialState = { cartData: [], cartError: "" };
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const { authState, authDispatch } = useAuth();
  const { userData, encodedToken } = authState;

  useEffect(() => {
    encodedToken
      ? cartDispatch({
          type: "CART_DATA",
          payload: JSON.parse(localStorage.getItem("userData")).cart,
        })
      : cartDispatch({ type: "CLEAR_CART" });
  }, [encodedToken]);

  function cartReducer(cartState, action) {
    switch (action.type) {
      case "CART_DATA":
        return { ...cartState, cartData: action.payload };
      case "CART_ERROR":
        return { ...cartState, cartError: action.payload };
      case "CLEAR_CART":
        return { ...initialState };
      default:
        return { ...cartState };
    }
  }

  const addToCart = async (_id, filteredData) => {
    if (localStorage.getItem("userToken")) {
      const cartItem = filteredData.find((item) => item._id === _id);
      try {
        const res = await axios.post(
          "/api/user/cart",
          { product: cartItem },
          { headers: { authorization: encodedToken } }
        );
        cartDispatch({ type: "CART_DATA", payload: res.data.cart });
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userData, cart: res.data.cart })
        );
        authDispatch({
          type: "UPDATE_CART_DATA",
          payload: res.data.cart,
        });
      } catch (e) {
        cartDispatch({
          type: "CART_ERROR",
          payload: "Failed to add to cart",
        });
        console.log("Cart error is", e);
      }
    } else {
      navigate("/login");
    }
  };
  const removeFromCart = async (_id) => {
    try {
      const res = await axios.delete(`/api/user/cart/${_id}`, {
        headers: { authorization: encodedToken },
      });
      cartDispatch({ type: "CART_DATA", payload: res.data.cart });
      authDispatch({
        type: "UPDATE_CART_DATA",
        payload: res.data.cart,
      });
    } catch (e) {
      console.log(e);
      cartDispatch({
        type: "CART_ERROR",
        payload: "Failed to remove from cart",
      });
    }
  };
  const handleCartQuantity = async (
    _id,
    filteredData,
    incrementOrDecrement
  ) => {
    if (localStorage.getItem("userToken")) {
      const cartDataItem = cartState.cartData.find((item) => item._id === _id);
      if (cartDataItem.qty <= 1 && incrementOrDecrement === "decrement") {
        removeFromCart(_id, filteredData);
        return;
      }
      try {
        const res = await axios.post(
          `/api/user/cart/${_id}`,
          { action: { type: incrementOrDecrement } },
          { headers: { authorization: encodedToken } }
        );
        cartDispatch({ type: "CART_DATA", payload: res.data.cart });
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userData, cart: res.data.cart })
        );
        authDispatch({
          type: "UPDATE_CART_DATA",
          payload: res.data.cart,
        });
      } catch (e) {
        cartDispatch({
          type: "CART_ERROR",
          payload: "Failed to add to cart",
        });
        console.log("Cart quantity error is ", e);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        handleCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
