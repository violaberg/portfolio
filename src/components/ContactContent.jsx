"use client";

import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import NoiseBackground from "./NoiseBackground";

const ContactContent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="flex mt-36 mb-6">
      <div className="card relative">
        <NoiseBackground />
        {/* Content */}
        <div className="content">
          <h1 className="justify-self-center text-5xl p-4">Contact Me</h1>
          <div className="w-full max-w-5xl mx-auto my-3 flex flex-col">
            <p className="text-center">
              Got a question or would like to collaborate? Feel free to contact me by filling out this form. Alternatively, don't hesitate to reach out on
              <a
                href="https://www.linkedin.com/in/viola-bergere/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center pl-1 gap-1 transform transition font-semibold duration-300 hover:scale-105"
              >
                <span>LinkedIn</span>
                <FaLinkedin className="shadow-lg mb-1" size={20} />
              </a>
            </p>
          </div>
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
