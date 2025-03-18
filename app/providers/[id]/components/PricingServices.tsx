'use client';

import { providerData } from '../mockData';

export default function PricingServices() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Services & Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providerData.services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-purple-600">
                    {service.price}
                  </p>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  service.availability === 'Limited spots'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {service.availability}
                </span>
              </div>
              <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 