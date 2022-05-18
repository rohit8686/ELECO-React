import React from "react";
import { useAuth } from "../../contexts/hooks-export";

export const UserProfile = () => {
  const { logout } = useAuth();
  const {
    authState: { userData },
  } = useAuth();
  return (
    <div className="card p-1">
      <p>
        <strong>Name : </strong>
        {userData.firstName} {userData.lastName}
      </p>
      <p>
        <strong>Email : </strong>
        {userData.email}
      </p>
      <div className="pt-1">
        <button className="btn btn-error" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
