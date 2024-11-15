import React from 'react';
import { BookOpen, Users, Trophy, Heart } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Educational Resources',
    description: 'Access a complete library of resources on stress management and study techniques.'
  },
  {
    icon: Users,
    title: 'Support Community',
    description: 'Connect with other students in a safe, moderated space to share experiences.'
  },
  {
    icon: Trophy,
    title: 'Progress Tracking',
    description: 'Monitor your development and celebrate your achievements with our tracking system.'
  },
  {
    icon: Heart,
    title: 'Personalized Support',
    description: 'Receive individualized attention from student mental health experts.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How MindConnect Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive platform designed to support your mental wellbeing and
            improve your academic performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}