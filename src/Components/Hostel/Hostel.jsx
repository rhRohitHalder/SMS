import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

function Hostel() {
  const [hostelList, setHostelList] = useState([]);
  const [hostelDetails, setHostelDetails] = useState({
    hostelName: "",
    roomNumber: "",
    roomType: "",
    numberOfBed: "",
    costPerBed: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setHostelList([...hostelList, hostelDetails]);
    setHostelDetails({
      hostelName: "",
      roomNumber: "",
      roomType: "",
      numberOfBed: "",
      costPerBed: "",
    });
  };

  const handleReset = () => {
    setHostelDetails({
      hostelName: "",
      roomNumber: "",
      roomType: "",
      numberOfBed: "",
      costPerBed: "",
    });
  };

  const roomTypes = ["Big", "Medium", "Small"];
  const numberOfBeds = [5, 6, 7];
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
        <div className="w-full h-auto px-10 py-10">
          <p className="text-5xl font-semibold">Hostel Management</p>
          <div className="w-full h-auto flex flex-row gap-10 mt-10">
            {/* Left Side - Form */}
            <div className="w-1/3 bg-slate-300 p-10 rounded-lg">
              <p className="text-4xl font-semibold">Add Hostel Room</p>
              <form className="w-[85%]" onSubmit={handleSubmit}>
                <p className="mt-5 text-xl mb-2">Hostel Name</p>
                <input
                  value={hostelDetails.hostelName}
                  onChange={(e) =>
                    setHostelDetails({
                      ...hostelDetails,
                      hostelName: e.target.value,
                    })
                  }
                  placeholder="Enter Hostel Name"
                  className="w-full px-4 py-4 rounded-lg"
                  type="text"
                  required
                />
                <p className="mt-5 text-xl mb-2">Room Number</p>
                <input
                  value={hostelDetails.roomNumber}
                  onChange={(e) =>
                    setHostelDetails({
                      ...hostelDetails,
                      roomNumber: e.target.value,
                    })
                  }
                  placeholder="Enter Room Number"
                  className="w-full px-4 py-4 rounded-lg"
                  type="text"
                  required
                />
                <p className="mt-5 text-xl mb-2">Room Type</p>
                <select
                  onChange={(e) =>
                    setHostelDetails({
                      ...hostelDetails,
                      roomType: e.target.value,
                    })
                  }
                  className="w-full px-4 py-4 rounded-lg"
                >
                  <option value="">Select Type</option>
                  {roomTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <p className="mt-5 text-xl mb-2">Number of Beds</p>
                <select
                  onChange={(e) =>
                    setHostelDetails({
                      ...hostelDetails,
                      numberOfBed: e.target.value,
                    })
                  }
                  className="w-full px-4 py-4 rounded-lg"
                >
                  <option value="">Select Type</option>
                  {numberOfBeds.map((number, index) => (
                    <option key={index} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
                <p className="mt-5 text-xl mb-2">Cost Per Bed</p>
                <input
                  value={hostelDetails.costPerBed}
                  onChange={(e) =>
                    setHostelDetails({
                      ...hostelDetails,
                      costPerBed: e.target.value,
                    })
                  }
                  placeholder="Enter Cost Per Bed"
                  className="w-full px-4 py-4 rounded-lg"
                  type="number"
                  required
                />
                <div className="w-full flex gap-10 flex-row mt-10 text-white">
                  <button
                    type="submit"
                    className="px-10 text-2xl font-semibold py-2 bg-yellow-600 rounded-lg cursor-pointer"
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
              <p className="text-4xl font-semibold">Hostel Room List</p>
              <div className="mt-5">
                {hostelList.length > 0 ? (
                  <table className="w-full border-collapse border border-gray-500">
                    <thead>
                      <tr className="bg-gray-400 text-white">
                        <th className="px-4 py-2">Hostel Name</th>
                        <th className="px-4 py-2">Room Number</th>
                        <th className="px-4 py-2">Room Type</th>
                        <th className="px-4 py-2">Number of Beds</th>
                        <th className="px-4 py-2">Cost Per Bed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hostelList.map((hostel, index) => (
                        <tr
                          key={index}
                          className={`hover:bg-gray-500 text-center bg-white border-t-[3px] ${
                            index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                          }`}
                        >
                          <td className="px-4 py-2">{hostel.hostelName}</td>
                          <td className="px-4 py-2">{hostel.roomNumber}</td>
                          <td className="px-4 py-2">{hostel.roomType}</td>
                          <td className="px-4 py-2">{hostel.numberOfBed}</td>
                          <td className="px-4 py-2">{hostel.costPerBed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-xl text-gray-600">
                    No hostel rooms added yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hostel;
