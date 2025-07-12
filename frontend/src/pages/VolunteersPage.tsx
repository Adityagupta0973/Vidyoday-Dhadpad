import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';

// const volunteers = [
//   { name: 'Anika Sharma', assigned: '3', active: '2' },
//   { name: 'Rohan Verma', assigned: '2', active: '1' }
// ];

const VolunteersPage: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Priya';

   const [volunteers, setVolunteers] = React.useState<any[]>([]);
  
  React.useEffect(() => {
      const fetchTasks = async () => {
        try {
          console.log('Fetching volunteers...');
          // const volId = localStorage.getItem('userId');
          const volId = localStorage.getItem('userId');
          // if (!volId) return;
          const token = localStorage.getItem('token');
          const res = await fetch(`http://localhost:5000/api/users/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(res);
          const data = await res.json();
          console.log(data);
          const volunteerIds=data.volId[0];
          console.log("volunteerIds",volunteerIds);
          const volunteerRes = await fetch(`http://localhost:5000/api/users/${volunteerIds}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log("idk",volunteerRes);
          const d = await volunteerRes.json();
          console.log("volunteerRes",d);
          setVolunteers([d]);
          // console.log('Volunteers fetched:', volunteers);
        } catch (err) {
          console.error('Error fetching tasks:', err);
        }
      };
      fetchTasks();
    }, []);
  return (
    <DashboardLayout role="coordinator" userName={userName}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Volunteers</h1>
        <div className="space-y-4">
          {volunteers.map((volunteer, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow border">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    {volunteer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{volunteer.name}</p>
                  <p className="text-sm text-gray-600">
                    Assigned: {volunteer.assigned}, Active: {volunteer.active}
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

export default VolunteersPage;
