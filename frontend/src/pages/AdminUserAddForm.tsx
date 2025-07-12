import DashboardLayout from "@/components/Layout/DashboardLayout";
import React, { useState } from "react";

const AddUserForm: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        pass: "",
        role: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with backend API
        alert("User added:\n" + JSON.stringify(form, null, 2));
    };

    return (
        <DashboardLayout role="admin" userName={localStorage.getItem('userName') || 'Admin'}>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Add User</h2>
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="border rounded px-2 py-1 w-full" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="border rounded px-2 py-1 w-full" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required className="border rounded px-2 py-1 w-full" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input type="password" name="pass" value={form.pass} onChange={handleChange} required className="border rounded px-2 py-1 w-full" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Role</label>
                    <select name="role" value={form.role} onChange={handleChange} required className="border rounded px-2 py-1 w-full">
                        <option value="">Select</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="teacher">Teacher</option>
                        <option value="coordinator">Coordinator</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add User</button>
            </form>
        </DashboardLayout>
    );
};

export default AddUserForm;