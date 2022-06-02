import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAddress } from "../../contexts/address-context";
import { useCart } from "../../contexts/cart-context";

export const OrderDetails = () => {
  const {
    cartState: { orderSummary },
  } = useCart();
  const {
    addressState: { addresses },
  } = useAddress();

  return (
    <div className="container p-1">
      {orderSummary.length !== 0 ? (
        orderSummary.map(
          ({ paymentId, totalPrice, selectedAddress, cartData, orderDate }) => {
            const { email, phone, type, address, city, state, pincode } =
              selectedAddress || (addresses.length >= 1 && addresses[0]);
            return (
              <>
                <div className="text-center">
                  <h3 className="discount">
                    Order placed successfully on {orderDate} !
                  </h3>
                  <h3 className="pt-1">Order id : {paymentId.slice(4)}</h3>
                  <div className="flex pb-1 pt-1">
                    <h3>Total Amount :</h3>
                    <h3>&#8377; {totalPrice}</h3>
                  </div>
                  <div className="m-0">
                    <h3>Delivery to : {type} Address</h3>
                    <p className="pt-1">
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
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex ">
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
                                &#8377;{" "}
                                {Math.round(price - (discount * price) / 100)}
                              </p>
                              <p className="mrp-price">
                                MRP: <strike>&#8377;{price}</strike>
                              </p>
                              <p className="discount">{discount}% off</p>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr className="hr" />
              </>
            );
          }
        )
      ) : (
        <>
          <h4 className="text-center">No orders made</h4>
          <div className="flex pt-1">
            <Link to="/products">
              <button className="btn btn-primary">Shop now</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
