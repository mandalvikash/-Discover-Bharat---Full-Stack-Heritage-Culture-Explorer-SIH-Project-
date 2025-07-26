import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Button from './Button';

interface ContentItem {
  id: string;
  name: string;
  description: string;
  image: string;
  location?: string;
  rating?: number;
  price?: string;
  type: 'hotel' | 'restaurant' | 'heritage' | 'place';
}

interface ContentSectionProps {
  title: string;
  items: ContentItem[];
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  isLoading?: boolean;
}

export default function ContentSection({
  title,
  items,
  showLoadMore = false,
  onLoadMore,
  isLoading = false
}: ContentSectionProps) {
  const handleWishlist = (id: string) => {
    // TODO: Implement wishlist functionality
    console.log('Added to wishlist:', id);
  };

  const getDetailLink = (item: ContentItem) => {
    if (item.type === 'hotel') {
      return `/hotel/${item.id}`;
    }
    return '#'; // For other types, we'd create separate detail pages
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => handleWishlist(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full transition-all duration-200"
                >
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
                {item.rating && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  {item.location && (
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  )}
                  {item.price && (
                    <span className="text-orange-500 font-semibold">{item.price}</span>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Link to={getDetailLink(item)} className="flex-1">
                    <Button className="w-full" size="sm">
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showLoadMore && (
          <div className="text-center">
            <Button
              onClick={onLoadMore}
              variant="outline"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}