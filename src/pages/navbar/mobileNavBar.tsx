import { useState } from "react";
import Button from "../../components/UI/Button";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative w-full bg-[#F2F4F7] p-6">
      {/* Header / Logo Section */}
      <div
        className={`bg-[#F2F4F7] w-full transition-all ease-in-out duration-500 ${
          isOpen ? "h-screen" : "h-[70px]"
        }`}
      >
        <img
          src="/images/bpayLogo.png"
          alt="BPay Logo"
          className="w-[120px] mb-14"
        />
      </div>

      {/* Toggle Icon */}
      <i
        className={`fa-sharp fa-solid ${
          isOpen ? "fa-xmark" : "fa-bars"
        } fa-2xl absolute top-13 right-9
        cursor-pointer z-20 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={handleClick}
      ></i>

      {/* Navigation Content */}
      {isOpen && (
        <nav className="absolute top-20 left-6 flex flex-col gap-4 z-10">
          <p>Home</p>
          <p>Balance</p>
          <p>Transactions</p>
          <p>Referrals</p>
          <p>Settings</p>

          <div className="flex f gap-4 items-center mt-4">
            <Button display="flex" gap={6} bgColor="#1D4EFF">
              <p style={{ color: "white" }}>Quick Actions</p>
              <img src="/icons/dropdown.svg" alt="DropDown" />
            </Button>

            <div className="flex gap-4">
              <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
                <img src="/icons/notifications.svg" alt="notifications" />
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
                <img src="/icons/profile.svg" alt="profile" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <p>Log Out</p>
            <img src="/icons/logOut.svg" alt="Log Out" />
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNavBar;
