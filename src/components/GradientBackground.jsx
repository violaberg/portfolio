"use client";

import { useEffect } from "react";
import "../app/globals.css";

const GradientBackground = () => {
  useEffect(() => {
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg top-0 left-0 h-full w-full fixed overflow-hidden">
      {/* Noise Background */}
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="noiseBg w-full h-full absolute top-0 left-0 z-0"
        preserveAspectRatio="none"
      >
        <filter id="noiseFilterBg">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          filter="url(#noiseFilterBg)"
        />
      </svg>

      {/* Gooey Blur Effect */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svgBlur absolute top-0 left-0 z-0"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Gradients */}
      <div className="gradients-container absolute top-0 left-0 w-full h-full z-0">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
};

export default GradientBackground;
