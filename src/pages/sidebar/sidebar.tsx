import React from "react";
import { Link } from "react-router-dom";
import "./sideBarStyle.css";
import { type NavItem } from "../../types/components";

const navList: NavItem[] = [
  { href: "/", img: "/icons/home.svg", label: "Home" },
  {
    href: "/balance",
    img: "/icons/balance.svg",
    label: "Balance",
  },
  { href: "/users", img: "/icons/users.svg", label: "Users" },
  {
    href: "/transactions",
    img: "/icons/transaction.svg",
    label: "Transaction",
  },
  { href: "/referals", img: "/icons/gift.svg", label: "Referals" },
  { href: "/premium", img: "/icons/premium.svg", label: "Premium" },
  {
    href: "/settings",
    img: "/icons/settings.svg",
    label: "Settings",
  },
  {
    href: "/",
    img: "/icons/logOut.svg",
    label: "log out",
    color: true,
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div>
        <img
          src="/images/bpayLogo.png"
          alt="Logo here"
          className="w-[120px] mb-14"
        />
      </div>

      <ul className="nav-item">
        {navList.map((item, index) => {
          const isLastItem = index === navList.length - 1;

          return (
            <li
              key={index}
              className={`nav-hover ${item.color ? "text-red-600" : ""}  ${
                isLastItem ? "mt-60" : ""
              }`}
            >
              <Link
                to={item.href}
                className={`nav-list link-text ${
                  item.color ? "!text-red-600" : ""
                }`}
              >
                <img src={item.img} alt={item.label} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
