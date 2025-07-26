import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-orange-500">Trav</span>
              <span className="text-2xl font-bold text-blue-500">guru</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover India's hidden gems, from luxurious hotels to authentic local experiences. 
              Your gateway to incredible adventures across the incredible subcontinent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/hotels" className="text-gray-300 hover:text-orange-500 transition-colors">Hotels</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-orange-500 transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                New Delhi, India
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-orange-500" />
                +91 9876543210
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-orange-500" />
                hello@travguru.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Travguru. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}