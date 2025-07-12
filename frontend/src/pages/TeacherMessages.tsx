import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';

const TeacherMessages: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Ms. Sharma';
  const messages = [
    { from: 'Principal', text: 'Staff meeting on Monday at 9 AM.' },
    { from: 'Coordinator', text: 'Please update your section plans.' },
    { from: 'Admin', text: 'New resource portal is live.' }
  ];

  return (
    <DashboardLayout role="teacher" userName={userName}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">All Messages</h2>
          <NavLink to="/teacher" className="text-blue-600 hover:underline">
            Back to Dashboard
          </NavLink>
        </div>
        <ul className="bg-white shadow rounded-lg divide-y">
          {messages.map((msg, idx) => (
            <li key={idx} className="p-4">
              <p className="text-sm text-gray-800">
                <strong>{msg.from}:</strong> {msg.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default TeacherMessages;
