import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
     
     setName("");
     setEmail("");
     setMessage("");
  };

  return (
    <section id="contact" className="p-8 bg-gray-100 mb-14">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600 text-center">Contact Us</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="w-full p-2 border rounded-lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-600 text-white py-2 px-4 rounded-lg"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
        <Modal isOpen={isModalOpen} onClose={closeModal} text='Message Sent' message='Your message has been sent successfully!'/>
      </div>
    </section>
  );
};

export default Contact;
