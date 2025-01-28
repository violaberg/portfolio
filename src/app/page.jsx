"use client";

import Image from "next/image";
import portfolioImage from "/public/images/portfolio-img.JPEG";

const Home = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen">
        {/* Card with Text and Image */}
        <div className="card flex flex-col gap-6 items-center sm:items-start">
          {/* SVG Noise */}
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

          {/* Text Section */}
          <div className="content flex-1">
            <h1 className="text-center">
              Viola Bergere
            </h1>
            <h2 className="text-center">Full Stack Developer</h2>
            <p className="mt-4 text-center">
              Passionate about crafting innovative, user-friendly applications.
              Explore my work and let's bring ideas to life together!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 mx-auto">
            <Image
              src={portfolioImage}
              alt="Viola Bergere"
              className="profile-img rounded-lg mb-3 rotate-3"
              width={240}
              height={240}
            />
          </div>
        </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
