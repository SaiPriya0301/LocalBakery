import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contact" className="p-8 bg-gray-100 mb-14">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-yellow-600 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Feel free to reach out to us by filling out the form below.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className={`w-full p-3 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            Send Message
          </button>
        </form>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          text="Message Sent"
          message="Your message has been sent successfully!"
        />
      </div>
    </section>
  );
};

export default Contact;
