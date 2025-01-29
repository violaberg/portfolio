export default function Error500() {
  return (
    <div className="card">
      <svg
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
        className="noise"
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
      <div className="content">
        <h1 className="justify-self-center text-5xl p-4">Oops! Something went wrong.</h1>
        <div className="mx-auto text-center my-3">
          <a
            href="/"
            className="primaryBtn rounded-lg shadow-lg font-semibold p-3"
          >
            Back to Home page
          </a>
        </div>
      </div>
    </div>
  );
}
