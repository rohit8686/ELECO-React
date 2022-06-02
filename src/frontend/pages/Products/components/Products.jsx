import React from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import {
  useCart,
  useProduct,
  useWishlist,
  usePagination,
} from "../../../contexts/hooks-export";
import { Pagination } from "../../../Pagination/Pagination";

export function Products() {
  const { productState } = useProduct();
  const { paginatedData } = usePagination();
  const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
  const { cartState, addToCart } = useCart();
  const { cartData } = cartState;

  return (
    <main className="main-content p-1">
      <h2 className="text-center"> Products</h2>
      <div className="underline"></div>
      <p className="text-center">(showing {paginatedData.length} products)</p>

      <div className="flex space-around pt-1">
        {productState.loading && <ClipLoader />}
        {!productState.loading &&
          paginatedData.map((product) => {
            const { _id, image, name, price, discount, rating } = product;
            return (
              <div className="card card-width" key={_id}>
                <Link to={`/products/${_id}`} className="link">
                  <img
                    className="img-border img-dimensions newarrivals-img"
                    src={image}
                    alt="laptop"
                  />
                </Link>
                <div className="p-1">
                  <div className="flex space-between no-wrap pb-1">
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
                      onClick={() => addToWishlist(_id, paginatedData)}
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
                    <p className="price">
                      &#8377; {Math.round(price - (discount * price) / 100)}
                    </p>
                    <p className="mrp-price">
                      MRP: <strike>&#8377;{price}</strike>
                    </p>
                    <p>Rating : {rating}/5</p>
                    <p className="discount">{discount}% off</p>
                  </Link>
                </div>
                {cartState.loading && cartState.loadingId === _id ? (
                  <div className={`flex btn btn-primary cart-btn`}>
                    <ClipLoader size={15} color={`#FFF`} />
                  </div>
                ) : (
                  <>
                    <button
                      className={`btn btn-primary cart-btn ${
                        cartData.some((cartItem) => cartItem._id === _id)
                          ? "hide"
                          : ""
                      }`}
                      onClick={() => addToCart(_id, paginatedData)}
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
                  </>
                )}
              </div>
            );
          })}
      </div>
      <Pagination />
    </main>
  );
}
