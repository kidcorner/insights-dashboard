import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Feb 1', visitors: 0 },
  { date: 'Feb 7', visitors: 3 },
  { date: 'Feb 14', visitors: 7 },
  { date: 'Feb 21', visitors: 12 },
  { date: 'Feb 28', visitors: 15 },
  { date: 'Mar 7', visitors: 22 },
  { date: 'Mar 9', visitors: 25 },
];

const stats = {
  totalVisitors: 25,
  uniqueVisitors: 18,
  avgTimeOnSite: '2m 45s',
  bounceRate: '35%'
};

export default function VisitorsView() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-lg font-medium text-gray-900">Visitors</h2>
        <p className="text-sm text-gray-600">
          {stats.totalVisitors} Total Visitors · Last 30 Days
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Total Visitors</h3>
          <p className="text-2xl font-semibold text-purple-900">{stats.totalVisitors}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Unique Visitors</h3>
          <p className="text-2xl font-semibold text-purple-900">{stats.uniqueVisitors}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Avg. Time on Site</h3>
          <p className="text-2xl font-semibold text-purple-900">{stats.avgTimeOnSite}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Bounce Rate</h3>
          <p className="text-2xl font-semibold text-purple-900">{stats.bounceRate}</p>
        </div>
      </div>

      <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="visitors" 
              stroke="#6B0F6B" 
              strokeWidth={2}
              dot={{ fill: '#6B0F6B', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 