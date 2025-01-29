import EmblaCarousel from "@/components/EmblaCarousel";

const OPTIONS = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const page = () => {
  return (
    <div className="mt-36 min-h-screen">
      <div className="card mx-auto">
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
          <h1 className="justify-self-center text-5xl p-4">Projects</h1>
          <p className="text-center">
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
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default page;
