import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

export const Attendance = () => {
    const [date, setDate] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState({});
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const savedData = localStorage.getItem('attendanceData');
        if (savedData) {
            setAttendanceData(JSON.parse(savedData));
        }
    }, []);

    const handleDateClick = (selectedDate) => {
        const dateStr = selectedDate.toDateString();
        const newAttendanceData = { ...attendanceData };

        if (!newAttendanceData[dateStr]) {
            newAttendanceData[dateStr] = {
                status: 'present',
                points: 10
            };
            setPoints(prevPoints => prevPoints + 10);
        } else {
            const pointsToRemove = newAttendanceData[dateStr].points;
            delete newAttendanceData[dateStr];
            setPoints(prevPoints => prevPoints - pointsToRemove);
        }

        setAttendanceData(newAttendanceData);
        localStorage.setItem('attendanceData', JSON.stringify(newAttendanceData));
    };

    const tileClassName = ({ date }) => {
        const dateStr = date.toDateString();
        return attendanceData[dateStr] ? 'bg-green-200' : null;
    };

    return (
        <div className="max-w-xl mx-auto p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-5">Attendance System</h2>
            <div className="mb-5">
                <Calendar
                    onChange={setDate}
                    value={date}
                    onClickDay={handleDateClick}
                    tileClassName={tileClassName}
                    className="react-calendar"
                />
            </div>
            <div className="mb-5 text-center">
                <h3 className="text-xl font-semibold">Total Attendance Points</h3>
                <p className="text-lg font-bold">{points}</p>
            </div>
            <div className="text-center">
                <h3 className="text-xl font-semibold">Attendance Summary</h3>
                <p>Days Present: {Object.keys(attendanceData).length}</p>
            </div>
        </div>
    );
};
