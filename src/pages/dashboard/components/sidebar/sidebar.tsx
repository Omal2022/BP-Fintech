import React from "react";
import { Link } from "react-router-dom";
import "./sideBarStyle.css";
import type { NavItem } from "../../../../types/components";

const navItems: NavItem[] = [
  { href: "/", img: "/icons/home.svg", label: "Home" },
  { href: "/balance", img: "/icons/balance.svg", label: "Balance" },
  { href: "/users", img: "/icons/users.svg", label: "Users" },
  { href: "/transactions", img: "/icons/transaction.svg", label: "Transaction" },
  { href: "/referals", img: "/icons/gift.svg", label: "Referals" },
  { href: "/premium", img: "/icons/premium.svg", label: "Premium" },
  { href: "/settings", img: "/icons/settings.svg", label: "Settings" },
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
        {navItems.map((item) => (
          <li key={item.href} className="nav-hover">
            <Link to={item.href} className="nav-list">
              <img src={item.img} alt={item.label} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
