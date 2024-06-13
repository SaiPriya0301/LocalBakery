import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Local Bakery</h1>
        <nav>
          <a href="#about" className="mx-2 px-2 py-1 hover:bg-black hover:text-white hover:rounded">About</a>
          <a href="#products" className="mx-2 px-2 py-1 hover:bg-black hover:text-white hover:rounded">Products</a>
          <a href="#contact" className="mx-2 px-2 py-1 hover:bg-black hover:text-white hover:rounded">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
