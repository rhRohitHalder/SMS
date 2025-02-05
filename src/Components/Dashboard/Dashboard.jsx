import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-screen h-full">
        <Header />
        <div className="w-full h-full p-10">
            <p className="text-2xl font-semibold">Admin Dashboard</p>
            <div className="flex px-10 py-5 items-center justify-center gap-10">
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between">
                    <img src="https://cdn-icons-png.flaticon.com/128/3135/3135810.png" 
                    className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Students</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between">
                <img src="https://cdn-icons-png.flaticon.com/128/3429/3429433.png" 
                className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Teachers</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between">
                <img src="https://cdn-icons-png.flaticon.com/128/565/565377.png" 
                className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Hostels</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between">
                <img src="https://cdn-icons-png.flaticon.com/128/681/681494.png" 
                className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Staffs</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 px-10">
                <div className="flex flex-col w-1/2 shadow-lg p-5">
                    <p className="text-2xl font-semibold">Earning</p>
                    <div className="mt-10 flex flex-row justify-between px-5">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <p className="w-3 h-3 rounded-full border-2 border-gray-500 bg-blue-500"></p>
                                <p className="text-gray-400">Total Collectiona</p>
                            </div>
                            <p className="text-4xl flex items-center"><span className="text-2xl text-gray-400">$</span> {1500}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <p className="w-3 h-3 rounded-full border-2 border-green-500 bg-blue-500"></p>
                                <p  className="text-gray-400">Fees Collectiona</p>
                            </div>
                            <p className="text-4xl flex items-center"><span className="text-2xl text-gray-400">$</span> {1500}</p>
                        </div>
                        <p className="text-gray-400">{new Date().toDateString()}</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
