import React, { useState } from "react";
import { Printer, Download, Edit, Upload } from "lucide-react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const StudentDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    name: "",
    bio: "",
    gender: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    religion: "",
    fatherOccupation: "",
    email: "",
    admissionDate: "",
    class: "",
    section: "",
    roll: "",
    address: "",
    phone: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData((prev) => ({
          ...prev,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsEditing(false);
  };

  const DetailRow = ({ label, name, value, type = "text" }) => (
    <div className="grid grid-cols-2 py-3 border-b border-gray-200">
      <span className="text-gray-600">{label}:</span>
      {isEditing ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleInputChange}
          className="border rounded px-2 py-1 text-gray-900"
        />
      ) : (
        <span className="text-gray-900 font-medium">
          {value || "Not specified"}
        </span>
      )}
    </div>
  );

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className=" w-screen h-full min-h-screen bg-gray-50 ">
        <Header />
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 bg-blue-600">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-white">About Me</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="p-2 text-white hover:bg-blue-700 rounded-full"
                    >
                      <Edit size={20} />
                    </button>
                    <button className="p-2 text-white hover:bg-blue-700 rounded-full">
                      <Printer size={20} />
                    </button>
                    <button className="p-2 text-white hover:bg-blue-700 rounded-full">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Student Image */}
                  <div className="w-full md:w-1/3">
                    <div className="bg-cyan-400 rounded-lg p-4 flex flex-col items-center justify-center">
                      <div className="relative">
                        <img
                          src={
                            studentData.photo ||
                            "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=150&h=150"
                          }
                          alt="Student"
                          className="rounded-full w-32 h-32 object-cover border-4 border-white"
                        />
                        {isEditing && (
                          <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg cursor-pointer">
                            <Upload size={20} className="text-blue-600" />
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handlePhotoChange}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="w-full md:w-2/3">
                    {isEditing ? (
                      <div className="mb-6">
                        <input
                          type="text"
                          name="name"
                          value={studentData.name}
                          onChange={handleInputChange}
                          placeholder="Student Name"
                          className="text-2xl font-semibold text-gray-900 w-full border rounded px-2 py-1 mb-2"
                        />
                        <textarea
                          name="bio"
                          value={studentData.bio}
                          onChange={handleInputChange}
                          placeholder="Student Bio"
                          className="w-full border rounded px-2 py-1 text-gray-600"
                          rows={3}
                        />
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {studentData.name || "Student Name"}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {studentData.bio || "No bio available"}
                        </p>
                      </>
                    )}

                    <div className="space-y-1">
                      <DetailRow
                        label="Name"
                        name="name"
                        value={studentData.name}
                      />
                      <DetailRow
                        label="Gender"
                        name="gender"
                        value={studentData.gender}
                      />
                      <DetailRow
                        label="Father Name"
                        name="fatherName"
                        value={studentData.fatherName}
                      />
                      <DetailRow
                        label="Mother Name"
                        name="motherName"
                        value={studentData.motherName}
                      />
                      <DetailRow
                        label="Date Of Birth"
                        name="dateOfBirth"
                        value={studentData.dateOfBirth}
                        type="date"
                      />
                      <DetailRow
                        label="Religion"
                        name="religion"
                        value={studentData.religion}
                      />
                      <DetailRow
                        label="Father Occupation"
                        name="fatherOccupation"
                        value={studentData.fatherOccupation}
                      />
                      <DetailRow
                        label="E-mail"
                        name="email"
                        value={studentData.email}
                        type="email"
                      />
                      <DetailRow
                        label="Admission Date"
                        name="admissionDate"
                        value={studentData.admissionDate}
                        type="date"
                      />
                      <DetailRow
                        label="Class"
                        name="class"
                        value={studentData.class}
                      />
                      <DetailRow
                        label="Section"
                        name="section"
                        value={studentData.section}
                      />
                      <DetailRow
                        label="Roll"
                        name="roll"
                        value={studentData.roll}
                      />
                      <DetailRow
                        label="Address"
                        name="address"
                        value={studentData.address}
                      />
                      <DetailRow
                        label="Phone"
                        name="phone"
                        value={studentData.phone}
                        type="tel"
                      />
                    </div>

                    {isEditing && (
                      <div className="mt-6 flex space-x-4">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
