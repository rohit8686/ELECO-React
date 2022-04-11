import { Link } from "react-router-dom";
import { useCart,useProduct,useWishlist } from "../contexts/hooks-export";

export function Navbar() {
  const { productDispatch } = useProduct();
  const { wishlistState } = useWishlist();
  const { wishlistData } = wishlistState;
  const { cartState } = useCart();
  const { cartData } = cartState;

  return (
    <nav className="nav flex space-between">
      <Link to="/" className="link">
        <h1 className="gradient-text eleco-title">Eleco</h1>
      </Link>
      <div className="flex px-1">
        <div className="input-border flex">
          <span className="material-icons span icon icon-size">search</span>
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search"
            onChange={(e) =>
              productDispatch({ type: "SEARCH_TEXT", payload: e.target.value })
            }
          />
        </div>
        <Link to="/login">
          <button
            className={`btn btn-error ${
              localStorage.getItem("userToken") ? "hide" : ""
            }`}
          >
            Login
          </button>
        </Link>
        <Link
          to="/profile"
          className={`link ${localStorage.getItem("userToken") ? "" : "hide"}`}
        >
          <span className="material-icons-outlined span icon icon-size">
            account_circle
          </span>
        </Link>

        <Link to="/wishlist" className="link">
          <div className="badge">
            <span className="material-icons span icon icon-size">
              favorite_border
            </span>
            <div className="number status flex busy">{wishlistData.length}</div>
          </div>
        </Link>
        <Link to="/cart" className="link">
          <div className="badge">
            <span className="material-icons-outlined span icon icon-size">
              shopping_cart
            </span>
            <div className="number status flex busy">{cartData.length}</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
