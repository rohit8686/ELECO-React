import React from "react";
import {
  useCart,
  useProduct,
  useWishlist,
  useAddress,
} from "../../contexts/hooks-export";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css";
import { ToastContainer } from "react-toastify";

export const Checkout = () => {
  const { filteredData } = useProduct();
  const { wishlistState, addToWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
  const { cartState, removeFromCart, handleCartQuantity } = useCart();
  const { cartData } = cartState;
  const {
    addressState: { addresses, selectedAddress },
  } = useAddress();
  const { email, phone, type, address, city, state, pincode, error } =
    selectedAddress ||
      (addresses.length >= 1 && addresses[0]) || {
        error: "Add atleast one address",
      };
  const navigate = useNavigate();

  const totalDiscount = cartData.reduce(
    (totalDiscount, cartItem) =>
      totalDiscount +
      Math.round((cartItem.price * cartItem.qty * cartItem.discount) / 100),
    0
  );
  const totalPrice = cartData.reduce(
    (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.qty,
    0
  );
  const deliveryCharge = 100;

  if (cartData.length === 0) {
    navigate("/products");
  }

  return (
    <div>
      <h1 className="text-center">Checkout</h1>
      <div className="underline"></div>
      <div className="flex cart-width">
        <div className="card p-1 align-self-start">
          <h3 className="pb-1">Price Details</h3>
          <hr />
          <div className="flex space-between pt-1">
            <p>Price ({cartData.length} items)</p>
            <p>&#8377; {totalPrice}</p>
          </div>
          <div className="flex space-between pt-1">
            <p>Discount</p>
            <p>- &#8377;{totalDiscount}</p>
          </div>
          <div className="flex space-between pb-1 pt-1">
            <p>Delivery Charges</p>
            <p>&#8377; {deliveryCharge}</p>
          </div>
          <hr />
          <div className="flex space-between pb-1 pt-1">
            <h3>Total Amount</h3>
            <h3>&#8377; {totalPrice - totalDiscount + deliveryCharge}</h3>
          </div>
          <hr />
          <p className="pt-1 pb-1">
            You're saving {totalDiscount} on this order !
          </p>
          <button className="btn btn-primary full-width">Proceed to Buy</button>
        </div>
        {error && (
          <div>
            <h2>{error}</h2>
            <div className="flex">
              <Link to="/address">
                <button className="btn btn-primary">Manage Address</button>
              </Link>
            </div>
          </div>
        )}
        {!error && (
          <div className="card p-1">
            <h3>{type} Address</h3>
            <hr className="hr" />
            <p>
              {address}, {city}, {state}
            </p>
            <p className="pt-1">
              Pincode :<strong> {pincode}</strong>
            </p>
            <p className="pt-1">
              Phone : <strong>{phone}</strong>
            </p>
            <p className="pt-1">
              Email : <strong>{email}</strong>
            </p>
            <div className="flex space-between pt-1">
              <Link to="/address">
                <button className="btn btn-primary">Manage Address</button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {cartData.length !== 0 && (
        <div className="flex p-1">
          <div className="flex cartitems-container">
            {cartData.map(({ discount, _id, image, name, price }) => {
              return (
                <div className="card card-width" key={_id}>
                  <Link to={`/products/${_id}`} className="link">
                    <img
                      className="img-border img-dimensions newarrivals-img"
                      src={image}
                      alt="cart"
                    />
                  </Link>
                  <div className="p-1">
                    <Link to={`/products/${_id}`} className="link">
                      <h3>{name}</h3>
                      <p className="price">
                        &#8377; {Math.round(price - (discount * price) / 100)}
                      </p>
                      <p className="mrp-price">
                        MRP: <strike>&#8377;{price}</strike>
                      </p>
                      <p className="discount pb-1">{discount}% off</p>
                    </Link>
                    <h4 className="inline">Quantity : </h4>
                    <button
                      className="round-btn"
                      onClick={() =>
                        handleCartQuantity(_id, filteredData, "decrement")
                      }
                    >
                      -
                    </button>
                    &nbsp;
                    {cartData.map((item) => (item._id === _id ? item.qty : ""))}
                    &nbsp;
                    <button
                      className="round-btn"
                      onClick={() =>
                        handleCartQuantity(_id, filteredData, "increment")
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-primary cart-btn"
                    onClick={() => removeFromCart(_id)}
                  >
                    Remove from cart
                  </button>
                  <button
                    className="btn btn-error cart-btn"
                    onClick={() => {
                      removeFromCart(_id, filteredData);
                      if (!wishlistData.some((item) => item._id === _id)) {
                        addToWishlist(_id, filteredData);
                      }
                    }}
                  >
                    Move to Wishlist
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
