import { FaSchool } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiExam, PiNotificationDuotone, PiScales } from "react-icons/pi";
import { Link } from "react-router";

const Sidebar = () => {
    return (
        <div className="flex flex-col sticky top-0 bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg pt-10">
            <div className="w-64 sticky">
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
            </div>
        </div>
    );
};

export default Sidebar;
