import React from "react";
import "./profile.css";
import { NavLink, Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <div>
      <div className="flex border">
        <NavLink to="/profile" className="link" end>
          User Profile
        </NavLink>
        <NavLink to="addressDetails" className="link">
          Address
        </NavLink>
        <NavLink to="orderDetails" className="link">
          Order Details
        </NavLink>
      </div>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};
