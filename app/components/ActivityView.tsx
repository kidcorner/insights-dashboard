import React from 'react';

interface Activity {
  id: string;
  date: string;
  action: string;
  type: 'visit' | 'review' | 'lead';
}

const activities: Activity[] = [
  { id: '1', date: 'Mar 9 2024', action: 'Visited Your Storefront', type: 'visit' },
  { id: '2', date: 'Mar 9 2024', action: 'Reviewed Your Business', type: 'review' },
  { id: '3', date: 'Mar 8 2024', action: 'Sent An Apply To Your Storefront', type: 'lead' },
  { id: '4', date: 'Mar 7 2024', action: 'Visited Your Storefront', type: 'visit' },
  { id: '5', date: 'Mar 6 2024', action: 'Visited Your Storefront', type: 'visit' },
];

export default function ActivityView() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-lg font-medium text-gray-900">Activity</h2>
        <p className="text-sm text-gray-600">
          {activities.length} Actions Over The Last 12 Months ·{' '}
          <a href="#" className="text-purple-700 hover:underline">
            Learn How To Boost Your Activity
          </a>
        </p>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              {activity.type === 'visit' && <span className="text-purple-600">👁️</span>}
              {activity.type === 'review' && <span className="text-purple-600">⭐</span>}
              {activity.type === 'lead' && <span className="text-purple-600">📝</span>}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 