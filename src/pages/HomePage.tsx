import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Resources from '../components/Resources';
import Pricing from '../components/Pricing';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Resources />
      <Pricing />
    </main>
  );
}