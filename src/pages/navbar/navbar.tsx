import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#fff] w-full p-4 px-11">
      <Link
        to="/"
        className="font-semibold text-[24px] text-[#1d2939] font-sans  "
      >
        Home
      </Link>

      <div className="flex gap-4 items-center">
        <Button display="flex" gap={6} bgColor="#1D4EFF">
          <p style={{ color: "white" }}>Quick Actions</p>
          <img src="/icons/dropdown.svg" alt="DropDown" />
        </Button>

        <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
          <img src="/icons/notifications.svg" alt="notifications" />
        </div>
        <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
          <img src="/icons/profile.svg" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
