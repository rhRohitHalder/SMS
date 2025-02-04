import React, { useState } from "react";

function ExamShedule() {
  const [shedules, setShedules] = useState([]);
  const [shedulesDetails, setShedulesDetails] = useState({
    subjectName: "",
    subjectType: "",
    class: "",
    Sec: "",
    time: "",
    Date: "",
  });

  const subjectTypes = [
    "English",
    "Hindi",
    "Maths",
    "Science",
    "Social Science",
  ];
  const classes = [5, 6, 7, 8, 9, 10, 11, 12];
  const sec = ["A", "B", "C", "D"];

  const timeList = [
    "10:30-11:30 am",
    "11:30-12:30 pm",
    "12:30-1:30 pm",
    "1:30-2:30 pm",
    "2:30-3:30 pm",
    "3:30-4:30 pm",
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setShedules([...shedules, shedulesDetails]);
    setShedulesDetails({
      // Reset form after submission
      subjectName: "",
      subjectType: "",
      class: "",
      Sec: "",
      time: "",
      Date: "",
    });
  };

  const handleReset = () => {
    setShedulesDetails({
      subjectName: "",
      subjectType: "",
      class: "",
      Sec: "",
      time: "",
      Date: "",
    });
  };
  return (
    <div className="w-full h-auto px-10 py-10">
      <p className="text-5xl font-semibold">Examination</p>
      <div className="w-full h-auto flex flex-row gap-10 mt-10">
        {/* Left Side - Form */}
        <div className="w-1/3 bg-slate-300 p-10 rounded-lg">
          <p className="text-4xl font-semibold">Add New Exam</p>
          <form className="w-[85%]" onSubmit={handleSubmit}>
            <p className="mt-5 text-xl mb-2">Exam Name</p>
            <input
              value={shedulesDetails.subjectName}
              onChange={(e) =>
                setShedulesDetails({
                  ...shedulesDetails,
                  subjectName: e.target.value,
                })
              }
              placeholder="Enter Subject Name"
              className="w-full px-4 py-4 rounded-lg"
              type="text"
              required
            />
            <p className="mt-5 text-xl mb-2">Subject Type</p>
            <select
              value={shedulesDetails.subjectType}
              onChange={(e) =>
                setShedulesDetails({
                  ...shedulesDetails,
                  subjectType: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
              required
            >
              <option value="">Please Select</option>
              {subjectTypes.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">Select Class</p>
            <select
              value={shedulesDetails.class}
              onChange={(e) =>
                setShedulesDetails({
                  ...shedulesDetails,
                  class: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
              required
            >
              <option value="">Please Select</option>
              {classes.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">Select Section</p>
            <select
              value={shedulesDetails.Sec}
              onChange={(e) =>
                setShedulesDetails({
                  ...shedulesDetails,
                  Sec: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
              required
            >
              <option value="">Please Select</option>
              {sec.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">Select Time</p>
            <select
              value={shedulesDetails.time}
              onChange={(e) =>
                setShedulesDetails({
                  ...shedulesDetails,
                  time: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
              required
            >
              <option value="">Please Select</option>
              {timeList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">Date</p>
            <input
              value={shedulesDetails.Date}
              onChange={(e) =>
                setShedulesDetails({
                  ...shedulesDetails,
                  Date: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
              type="date"
              required
            />
            <div className="w-full flex gap-10 flex-row mt-10 text-white">
              <button
                type="submit"
                className="px-10 text-2xl font-semibold py-2 bg-[#FE8D01] rounded-lg cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-10 text-2xl font-semibold py-2 bg-blue-950 rounded-lg cursor-pointer"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
  
        {/* Right Side - Table */}
        <div className="w-2/3 bg-slate-300 p-10 rounded-lg">
          <p className="text-4xl font-semibold">All Subjects</p>
          <div className="mt-5">
            <table className="w-full border-collapse border border-gray-500">
              <thead>
                <tr className="bg-gray-400 text-white">
                  <th className="px-4 py-2">Exam Name</th>
                  <th className="px-4 py-2">Subject Type</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Section</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {shedules.length > 0 ? (
                  shedules.map((shedule, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-500 text-center bg-white border-t-[3px] ${
                        index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                      }`}
                    >
                      <td className=" px-4 py-2">{shedule.subjectName}</td>
                      <td className=" px-4 py-2">{shedule.subjectType}</td>
                      <td className=" px-4 py-2">{shedule.class}</td>
                      <td className=" px-4 py-2">{shedule.Sec}</td>
                      <td className=" px-4 py-2">{shedule.time}</td>
                      <td className=" px-4 py-2">{shedule.Date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4">
                      No subjects added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default ExamShedule;
