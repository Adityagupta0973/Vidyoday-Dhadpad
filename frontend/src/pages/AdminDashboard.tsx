
import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import StatCard from '../components/Common/StatCard';

const AdminDashboard: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Sarah';
  
  const users = [
    { name: 'Emily Carter', role: 'Student', lastLogin: '2 days ago', status: 'Active' },
    { name: 'David Lee', role: 'Teacher', lastLogin: '1 day ago', status: 'Inactive' },
    { name: 'Olivia Brown', role: 'Admin', lastLogin: '1 day ago', status: 'Active' },
    { name: 'Aaron Clark', role: 'Student', lastLogin: '4 days ago', status: 'Active' },
    { name: 'Sophie Green', role: 'Teacher', lastLogin: '2 weeks ago', status: 'Inactive' }
  ];

  return (
    <DashboardLayout role="admin" userName={userName}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userName}</h1>
            <p className="text-gray-600 mt-1">Manage your platform effectively</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              System Settings
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            {/* Platform Overview */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Platform Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                  title="Total Users"
                  value="1,234"
                  trend="+12%"
                  trendColor="green"
                />
                <StatCard
                  title="Active Users"
                  value="876"
                  trend="+5%"
                  trendColor="green"
                />
                <StatCard
                  title="Resources Uploaded"
                  value="567"
                  trend="+10%"
                  trendColor="green"
                />
                <StatCard
                  title="Average Task Completion"
                  value="85%"
                  trend="-2%"
                  trendColor="red"
                />
              </div>
            </div>

            {/* User Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Filter
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-gray-600">Name</th>
                      <th className="text-left py-2 text-gray-600">Role</th>
                      <th className="text-left py-2 text-gray-600">Last Login</th>
                      <th className="text-left py-2 text-gray-600">Status</th>
                      <th className="text-left py-2 text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">{user.name}</td>
                        <td className="py-3">{user.role}</td>
                        <td className="py-3">{user.lastLogin}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            user.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-blue-600 hover:underline">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* System Analytics */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">System Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <StatCard
                    title="User Growth"
                    value="+15%"
                    subtitle="Last 30 Days +15%"
                    trendColor="green"
                  />
                  <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Growth Chart</span>
                  </div>
                </div>
                <div>
                  <StatCard
                    title="Task Completion"
                    value="+10%"
                    subtitle="Last 30 Days +10%"
                    trendColor="green"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completed</span>
                      <span>In Progress</span>
                      <span>Pending</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 h-24">
                      <div className="bg-green-100 rounded"></div>
                      <div className="bg-yellow-100 rounded"></div>
                      <div className="bg-red-100 rounded"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <StatCard
                    title="Engagement"
                    value="-5%"
                    subtitle="Last 30 Days -5%"
                    trendColor="red"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>High</span>
                        <span>|</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Medium</span>
                        <span>|</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Low</span>
                        <span>|</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Control */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Control</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Uploads</h3>
                  <p className="text-sm text-gray-600 mb-3">Manage content upload resources</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enabled</span>
                    <div className="w-10 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Approvals</h3>
                  <p className="text-sm text-gray-600 mb-3">Approve or reject pending content</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active</span>
                    <div className="w-10 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Monitoring</h3>
                  <p className="text-sm text-gray-600 mb-3">Monitor system performance and user feedback</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Running</span>
                    <div className="w-10 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* General Settings */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">General Settings</h3>
              <button className="w-full text-left p-2 text-blue-600 hover:bg-blue-50 rounded mb-2">
                General Settings
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pinned Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-2 text-blue-600 hover:bg-blue-50 rounded">
                  Add New User
                </button>
                <button className="w-full text-left p-2 text-blue-600 hover:bg-blue-50 rounded">
                  Upload Resource
                </button>
                <button className="w-full text-left p-2 text-blue-600 hover:bg-blue-50 rounded">
                  Generate Report
                </button>
              </div>
            </div>

            {/* Alerts & Notifications */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Alerts & Notifications</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">User Registered</p>
                  <p className="text-xs text-green-600">New user registration notification</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">Content Uploaded</p>
                  <p className="text-xs text-blue-600">Content upload during last period</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
