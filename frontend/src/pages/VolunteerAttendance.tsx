import React, { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import * as XLSX from 'xlsx';

// Sample volunteers list
const initialAttendance = [
  { name: 'Amit Sharma', status: 'Present' },
  { name: 'Priya Singh', status: 'Present' },
  { name: 'Rahul Verma', status: 'Absent' },
  { name: 'Rajiv Deshmukh', status: 'Absent' },
  { name: 'Vivek Gupta', status: 'Present' },
  { name: 'Mehul Bhosale', status: 'Present' },
  { name: 'Yash Garg', status: 'Absent' },
  { name: 'Krishna Pawar', status: 'Present' },
  { name: 'Gopi Shinde', status: 'Absent' },
  { name: 'Rajan Apte', status: 'Present' },
  { name: 'Ram Phadke', status: 'Present' },
  { name: 'Raghav Chavan', status: 'Absent' },
  { name: 'Sneha Patel', status: 'Present' }
];

const VolunteerAttendance: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Vikram Patil';
  const [attendance, setAttendance] = useState(initialAttendance);
  const [attendanceDate, setAttendanceDate] = useState(() => {
    const today = new Date();
    return today.toISOString().slice(0, 10); // yyyy-mm-dd
  });

  const handleCheckboxChange = (index: number, isPresent: boolean) => {
    setAttendance(prev =>
      prev.map((entry, i) =>
        i === index ? { ...entry, status: isPresent ? 'Present' : 'Absent' } : entry
      )
    );
  };

  const handleDownloadExcel = () => {
    // Add date to each row for export
    const exportData = attendance.map(entry => ({
      ...entry,
      Date: attendanceDate
    }));
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance");
    XLSX.writeFile(wb, `attendance_${attendanceDate}.xlsx`);
  };

  return (
    <DashboardLayout role="volunteer" userName={userName}>
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
        <div className="mb-4">
          <label className="font-medium mr-2">Date of Attendance:</label>
          <input
            type="date"
            value={attendanceDate}
            onChange={e => setAttendanceDate(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Present</th>
              <th className="p-2 text-left">Absent</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((entry, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{entry.name}</td>
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={entry.status === 'Present'}
                    onChange={() => handleCheckboxChange(i, true)}
                  />
                </td>
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={entry.status === 'Absent'}
                    onChange={() => handleCheckboxChange(i, false)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Send To Coordinator
        </button>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerAttendance;