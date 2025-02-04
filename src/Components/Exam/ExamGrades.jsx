import React, { useState } from "react";

function ExamGrades() {
  const [grades, setGrades] = useState([]);
  const [gradedetails, setGradedetails] = useState({
    GradeName: "",
    GradePoint: "",
    PercentageFrom: "",
    PercentageUpto: "",
    Comments: "",
  });

  const gradePoints = [2.5, 3.5, 4.5, 5.5];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setGrades([...grades, gradedetails]);
    setSubjectDetails({
      GradeName: "",
      GradePoint: "",
      PercentageFrom: "",
      PercentageUpto: "",
      Comments: "",
    });
  };

  const handleReset = () => {
    setSubjectDetails({
      GradeName: "",
      GradePoint: "",
      PercentageFrom: "",
      PercentageUpto: "",
      Comments: "",
    });
  };
  return (
    <div className="w-full h-auto px-10 py-10">
      <p className="text-5xl font-semibold">Examination</p>
      <div className="w-full h-auto flex flex-row gap-10 mt-10">
        {/* Left Side - Form */}
        <div className="w-1/3 bg-slate-300 p-10 rounded-lg">
          <p className="text-4xl font-semibold">Add New Grade</p>
          <form className="w-[85%]" onSubmit={handleSubmit}>
            <p className="mt-5 text-xl mb-2">Grade Name</p>
            <input
              value={gradedetails.GradeName}
              onChange={(e) =>
                setGradedetails({
                  ...gradedetails,
                  GradeName: e.target.value,
                })
              }
              placeholder="Enter Grade Name"
              className="w-full px-4 py-4 rounded-lg"
              type="text"
              required
            />
            <p className="mt-5 text-xl mb-2">Grade Point</p>
            <select
              value={gradedetails.GradePoint}
              onChange={(e) =>
                setGradedetails({
                  ...gradedetails,
                  GradePoint: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
              required
            >
              <option value="">Please Select</option>
              {gradePoints.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">Percentage From</p>
            <input
              value={gradedetails.PercentageFrom}
              onChange={(e) =>
                setGradedetails({
                  ...gradedetails,
                  PercentageFrom: e.target.value,
                })
              }
              placeholder="Enter Starting Percentage"
              className="w-full px-4 py-4 rounded-lg"
              type="number"
              required
            />
            <p className="mt-5 text-xl mb-2">Percentage Upto</p>
            <input
              value={gradedetails.PercentageUpto}
              onChange={(e) =>
                setGradedetails({
                  ...gradedetails,
                  PercentageUpto: e.target.value,
                })
              }
              placeholder="Enter Ending Percentage"
              className="w-full px-4 py-4 rounded-lg"
              type="number"
              required
            />
            <p className="mt-5 text-xl mb-2">Comments</p>
            <input
              value={gradedetails.Comments}
              onChange={(e) =>
                setGradedetails({
                  ...gradedetails,
                  Comments: e.target.value,
                })
              }
              placeholder="Enter Comments"
              className="w-full px-4 py-4 rounded-lg"
              type="text"
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
          <p className="text-4xl font-semibold">All Grades</p>
          <div className="mt-5">
            <table className="w-full border-collapse border border-gray-500">
              <thead>
                <tr className="bg-gray-400 text-white">
                  <th className="px-4 py-2">Grade Name</th>
                  <th className="px-4 py-2">Grade Point</th>
                  <th className="px-4 py-2">Percentage From</th>
                  <th className="px-4 py-2">Percentage Upto</th>
                  <th className="px-4 py-2">Comments</th>
                </tr>
              </thead>
              <tbody>
                {grades.length > 0 ? (
                  grades.map((grade, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-500 text-center bg-white border-t-[3px] ${
                        index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                      }`}
                    >
                      <td className="px-4 py-2">{grade.GradeName}</td>
                      <td className="px-4 py-2">{grade.GradePoint}</td>
                      <td className="px-4 py-2">{grade.PercentageFrom}%</td>
                      <td className="px-4 py-2">{grade.PercentageUpto}%</td>
                      <td className="px-4 py-2">{grade.Comments}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-4">
                      No grades added yet.
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

export default ExamGrades;
