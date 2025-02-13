import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import { scheduleClass } from "../../features/class/ClassSlice";
import { useDispatch } from "react-redux";

function AddClass() {
  const dispatch = useDispatch();
  const [classList, setClassList] = useState([]);
  const [classDetails, setScheduleClass] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...classList, classDetails];
    setClassList(updatedData);
    dispatch(scheduleClass(updatedData));

    // Reset the form
    setScheduleClass({
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
  };

  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sections = ["A", "B", "C", "D", "E"];
  const times = [
    "8:00am - 9.00am",
    "9:00am - 10.00am",
    "10:00am - 11.00am",
    "11:00am - 12.00pm",
    "12:00pm - 1.00pm",
    "1:00pm - 2.00pm",
    "2:00pm - 3.00pm",
    "3:00pm - 4.00pm",
    "4:00pm - 5.00pm",
  ];
  const subjects = ["Math", "English", "Science", "Social", "Computer"];

  return (
    <div className="flex bg-gray-200">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <div className="flex flex-col w-full p-10">
          <p className="text-3xl font-semibold">Classes</p>
          <div className="flex justify-start gap-2 flex-row mt-5 mb-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Class</Link>
          </div>
          <div className="bg-white flex flex-col gap-4 mt-4 p-10 rounded-xl">
            <p>Add New Class Schedule</p>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="w-full flex flex-row gap-4 justify-between">
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Teacher Name</p>
                  <input
                    value={classDetails.teacherName}
                    onChange={(e) =>
                      setScheduleClass({
                        ...classDetails,
                        teacherName: e.target.value,
                      })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Gender</p>
                  <select
                    value={classDetails.gender}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, gender: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Class</p>
                  <select
                    value={classDetails.class}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, class: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                  >
                    <option value="">Select Class</option>
                    {classes.map((classItem, index) => (
                      <option key={index} value={classItem}>
                        {classItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Subject</p>
                  <select
                    value={classDetails.subject}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, subject: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full flex flex-row gap-8 mt-10">
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Section</p>
                  <select
                    value={classDetails.section}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, section: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                  >
                    <option value="">Select Section</option>
                    {sections.map((section, index) => (
                      <option key={index} value={section}>{section}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Time</p>
                  <select
                    value={classDetails.time}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, time: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                  >
                    <option value="">Select Time</option>
                    {times.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Date</p>
                  <input
                    value={classDetails.date}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, date: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="date"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-500 text-xl mb-5">Contact Number</p>
                  <input
                    value={classDetails.number}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, number: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="w-full flex flex-row gap-4 mt-10">
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">E-mail</p>
                  <input
                    value={classDetails.email}
                    onChange={(e) =>
                      setScheduleClass({ ...classDetails, email: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="w-full flex flex-row gap-4 mt-14">
                <button className="px-10 py-3 bg-[#FE8D01] rounded-lg text-white font-semibold text-xl" type="submit">
                  Save
                </button>
                <button
                  type="button"
                  className="px-10 py-3 bg-blue-800 rounded-lg text-white font-semibold text-xl"
                  onClick={() =>
                    setScheduleClass({
                      teacherName: "",
                      gender: "",
                      class: "",
                      subject: "",
                      section: "",
                      time: "",
                      date: "",
                      number: "",
                      email: "",
                    })
                  }
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
