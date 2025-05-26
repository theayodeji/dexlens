import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/watchlist', label: 'Watchlist' },
  { to: '/nfts', label: 'NFTs' },
  { to: '/learn', label: 'Learn' },
  { to: '/settings', label: 'Settings' },
];

const NavbarLinks = () => (
  <ul className="flex flex-col md:flex-row md:space-x-3 gap-2 md:gap-0 bg-white md:bg-transparent shadow md:shadow-none px-4 md:px-0 py-4 md:py-0 text-black font-semibold w-full md:w-auto">
    {navLinks.map(({ to, label, end }) => (
      <li key={to} className="w-full md:w-auto">
        <NavLink
          to={to}
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'text-blue-600 bg-blue-50 md:bg-transparent' : 'hover:text-blue-500 hover:bg-blue-50 md:hover:bg-transparent'}`
          }
          {...(end ? { end: true } : {})}
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default NavbarLinks;
