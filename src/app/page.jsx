"use client";

import Image from "next/image";
import portfolioImage from "/public/images/portfolio-img.JPEG";

const Home = () => {
  return (
    <div className="flex items-center justify-center mx-auto mt-32">
        {/* Card with Text and Image */}
        <div className="card flex flex-col relative gap-6 items-center sm:items-start">
          {/* SVG Noise */}
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

          {/* Text Section */}
          <div className="content flex-1">
            <h1 className="text-center text-5xl p-6">
              Viola Bergere
            </h1>
            <h2 className="text-3xl text-center">Full Stack Developer</h2>
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
              style={{ height: "auto" }}
            />
          </div>
        </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
