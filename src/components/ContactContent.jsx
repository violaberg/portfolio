"use client";

import { useState } from "react";
import SocialLink from '../components/SocialLink'; 
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
            <div className="text-center">
              Got a question or would like to collaborate? Feel free to contact me by filling out this form. Alternatively, don't hesitate to reach out on
                <span className="inline-flex font-semibold pl-1"> LinkedIn
                <SocialLink Icon={FaLinkedin} url="https://www.linkedin.com/in/viola-bergere/" className="items-center pl-1" size={24}/>
                </span>
            </div>
          </div>
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
