import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Transform your mental wellbeing with{' '}
              <span className="text-indigo-600">MindConnect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive mental support platform designed specifically for students.
              Find peace of mind, improve your academic performance, and connect with others.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition flex items-center">
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Happy students"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-gray-900">+10,000 students</p>
              <p className="text-sm text-gray-600">trust us</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-600">satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">support</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">experts</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600">resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}