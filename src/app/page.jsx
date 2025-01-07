"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Ensure the code runs only on the client side
    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    // Cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
}
