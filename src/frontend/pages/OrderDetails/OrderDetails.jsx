import React from "react";
import { Link } from "react-router-dom";

export const OrderDetails = () => {
  return (
    <div className="card p-1">
      <h4>No orders made</h4>
      <div className="flex pt-1">
        <Link to="/products">
          <button className="btn btn-primary">Shop now</button>
        </Link>
      </div>
    </div>
  );
};
