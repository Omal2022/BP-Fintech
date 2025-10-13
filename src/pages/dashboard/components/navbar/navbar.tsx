import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/authSlice";
import type { AppDispatch } from "../../../../store/store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-between bg-[#fff] w-full p-4">
      <Link to="/">Home</Link>

      <div className="flex gap-4 items-center">
        <div className="flex flex-column bg-[#1D4EFF] p-4 gap-3 rounded-md">
          <p className="text-white">Quick Actions</p>
          <img src="/icons/dropdown.svg" alt="" />
        </div>

        <div>
          <img src="/icons/notifications.svg" alt="notifications" />
        </div>
        <div>
          <img src="/icons/profile.svg" alt="profile" />
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-2 rounded-md border border-[#1D4EFF] text-[#1D4EFF] hover:bg-[#1D4EFF] hover:text-white transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
