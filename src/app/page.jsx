"use client";

const Home = () => {

  return (
    <div className="items-center justify-items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="card">
          <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg" className="noise">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="6" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilter)" />
          </svg>
          <div className="content">
            <h1>Welcome and enjoy my gibberish</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore unde ex pariatur distinctio
              laboriosam, dolorem quibusdam aperiam expedita consequuntur dolorum porro vitae earum quos voluptates et
              maxime. Tempora, mollitia.
            </p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
