import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { Login } from "../Login/Login";

function EmptyWishList() {
  return (
    <div>
      <h1>Your Wishlist is Empty !</h1>
    </div>
  );
}
export function Wishlist() {
  const { wishlistState, removeFromWishlist } = useWishlist();
  const { wishlistData } = wishlistState;
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
                <img
                  className="img-border img-dimensions newarrivals-img"
                  src={image}
                  alt="wishlist data"
                />
                <div className="p-1">
                  <div className="flex space-between">
                    <h3>{name}</h3>
                    <span
                      onClick={() => removeFromWishlist(_id)}
                      className="material-icons span icon icon-size wishlisted"
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
                  <p className="discount">{discount}% off</p>
                </div>
                <button className={`btn btn-primary cart-btn`}>
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
