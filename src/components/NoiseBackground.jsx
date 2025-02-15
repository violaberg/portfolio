const NoiseBackground = () => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      className="noise w-full h-full absolute top-0 left-0"
      preserveAspectRatio="none"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="6"
          stitchTiles="stitch"
        />
      </filter>
      <rect
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        filter="url(#noiseFilter)"
      />
    </svg>
  );
};

export default NoiseBackground;
