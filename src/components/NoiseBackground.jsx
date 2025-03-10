import React from 'react';

const NoiseBackground = () => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      className="noise w-full h-full absolute top-0 left-0"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="6"
            stitchTiles="stitch"
            seed="5" // Add a seed to make it consistent
          />
        </filter>
      </defs>
      <rect
        width="100%"
        height="100%"
        filter="url(#noiseFilter)"
      />
    </svg>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(NoiseBackground);