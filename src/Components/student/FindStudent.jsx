import React, { useState } from "react";
import { Search, MoreVertical } from "lucide-react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const MOCK_DATA = [
  {
    id: "#0021",
    photo:
      "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=50&h=50",
    name: "Mark Willy",
    gender: "Male",
    class: "2",
    section: "A",
    parents: "Jack Sparrow",
    address: "TA-107 Newyork",
    dateOfBirth: "02/05/2001",
    phone: "+ 123 9988568",
    email: "mark@example.com",
  },
  {
    id: "#0022",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50&h=50",
    name: "Jessia Rose",
    gender: "Female",
    class: "1",
    section: "A",
    parents: "Maria Jamans",
    address: "59 Australia, Sydney",
    dateOfBirth: "02/05/2001",
    phone: "+ 123 9988568",
    email: "jessia@example.com",
  },
];

const AllStudents = () => {
  const [searchRoll, setSearchRoll] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchClass, setSearchClass] = useState("");
  const [students, setStudents] = useState(MOCK_DATA);

  const handleSearch = () => {
    const filtered = MOCK_DATA.filter((student) => {
      const matchRoll = student.id
        .toLowerCase()
        .includes(searchRoll.toLowerCase());
      const matchName = student.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const matchClass = student.class
        .toLowerCase()
        .includes(searchClass.toLowerCase());
      return matchRoll && matchName && matchClass;
    });
    setStudents(filtered);
  };

  return (
    <div className="flex h-full">
        <Sidebar />
      <div className=" w-screen h-full min-h-screen bg-gray-50 ">
        <Header />
        <div className="max-w-7xl mx-auto mt-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-blue-600">
              <h2 className="text-xl font-semibold text-white">
                All Students Data
              </h2>
            </div>

            {/* Search Section */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by Roll ..."
                  value={searchRoll}
                  onChange={(e) => setSearchRoll(e.target.value)}
                  className="border rounded-md px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Search by Name ..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="border rounded-md px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Search by Class ..."
                  value={searchClass}
                  onChange={(e) => setSearchClass(e.target.value)}
                  className="border rounded-md px-3 py-2"
                />
                <button
                  onClick={handleSearch}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center justify-center"
                >
                  <Search size={20} className="mr-2" />
                  SEARCH
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Roll
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Photo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Section
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parents
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Of Birth
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        E-mail
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img
                            src={student.photo}
                            alt={student.name}
                            className="h-10 w-10 rounded-full"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.class}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.section}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.parents}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.dateOfBirth}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button className="text-gray-400 hover:text-gray-500">
                            <MoreVertical size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
