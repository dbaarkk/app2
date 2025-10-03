import React from 'react';
import { brandInfo } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-white">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold tracking-wider mb-6">
              {brandInfo.name}
            </h1>
            <p className="text-2xl text-gray-300 tracking-wide">
              {brandInfo.tagline}
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                {brandInfo.about}
              </p>
            </div>
            
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                {brandInfo.mission}
              </p>
            </div>
            
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Premium Quality</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                Each OBSY hoodie is meticulously crafted using premium materials sourced from the finest suppliers. 
                Our attention to detail extends from the initial design concept to the final stitch, ensuring that 
                every garment meets our exacting standards for comfort, durability, and style. We believe that true 
                luxury lies not just in appearance, but in the tactile experience and long-lasting quality that 
                defines our brand.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Sustainable Practices</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                At OBSY, we're committed to responsible fashion that respects both people and planet. Our production 
                processes prioritize sustainability, ethical sourcing, and minimal environmental impact. We partner 
                with certified suppliers who share our values, ensuring that every OBSY hoodie is created with 
                respect for the environment and the communities involved in its creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;