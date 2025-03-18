'use client';

import { providerData } from '../mockData';

export default function Gallery() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {providerData.images.map((image, index) => (
          <div
            key={index}
            className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:opacity-75 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
} 