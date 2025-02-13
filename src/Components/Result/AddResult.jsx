import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setResult } from "../../features/Result/ResultSlice";

function AddResult() {
  const dispatch = useDispatch();
  const classes = [5, 6, 7, 8, 9, 10, 11, 12];
  const subjects = ["English", "Hindi", "Maths", "Science"];

  const [resultList, setResultList] = useState([]);
  const [resultDetails, setResultDetails] = useState({
    studentName: "",
    ExamName: "",
    grade: "",
    subject: "",
    percentage: "", // Fixed typo
    class: "",
    date: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const updatedResultList = [...resultList, resultDetails]; // Fixed state mutation
    setResultList(updatedResultList);
    dispatch(setResult(updatedResultList));

    setResultDetails({
      studentName: "",
      ExamName: "",
      grade: "",
      subject: "",
      percentage: "",
      class: "",
      date: "",
    });
  };

  const Reset = () => {
    setResultDetails({
      studentName: "",
      ExamName: "",
      grade: "",
      subject: "",
      percentage: "",
      class: "",
      date: "",
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="h-screen p-10 bg-gray-200">
          <p className="text-3xl font-semibold">Add Result</p>
          <div className="mt-5 mb-10 flex flex-row gap-2">
            <Link to="/TeacherDashboard">Home</Link>
            <p>{">"}</p>
            <Link to="#">Result</Link>
          </div>

          <div className="w-full flex flex-col bg-white p-10">
            <p className="text-2xl font-semibold">Add New Result</p>
            <form className="mt-10" onSubmit={handelSubmit}> {/* Fixed form submit */}
              <div className="w-full flex flex-row gap-5">
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-600 text-xl">Student Name</p>
                  <input
                    className="w-full py-3 bg-gray-300 rounded-lg mt-3 px-5"
                    value={resultDetails.studentName}
                    onChange={(e) =>
                      setResultDetails({ ...resultDetails, studentName: e.target.value })
                    }
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-600 text-xl">Exam Name</p>
                  <input
                    className="w-full py-3 bg-gray-300 rounded-lg mt-3 px-5"
                    value={resultDetails.ExamName}
                    onChange={(e) =>
                      setResultDetails({ ...resultDetails, ExamName: e.target.value })
                    }
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-600 text-xl">Grade</p>
                  <input
                    className="w-full py-3 bg-gray-300 rounded-lg mt-3 px-5"
                    value={resultDetails.grade}
                    onChange={(e) =>
                      setResultDetails({ ...resultDetails, grade: e.target.value })
                    }
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-600 text-xl">Subject</p>
                  <select
                    value={resultDetails.subject}
                    onChange={(e) =>
                      setResultDetails({ ...resultDetails, subject: e.target.value })
                    }
                    className="w-full py-3 bg-gray-300 rounded-lg mt-3 px-5"
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((sub, index) => (
                      <option key={index} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-10 flex flex-row gap-5">
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-600 text-xl">Percentage</p>
                  <input
                    className="w-full py-3 bg-gray-300 rounded-lg mt-3 px-5"
                    value={resultDetails.percentage}
                    onChange={(e) =>
                      setResultDetails({ ...resultDetails, percentage: e.target.value })
                    }
                    type="number"
                    min="0"
                    max="100"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-600 text-xl">Class</p>
                  <select
                    value={resultDetails.class}
                    onChange={(e) =>
                      setResultDetails({ ...resultDetails, class: e.target.value })
                    }
                    className="w-full py-3 bg-gray-300 rounded-lg mt-3 px-5"
                    required
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls, index) => (
                      <option key={index} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-600 text-xl">Date</p>
                  <input
                    className="w-full py-3 bg-gray-300 rounded-lg mt-3 px-5"
                    value={resultDetails.date}
                    onChange={(e) =>
                      setResultDetails({ ...resultDetails, date: e.target.value })
                    }
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-row mt-20 gap-5 text-white">
                <button type="submit" className="px-10 text-2xl font-semibold py-2 bg-[#FE8D01] rounded-lg cursor-pointer">
                  Save
                </button>
                <button type="button" onClick={Reset} className="px-10 text-2xl font-semibold py-2 bg-blue-950 rounded-lg cursor-pointer">
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

export default AddResult;
