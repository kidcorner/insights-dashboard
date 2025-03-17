import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Feb 1', impressions: 0 },
  { date: 'Feb 7', impressions: 2 },
  { date: 'Feb 14', impressions: 5 },
  { date: 'Feb 21', impressions: 8 },
  { date: 'Feb 28', impressions: 12 },
  { date: 'Mar 7', impressions: 15 },
  { date: 'Mar 9', impressions: 18 },
];

export default function ImpressionsView() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-lg font-medium text-gray-900">Impressions</h2>
        <p className="text-sm text-gray-600">
          18 Total Impressions · Last 30 Days
        </p>
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
              dataKey="impressions" 
              stroke="#6B0F6B" 
              strokeWidth={2}
              dot={{ fill: '#6B0F6B', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Total Views</h3>
          <p className="text-2xl font-semibold text-purple-900">18</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Avg. Daily Views</h3>
          <p className="text-2xl font-semibold text-purple-900">2.5</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Growth</h3>
          <p className="text-2xl font-semibold text-green-600">+45%</p>
        </div>
      </div>
    </div>
  );
} 