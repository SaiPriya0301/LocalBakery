import React, { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <footer className="bg-yellow-600 p-4 text-white">
      <div className="text-center">
        <p>&copy; 2024 Local Bakery. All rights reserved.</p>
        <div className="flex justify-center gap-4">
        <button className="hover:text-gray-200" onClick={openModal}>Facebook</button>
          <button className="hover:text-gray-200" onClick={openModal}>Twitter</button>
          <button className="hover:text-gray-200" onClick={openModal}>Instagram</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} text='Coming Soon!' message='Our social media pages will be available soon. Stay tuned!'/>
    </footer>
  );
};

export default Footer;
