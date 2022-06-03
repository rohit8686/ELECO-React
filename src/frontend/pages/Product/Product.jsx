import React from "react";
import "../../styling/productpage.css";
import { Link, useParams } from "react-router-dom";
import { useCart, useWishlist, useProduct } from "../../contexts/hooks-export";
import { ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

export const Product = () => {
  const { productId } = useParams();
  const { productsData, filteredData } = useProduct();
  const productData = productsData.find((product) => product._id === productId);
  const { name, price, discount, image, rating, desc, error } = productData || {
    desc: [],
    error: "Failed to load product",
  };
  const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
  const { cartState, addToCart } = useCart();
  const { cartData } = cartState;

  return (
    <div>
      {productData && (
        <div className="product-container flex">
          <img
            className="img-border img-dimensions newarrivals-img product-image sticky-image align-self-start"
            src={image}
            alt="laptop"
          />
          <div className="product-details">
            <div className="p-1">
              <h1>{name}</h1>
              <p className="price pt-1">
                Price : &#8377; {Math.round(price - (discount * price) / 100)}
              </p>
              <p className="pb-1">
                MRP: &#8377; <strike> {price}</strike>
              </p>
              <p>Rating : {rating}/5</p>
              <p className="discount pb-1">Discount : {discount}% off</p>
              {cartState.loading && cartState.loadingId === productId ? (
                <ClipLoader size={15} />
              ) : (
                <>
                  <button
                    className={`btn btn-error ${
                      cartData.some((cartItem) => cartItem._id === productId)
                        ? "hide"
                        : ""
                    }`}
                    onClick={() => addToCart(productId, filteredData)}
                  >
                    Add to Cart
                  </button>
                  <Link to="/cart">
                    <button
                      className={`btn btn-error ${
                        cartData.some((cartItem) => cartItem._id === productId)
                          ? ""
                          : "hide"
                      }`}
                    >
                      Go to cart
                    </button>
                  </Link>
                </>
              )}
              &nbsp;
              <button
                className={`btn btn-primary ${
                  wishlistData.some(
                    (wishListItem) => wishListItem._id === productId
                  )
                    ? "hide"
                    : ""
                }`}
                onClick={() => addToWishlist(productId, filteredData)}
              >
                Add to Wishlist
              </button>
              <button
                className={`btn btn-primary ${
                  wishlistData.some(
                    (wishListItem) => wishListItem._id === productId
                  )
                    ? ""
                    : "hide"
                }`}
                onClick={() => removeFromWishlist(productId, filteredData)}
              >
                Remove from Wishlist
              </button>
              <h3 className="pt-1 pb-1">About this item :</h3>
              <ul>
                {desc.map((data, index) => {
                  return (
                    <li className="pb-1" key={index}>
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
      {!productData && (
        <div>
          <h1 className="text-center pb-1">{error}</h1>
          <Link to="/products" className="link">
            <div className="flex">
              <button className="btn btn-primary">Back to products</button>
            </div>
          </Link>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
