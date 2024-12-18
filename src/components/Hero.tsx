import React from 'react';
import { BeakerIcon, Globe2, Award } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';
import StatCard from './ui/StatCard';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <Container className="relative pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Advancing Global Healthcare</span>
            <span className="block text-blue-500">Through Innovation</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Leading pharmaceutical manufacturer with a global presence in Russia, UK, China, Japan, and India. 
            Committed to quality, innovation, and healthcare excellence.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button href="#contact">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <StatCard 
              icon={BeakerIcon}
              label="Products"
              value="500+"
            />
            <StatCard 
              icon={Globe2}
              label="Countries"
              value="50+"
            />
            <StatCard 
              icon={Award}
              label="Certifications"
              value="25+"
            />
          </dl>
        </div>
      </Container>
    </div>
  );
};

export default Hero;