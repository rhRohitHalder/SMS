import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";

function AddClass() {
  const [classList, setClassList] = useState([]);
  const [classDetails, scheduleClass] = useState({
    teacherName: "",
    gender: "",
    class: "",
    subject: "",
    section: "",
    time: "",
    date: "",
    number: "",
    email: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    setClassList([...classList, classDetails]);
    
  };
  return (
    <div className="flex bg-gray-400">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <div className="flex flex-col w-full p-10">
          <p className="text-3xl font-semibold">Classes</p>
          <div className="flex justify-start gap-2 flex-row my-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Library</Link>
          </div>
          <div className="bg-white flex flex-col gap-4 mt-4 p-10 rounded-xl">
            <p>Add New Class Schedule</p>
            <form className="flex flex-col" action="handelSubmit">
              <div className="w-full flex flex-row gap-4 justify-between">
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Teacher Name</p>
                  <input
                    onChange={(e) => scheduleClass({ ...classDetails, teacherName: e.target.value })}
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Gender</p>
                  <select 
                  onChange={(e) => scheduleClass({ ...classDetails, gender: e.target.value })}
                  className="bg-gray-300 px-5 py-3 rounded-lg w-full">
                    <option value="">select Gender</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Class</p>
                  <select 
                  onChange={(e) => scheduleClass({ ...classDetails, class: e.target.value })}
                  className="bg-gray-300 px-5 py-3 rounded-lg w-full">
                    <option value="">select class</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Subject</p>
                  <select 
                  onChange={(e) => scheduleClass({ ...classDetails, subject: e.target.value })}
                  className="bg-gray-300 px-5 py-3 rounded-lg w-full">
                    <option value="">select Subject</option>
                  </select>
                </div>
              </div>

              <div className="w-full flex flex-row gap-8 mt-10">
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Section</p>
                  <select 
                  onChange={(e) => scheduleClass({ ...classDetails, section: e.target.value })}
                  className="bg-gray-300 px-5 py-3 rounded-lg w-full">
                    <option value="">select section</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Time</p>
                  <select 
                  onChange={(e) => scheduleClass({ ...classDetails, time: e.target.value })}
                  className="bg-gray-300 px-5 py-3 rounded-lg w-full">
                    <option value="">select time</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Date</p>
                  <input
                  onChange={(e) => scheduleClass({ ...classDetails, date: e.target.value })}
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="date"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Number</p>
                  <input
                  onChange={(e) => scheduleClass({ ...classDetails, number: e.target.value })}
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="w-full flex flex-row gap-4 mt-10">
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">E-Mail</p>
                  <input
                  onChange={(e) => scheduleClass({ ...classDetails, email: e.target.value })}
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="email"
                    required
                  />
                </div>
              </div>


              <div className="w-full flex flex-row gap-4 mt-14">
              <button
                  className="px-10 py-3 bg-[#FE8D01] rounded-lg text-white font-semibold text-xl"
                  type="submit"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="px-10 py-3 bg-blue-800 rounded-lg text-white font-semibold text-xl"
                  
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClass;
