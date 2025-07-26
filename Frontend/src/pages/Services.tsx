import React from 'react';
import { Hotel, MapPin, Camera, Utensils, Car, Headphones } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Button from '../components/Button';

export default function Services() {
  const services = [
    {
      icon: Hotel,
      title: 'Accommodation Booking',
      description: 'From luxury resorts to heritage hotels and eco-friendly stays, find the perfect accommodation for your journey.',
      features: ['Verified properties', 'Instant booking', 'Best price guarantee', 'Free cancellation'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: MapPin,
      title: 'Destination Discovery',
      description: 'Explore hidden gems and off-the-beaten-path destinations across India with our curated recommendations.',
      features: ['Local insights', 'Hidden gems', 'Cultural experiences', 'Expert recommendations'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Camera,
      title: 'Experience Curation',
      description: 'Immerse yourself in authentic local experiences, from cultural tours to adventure activities.',
      features: ['Authentic experiences', 'Local guides', 'Cultural immersion', 'Adventure activities'],
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Utensils,
      title: 'Culinary Tours',
      description: 'Discover the rich flavors of India through guided food tours and cooking experiences.',
      features: ['Street food tours', 'Cooking classes', 'Local restaurants', 'Food festivals'],
      image: 'https://images.unsplash.com/photo-1554978991-33ef7f31d658?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Reliable and comfortable transportation options to get you to your destination safely.',
      features: ['Airport transfers', 'Private cars', 'Train bookings', 'Local transport'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to ensure your journey is smooth and worry-free.',
      features: ['24/7 availability', 'Multilingual support', 'Emergency assistance', 'Travel guidance'],
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Everything you need for an unforgettable Indian adventure
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From booking accommodations to discovering hidden gems, we provide comprehensive travel services to make your Indian journey extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-orange-500 mr-3" />
                      <h3 className="text-xl">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to plan your perfect Indian adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                1
              </div>
              <h3 className="text-lg mb-2">Explore</h3>
              <p className="text-gray-600 text-sm">Browse our curated collection of hotels, experiences, and destinations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                2
              </div>
              <h3 className="text-lg mb-2">Choose</h3>
              <p className="text-gray-600 text-sm">Select the perfect accommodations and experiences for your journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                3
              </div>
              <h3 className="text-lg mb-2">Book</h3>
              <p className="text-gray-600 text-sm">Secure your reservations with our easy booking process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                4
              </div>
              <h3 className="text-lg mb-2">Enjoy</h3>
              <p className="text-gray-600 text-sm">Experience the magic of India with our local support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let us help you discover the incredible diversity and beauty of India. From bustling cities to serene landscapes, your adventure awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Explore Destinations</Button>
            <Button variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}