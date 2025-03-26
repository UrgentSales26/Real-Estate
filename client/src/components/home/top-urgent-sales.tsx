
import React from 'react';
import { useLocation } from 'wouter';

export default function TopUrgentSales() {
  const [, navigate] = useLocation();

  const urgentCategories = [
    { id: 10, title: 'Top 10', image: '/images/properties/luxury-1.jpg', className: 'col-span-2 row-span-1' },
    { id: 20, title: 'Top 20', image: '/images/properties/luxury-2.jpg', className: 'col-span-1 row-span-1' },
    { id: 30, title: 'Top 30', image: '/images/properties/luxury-3.jpg', className: 'col-span-1 row-span-1' },
    { id: 50, title: 'Top 50', image: '/images/properties/modern-1.jpg', className: 'col-span-1 row-span-1' },
    { id: 100, title: 'Top 100', image: '/images/properties/modern-2.jpg', className: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Top Urgent Sales's</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {urgentCategories.map((category, index) => (
            <div
              key={category.id}
              className={`relative ${category.className} h-48 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg ${index === 0 ? 'lg:col-span-2' : ''}`}
              onClick={() => navigate(`/urgent-sales/${category.id}`)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
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
