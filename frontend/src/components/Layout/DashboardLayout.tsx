
import React from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: string;
  userName: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role, userName }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role={role} userName={userName} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
