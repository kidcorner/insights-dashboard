'use client';

import { providerData } from '../mockData';

export default function Location() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Location & Hours</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                providerData.location
              )}`}
            />
          </div>
          <p className="mt-4 text-gray-600">{providerData.location}</p>
        </div>

        {/* Business Hours */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Business Hours
            </h3>
            <div className="space-y-3">
              {providerData.businessHours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600">{schedule.day}</span>
                  <span className="text-gray-900 font-medium">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 