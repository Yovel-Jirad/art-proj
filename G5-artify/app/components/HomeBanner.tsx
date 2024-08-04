import React from 'react';

// Define the HomeBanner component
const HomeBanner = () => {
  return (
    <div className="relative py-20 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 z-10 relative">
          <h1 className="text-cyan-600 text-6xl font-extrabold mb-6 font-primary leading-tight">
            Artify
            <span className="block text-4xl font-light">Buy Original Art</span>
          </h1>
          <p className="text-lg mb-8 font-secondary leading-relaxed">
            Discover and buy original, hand-crafted art directly from independent artists around the world. 
            <br />Find any art piece you desire.
            <br />Enjoy exploring art with us.
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-cyan-600 to-blue-600 opacity-90 rounded-full transform rotate-45 absolute top-10 left-10 blur-xl"></div>
          <div className="w-72 h-72 bg-gradient-to-br from-blue-600 to-sky-200 opacity-90 rounded-full transform rotate-45 absolute top-20 left-20 blur-xl"></div>
          <div 
            className="w-80 h-80 object-cover rounded-full shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
