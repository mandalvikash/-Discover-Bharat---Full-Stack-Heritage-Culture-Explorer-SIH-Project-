import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ContentSection from '../components/ContentSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const topDestinations = [
  {
    id: '1',
    name: 'Goa Beaches',
    description: 'Pristine beaches and vibrant nightlife',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Goa',
    rating: 4.8,
    type: 'place' as const
  },
  {
    id: '2',
    name: 'Kerala Backwaters',
    description: 'Serene waterways and lush greenery',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kerala',
    rating: 4.9,
    type: 'place' as const
  },
  {
    id: '3',
    name: 'Rajasthan Palaces',
    description: 'Royal heritage and architectural marvels',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Rajasthan',
    rating: 4.7,
    type: 'heritage' as const
  }
];

const featuredHotels = [
  {
    id: 'hotel-1',
    name: 'The Taj Lake Palace',
    description: 'Luxury floating palace hotel in Udaipur with stunning lake views and royal treatment.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Udaipur, Rajasthan',
    rating: 4.9,
    price: '₹15,000/night',
    type: 'hotel' as const
  },
  {
    id: 'hotel-2',
    name: 'Backwater Retreat',
    description: 'Eco-friendly resort nestled in Kerala backwaters with traditional houseboats.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Alleppey, Kerala',
    rating: 4.7,
    price: '₹8,000/night',
    type: 'hotel' as const
  },
  {
    id: 'hotel-3',
    name: 'Goa Beach Resort',
    description: 'Beachfront luxury resort with private beach access and world-class amenities.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Goa',
    rating: 4.6,
    price: '₹12,000/night',
    type: 'hotel' as const
  }
];

const localExperiences = [
  {
    id: 'exp-1',
    name: 'Street Food Tour',
    description: 'Authentic local flavors and hidden food gems guided by local experts.',
    image: 'https://images.unsplash.com/photo-1554978991-33ef7f31d658?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Delhi',
    rating: 4.8,
    price: '₹1,500/person',
    type: 'restaurant' as const
  },
  {
    id: 'exp-2',
    name: 'Temple Architecture Tour',
    description: 'Explore ancient temples and learn about incredible Indian architecture.',
    image: 'https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Tamil Nadu',
    rating: 4.9,
    price: '₹2,000/person',
    type: 'heritage' as const
  },
  {
    id: 'exp-3',
    name: 'Mountain Village Stay',
    description: 'Experience authentic village life in the peaceful Himalayan foothills.',
    image: 'https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Himachal Pradesh',
    rating: 4.7,
    price: '₹3,000/night',
    type: 'place' as const
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Carousel */}
      <div className="px-4 sm:px-6 lg:px-8">
        <HeroCarousel />
      </div>

      {/* Top Images Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Top Destinations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-96">
            {/* Large image */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Rajasthan Palace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl mb-2">Royal Rajasthan</h3>
                <p className="text-gray-200">Discover majestic palaces and rich heritage</p>
              </div>
            </div>
            
            {/* Two smaller images */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-44">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Kerala Backwaters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg">Kerala Backwaters</h3>
                  <p className="text-sm text-gray-200">Serene waterways</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-44">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Goa Beaches"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg">Goa Beaches</h3>
                  <p className="text-sm text-gray-200">Tropical paradise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ContentSection
        title="Featured Hotels"
        items={featuredHotels}
      />

      <ContentSection
        title="Local Experiences"
        items={localExperiences}
      />

      <ContentSection
        title="Hidden Gems"
        items={topDestinations}
      />
    </div>
  );
}