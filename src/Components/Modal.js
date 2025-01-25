import React from 'react';

const Modal = ({ isOpen, onClose, text, message}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">{text}</h2>
        <p className='text-black'>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 ocus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
