
import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import StatCard from '../components/Common/StatCard';
import Calendar from '../components/Common/Calendar';

const CoordinatorDashboard: React.FC = () => {
  const userName = localStorage.getItem('userName');
 

  return (
    <DashboardLayout role="coordinator" userName={userName}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userName}!</h1>
            <p className="text-gray-600 mt-1">Coordinate your team effectively</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Team Overview */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Team Overview</h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Manage your team effectively with key metrics.</p>
                  <button className="text-blue-600 hover:underline">View Details</button>
                </div>
              </div>
            </div>


            {/* Activity Snapshot */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Activity Snapshot</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <StatCard
                    title="Sessions Conducted"
                    value="120"
                    trend="Last Month +15%"
                    trendColor="green"
                  />
                  <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Activity Chart</span>
                  </div>
                </div>
                <div>
                  <StatCard
                    title="Volunteer Participation"
                    value="85%"
                    trend="Last Month +5%"
                    trendColor="green"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Volunteers</span>
                      <span>Teachers</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 h-24">
                      <div className="bg-blue-100 rounded"></div>
                      <div className="bg-green-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Calendar */}
            <Calendar />

            {/* Quick Tips */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Tips</h3>
              <p className="text-sm text-gray-600">
                Check volunteer availability regularly to avoid scheduling conflicts.
              </p>
            </div>

            {/* Notices */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Notices</h3>
              <p className="text-sm text-gray-600">
                Upcoming training session for new volunteers on March 25th.
              </p>
            </div>

            {/* Help & Support */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Help & Support</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-2 text-blue-600 hover:bg-blue-50 rounded">
                  Contact Support
                </button>
                <button className="w-full text-left p-2 text-blue-600 hover:bg-blue-50 rounded">
                  FAQs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CoordinatorDashboard;
