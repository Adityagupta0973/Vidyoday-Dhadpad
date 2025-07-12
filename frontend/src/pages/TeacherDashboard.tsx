import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';
import StatCard from '../components/Common/StatCard';
import ProgressBar from '../components/Common/ProgressBar';
import Calendar from '../components/Common/Calendar';

const TeacherDashboard: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Ms. Sharma';
  
  const students = [
    { name: 'Arjun Verma', progress: 75, lastInteraction: '2 days ago' },
    { name: 'Priya Kapoor', progress: 90, lastInteraction: '1 day ago' },
    { name: 'Rohan Singh', progress: 60, lastInteraction: '3 days ago' },
    { name: 'Anika Patel', progress: 85, lastInteraction: '1 day ago' },
    { name: 'Vikram Joshi', progress: 70, lastInteraction: '2 days ago' }
  ];

  const upcomingSessions = [
    { date: '2024-07-15', time: '10:00 AM', topic: 'Algebra Basics', students: 'Class 10' },
    { date: '2024-07-16', time: '11:00 AM', topic: 'Geometry Fundamentals', students: 'Class 9' },
    { date: '2024-07-17', time: '09:00 AM', topic: 'Calculus Introduction', students: 'Class 12' }
  ];

  return (
    <DashboardLayout role="teacher" userName={userName}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {userName}</h1>
            <p className="text-gray-600 mt-1">Manage your classes and track student progress</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Teacher Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Teacher Information</h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MS</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{userName}</h3>
                  <p className="text-blue-600">Subject: Mathematics | Experience: 8 years</p>
                  <button className="mt-2 text-blue-600 hover:underline">View Profile</button>
                </div>
              </div>
            </div>

            {/* Student List */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Student List</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-gray-600">Name</th>
                      <th className="text-left py-2 text-gray-600">Progress</th>
                      <th className="text-left py-2 text-gray-600">Last Interaction</th>
                      <th className="text-left py-2 text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">{student.name}</td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-20">
                              <ProgressBar value={student.progress} showLabel={false} size="sm" />
                            </div>
                            <span className="text-sm text-gray-600">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 text-gray-600">{student.lastInteraction}</td>
                        <td className="py-3">
                          <button className="text-blue-600 hover:underline">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Sessions</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-gray-600">Date</th>
                      <th className="text-left py-2 text-gray-600">Time</th>
                      <th className="text-left py-2 text-gray-600">Topic</th>
                      <th className="text-left py-2 text-gray-600">Students</th>
                      <th className="text-left py-2 text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingSessions.map((session, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 text-blue-600">{session.date}</td>
                        <td className="py-3">{session.time}</td>
                        <td className="py-3">{session.topic}</td>
                        <td className="py-3">{session.students}</td>
                        <td className="py-3 space-x-2">
                          <button className="text-green-600 hover:underline">Start</button>
                          <button className="text-blue-600 hover:underline">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <NavLink to="/teacher/sessions" className="text-blue-600 hover:underline">
                  View All Sessions
                </NavLink>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                  title="Average Performance"
                  value="85%"
                />
                <StatCard
                  title="Sessions Conducted"
                  value="25"
                />
                <StatCard
                  title="Feedback"
                  value="4.8/5"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Calendar */}
            <Calendar />

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
              <p className="text-sm text-gray-600 mb-4">
                Access teaching materials, worksheets, and reference guides.
              </p>
              <div className="mt-2 text-right">
                <NavLink to="/teacher/resources" className="text-blue-600 hover:underline">
                  View All Resources
                </NavLink>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
              <p className="text-sm text-gray-600 mb-4">
                Need help? Contact our support team for assistance.
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Contact Support
              </button>
            </div>

            {/* Notices & Announcements */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Notices & Announcements</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">New resources available for Class 10 Mathematics...</p>
                <p className="text-sm text-gray-600">Upcoming teacher training on effective teaching...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
