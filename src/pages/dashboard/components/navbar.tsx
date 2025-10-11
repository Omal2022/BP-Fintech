import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-amber-500 w-full p-4">
      <Link to="/">Home</Link>
     
        <div className="flex gap-4 items-center">
          <div className="flex flex-column bg-[#1D4EFF] p-4 gap-3 rounded-md">
            <p>Quick Actionsn</p>
            <img src="/public/icons/dropdown.svg" alt="" />
          </div>

          <div>
            <img src="/public/icons/notifications.svg" alt="" />
          </div>
          <div>
            <img src="/public/icons/profile.svg" alt="" />
          </div>
        </div>
     
    </div>
  );
};

export default Navbar;
