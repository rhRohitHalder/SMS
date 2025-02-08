import { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Attendance() {
    const [attendance, setAttendance] = useState({
        'John Doe': true,
        'Jane Smith': false,
        'Mark Johnson': false
    });

    const toggleAttendance = (name) => {
        setAttendance(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header className="bg-white shadow" />
                <div className="w-full h-full p-10 bg-gray-300">
                    <h1 className="text-2xl font-semibold mb-4">Attendance</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Name</th>
                                    <th className="py-2 px-4 text-left">Date</th>
                                    <th className="py-2 px-4 text-left">Status</th>
                                    <th className="py-2 px-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100 border-b">
                                    <td className="py-2 px-4">John Doe</td>
                                    <td className="py-2 px-4">2023-10-01</td>
                                    <td className="py-2 px-4">{attendance['John Doe'] ? "Present" : "Absent"}</td>
                                    <td className="py-2 px-4">
                                        <button className="text-blue-500 hover:underline" onClick={() => toggleAttendance('John Doe')}>Update</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="py-2 px-4">Jane Smith</td>
                                    <td className="py-2 px-4">2023-10-01</td>
                                    <td className="py-2 px-4">{attendance['Jane Smith'] ? "Present" : "Absent"}</td>
                                    <td className="py-2 px-4">
                                        <button className="text-blue-500 hover:underline" onClick={() => toggleAttendance('Jane Smith')}>Update</button>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                    <td className="py-2 px-4">Mark Johnson</td>
                                    <td className="py-2 px-4">2023-10-01</td>
                                    <td className="py-2 px-4">{attendance['Mark Johnson'] ? "Present" : "Absent"}</td>
                                    <td className="py-2 px-4">
                                        <button className="text-blue-500 hover:underline" onClick={() => toggleAttendance('Mark Johnson')}>Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}