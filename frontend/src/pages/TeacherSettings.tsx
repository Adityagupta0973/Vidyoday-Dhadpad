import React, { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';

const TeacherSettings: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Ms. Sharma';
  const [email, setEmail] = useState('ms.sharma@email.com');
  const [phone, setPhone] = useState('9876543210');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic here (API call or localStorage)
    alert('Settings saved!');
  };

  return (
    <DashboardLayout role="teacher" userName={userName}>
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <form onSubmit={handleSave} className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default TeacherSettings;
