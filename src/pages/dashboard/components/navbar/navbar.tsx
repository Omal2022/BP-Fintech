import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#fff] w-full p-4">
      <Link to="/">Home</Link>

      <div className="flex gap-4 items-center">
        <div className="flex flex-column bg-[#1D4EFF]  p-4 gap-3 rounded-md">
          <p className="text-white">Quick Actionsn</p>
          <img src="/icons/dropdown.svg" alt="" />
        </div>

        <div>
          <img src="/icons/notifications.svg" alt="" />
        </div>
        <div>
          <img src="/icons/profile.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
