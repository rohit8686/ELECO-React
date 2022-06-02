import React from "react";
import "./profile.css";
import { NavLink, Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <div>
      <div className="flex no-gap border">
        <NavLink to="/profile" className="link px-1" end>
          User Profile
        </NavLink>
        <NavLink to="addressDetails" className="link px-1">
          Address
        </NavLink>
        <NavLink to="orderDetails" className="link px-1">
          Order Details
        </NavLink>
      </div>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};
