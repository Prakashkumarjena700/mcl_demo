import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { UsersIcon, BriefcaseIcon, IndianRupeeIcon } from "lucide-react";

const DashboardPage = () => {
  const employeeCount = 25;
  const projectCount = 8;
  const totalRevenue = 1500000;

  const chartData = [
    { name: "Jan", revenue: 200000 },
    { name: "Feb", revenue: 250000 },
    { name: "Mar", revenue: 180000 },
    { name: "Apr", revenue: 300000 },
    { name: "May", revenue: 270000 },
  ];

  const cardBase =
    "p-6 rounded-lg shadow hover:shadow-xl transition-transform transform hover:-translate-y-1 flex items-center gap-4 text-white";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${cardBase} bg-gradient-to-r from-blue-500 to-blue-700`}>
          <div className="bg-white/20 p-3 rounded-full">
            <UsersIcon size={28} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Employees</h3>
            <p className="text-3xl font-bold mt-1">{employeeCount}</p>
          </div>
        </div>

        <div className={`${cardBase} bg-gradient-to-r from-green-500 to-green-700`}>
          <div className="bg-white/20 p-3 rounded-full">
            <BriefcaseIcon size={28} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Projects Completed</h3>
            <p className="text-3xl font-bold mt-1">{projectCount}</p>
          </div>
        </div>

        <div className={`${cardBase} bg-gradient-to-r from-purple-500 to-purple-700`}>
          <div className="bg-white/20 p-3 rounded-full">
            <IndianRupeeIcon size={28} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <p className="text-3xl font-bold mt-1">₹{(totalRevenue / 100000).toFixed(1)}L</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Monthly Revenue Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPage;