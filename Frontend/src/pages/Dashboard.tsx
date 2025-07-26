import React from 'react';
import { Calendar, MapPin, Heart, User, Settings, Bell, CreditCard } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Button from '../components/Button';

export default function Dashboard() {
  const upcomingTrips = [
    {
      id: 1,
      destination: 'Taj Lake Palace, Udaipur',
      dates: 'Dec 15-18, 2024',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      status: 'Confirmed'
    },
    {
      id: 2,
      destination: 'Kerala Backwaters',
      dates: 'Jan 5-10, 2025',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      status: 'Pending'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Desert Camp Jaisalmer',
      location: 'Jaisalmer, Rajasthan',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: '₹9,000/night'
    },
    {
      id: 2,
      name: 'Tea Estate Bungalow',
      location: 'Darjeeling, West Bengal',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: '₹5,500/night'
    },
    {
      id: 3,
      name: 'Goa Beach Resort',
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: '₹12,000/night'
    }
  ];

  const stats = [
    { label: 'Total Trips', value: '12', icon: MapPin },
    { label: 'Countries Visited', value: '1', icon: Calendar },
    { label: 'Wishlist Items', value: '8', icon: Heart },
    { label: 'Reviews Written', value: '15', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl">Welcome back, Aarav!</h1>
              <p className="text-gray-600 mt-1">Ready for your next adventure?</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-orange-500 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-orange-500 hover:bg-gray-100 rounded-lg">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg">Aarav Kumar</h3>
                <p className="text-gray-600 text-sm">Travel Enthusiast</p>
              </div>
              
              <nav className="space-y-2">
                <a href="#" className="flex items-center px-3 py-2 text-orange-500 bg-orange-50 rounded-lg">
                  <User className="w-5 h-5 mr-3" />
                  Profile
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 mr-3" />
                  My Trips
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg">
                  <Heart className="w-5 h-5 mr-3" />
                  Wishlist
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg">
                  <CreditCard className="w-5 h-5 mr-3" />
                  Payments
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Upcoming Trips */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Upcoming Trips</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {upcomingTrips.map((trip) => (
                  <div key={trip.id} className="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <ImageWithFallback
                      src={trip.image}
                      alt={trip.destination}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg">{trip.destination}</h3>
                      <p className="text-gray-600 text-sm">{trip.dates}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        trip.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Your Wishlist</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-sm mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-xs mb-2">{item.location}</p>
                      <p className="text-orange-500 text-sm">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-20 flex-col">
                  <MapPin className="w-6 h-6 mb-2" />
                  Explore Destinations
                </Button>
                <Button variant="secondary" className="h-20 flex-col">
                  <Calendar className="w-6 h-6 mb-2" />
                  Plan a Trip
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Heart className="w-6 h-6 mb-2" />
                  Browse Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}