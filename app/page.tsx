import ActivityView from './components/ActivityView';
import ImpressionsView from './components/ImpressionsView';
import VisitorsView from './components/VisitorsView';
import LeadsView from './components/LeadsView';
import ReviewsView from './components/ReviewsView';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <ActivityView />
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <ImpressionsView />
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <VisitorsView />
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <LeadsView />
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <ReviewsView />
        </div>
      </div>
    </main>
  );
} 