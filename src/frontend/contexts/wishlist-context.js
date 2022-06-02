import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastContainer } from "../Toast/toast";

const WishlistContext = createContext();
const useWishlist = () => useContext(WishlistContext);

function wishlistReducer(wishlistState, action) {
  switch (action.type) {
    case "WISHLIST_DATA":
      return { ...wishlistState, wishlistData: action.payload };
    case "WISHLIST_ERROR":
      return { ...wishlistState, wishlistError: action.payload };
    case "CLEAR_WISHLIST":
      return { ...wishlistState, wishlistData: [] };
    default:
      return { ...wishlistState };
  }
}

const WishlistProvider = ({ children }) => {
  const navigate = useNavigate();
  const initialState = { wishlistData: [], wishlistError: "" };
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  const { authState, authDispatch } = useAuth();
  const { userData, encodedToken } = authState;

  const addToWishlist = async (_id, filteredData) => {
    if (encodedToken) {
      const wishlistItem = filteredData.find((item) => item._id === _id);
      try {
        const res = await axios.post(
          "/api/user/wishlist",
          { product: wishlistItem },
          { headers: { authorization: encodedToken } }
        );
        wishlistDispatch({ type: "WISHLIST_DATA", payload: res.data.wishlist });
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userData, wishlist: res.data.wishlist })
        );
        authDispatch({
          type: "UPDATE_WISHLIST_DATA",
          payload: res.data.wishlist,
        });
        toastContainer("Added to wishlist", "success");
      } catch (e) {
        wishlistDispatch({
          type: "WISHLIST_ERROR",
          payload: "Failed to add to wishlist",
        });
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };
  const removeFromWishlist = async (_id) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: { authorization: encodedToken },
      });
      wishlistDispatch({ type: "WISHLIST_DATA", payload: res.data.wishlist });
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...userData, wishlist: res.data.wishlist })
      );
      authDispatch({
        type: "UPDATE_WISHLIST_DATA",
        payload: res.data.wishlist,
      });
      toastContainer("Removed from wishlist", "info");
    } catch (e) {
      console.log(e);
      wishlistDispatch({
        type: "WISHLIST_ERROR",
        payload: "Failed to remove from wishlist",
      });
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
