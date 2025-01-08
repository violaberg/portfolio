"use client";

import "../../app/globals.css";

import { useState } from "react";
import ContactForm from "../../components/ContactForm";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="card">
          <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg" className="noise">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="6" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilter)" />
          </svg>
          <div className="content">
            <h1 className="justify-self-center">
              Contact Me
            </h1>
            <div className="w-full max-w-5xl mx-auto my-3 flex flex-col">
              <p className="text-center">
                Please feel free to contact me by filling out this form. Alternatively, don't hesitate to reach out on <a href="https://www.linkedin.com/in/viola-bergere/" target="_blank" rel="noopener noreferrer" className="font-bold tracking-wider">LinkedIn</a>
              </p>
              {isSubmitted && (
                <div className="w-full max-w-xl text-center flex flex-col font-semibold">
                  <p>
                    Thank you for your message! I will get back to you as soon as
                    possible.
                  </p>
                </div>
              )}
            </div>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
      </div>
    </>
  );
}

export default Contact;