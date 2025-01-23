"use client";

import { useState } from "react";
import PropTypes from "prop-types";

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      onSubmit(formData);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="input rounded-lg shadow-lg bg-colorWhite text-darkText mt-1 p-2 w-full"
          placeholder="Your Name"
          autoComplete="name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="input rounded-lg shadow-lg bg-colorWhite text-darkText mt-1 p-2 w-full"
          placeholder="Your Email"
          autoComplete="email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input rounded-lg shadow-lg bg-colorWhite text-darkText mt-1 p-2 w-full"
          rows="4"
          placeholder="Your Message"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="primaryBtn rounded-lg shadow-lg font-semibold p-3"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
