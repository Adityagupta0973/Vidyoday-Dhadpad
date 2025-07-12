
import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import StatCard from '../components/Common/StatCard';
import ProgressBar from '../components/Common/ProgressBar';
import Calendar from '../components/Common/Calendar';

const VolunteerDashboard: React.FC = () => {
  const userName = localStorage.getItem('userName');
  
  const [upcomingTasks, setUpcomingTasks] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchTasks = async () => {
      try {
        const volId = localStorage.getItem('userId');
        // if (!volId) return;
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:5000/api/sessions/volunteer/${volId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(res);
        const data = await res.json();
        console.log(data);
        setUpcomingTasks(data);
      } catch (err) {
        console.error('Error fetching tasks:', err);
        setUpcomingTasks([]);
      }
    };
    fetchTasks();
  }, []);;

  return (
    <DashboardLayout role="volunteer" userName={userName}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Volunteer Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {userName}!</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Welcome, {userName.split(' ')[0]}
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Volunteer Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Volunteer Details</h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AB</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{userName}</h3>
                  <p className="text-blue-600">Volunteer Mentor</p>
                  <p className="text-gray-600">Joined: Jan 15, 2023 </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Dedicated volunteer with a passion for education and community service. 
                    Committed to making a positive impact through mentorship and support.
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming Plan */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Plan</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-gray-600">Date</th>
                      <th className="text-left py-2 text-gray-600">Task</th>
                      <th className="text-left py-2 text-gray-600">Status</th>
                      <th className="text-left py-2 text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingTasks.map((task, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 text-blue-600">{new Date(task.datetime).toLocaleDateString()}</td>
                        <td className="py-3">{task.type}</td>
                        <td className="py-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                            {task.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-blue-600 hover:underline">Cancel</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Progress Overview
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress Overview</h2>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Overall Progress</span>
                  <span className="text-gray-700">75%</span>
                </div>
                <ProgressBar value={75} color="blue" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <StatCard
                  title="Hours Volunteered"
                  value="120"
                />
                <StatCard
                  title="Sessions Completed"
                  value="15"
                />
                <StatCard
                  title="Sessions Pending"
                  value="5"
                />
              </div>
            </div> */}

            {/* Motivational Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Motivational Quote</h2>
              <blockquote className="text-center">
                <p className="text-lg text-gray-700 italic">
                  "The best way to find yourself is to lose yourself in the service of others."
                </p>
                <footer className="text-gray-600 mt-2">- Mahatma Gandhi</footer>
              </blockquote>
            </div>
          </div>

          <div className="space-y-6">
            {/* Calendar */}
            <Calendar />

            {/* Help Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Help</h3>
              <p className="text-sm text-gray-600 mb-4">
                Need assistance? Check out our FAQs or contact support.
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Contact Support
              </button>
            </div>

            {/* Announcements */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tips & Announcements</h3>
              <p className="text-sm text-gray-600">
                Stay updated with the latest news, tips, and announcements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerDashboard;