import React from "react";
import { useAddress } from "../../contexts/hooks-export";
import { Link } from "react-router-dom";

export const AddressDetails = () => {
  const {
    addressState: { addresses, selectedAddress },
  } = useAddress();
  const { email, phone, type, address, city, state, pincode, error } =
    selectedAddress ||
      (addresses.length >= 1 && addresses[0]) || {
        error: "Add atleast one address",
      };
  return (
    <div>
      {error && (
        <div>
          <h4 className="pt-1">{error}</h4>
          <div className="flex pt-1">
            <Link to="/address">
              <button className="btn btn-primary">Manage Address</button>
            </Link>
          </div>
        </div>
      )}
      {!error && (
        <div className="card p-1">
          <h4>{type} Address</h4>
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
  );
};
