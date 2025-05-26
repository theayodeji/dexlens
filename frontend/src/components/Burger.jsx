import React from 'react';

const Burger = ({ open, onClick }) => (
  <button
    className="md:hidden ml-auto flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
  </button>
);

export default Burger;
