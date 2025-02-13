import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setStudent } from "../../features/Student/StudentSlice";

function StudentAdmissionForm() {
  const dispatch = useDispatch();
  const [studentList, SetStudentList] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    roll: "",
    bloodGroup: "",
    religion: "",
    email: "",
    class: "",
    section: "",
    parant: "",
    phone: "",
    address: "",
    shortBio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    SetStudentList([...studentList, formData]);
    dispatch(setStudent([...studentList, formData]));

    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      roll: "",
      bloodGroup: "",
      religion: "",
      email: "",
      class: "",
      section: "",
      admissionId: "",
      phone: "",
      shortBio: "",
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      roll: "",
      bloodGroup: "",
      religion: "",
      email: "",
      class: "",
      section: "",
      parant: "",
      admissionId: "",
      phone: "",
      shortBio: "",
    });
  };

  const classes = [5, 6, 7, 8, 9, 10, 11, 12];
  const sections = ["A", "B", "C"];
  const religions = [
    "Hindu",
    "Islam",
    "Christian"
  ]

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-screen h-full min-h-screen bg-gray-50">
        <Header />

        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-3xl font-semibold">Student</p>
          <div className="mb-10 mt-5 flex flex-row gap-3">
            <Link to="/AdminDashboard">Home</Link>
            <p>{">"}</p>
            <Link>Student</Link>
          </div>
          <div className="w-5/6 mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-blue-600">
                <h2 className="text-xl font-semibold text-white">
                  Add New Students
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    {
                      label: "Date of Birth",
                      name: "dateOfBirth",
                      type: "date",
                    },
                    { label: "Roll", name: "roll" },
                    { label: "E-Mail", name: "email", type: "email" },
                  ].map(({ label, name, type = "text" }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700">
                        {label}{" "}
                        {name !== "roll" && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [name]: e.target.value })
                        }
                        required={name !== "roll"}
                        className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  ))}

                  {/* Gender Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Blood Group Select */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      Blood Group <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bloodGroup: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.class}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          class: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Class</option>
                      {classes.map((cls, index) => (
                        <option key={index} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Section <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.section}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          section: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Section</option>
                      {sections.map((sec, index) => (
                        <option key={index} value={sec}>
                          {sec}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Parent <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      // name={}
                      value={formData.parant}
                      onChange={(e) =>
                        setFormData({ ...formData, parant: e.target.value })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="cal"
                      // name={}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Religion<span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.religion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          religion: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Religion</option>
                      {religions.map((religian, index) => (
                        <option key={index} value={religian}>{religian}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      // name={}
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                {/* Short Bio */}
                <div className="flex flex-row gap-5">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Short BIO
                    </label>
                    <textarea
                      name="shortBio"
                      value={formData.shortBio}
                      onChange={(e) =>
                        setFormData({ ...formData, shortBio: e.target.value })
                      }
                      rows={4}
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Short BIO
                    </label>
                    <input
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      type="file"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="py-3 px-10 bg-yellow-600 text-xl text-white rounded-md shadow-sm hover:bg-yellow-700"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="py-3 px-10 bg-blue-900 text-xl text-white rounded-md shadow-sm hover:bg-blue-800"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAdmissionForm;
