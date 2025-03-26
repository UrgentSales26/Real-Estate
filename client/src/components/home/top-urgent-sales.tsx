
import React from 'react';
import { useLocation } from 'wouter';

export default function TopUrgentSales() {
  const [, navigate] = useLocation();

  const urgentCategories = [
    { id: 10, title: 'Top 10', image: '/images/urgent-sales/top-10.jpg' },
    { id: 20, title: 'Top 20', image: '/images/urgent-sales/top-20.jpg' },
    { id: 30, title: 'Top 30', image: '/images/urgent-sales/top-30.jpg' },
    { id: 50, title: 'Top 50', image: '/images/urgent-sales/top-50.jpg' },
    { id: 100, title: 'Top 100', image: '/images/urgent-sales/top-100.jpg' },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Top Urgent Sales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {urgentCategories.map((category) => (
            <div
              key={category.id}
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/urgent-sales/${category.id}`)}
            >
              <div className="absolute inset-0 bg-black/50" />
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
