import DashboardLayout from "@/components/Layout/DashboardLayout";
import React, { useState } from "react";

const VolunteerSettings: React.FC = () => {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleContactChange = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        // TODO: Replace with your API call to update contact number
        setTimeout(() => {
            setLoading(false);
            setMessage("Contact number updated successfully!");
        }, 1000);
    };

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }
        setLoading(true);
        // TODO: Replace with your API call to update password
        setTimeout(() => {
            setLoading(false);
            setMessage("Password updated successfully!");
        }, 1000);
    };

    return (
        <DashboardLayout role="volunteer" userName={localStorage.getItem('userName') || 'Volunteer'}>
            <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Volunteer Settings</h2>
                <form onSubmit={handleContactChange} className="mb-8">
                    <label className="block mb-2 text-gray-700">
                        New Contact Number:
                        <input
                            type="text"
                            value={contact}
                            onChange={e => setContact(e.target.value)}
                            required
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Update Contact
                    </button>
                </form>
                <form onSubmit={handlePasswordChange}>
                    <label className="block mb-2 text-gray-700">
                        New Password:
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2 text-gray-700">
                        Confirm Password:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            required
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Update Password
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-green-600 font-semibold">{message}</div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default VolunteerSettings;