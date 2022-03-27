import React from "react";
import { ClipLoader } from "react-spinners";
import {
  useCart,
  useProduct,
  useWishlist,
} from "../../../contexts/hooks-export";
import { Link } from "react-router-dom";

export const NewArrivals = () => {
  const { filteredData, productState, productsData } = useProduct();
  const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
  const { cartState, addToCart } = useCart();
  const { cartData } = cartState;
  return (
    <div>
      <h2 className="text-center pt-1" id="new-arrivals">
        New Arrivals
      </h2>
      <div className="underline"></div>

      <section className="flex pt-1 pb-1">
        {productState.loading && <ClipLoader />}
        {!productState.loading &&
          productsData.map((data) => {
            const { _id, image, name, price, discount, newArrival } = data;
            if (newArrival) {
              return (
                <div className="card card-width" key={_id}>
                  <div className="card-badge">New</div>
                  <Link to={`/products/${_id}`} className="link">
                    <img
                      className="img-border img-dimensions newarrivals-img"
                      src={image}
                      alt="new-arrival"
                    />
                  </Link>
                  <div className="p-1">
                    <div className="flex space-between">
                      <Link to={`/products/${_id}`} className="link">
                        <h3>{name}</h3>
                      </Link>
                      <span
                        className={`material-icons-outlined span icon icon-size  ${
                          wishlistData.some(
                            (wishListItem) => wishListItem._id === _id
                          )
                            ? "hide"
                            : ""
                        }`}
                        onClick={() => addToWishlist(_id, filteredData)}
                      >
                        favorite_border
                      </span>
                      <span
                        className={`material-icons-outlined span icon icon-size wishlisted ${
                          wishlistData.some(
                            (wishListItem) => wishListItem._id === _id
                          )
                            ? ""
                            : "hide"
                        }`}
                        onClick={() => removeFromWishlist(_id)}
                      >
                        favorite
                      </span>
                    </div>
                    <Link to={`/products/${_id}`} className="link">
                      <p className="price pt-1">
                        &#8377;{Math.round(price - (discount * price) / 100)}
                      </p>
                      <p className="mrp-price">
                        MRP: <strike className="pt-1">&#8377;{price}</strike>
                      </p>
                      <p className="discount">{discount}% off</p>
                    </Link>
                  </div>
                  <button
                    className={`btn btn-primary cart-btn ${
                      cartData.some((cartItem) => cartItem._id === _id)
                        ? "hide"
                        : ""
                    }`}
                    onClick={() => addToCart(_id, filteredData)}
                  >
                    Add to Cart
                  </button>
                  <Link to="/cart">
                    <button
                      className={`btn btn-primary cart-btn ${
                        cartData.some((cartItem) => cartItem._id === _id)
                          ? ""
                          : "hide"
                      }`}
                    >
                      Go to cart
                    </button>
                  </Link>
                </div>
              );
            } else return "";
          })}
      </section>
    </div>
  );
};
