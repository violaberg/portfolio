import EmblaCarousel from "@/components/EmblaCarousel";
import { FaGithub } from "react-icons/fa";

const OPTIONS = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const page = () => {
  return (
    <div className="flex flex-col mt-36">
      <div className="card relative">
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
        <div className="content">
          <h1 className="text-center text-5xl p-4">Projects</h1>
          <p>
            These projects showcase my expertise through practical examples of
            my work, featuring brief descriptions, links to code repositories,
            and live sites. Some of these are hackathon projects that
            demonstrate not only my ability to tackle intricate challenges and
            adapt to diverse technologies but also my skill in collaborating
            effectively with teams under tight deadlines.
          </p>
          <p className="pt-3">To explore all the projects I've contributed to, please visit my
            <a
            href="https://github.com/violaberg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center pl-1 gap-1 transform transition font-semibold duration-300 hover:scale-105">
            <span>GitHub</span>
            <FaGithub className="shadow-lg mb-1" size={20} />
            </a>
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default page;
