'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { providerData } from '../mockData';

export default function Reviews() {
  const totalRatings = Object.values(providerData.ratingDistribution).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
        <button className="mt-4 sm:mt-0 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rating Distribution */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 text-2xl font-bold text-gray-900">
              {providerData.rating}
            </span>
            <span className="ml-2 text-gray-600">
              ({providerData.totalReviews} reviews)
            </span>
          </div>

          <div className="space-y-2">
            {Object.entries(providerData.ratingDistribution)
              .reverse()
              .map(([rating, count]) => (
                <div key={rating} className="flex items-center">
                  <span className="w-12 text-sm text-gray-600">
                    {rating} stars
                  </span>
                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{
                        width: `${(count / totalRatings) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-8 text-sm text-gray-600">{count}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Review Cards */}
        <div className="lg:col-span-2 space-y-6">
          {providerData.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-start">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review.author}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 