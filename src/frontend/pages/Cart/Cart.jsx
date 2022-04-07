import "../../styling/cartpage.css";
import { Link } from "react-router-dom";
import { Login } from "../Login/Login";
import { useCart, useProduct, useWishlist } from "../../contexts/hooks-export";
import { ToastContainer } from "react-toastify";

function EmptyCart() {
  return <h1 className="flex pt-1">Your Cart is empty !</h1>;
}
export function Cart() {
  const { filteredData } = useProduct();
  const { wishlistState, addToWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
  const { cartState, removeFromCart, handleCartQuantity } = useCart();
  const { cartData } = cartState;

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

  if (!localStorage.getItem("userToken")) {
    return <Login />;
  }

  return (
    <div>
      <h2 className="text-center">My Cart</h2>
      <div className="underline"></div>
      {cartData.length !== 0 && (
        <p className="flex">({cartData.length} items in cart)</p>
      )}
      <Link to="/products" className="flex link pt-1">
        <button className="btn btn-primary">Go to Products</button>
      </Link>
      {cartData.length === 0 && <EmptyCart />}

      {cartData.length !== 0 && (
        <div className="flex flex-start no-wrap cart-width cart-container pt-1 pb-1">
          <div className="flex align-self-start cartitems-container">
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
          <div className="card card-width p-1 align-self-start sticky price-card">
            <h3 className="pb-1">Price Details</h3>
            <hr />
            <div className="flex space-between pt-1">
              <p>Price ({cartData.length} items)</p>
              <p>&#8377; {totalPrice}</p>
            </div>
            <div className="flex space-between pt-1">
              <p>Discount</p>
              <p>
                - &#8377;
                {totalDiscount}
              </p>
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
            <div className="flex pt-1">
              <a href="/Pages/Checkout/checkout.html">
                <button className="btn btn-primary full-width">
                  Place Order
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
