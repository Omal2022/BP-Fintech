import React from "react";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";
import { dashboardMetric } from "./components/mockdata/dashboard";
import { RateManagement } from "./components/mockdata/rateManagement";
import "./components/homeDashboardStyle.css";
import { RecentActivities } from "./components/mockdata/recentActivity";
import { Balance } from "./components/mockdata/balance";
import type { DashboardMetric } from "../../types/dashboard";
import Button from "../../components/UI/Button";
import "../../App.css";
import MobileNavBar from "../navbar/mobileNavBar";

const HomeDashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar lg:block md:hidden hidden">
        <Sidebar />
      </aside>

      <div className="main-content">
        <header className="navbar lg:block md:hidden hidden">
          <Navbar />
        </header>

        <div className=" lg:hidden md:block block">
          <MobileNavBar />
        </div>

        {/* content area  */}
        <main className="content-area">
          <div>
            <h1>Dashboard</h1>

            <div className="flex flex-col lg:justify-between md:justify-between md:flex-row lg:flex-row flex-wrap gap-6 mt-14 w-full overflow-y-hidden">
              {dashboardMetric.map((value: DashboardMetric) => (
                <div
                  key={value.id}
                  className="bg-[#F2F5FF] p-6 h-[15ch] w-full md:w-[45%] lg:w-[25vw] rounded-lg "
                >
                  <h3 className="dashboard-title">{value.text}</h3>
                  <p className="currency-text mt-4">
                    {value.currency
                      ? `${value.currency}${value.figure.toLocaleString(
                          undefined,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}`
                      : value.figure.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                  </p>
                </div>
              ))}
            </div>

            {/* Rate Management */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-6 w-full overflow-y-hidden">
              <section className="bg-white rounded-[8px] border-1 border-gray-200 w-[100%] mt-24">
                <h2 className="font-semibold text-[20px] p-8">
                  Rate Management
                </h2>

                <table className="w-full text-sm text-left border-collapse">
                  <thead className="uppercase text-xs bg-[#F2F4F7] ">
                    <tr className="h-[70px] text-gray-500 ">
                      <td className="pl-6 text-[#667085] ">Asset</td>
                      <td className="text-[#667085] ">Buy</td>
                      <td className="text-[#667085] ">Sell</td>
                    </tr>
                  </thead>

                  <tbody>
                    {RateManagement.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="flex items-center gap-2 py-3 pl-6 font-graphik font-normal text-sm text-black">
                          <img
                            src={item.img}
                            alt={item.country}
                            className="w-12 h-12 "
                          />
                          <span className="country py-3 font-graphik font-normal text-sm text-black">
                            {item.country}
                          </span>
                        </td>
                        <td className="py-3 font-graphik font-normal text-sm text-black">
                          {item.buy.toLocaleString()}
                        </td>
                        <td className="py-3 font-graphik font-normal text-sm text-black">
                          {item.sell.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <Button
                    width={"167%"}
                    bgColor="#ffff"
                    border="1px solid #EAECF0"
                    txColor="#000000"
                    padding="20px"
                    margin="8px"
                  >
                    Manage all
                  </Button>
                </table>
              </section>

              {/*  */}
              <section className="bg-white rounded-[8px] border border-gray-200 p-6 w-full mt-24">
                <h2 className="font-semibold text-[20px] mb-5">Balance</h2>

                <div className="flex flex-col md:flex-row lg:flex-row items-center md:items-start gap-8 mt-10">
                  {/* Chart */}
                  <img
                    src="/images/chart.svg"
                    alt="chart icon"
                    className="w-60 h-60 md:mr-8"
                  />

                  {/* Balances List */}
                  <div className="w-full md:w-auto">
                    {Balance.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col md:flex-row items-center md:items-start justify-between bg-gray-50 lg:border-b-2  lg:rounded-none lg:bg-transparent mb-4 p-4 rounded-md"
                      >
                        {/* Coin Info */}
                        <div className="flex flex-col w-full md:w-[380px] lg:w-[380px]">
                          <p className="flex items-center gap-2 text-gray-800">
                            <img
                              src={item.coin.img}
                              alt={item.coin.alt}
                              className="w-3 h-3"
                            />
                            {item.coin.coinName}
                          </p>

                          {/* Amount + Percentage */}
                          <div className="flex items-center justify-between w-full mt-2">
                            <h3 className="blanceFigure text-gray-900 font-semibold">
                              {item.amount.currency}
                              {item.amount.figure.toLocaleString()}
                            </h3>

                            <div
                              className={`h-[35px] w-[55px] flex items-center justify-center rounded-[8px] font-semibold text-[16px] ${
                                item.amount.percentage > 30
                                  ? "bg-gray-200 text-[#667085]"
                                  : "bg-red-500 text-white"
                              }`}
                            >
                              {item.amount.percentage}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  width={"100%"}
                  bgColor="#fff"
                  border="1px solid #EAECF0"
                  txColor="#000000"
                  padding="20px"
                  margin="8px"
                >
                  Manage all
                </Button>
              </section>
            </div>

            {/* recent activities here */}

            <div className="mt-24 bg-white rounded-xl border-1 border-gray-200 p-8 w-full overflow-x-auto">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 ">
                <h2 className="font-semibold text-lg text-gray-800">
                  Recent activity
                </h2>

                <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                  This Week
                  <img src="/icons/dropdown.svg" alt="dropdown" />
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
                      className="border-b last:border-0 hover:bg-gray-50 transition-colors h-20"
                    >
                      <td className="py-3 px-4 text-gray-800">{item.type}</td>
                      <td className="py-3 px-4 text-[#1D4EFF] cursor-pointer">
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
                              src="/icons/check.svg"
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
                          src="/icons/dots-vertical.svg"
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
