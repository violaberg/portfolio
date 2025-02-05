"use client";

import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess("Form submitted successfully! I will get back to You as soon as possible. Thank You for Your message.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
          className="btnCard rounded-lg shadow-lg font-semibold p-3"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {success && <p className="text-green-500 font-semibold text-center mt-2">{success}</p>}
      {error && <p className="text-red-500 font-semibold text-center py-2 mt-2">{error}</p>}
    </form>
  );
}

export default ContactForm;
