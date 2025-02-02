import EmblaCarousel from "@/components/EmblaCarousel";

const OPTIONS = {}
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const page = () => {
  return (
    <div className="flex flex-col mt-16">
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
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default page;
