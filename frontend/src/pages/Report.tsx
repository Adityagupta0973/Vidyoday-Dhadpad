import DashboardLayout from "@/components/Layout/DashboardLayout";
import React, { useEffect, useState } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    BarChart, Bar,
    PieChart, Pie, Cell
} from "recharts";

const userName = localStorage.getItem('userName') || 'Ms. Sharma';
const volunteerData = [
    { month: "Jan", volunteers: 10 },
    { month: "Feb", volunteers: 20 },
    { month: "Mar", volunteers: 35 },
    { month: "Apr", volunteers: 50 },
    { month: "May", volunteers: 65 },
    { month: "Jun", volunteers: 80 },
];

const learningData = [
    { name: "Class 1", Pre: 40, Post: 70 },
    { name: "Class 2", Pre: 45, Post: 75 },
    { name: "Class 3", Pre: 50, Post: 80 },
    { name: "Class 4", Pre: 55, Post: 85 },
];

const schoolsData = [
    { month: "Jan", schools: 2 },
    { month: "Feb", schools: 4 },
    { month: "Mar", schools: 7 },
    { month: "Apr", schools: 10 },
    { month: "May", schools: 13 },
    { month: "Jun", schools: 15 },
];

const pieData = [
    { name: "Fully Under Program", value: 10 },
    { name: "Under Consideration", value: 5 },
    { name: "Remaining Schools", value: 8 },
];

const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];

const ReportPage: React.FC = () => {
    const [showCharts, setShowCharts] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCharts(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
    <DashboardLayout role="admin" userName={userName}>
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-8 text-gray-800">Reports & Metrics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1. Volunteers Joined Line Chart */}
                <div className="bg-white p-6 rounded shadow min-h-[320px] flex items-center justify-center">
                    {showCharts && (
                        <div className="w-full">
                            <h2 className="font-semibold mb-4">Volunteers Joined Over Time</h2>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={volunteerData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="volunteers" stroke="#8884d8" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>

                {/* 2. Pre/Post Learning Grouped Bar Chart */}
                <div className="bg-white p-6 rounded shadow min-h-[320px] flex items-center justify-center">
                    {showCharts && (
                        <div className="w-full">
                            <h2 className="font-semibold mb-4">Pre & Post Learning Results</h2>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={learningData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Pre" fill="#82ca9d" />
                                    <Bar dataKey="Post" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>

                {/* 3. Schools Enrolled Line Bar Chart */}
                <div className="bg-white p-6 rounded shadow min-h-[320px] flex items-center justify-center">
                    {showCharts && (
                        <div className="w-full">
                            <h2 className="font-semibold mb-4">Schools Enrolled Over Time</h2>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={schoolsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="schools" stroke="#FF8042" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>

                {/* 4. Schools Status Pie Chart */}
                <div className="bg-white p-6 rounded shadow min-h-[320px] flex items-center justify-center">
                    {showCharts && (
                        <div className="w-full">
                            <h2 className="font-semibold mb-4">Schools Status</h2>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </DashboardLayout>
    );
};

export default ReportPage;