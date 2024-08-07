import React from 'react';

// Define the HomeBanner component
const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner-segragate">
        {/* Text Content */}
        <div className="home-banner-left">
          <h1 className="home-banner-title">
            Artify
            <span className="home-banner-subtitle">Buy Original Art</span>
          </h1>
          <p className="home-banner-text">
            Discover and buy original, hand-crafted art directly from independent artists around the world. 
            <br />Find any art piece you desire.
            <br />Enjoy exploring art with us.
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="home-banner-right">
          <div className="home-banner-simple-circle"></div>
          <div className="home-banner-gradient-circle"></div>
          <div 
            className="home-page-bg-circle">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
