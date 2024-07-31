import React from 'react';

// Define the HomeBanner component
const HomeBanner = () => {
  return (
    // Container for the banner, with padding and relative positioning
    <div className="pt-10 xl:px-20 px-4 relative z-0"> 
    {/* Flex container for text content and ellipse */}
      <div className="mx-auto px-2 py-0 flex flex-col md:flex-row gap-2 justify-left items-start relative">
        {/* Text Content */}
        <div className="md:w-1/2 text-pink-500 z-10 relative">
          <h1 className="text-5xl font-bold mb-5 font-primary">Artify</h1>
          <p className="text-xl mb-7 font-primary">
            Creativity runs the world.
            <br />Market-place and exhibitions from all over the world.
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
