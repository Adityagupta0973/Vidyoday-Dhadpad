import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Calendar,
  LayoutDashboard,
  User,
  Settings,
  LogOut,
  MessagesSquare,
  BookOpen,
  FileBarChart2
} from 'lucide-react';

interface SidebarProps {
  role: string;
  userName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ role, userName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = {
    volunteer: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/volunteer' },
      { icon: BookOpen, label: 'Resource Access', path: '/volunteer/resources' },
      { icon: Calendar, label: 'Attendance', path: '/volunteer/attendance' },
      { icon: MessagesSquare, label: 'Messages', path: '/volunteer/messages' },
      { icon: Settings, label: 'Settings', path: '/volunteer/settings' },
    ],
    teacher: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/teacher' },
      { icon: User, label: 'Students', path: '/teacher/students' },
      { icon: Calendar, label: 'Sessions', path: '/teacher/sessions' },
      { icon: MessagesSquare, label: 'Messages', path: '/teacher/messages' },
      { icon: BookOpen, label: 'Resources', path: '/teacher/resources' }, // Added Resources
      { icon: Settings, label: 'Settings', path: '/teacher/settings' },
    ],
    coordinator: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/coordinator' },
      { icon: User, label: 'Volunteers', path: '/coordinator/volunteers' },
      { icon: User, label: 'Teachers', path: '/coordinator/teachers' },
      { icon: MessagesSquare, label: 'Messages', path: '/coordinator/messages' },
      { icon: Settings, label: 'Settings', path: '/coordinator/settings' },
    ],
    admin: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
      { icon: FileBarChart2, label: 'Report', path: '/admin/report' },
      { icon: User, label: 'User Management', path: '/admin/users' },
      { icon: MessagesSquare, label: 'Content' },
      { icon: Settings, label: 'Settings' },
    ],
  };

  const items = menuItems[role as keyof typeof menuItems] || [];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    navigate('/');
  };

  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Vidyoday</h3>
            <p className="text-sm text-gray-600 capitalize">{role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
