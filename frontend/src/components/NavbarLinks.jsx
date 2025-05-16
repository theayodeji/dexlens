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
  <ul className="flex space-x-6 flex-col md:flex-row gap-6 py-4 md:py-0 text-black font-semibold">
    {navLinks.map(({ to, label, end }) => (
      <li key={to}>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive ? 'text-blue-400' : 'hover:text-blue-400 transition-colors'
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
