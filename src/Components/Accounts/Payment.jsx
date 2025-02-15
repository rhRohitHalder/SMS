import React from "react";
import { MoreVertical, ChevronDown } from "lucide-react";

const teacherData = [
  {
    id: "#0021",
    name: "Mark Willy",
    gender: "Male",
    class: "2",
    subject: "English",
    amount: 2000.0,
    status: "success",
    phone: "+ 123 9988568",
    email: "kazifahim93@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    id: "#0021",
    name: "Mark Willy",
    gender: "Male",
    class: "2",
    subject: "English",
    amount: 4000.0,
    status: "success",
    phone: "+ 123 9988568",
    email: "kazifahim93@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    id: "#0022",
    name: "Jessia Rose",
    gender: "Female",
    class: "1",
    subject: "Mathematics",
    amount: 2000.0,
    status: "error",
    phone: "+ 123 9988568",
    email: "kazifahim93@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <a href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-orange-500">Teacher Payment</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold text-gray-800">
                All Teachers Payment History
              </h1>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
              >
                <MoreVertical className="h-5 w-5" />
              </button>
            </header>

            {/* Search Section */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search by ID ..."
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search by Name ..."
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search by Phone"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="button"
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                SEARCH
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        Roll
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      Photo
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        Name
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      Gender
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      Class
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      Subject
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600">
                      E-mail
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {teacherData.map((teacher, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {teacher.id}
                      </td>
                      <td className="px-4 py-3">
                        <img
                          src={teacher.avatar}
                          alt={teacher.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {teacher.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {teacher.gender}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {teacher.class}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {teacher.subject}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        ${teacher.amount.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            teacher.status === "success"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          Paid
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {teacher.phone}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {teacher.email}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
