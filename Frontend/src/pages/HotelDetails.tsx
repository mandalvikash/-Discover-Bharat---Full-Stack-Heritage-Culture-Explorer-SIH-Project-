import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Wifi, Car, Coffee, Utensils, Waves, Dumbbell } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Button from '../components/Button';

const hotelDetails = {
  'hotel-1': {
    id: 'hotel-1',
    name: 'The Taj Lake Palace',
    description: 'The Taj Lake Palace is a luxury hotel located on a natural foundation of 4 acres rock on the Jag Niwas island in Lake Pichola, Udaipur, India. The palace was built in 1746 under the direction of Maharana Jagat Singh II as a royal summer palace. Now the Taj Lake Palace operates as a luxury hotel under the Tata Group.',
    fullDescription: 'Experience the grandeur of royal living at The Taj Lake Palace, where every corner tells a story of Rajasthani heritage. This floating marble palace offers an enchanting blend of history and luxury, with hand-carved pillars, elegant courtyards, and stunning lake views. The hotel features world-class amenities including a spa, fine dining restaurants, and personalized butler service.',
    location: 'Udaipur, Rajasthan',
    rating: 4.9,
    reviews: 1247,
    price: '₹15,000',
    originalPrice: '₹18,000',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'Free Parking' },
      { icon: Coffee, name: 'Room Service' },
      { icon: Utensils, name: 'Restaurant' },
      { icon: Waves, name: 'Swimming Pool' },
      { icon: Dumbbell, name: 'Fitness Center' }
    ],
    coordinates: { lat: 24.5761, lng: 73.6833 }
  }
};

export default function HotelDetails() {
  const { id } = useParams<{ id: string }>();
  const hotel = id ? hotelDetails[id as keyof typeof hotelDetails] : null;

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Hotel not found</h2>
          <Link to="/hotels">
            <Button>Back to Hotels</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/hotels" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hotels
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl mb-2">{hotel.name}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span>{hotel.rating}</span>
                  <span className="ml-1">({hotel.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{hotel.location}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 lg:mt-0 text-right">
              <div className="flex items-center justify-end space-x-2">
                <span className="text-gray-500 line-through">{hotel.originalPrice}</span>
                <span className="text-2xl text-orange-500">{hotel.price}</span>
                <span className="text-gray-600">per night</span>
              </div>
              <Button size="lg" className="mt-2">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <ImageWithFallback
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl"
                />
              </div>
              {hotel.images.slice(1).map((image, index) => (
                <ImageWithFallback
                  key={index}
                  src={image}
                  alt={`${hotel.name} ${index + 2}`}
                  className="w-full h-32 md:h-48 object-cover rounded-2xl"
                />
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl mb-4">About this place</h2>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <p className="text-gray-600">{hotel.fullDescription}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <amenity.icon className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Reviews</h2>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-lg">{hotel.rating} ({hotel.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white">A</span>
                      </div>
                      <div>
                        <p className="text-gray-900">Aarav Kumar</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <p className="text-gray-600">Absolutely magical experience! The floating palace exceeded all expectations. The heritage rooms, lake views, and royal treatment made this stay unforgettable.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white">P</span>
                      </div>
                      <div>
                        <p className="text-gray-900">Priya Sharma</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">1 week ago</span>
                  </div>
                  <p className="text-gray-600">Perfect for honeymoon! The sunset views from our room were breathtaking. Staff was incredibly attentive and the dining was world-class.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price per night</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 line-through text-sm">{hotel.originalPrice}</span>
                    <span className="text-2xl text-orange-500">{hotel.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Check-in</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Check-out</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Guests</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full mb-4" size="lg">
                Reserve Now
              </Button>
              
              <div className="text-center text-sm text-gray-500">
                Free cancellation until 24 hours before check-in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}