import { Link } from "react-router-dom";
import { useCart, useProduct, useWishlist } from "../../contexts/hooks-export";
import { Login } from "../Login/Login";

function EmptyWishList() {
  return (
    <div>
      <h1>Your Wishlist is Empty !</h1>
    </div>
  );
}
export function Wishlist() {
  const { filteredData } = useProduct();
  const { wishlistState, removeFromWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
  const { cartState, addToCart } = useCart();
  const { cartData } = cartState;

  if (!localStorage.getItem("userToken")) {
    return <Login />;
  }
  return (
    <div>
      <h2 className="text-center">My Wishlist</h2>
      <div className="underline"></div>
      <p className="text-center">( {wishlistData.length} items wishlisted)</p>
      <Link to="/products" className="flex link pt-1">
        <button className="btn btn-primary">Go to Products</button>
      </Link>
      <div className="flex p-1">
        {wishlistData.length === 0 && <EmptyWishList />}
        {wishlistData.length !== 0 &&
          wishlistData.map(({ discount, _id, image, name, price }) => {
            return (
              <div className="card card-width" key={_id}>
                <Link to={`/products/${_id}`} className="link">
                  <img
                    className="img-border img-dimensions newarrivals-img"
                    src={image}
                    alt="wishlist data"
                  />
                </Link>
                <div className="p-1">
                  <div className="flex space-between">
                    <Link to={`/products/${_id}`} className="link">
                      <h3>{name}</h3>
                    </Link>
                    <span
                      onClick={() => removeFromWishlist(_id)}
                      className="material-icons span icon icon-size wishlisted"
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
          })}
      </div>
    </div>
  );
}
