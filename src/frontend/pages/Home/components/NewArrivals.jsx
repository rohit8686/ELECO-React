import React from "react";
import { ClipLoader } from "react-spinners";
import { useProduct } from "../../../contexts/product-context";
import { useWishlist } from "../../../contexts/wishlist-context";

export const NewArrivals = () => {
  const { filteredData, productState, productsData } = useProduct();
  const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
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
                  <img
                    className="img-border img-dimensions newarrivals-img"
                    src={image}
                    alt="new-arrival"
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
                    <p className="price pt-1">
                      &#8377;{Math.round(price - (discount * price) / 100)}
                    </p>
                    <p className="mrp-price">
                      MRP: <strike className="pt-1">&#8377;{price}</strike>
                    </p>
                    <p className="discount">{discount}% off</p>
                  </div>
                  <button className={`btn btn-primary cart-btn`}>
                    Add to Cart
                  </button>
                </div>
              );
            } else return "";
          })}
      </section>
    </div>
  );
};
