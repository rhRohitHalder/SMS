import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

function TeacherDashboard() {
  const notification = useSelector((state) => state.Notice.value);
  const colorList = {
    1: "red",
    2: "green",
    3: "#bda800",
    4: "blue",
    5: "gray",
  };

  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="w-full h-full p-10 bg-gray-200">
          <p className="text-3xl font-semibold">Teacher Dashboard</p>
          <p className="mt-5 mb-10">
            Dashboard <span>{">"}</span> Teacher
          </p>

          <div className="w-full flex flex-row gap-5">
            <div className="w-1/3 flex flex-col gap-3">
              <div className="flex flex-row gap-3 w-full">
                {[
                  {
                    img: "https://cdn-icons-png.flaticon.com/128/3135/3135810.png",
                    value: "",
                    lable: "Total Students",
                  },
                  {
                    img: "https://cdn-icons-png.flaticon.com/128/1946/1946058.png",
                    value: "",
                    lable: "Total Exams",
                  },
                ].map((felled, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 w-1/2 flex flex-col items-center justify-center gap-3"
                  >
                    <img src={felled.img} alt="" />
                    <p className="text-3xl font-semibold">{felled.value}</p>
                    <p className="text-gray-600 text-xl font-medium">
                      {felled.lable}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-3 w-full">
                {[
                  {
                    img: "https://cdn-icons-png.flaticon.com/128/2940/2940653.png",
                    value: "",
                    lable: "Graduate Students",
                  },
                  {
                    img: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
                    value: "",
                    lable: "Total Income",
                  },
                ].map((felled, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 w-1/2 flex flex-col items-center justify-center gap-3"
                  >
                    <img src={felled.img} alt="" />
                    <p className="text-3xl font-semibold">{felled.value}</p>
                    <p className="text-gray-600 text-xl font-medium">
                      {felled.lable}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/3 bg-white p-5">
              <p className="text-2xl font-semibold">Students</p>
            </div>

            <div className="w-1/3 bg-white p-5">
              <p className="text-2xl font-semibold">Notification</p>
              <div className="mt-10">
                {notification.length > 0 ? (
                  notification.map((notice, index) => (
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

          <div className="mt-10 bg-white p-5">
            <p className="text-2xl font-semibold">My Students</p>

            <table className="mt-5 ">
                <tr>
                    <th>Roll</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Parents</th>
                    <th>Address</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
