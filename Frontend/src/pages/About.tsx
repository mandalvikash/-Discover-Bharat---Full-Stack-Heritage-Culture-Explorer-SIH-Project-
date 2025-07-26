import React from 'react';
import { Users, MapPin, Heart, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '50,000+' },
    { icon: MapPin, label: 'Destinations', value: '200+' },
    { icon: Heart, label: 'Experiences', value: '1,000+' },
    { icon: Award, label: 'Years of Service', value: '10+' }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Travel enthusiast with 15 years of experience in the hospitality industry.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Operations expert passionate about creating seamless travel experiences.'
    },
    {
      name: 'Arjun Patel',
      role: 'Lead Travel Curator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Local expert who discovers hidden gems across India.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="About Travguru"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl mb-4">About Travguru</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Discovering India's hidden gems, one journey at a time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Travguru, we believe that India's true beauty lies in its hidden gems - the places that don't make it to typical tourist brochures but hold the most authentic experiences.
              </p>
              <p className="text-gray-600 mb-6">
                We're dedicated to connecting travelers with local experiences that showcase the rich culture, heritage, and natural beauty of India. From heritage properties tucked away in ancient cities to eco-friendly retreats in pristine landscapes, we curate journeys that create lasting memories.
              </p>
              <p className="text-gray-600">
                Our platform empowers local communities by promoting sustainable tourism while giving travelers access to unique accommodations and experiences they won't find anywhere else.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Kerala Backwaters"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Goa Beaches"
                className="w-full h-48 object-cover rounded-2xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-sm">
                <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl mb-2">{member.name}</h3>
                <p className="text-orange-500 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-4">Authenticity</h3>
              <p className="text-gray-600">We showcase real, authentic experiences that connect travelers with local culture and traditions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-4">Discovery</h3>
              <p className="text-gray-600">We're passionate about uncovering hidden gems and sharing them with fellow travelers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-4">Sustainability</h3>
              <p className="text-gray-600">We promote responsible tourism that benefits local communities and preserves cultural heritage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}