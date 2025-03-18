'use client';

import React, { useState } from 'react';
import ActivityView from './ActivityView';
import ImpressionsView from './ImpressionsView';
import VisitorsView from './VisitorsView';
import LeadsView from './LeadsView';
import ReviewsView from './ReviewsView';

type ViewType = 'activity' | 'impressions' | 'visitors' | 'leads' | 'reviews';

export default function DashboardNavigation() {
  const [currentView, setCurrentView] = useState<ViewType>('activity');

  const renderView = () => {
    switch (currentView) {
      case 'activity':
        return <ActivityView />;
      case 'impressions':
        return <ImpressionsView />;
      case 'visitors':
        return <VisitorsView />;
      case 'leads':
        return <LeadsView />;
      case 'reviews':
        return <ReviewsView />;
      default:
        return <ActivityView />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="flex space-x-4 sm:space-x-8 px-4 sm:px-0 mb-8 min-w-max">
          <button
            onClick={() => setCurrentView('activity')}
            className={`text-sm font-medium px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap ${
              currentView === 'activity'
                ? 'bg-purple-100 text-purple-900'
                : 'text-gray-600 hover:text-purple-900'
            }`}
          >
            Activity
          </button>
          <button
            onClick={() => setCurrentView('impressions')}
            className={`text-sm font-medium px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap ${
              currentView === 'impressions'
                ? 'bg-purple-100 text-purple-900'
                : 'text-gray-600 hover:text-purple-900'
            }`}
          >
            Impressions
          </button>
          <button
            onClick={() => setCurrentView('visitors')}
            className={`text-sm font-medium px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap ${
              currentView === 'visitors'
                ? 'bg-purple-100 text-purple-900'
                : 'text-gray-600 hover:text-purple-900'
            }`}
          >
            Visitors
          </button>
          <button
            onClick={() => setCurrentView('leads')}
            className={`text-sm font-medium px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap ${
              currentView === 'leads'
                ? 'bg-purple-100 text-purple-900'
                : 'text-gray-600 hover:text-purple-900'
            }`}
          >
            Leads
          </button>
          <button
            onClick={() => setCurrentView('reviews')}
            className={`text-sm font-medium px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap ${
              currentView === 'reviews'
                ? 'bg-purple-100 text-purple-900'
                : 'text-gray-600 hover:text-purple-900'
            }`}
          >
            Reviews
          </button>
        </div>
      </div>
      {renderView()}
    </div>
  );
} 