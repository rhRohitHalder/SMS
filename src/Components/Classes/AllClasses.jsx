import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function AllClasses() {
  const classList = useSelector((state) => state.Class.value);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <div className="flex flex-col w-full p-10 bg-gray-200 h-screen">
          <p className="text-3xl font-semibold">Classes</p>
          <div className="flex justify-start gap-2 flex-row mt-5 mb-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Class</Link>
          </div>

          <div className=" p-10 bg-white rounded-xl">
            <p className="text-2xl font-semibold">All Class Schedules</p>
            <table className="min-w-full divide-y divide-gray-200 mt-20">
              <tr className="bg-gray-50">
                <th className="p-3">Name</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Class</th>
                <th className="p-3">Subject</th>
                <th className="p-3">section</th>
                <th className="p-3">Time</th>
                <th className="p-3">Date</th>
                <th className="p-3">Number</th>
                <th className="p-3">E-mail</th>
              </tr>
              {classList.map((item, index) => (
                 <tr
                 className="bg-white divide-y divide-gray-200" 
                 key={index}>
                  <td className="p-3">{item.teacherName}</td>
                  <td className="p-3">{item.gender}</td>
                  <td className="p-3">{item.class}</td>
                  <td className="p-3">{item.subject}</td>
                  <td className="p-3">{item.section}</td>
                  <td className="p-3">{item.time}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.number}</td>
                  <td className="p-3">{item.email}</td>
                 </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllClasses;
