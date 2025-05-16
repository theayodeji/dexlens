import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks';
import Burger from './Burger';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center px-6 py-6 text-black relative w-full">
        <h1 className="text-2xl font-bold tracking-tight">🔍 Dex<span className='text-blue-600'>Lens</span></h1>
        {/* Burger Icon */}
        <Burger open={menuOpen} onClick={() => setMenuOpen((open) => !open)} />
        {/* Desktop Menu */}
        <div className="hidden md:block ml-auto">
          <NavbarLinks />
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 shadow-md md:hidden z-10">
            <NavbarLinks />
          </div>
        )}
        <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
            Sign Up
        </button>
      </nav>
    </header>
  );
}

export default Navbar