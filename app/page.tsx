import DashboardNavigation from './components/DashboardNavigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <DashboardNavigation />
        </div>
      </div>
    </main>
  );
} 