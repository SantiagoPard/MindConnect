import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '9.99',
    features: [
      'Access to exclusive content',
      'Community forum',
      'Progress assessments',
      'Basic resources',
      'Includes advertisements'
    ]
  },
  {
    name: 'Standard',
    price: '19.99',
    popular: true,
    features: [
      'Everything in Basic',
      'Group support sessions',
      'Additional resources',
      'Personalized alerts',
      'Ad-free experience'
    ]
  },
  {
    name: 'Premium',
    price: '39.99',
    features: [
      'Everything in Standard',
      '24/7 access to psychologists',
      'Individual sessions',
      'Parent consultations',
      'Ad-free experience',
      'Priority support'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Plans and Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition`}
              >
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}