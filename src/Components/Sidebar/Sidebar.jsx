import { FaSchool } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiExam, PiNotificationDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import { store } from "../../utils/store";

const Sidebar = () => {
    const navigate = useNavigate();
    const Library = (value) => {
        navigate(value);
    }

    const Class = (value) => {
        navigate(value);
    }

    return (
        <div className="flex flex-col sticky top-0 bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg pt-10">
            <div className="w-64 sticky h-screen">
                <div>
                    <div className="flex items-center justify-center">
                        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="user" className="w-20 h-20 rounded-full" />
                    </div>
                    <div className="text-center mt-4">
                        <h1 className="text-white text-xl font-semibold">{store.getState().role.value}</h1>
                        <h1 className="text-gray-400 text-sm font-semibold">{store.getState().name.value}</h1>
                    </div>
                </div>
                <Link to="/dashboard">
                    <div className="p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out">
                        <MdDashboard className="text-white text-4xl" />
                        <h1 className="text-white text-xl font-semibold">Dashboard</h1>
                    </div>
                </Link>
                <Link to="/notice">
                    <div className="p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out">
                        <PiNotificationDuotone className="text-white text-4xl" />
                        <h1 className="text-white text-xl font-semibold">Notice</h1>
                    </div>
                </Link>
                <Link to="/exam-schedule">
                    <div className="p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out">
                        <PiExam className="text-white text-4xl" />
                        <h1 className="text-white text-xl font-semibold">Exam Schedule</h1>
                    </div>
                </Link>
                <Link to="/routine">
                    <div className="p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out">
                        <PiExam className="text-white text-4xl" />
                        <h1 className="text-white text-xl font-semibold">Routine</h1>
                    </div>
                </Link>
                <Link to="/hostel">
                    <div className="p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out">
                        <FaSchool className="text-white text-4xl" />
                        <h1 className="text-white text-xl font-semibold">Hostel</h1>
                    </div>
                </Link>
                <Link to="/message">
                    <div className="p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out">
                        <FaSchool className="text-white text-4xl" />
                        <h1 className="text-white text-xl font-semibold">Message</h1>
                    </div>
                </Link>
                <select 
                onChange={(e) => Library(e.target.value)}
                className="bg-transparent w-full p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out text-white">
                    <option value="">Library</option>
                    <option value="/Addbook">Add Books</option>
                    <option value="/BookList">All Books</option>
                </select>
                <select 
                onChange={(e) => Class(e.target.value)}
                className="bg-transparent w-full p-4 flex items-center gap-4 hover:bg-gray-700 transition duration-300 ease-in-out text-white">
                    <option value="">Class</option>
                    <option value="/AddClass">Add Class</option>
                    <option value="/classList">All Classes</option>
                </select>
            </div>
        </div>
    );
};

export default Sidebar;
