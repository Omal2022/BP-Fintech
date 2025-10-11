import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "./components/homeDashboardStyle.css";

const HomeDashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <div className="main-content">
        <header className="navbar">
          <Navbar />
        </header>

        <main className="content-area">
          <h1>Welcome to the Home Dashboard</h1>
          <p>This is the content of the home dashboard.</p>
        </main>
      </div>
    </div>
  );
};

export default HomeDashboard;
