import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: '5 Stars', value: 45 },
  { name: '4 Stars', value: 30 },
  { name: '3 Stars', value: 15 },
  { name: '2 Stars', value: 7 },
  { name: '1 Star', value: 3 },
];

const COLORS = ['#047857', '#059669', '#10B981', '#34D399', '#6EE7B7'];

const stats = {
  totalReviews: 100,
  averageRating: '4.1',
  responseRate: '95%',
  positiveRating: '88%',
};

export default function ReviewsView() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-lg font-medium text-gray-900">Reviews</h2>
        <p className="text-sm text-gray-600">
          {stats.totalReviews} Total Reviews · Last 30 Days
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Total Reviews</h3>
          <p className="text-2xl font-semibold text-teal-900">{stats.totalReviews}</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Average Rating</h3>
          <p className="text-2xl font-semibold text-teal-900">{stats.averageRating}</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Response Rate</h3>
          <p className="text-2xl font-semibold text-teal-900">{stats.responseRate}</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Positive Rating</h3>
          <p className="text-2xl font-semibold text-teal-900">{stats.positiveRating}</p>
        </div>
      </div>

      <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 