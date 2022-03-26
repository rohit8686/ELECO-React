import React from "react";
import { useProduct } from "../../../contexts/product-context";
import { ClipLoader } from "react-spinners";
import { useWishlist } from "../../../contexts/wishlist-context";

export function Products() {
  const { productState, filteredData } = useProduct();
  const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { wishlistData } = wishlistState;

  return (
    <main className="main-content p-1">
      <h2 className="text-center"> Products</h2>
      <div className="underline"></div>
      <p className="text-center">(showing {filteredData.length} products)</p>

      <div className="flex space-around pt-1">
        {productState.loading && <ClipLoader />}
        {!productState.loading &&
          filteredData.map((product) => {
            const { _id, image, name, price, discount, rating } = product;
            return (
              <div className="card card-width" key={_id}>
                <img
                  className="img-border img-dimensions newarrivals-img"
                  src={image}
                  alt="laptop"
                />
                <div className="p-1">
                  <div className="flex space-between">
                    <h3>{name}</h3>
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
                  <p className="price">
                    &#8377; {Math.round(price - (discount * price) / 100)}
                  </p>
                  <p className="mrp-price">
                    MRP: <strike>&#8377;{price}</strike>
                  </p>
                  <p>Rating : {rating}/5</p>
                  <p className="discount">{discount}% off</p>
                </div>
                <button className={`btn btn-primary cart-btn `}>
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </main>
  );
}
