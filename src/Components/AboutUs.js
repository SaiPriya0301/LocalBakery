import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="p-8 bg-gray-100 mb-14 mt-20">
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600">About Us</h2>
        <p>Welcome to <span className='font-bold'>Local Bakery</span>! We are a family-owned bakery offering a variety of freshly baked goods made with the finest ingredients. Our passion for baking is reflected in every delicious bite.</p>
        </div>
        <div className='text-center'>
        <p className="mb-4">Our website is designed to help you easily explore our offerings and services. Here's how you can navigate and use it:</p>
        <ul className="mb-4 inline-block text-left" >
          <li className="mb-2"><strong className='text-yellow-600'>About Us:</strong> Learn more about our story, values, and what makes our bakery special.</li>
          <li className="mb-2"><strong className='text-yellow-600'>Products:</strong> Explore our range of baked goods, from fresh bread to delectable cakes and pastries.</li>
          <li className="mb-2"><strong className='text-yellow-600'>Services:</strong> Discover the various services we offer, including custom orders for special occasions.</li>
          <li className="mb-2"><strong className='text-yellow-600'>Contact:</strong> Get in touch with us for any inquiries or to place an order. Use the contact form to send us a message.</li>
        </ul>
        <p>We hope you enjoy your experience on our website. Thank you for choosing Local Bakery!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
