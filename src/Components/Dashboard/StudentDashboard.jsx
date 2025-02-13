import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

function StudentDashboard() {
  const resultList = useSelector((state) => state.Result.value);
  const nofication = useSelector((state) => state.Notice.value);

  const colorList = {
    1: "red",
    2: "green",
    3: "#bda800",
    4: "blue",
    5: "gray",
  };
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="w-full h-full p-10 bg-gray-200">
          <p className="text-3xl font-semibold">Student Dashboard</p>
          <div className="mt-5 mb-10">
            <p>Dashboard</p>
          </div>

          <div className="w-full h-full flex flex-row gap-10">
            <div className="p-3 bg-white w-1/3">
              <p className="text-2xl">About Me</p>
              <div className="flex flex-row justify-center items-center gap-5 py-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/560/560277.png"
                  alt=""
                />
                <p className="font-bold text-2xl">{"Rohit Singh"}</p>
              </div>
              {[
                { label: "Gender", value: 1500 },
                { label: "Father Name", value: 300 },
                { label: "Mother Name", value: 10 },
                { label: "Date of Birth", value: 200 },
                { label: "Religion", value: 200 },
                { label: "E-Mail", value: 200 },
                { label: "Admission Date", value: 200 },
                { label: "Class", value: 200 },
                { label: "Section", value: 200 },
                { label: "Roll", value: 200 },
                { label: "Adress", value: 200 },
                { label: "Phone", value: 200 },
              ].map((FillEdit, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between px-10 mt-5"
                >
                  <p className="text-xl text-gray-600">{FillEdit.label} : </p>
                  <p className="text-xl font-semibold">{FillEdit.value}</p>
                </div>
              ))}
            </div>

            <div className="p-3 w-2/3">
              <div className="w-full flex flex-row gap-5">
                {[
                  {
                    label: "Notification",
                    img: "https://cdn-icons-png.flaticon.com/128/1827/1827370.png",
                    value: nofication.length,
                  },
                  {
                    label: "Events",
                    img: "https://cdn-icons-png.flaticon.com/128/1968/1968779.png",
                    value: "",
                  },
                  {
                    label: "Attendance",
                    img: "https://cdn-icons-png.flaticon.com/128/3589/3589030.png",
                    value: "",
                  },
                ].map((fillsed, index) => (
                  <div
                    key={index}
                    className="w-1/3 p-5 flex flex-row justify-between bg-white"
                  >
                    <img src={fillsed.img} className="w-20 h-20" />
                    <div className="flex flex-col justify-between items-center">
                      <p className="text-gray-600 font-medium text-[20px]">
                        {fillsed.label}
                      </p>
                      <p className="text-2xl">{fillsed.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white mt-10 p-5">
                <p className="text-2xl font-semibold">All Exam Results</p>
                <table className="mt-5 w-full border-collapse border border-gray-300 shadow-lg">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="border border-gray-300 px-4 py-2">
                        Exam Name
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Subject
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Grade
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Percent
                      </th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultList.map((result, index) => (
                      <tr
                        key={index}
                        className="even:bg-gray-100 hover:bg-gray-200 transition-all"
                      >
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {result.ExamName}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {result.subject}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {result.grade}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {result.percentage}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {result.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-row gap-10 mt-10">
            <div className="p-5 bg-white w-1/3">
              <p className="text-2xl font-semibold">Attendence</p>
            </div>
            <div className="p-5 bg-white w-1/3">
              <p className="text-2xl font-semibold">Event Calender</p>
            </div>
            <div className="p-5 bg-white w-1/3">
              <p className="text-2xl font-semibold">Notifications</p>
              <div className="mt-5">
                {nofication.length > 0 ? (
                  nofication.map((notice, index) => (
                    <div key={index} className="p-3 border-b-2">
                      <p
                        style={{ backgroundColor: colorList[(index % 5) + 1] }}
                        className="inline-block rounded-full px-5 py-3 text-white font-medium mb-3"
                      >
                        {notice.Date}
                      </p>
                      <p className="font-medium">{notice.title}</p>
                      <p className="text-gray-400 text-sm">{notice.details}</p>
                      <p className="text-gray-400 text-xs">
                        Posted By: {notice.postedBy}
                      </p>
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
}

export default StudentDashboard;
