import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import { Dashboard } from "./components/models/dashboard";
import { RateManagement } from "./components/models/rateManagement";
import "./components/homeDashboardStyle.css";
import { RecentActivities } from "./components/models/recentActivity";

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

        {/* content area  */}
        <main className="content-area">
          <div>
            <h1>Dashboard</h1>

            <div className="flex flex-column flex-wrap gap-14 mt-14 w-full overflow-y-hidden ">
              {Object.entries(Dashboard).map(([key, value]) => (
                <div key={key} className="bg-[#F2F5FF] p-4 h-[15ch] w-[20vw]  ">
                  <h3>{value.text}</h3>
                  <p>{value.figure.toLocaleString()}</p>
                </div>
              ))}
            </div>

            {/* Rate Management */}
            <section className="bg-white rounded-[8px] border-1 border-gray-200 p-8 w-[600px] mt-24">
              <h2 className="font-semibold text-lg mb-5">Rate Management</h2>

              <table className="w-full text-sm text-left border-collapse">
                <thead className="text-gray-500 uppercase text-xs bg-[#F2F4F7] ">
                  <tr className="h-[70px]">
                    <th className="pb-3">Asset</th>
                    <th className="pb-3">Buy</th>
                    <th className="pb-3">Sell</th>
                  </tr>
                </thead>
                <tbody>
                  {RateManagement.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="flex items-center gap-2 py-3">
                        <img
                          src={item.img}
                          alt={item.country}
                          className="w-5 h-5"
                        />
                        <span className="text-gray-700">{item.country}</span>
                      </td>
                      <td className="py-3 text-gray-700">
                        {item.buy.toLocaleString()}
                      </td>
                      <td className="py-3 text-gray-700">
                        {item.sell.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* recent activities here */}

            <div className="mt-24 bg-white rounded-xl border-1 border-gray-200 p-8 w-full overflow-x-auto">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg text-gray-800">
                  Recent activity
                </h2>

                <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                  This Week
                  <img src="/public/icons/dropdown.svg" alt="dropdown" />
                </button>
              </div>

              {/* Table */}
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-[#F2F4F7] text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Date/Time</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>

                <tbody>
                  {RecentActivities.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-800">{item.type}</td>
                      <td className="py-3 px-4 text-[#1D4EFF] underline cursor-pointer">
                        {item.user}
                      </td>
                      <td className="py-3 px-4 text-gray-800">{item.amount}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {item.date} &nbsp; • &nbsp; {item.time}
                      </td>
                      <td className="py-3 px-4">
                        <span className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                            <img
                              src="/public/icons/check.svg"
                              alt="status"
                              className="w-3 h-3"
                            />
                          </span>
                          <span className="text-green-600 font-medium">
                            {item.status}
                          </span>
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <img
                          src="/public/icons/dots-vertical.svg"
                          alt="options"
                          className="w-5 h-5 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeDashboard;
