'use client';

import { useState } from 'react';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { providerData } from '../mockData';

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="relative">
      {/* Image Gallery */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
        <div className="grid grid-cols-4 h-full">
          <div className="col-span-2 relative">
            <img
              src={providerData.images[0]}
              alt="Provider main"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-1">
            {providerData.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Provider ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <ShareIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <HeartIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Provider Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {providerData.name}
              </h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(providerData.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {providerData.rating} ({providerData.totalReviews} reviews)
                </span>
              </div>
              <p className="mt-2 text-gray-600">{providerData.location}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                Contact Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 