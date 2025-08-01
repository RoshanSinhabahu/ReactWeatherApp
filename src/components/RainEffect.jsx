import React from 'react';

const RainEffect = () => {
  // Create an array of 100 elements to map over for the raindrops
  const drops = [...Array(100)].map((_, i) => (
    <div
      key={i}
      className="absolute bg-gradient-to-b from-transparent to-blue-300 w-px h-20 animate-fall"
      style={{
        // Random horizontal position
        left: `${Math.random() * 100}%`,
        // Random animation delay and duration for a more natural effect
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
      }}
    />
  ));

  return (
    // This div covers the entire screen, behind the main content
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {drops}
    </div>
  );
};

export default RainEffect;
