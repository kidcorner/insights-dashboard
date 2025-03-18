import Gallery from './components/Gallery';
import Header from './components/Header';
import PricingServices from './components/PricingServices';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

export default function ProviderProfile() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <PricingServices />
        <Reviews />
        <Location />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
} 