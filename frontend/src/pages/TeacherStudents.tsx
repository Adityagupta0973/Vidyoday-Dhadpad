import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import ProgressBar from '../components/Common/ProgressBar';

const TeacherStudents: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Ms. Sharma';
  const students = [
    { name: 'Arjun Verma', progress: 75, lastInteraction: '2 days ago' },
    { name: 'Priya Kapoor', progress: 90, lastInteraction: '1 day ago' },
    { name: 'Rohan Singh', progress: 60, lastInteraction: '3 days ago' },
    { name: 'Anika Patel', progress: 85, lastInteraction: '1 day ago' },
    { name: 'Vikram Joshi', progress: 70, lastInteraction: '2 days ago' }
  ];

  return (
    <DashboardLayout role="teacher" userName={userName}>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">All Students</h2>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Progress</th>
                <th className="p-2 text-left">Last Interaction</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{s.name}</td>
                  <td className="p-2 flex items-center space-x-2">
                    <div className="w-24">
                      <ProgressBar value={s.progress} showLabel={false} size="sm" />
                    </div>
                    <span>{s.progress}%</span>
                  </td>
                  <td className="p-2">{s.lastInteraction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherStudents;
