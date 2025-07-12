import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';

const teachers = [
  { name: 'Dr. Meera', assigned: '5', active: '4' },
  { name: 'Mr. Vikram Singh', assigned: '4', active: '3' }
];

const TeachersPage: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Priya';

  return (
    <DashboardLayout role="coordinator" userName={userName}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Teachers</h1>
        <div className="space-y-4">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow border">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    {teacher.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{teacher.name}</p>
                  <p className="text-sm text-gray-600">
                    Assigned: {teacher.assigned}, Active: {teacher.active}
                  </p>
                </div>
              </div>
              {/* Add more actions here if needed */}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeachersPage;
