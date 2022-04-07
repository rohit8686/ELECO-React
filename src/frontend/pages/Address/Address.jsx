import React from "react";
import { ToastContainer } from "react-toastify";
import { useAddress } from "../../contexts/hooks-export";
import { Link } from "react-router-dom";

export const Address = () => {
  const {
    addressState: { addresses, editAddress, selectedAddress },
    addressDispatch,
    addAddress,
    deleteAddress,
    addressSelected,
    dummyAddress,
  } = useAddress();
  const {
    firstName,
    lastName,
    email,
    phone,
    type,
    address,
    city,
    state,
    pincode,
  } = editAddress;
  return (
    <div>
      <h2 className="text-center">Manage Address</h2>
      <div className="underline"></div>
      <Link to="/checkout" className="link">
        <div className="flex pt-1">
          <button className="btn btn-primary">Proceed to checkout</button>
        </div>
      </Link>
      <div className="flex pt-1">
        {addresses.map((data) => {
          const {
            _id,
            email,
            phone,
            type,
            address,
            city,
            state,
            pincode,
          } = data;
          return (
            <div className="card card-width p-1" key={_id}>
              <div className="flex space-between">
                <h3>{type} Address</h3>
                <button
                  className="btn btn-primary"
                  onClick={() => addressSelected(_id)}
                >
                  {selectedAddress._id === _id ? "SELECTED" : "SELECT"}
                </button>
              </div>
              <hr className="hr" />
              <p>
                {address}, {state}, {city}
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
                <button
                  className="btn btn-error"
                  onClick={() => deleteAddress(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-center pt-1">Add New Address</h2>
      <div className="underline"></div>
      <div className="flex pt-1">
        <div className="card card-width p-1">
          <h3 className="text-center">New Address</h3>
          <hr className="hr" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addAddress();
            }}
          >
            <label htmlFor="name">First Name :</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="input"
              placeholder="John"
              value={firstName}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            />
            <label htmlFor="name">First Name :</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="input"
              placeholder="Smith"
              value={lastName}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            />
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              placeholder="abcd@gmail.com"
              value={email}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            />
            <label htmlFor="phone">Phone :</label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="input"
              placeholder="9102392398"
              value={phone}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            />
            <label htmlFor="address">Address Type : </label>
            <select
              name="type"
              id="address"
              className="input"
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            >
              <option value="Home">Home</option>
              <option value="Office">Office</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="house-no">Address :</label>
            <input
              type="text"
              name="address"
              id="address"
              className="input"
              placeholder="12-45/2"
              required
              value={address}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
            />
            <label htmlFor="city">City :</label>
            <input
              type="text"
              name="city"
              id="city"
              className="input"
              placeholder="Vizag"
              value={city}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            />
            <label htmlFor="state">State :</label>
            <input
              type="text"
              name="state"
              id="state"
              className="input"
              placeholder="Andhra Pradesh"
              value={state}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            />
            <label htmlFor="pincode">Pincode :</label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              className="input"
              placeholder="524441"
              value={pincode}
              onChange={(e) =>
                addressDispatch({
                  type: "ADDRESS_INPUT",
                  payload: { attribute: e.target.name, value: e.target.value },
                })
              }
              required
            />
            <div className="flex pt-1">
              <button className="btn btn-primary">Add Address</button>
            </div>
            <div className="flex pt-1">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  dummyAddress();
                }}
              >
                Dummy Address
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
