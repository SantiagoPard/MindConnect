import React, { useState } from 'react';
import { Brain, BookOpen, Play, Clock } from 'lucide-react';
import { allResources } from '../data/resourcesData';
import VideoModal from '../components/VideoModal';
import AdSpace from '../components/AdSpace';

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

export default function AllResourcesPage() {
  const [selectedVideo, setSelectedVideo] = useState<Resource | null>(null);

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Resources</h1>
        
        <AdSpace className="mb-16" />
        
        {allResources.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <div className="flex items-center mb-8">
              {category.title === 'Daily Mindfulness' ? (
                <Brain className="h-8 w-8 text-indigo-600 mr-3" />
              ) : (
                <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
              )}
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.resources.map((resource, resourceIndex) => (
                <ResourceCard
                  key={resourceIndex}
                  resource={resource}
                  onPlay={() => setSelectedVideo(resource)}
                />
              ))}
            </div>
            
            {index === 0 && <AdSpace className="my-16" />}
          </div>
        ))}
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
}