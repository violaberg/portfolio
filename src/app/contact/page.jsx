"use client";

import "../../app/globals.css";
import { FaLinkedin } from "react-icons/fa";

import { useState } from "react";
import ContactForm from "../../components/ContactForm";

const page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="flex">
        <div className="card relative">
            <svg viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="noise w-full h-full absolute top-0 left-0"
                preserveAspectRatio="none">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="6" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilter)" />
            </svg>
            <div className="content">
              <h1 className="justify-self-center text-5xl p-4">
                Contact Me
              </h1>
              <div className="w-full max-w-5xl mx-auto my-3 flex flex-col">
                <p className="text-center">
                  Got a question or would like to collaborate? Feel free to contact me by filling out this form. Alternatively, don't hesitate to reach out on
                  <a
                  href="https://www.linkedin.com/in/viola-bergere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center pl-1 gap-1 transform transition font-semibold duration-300 hover:scale-105">
                  <span>LinkedIn</span>
                  <FaLinkedin className="shadow-lg mb-1" size={20} />
                  </a>
                </p>
                {isSubmitted && (
                  <div className="w-full max-w-xl text-center flex flex-col font-semibold">
                    <p className="text-center py-2">
                      Thank you for your message! I will get back to you as soon as
                      possible.
                    </p>
                  </div>
                )}
              </div>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
        </div>
      </div>
    </>
  );
}

export default page;