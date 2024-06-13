import React from 'react';
import BreadImage from '../Images/fresh-bread.jpg'
import CakePastryImage from '../Images/cake-pastry.jpg'
import CookiesWaffelsImage from '../Images/cookies.jpg'
const Services = () => {
  return (
    <section id="products" className="p-8 bg-white mb-14">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 border rounded-lg shadow  transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Fresh Bread</h3>
            <p>Our freshly baked bread is perfect for any meal. Made daily with love.</p>
            <img src={BreadImage} alt='BreadImage' className='h-72 w-full pt-2'></img>
          </div>
          <div className="p-4 border rounded-lg shadow  transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Cakes & Pastries</h3>
            <p>Indulge in our delicious cakes and pastries, perfect for any occasion.</p>
            <img src={CakePastryImage} alt='CakePastryImage' className='h-72 w-full pt-2'></img>
          </div>
          <div className="p-4 border rounded-lg shadow  transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Cookies & Muffins</h3>
            <p>Our cookies and muffins are a hit among all age groups. Try them today!</p>
            <img src={CookiesWaffelsImage} alt='CookiesWaffelsImage' className='h-72 w-full pt-2'></img>
          </div>
      </div>
    </section>
  );
};

export default Services;
