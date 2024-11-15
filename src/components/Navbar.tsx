import React from 'react';
import { Brain } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">MindConnect</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600">How It Works</a>
            <a href="#resources" className="text-gray-700 hover:text-indigo-600">Resources</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Plans</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About Us</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}