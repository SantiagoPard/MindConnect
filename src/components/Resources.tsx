import React, { useState } from 'react';
import { Play, Clock, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredResources } from '../data/resourcesData';
import VideoModal from './VideoModal';
import AdSpace from './AdSpace';

interface Resource {
  title: string;
  duration: string;
  thumbnail: string;
  type: string;
  videoUrl: string;
}

function ResourceCard({ resource, onPlay }: { resource: Resource; onPlay: () => void }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={onPlay}>
      <div className="relative h-48">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <button className="bg-white rounded-full p-3 transform hover:scale-110 transition">
            <Play className="h-6 w-6 text-indigo-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600">{resource.type}</span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {resource.duration}
          </div>
        </div>
        <h3 className="font-semibold text-gray-900">{resource.title}</h3>
      </div>
    </div>
  );
}

export default function Resources() {
  const [selectedVideo, setSelectedVideo] = useState<Resource | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resources for Your Wellbeing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our library of resources designed to help you maintain
            a healthy balance between your studies and mental wellbeing.
          </p>
        </div>

        <AdSpace className="mb-16" />

        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Brain className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Daily Mindfulness</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources['Daily Mindfulness'].map((resource, index) => (
              <ResourceCard
                key={index}
                resource={resource}
                onPlay={() => setSelectedVideo(resource)}
              />
            ))}
          </div>
        </div>

        <AdSpace className="mb-16" />

        <div className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Stress Management</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources['Stress Management'].map((resource, index) => (
              <ResourceCard
                key={index}
                resource={resource}
                onPlay={() => setSelectedVideo(resource)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/recursos" className="btn">
            View All Resources
          </Link>
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl || ''}
        title={selectedVideo?.title || ''}
      />
    </section>
  );
}