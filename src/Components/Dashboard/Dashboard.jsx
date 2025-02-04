import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
    return (
        <div>
            <div className="flex h-screen w-full">
                <Sidebar />
                <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
                    <h1 className="text-6xl font-bold mb-4">Dashboard</h1>
                    <p className="text-xl">Welcome to the Student Council Management System</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
