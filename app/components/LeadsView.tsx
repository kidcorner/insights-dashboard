import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Email', value: 45 },
  { name: 'Phone', value: 32 },
  { name: 'Form', value: 28 },
  { name: 'Chat', value: 15 },
];

const stats = {
  totalLeads: 120,
  conversionRate: '3.2%',
  avgResponseTime: '1.5h',
  qualifiedLeads: 85,
};

export default function LeadsView() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-lg font-medium text-gray-900">Leads</h2>
        <p className="text-sm text-gray-600">
          {stats.totalLeads} Total Leads · Last 30 Days
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Total Leads</h3>
          <p className="text-2xl font-semibold text-green-900">{stats.totalLeads}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
          <p className="text-2xl font-semibold text-green-900">{stats.conversionRate}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Avg. Response Time</h3>
          <p className="text-2xl font-semibold text-green-900">{stats.avgResponseTime}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Qualified Leads</h3>
          <p className="text-2xl font-semibold text-green-900">{stats.qualifiedLeads}</p>
        </div>
      </div>

      <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="value" 
              fill="#065F46"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 