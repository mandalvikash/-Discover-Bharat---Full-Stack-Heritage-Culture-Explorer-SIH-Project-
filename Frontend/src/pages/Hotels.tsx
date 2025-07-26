import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin, Star } from 'lucide-react';
import ContentSection from '../components/ContentSection';
import Input from '../components/Input';
import Button from '../components/Button';

const allHotels = [
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
  },
  {
    id: 'hotel-4',
    name: 'Himalayan Retreat',
    description: 'Mountain resort with panoramic views and adventure activities.',
    image: 'https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Manali, Himachal Pradesh',
    rating: 4.8,
    price: '₹6,000/night',
    type: 'hotel' as const
  },
  {
    id: 'hotel-5',
    name: 'Heritage Haveli',
    description: 'Restored 18th-century mansion with authentic Rajasthani architecture.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Jaipur, Rajasthan',
    rating: 4.5,
    price: '₹10,000/night',
    type: 'hotel' as const
  },
  {
    id: 'hotel-6',
    name: 'Mumbai Business Hotel',
    description: 'Modern business hotel in the heart of financial district.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Mumbai, Maharashtra',
    rating: 4.4,
    price: '₹7,500/night',
    type: 'hotel' as const
  },
  {
    id: 'hotel-7',
    name: 'Beach Cottage Puri',
    description: 'Charming beachside cottage with traditional Odia hospitality.',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Puri, Odisha',
    rating: 4.3,
    price: '₹4,500/night',
    type: 'hotel' as const
  },
  {
    id: 'hotel-8',
    name: 'Tea Estate Bungalow',
    description: 'Colonial-era bungalow surrounded by lush tea gardens.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Darjeeling, West Bengal',
    rating: 4.6,
    price: '₹5,500/night',
    type: 'hotel' as const
  },
  {
    id: 'hotel-9',
    name: 'Desert Camp Jaisalmer',
    description: 'Luxury tented accommodation under the stars in the Thar Desert.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Jaisalmer, Rajasthan',
    rating: 4.7,
    price: '₹9,000/night',
    type: 'hotel' as const
  }
];

export default function Hotels() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [filteredHotels, setFilteredHotels] = useState(allHotels);
  const [displayedHotels, setDisplayedHotels] = useState(allHotels.slice(0, 6));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSearch = (query?: string) => {
    const searchTerm = (query || searchQuery).toLowerCase();
    if (!searchTerm) {
      setFilteredHotels(allHotels);
      setDisplayedHotels(allHotels.slice(0, 6));
    } else {
      const filtered = allHotels.filter(hotel =>
        hotel.name.toLowerCase().includes(searchTerm) ||
        hotel.location.toLowerCase().includes(searchTerm) ||
        hotel.description.toLowerCase().includes(searchTerm)
      );
      setFilteredHotels(filtered);
      setDisplayedHotels(filtered.slice(0, 6));
    }
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      const currentLength = displayedHotels.length;
      const newHotels = filteredHotels.slice(currentLength, currentLength + 3);
      setDisplayedHotels([...displayedHotels, ...newHotels]);
      setIsLoading(false);
    }, 1000);
  };

  const hasMoreHotels = displayedHotels.length < filteredHotels.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl mb-6">Find Your Perfect Stay</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search hotels, locations, amenities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleSearch()}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
          
          {searchQuery && (
            <p className="mt-4 text-gray-600">
              {filteredHotels.length} hotel(s) found for "{searchQuery}"
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="py-8">
        {filteredHotels.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-600 mb-2">No hotels found</h3>
              <p className="text-gray-500">Try adjusting your search terms or explore our featured destinations.</p>
            </div>
          </div>
        ) : (
          <ContentSection
            title=""
            items={displayedHotels}
            showLoadMore={hasMoreHotels}
            onLoadMore={handleLoadMore}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}