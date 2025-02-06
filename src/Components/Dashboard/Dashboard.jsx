import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Dashboard = () => {
    const [eventState, setEventState] = useState(0);

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-screen h-full">
        <Header />
        <div className="w-full h-full p-10 bg-gray-300">
            <p className="text-2xl font-semibold">Admin Dashboard</p>
            <div className="flex px-10 py-5 items-center justify-center gap-10">
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between bg-white">
                    <img src="https://cdn-icons-png.flaticon.com/128/3135/3135810.png" 
                    className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Students</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between bg-white">
                <img src="https://cdn-icons-png.flaticon.com/128/3429/3429433.png" 
                className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Teachers</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between bg-white">
                <img src="https://cdn-icons-png.flaticon.com/128/565/565377.png" 
                className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Hostels</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
                <div className="w-1/4 shadow-lg p-10 gap-10 flex flex-row justify-between bg-white">
                <img src="https://cdn-icons-png.flaticon.com/128/681/681494.png" 
                className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-medium">Staffs</p>
                        <p className="text-gray-400 text-xl">{1500}</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-10 flex gap-5 flex-row">
                <div className="flex flex-col w-1/2 shadow-lg p-5 bg-white">
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
                <div className="w-1/2 flex flex-row gap-10">
                    <div className="w-1/2 p-5 shadow-lg bg-white">
                        <p className="text-2xl font-semibold">Expenses</p>
                    </div>
                    <div className="w-1/2 p-5 shadow-lg bg-white">
                        <p className="text-2xl font-semibold">Students</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-10 flex flex-row gap-10">
                <div className="flex flex-col w-1/2 shadow-lg p-5 bg-white">
                    <p className="text-2xl font-semibold">Event Calender</p>
                    <div className="w-full flex flex-col items-center mt-10">
                        <div className="w-2/3 bg-gray-300 h-10 rounded-full">
                            <button 
                            onClick={() => setEventState(0)}
                            className={`${eventState == 0 ? 'bg-red-500 text-white' : 'text-gray-500'} w-1/3 h-full rounded-full`}>
                                Day
                            </button>
                            <button 
                            onClick={() => setEventState(1)}
                            className={`${eventState == 1 ? 'bg-red-500 text-white' : 'text-gray-500'} w-1/3 h-full rounded-full`}>
                                Week
                            </button>
                            <button 
                            onClick={() => setEventState(2)}
                            className={`${eventState == 2 ? 'bg-red-500 text-white' : 'text-gray-500'} w-1/3 h-full rounded-full`}>
                                Month
                            </button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 shadow-lg p-5 bg-white">
                    <p className="text-2xl font-semibold">Notice Board</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
