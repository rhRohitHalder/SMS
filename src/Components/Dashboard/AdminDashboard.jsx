import React, { useState, useCallback } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Calendar } from "@natscale/react-calendar";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [eventState, setEventState] = useState("month");
  const [value, setValue] = useState(null);
  const noticeListDashboard = useSelector((state) => state.Notice.value);
  const onChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const colorList = {
    1: "red",
    2: "green",
    3: "#bda800",
    4: "blue",
    5: "gray",
  };

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-screen h-full">
        <Header />
        <div className="w-full h-full p-10 bg-gray-300">
          <p className="text-2xl font-semibold">Admin Dashboard</p>

          {/* Summary Cards */}
          <div className="flex px-10 py-5 items-center justify-center gap-10">
            {[
              { label: "Students", count: 1500, icon: "https://cdn-icons-png.flaticon.com/128/3135/3135810.png" },
              { label: "Teachers", count: 300, icon: "https://cdn-icons-png.flaticon.com/128/3429/3429433.png" },
              { label: "Hostels", count: 10, icon: "https://cdn-icons-png.flaticon.com/128/565/565377.png" },
              { label: "Staffs", count: 200, icon: "https://cdn-icons-png.flaticon.com/128/681/681494.png" },
            ].map((item, index) => (
              <div key={index} className="w-1/4 shadow-lg p-10 flex flex-row justify-between bg-white">
                <img src={item.icon} className="h-14 w-14" alt={item.label} />
                <div>
                  <p className="text-2xl font-medium">{item.label}</p>
                  <p className="text-gray-400 text-xl">{item.count}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Earnings and Expenses Section */}
          <div className="mt-10 px-10 flex gap-5 flex-row">
            <div className="flex flex-col w-1/2 shadow-lg p-5 bg-white">
              <p className="text-2xl font-semibold">Earnings</p>
              <div className="mt-10 flex flex-row justify-between px-5">
                {[
                  { label: "Total Collection", amount: 50000 },
                  { label: "Fees Collection", amount: 40000 },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <p className="w-3 h-3 rounded-full border-2 border-gray-500 bg-blue-500"></p>
                      <p className="text-gray-400">{item.label}</p>
                    </div>
                    <p className="text-4xl flex items-center">
                      <span className="text-2xl text-gray-400">$</span> {item.amount}
                    </p>
                  </div>
                ))}
                <p className="text-gray-400">{new Date().toDateString()}</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-row gap-10">
              <div className="w-1/2 p-5 shadow-lg bg-white">
                <p className="text-2xl font-semibold">Expenses</p>
              </div>
              <div className="w-1/2 p-5 shadow-lg bg-white">
                <p className="text-2xl font-semibold">Students</p>
              </div>
            </div>
          </div>

          {/* Event Calendar & Notice Board */}
          <div className="mt-10 px-10 flex flex-row gap-10">
            <div className="flex flex-col w-1/2 shadow-lg p-5 bg-white">
              <p className="text-2xl font-semibold">Event Calendar</p>
              <div className="w-full flex flex-col items-center mt-10">
                {/* Event State Switcher */}
                <div className="w-2/3 bg-gray-300 h-10 rounded-full flex">
                  {["day", "week", "month"].map((label, index) => (
                    <button
                      key={index}
                      onClick={() => setEventState(label)}
                      className={`w-1/3 h-full rounded-full ${
                        eventState === label ? "bg-red-500 text-white" : "text-gray-500"
                      }`}
                    >
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="w-full mt-5">
                  <Calendar value={value} onChange={onChange} />
                </div>
              </div>
            </div>

            {/* Notice Board */}
            <div className="flex flex-col w-1/2 shadow-lg p-5 bg-white">
              <p className="text-2xl font-semibold">Notice Board</p>
              <div className="mt-5">
                {noticeListDashboard.length > 0 ? (
                  noticeListDashboard.map((notice, index) => (
                    <div key={index} className="p-3 border-b-2">
                      <p 
                      style={{ backgroundColor: colorList[(index % 5) + 1] }}
                      className='inline-block rounded-full px-5 py-3 text-white font-medium mb-3'>{notice.Date}</p>
                      <p className="font-medium">{notice.title}</p>
                      <p className="text-gray-400 text-sm">{notice.details}</p>
                      <p className="text-gray-400 text-xs">Posted By: {notice.postedBy}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No notices available</p>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
