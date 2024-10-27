'use client';
import React from 'react';
import Link from '../../../../node_modules/next/link';
import Logo from '../../images/logo/logo.svg';

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center py-10 mr-32">
      {/* Logo */}
      <img src={Logo.src} alt="logo" width={30} className="ml-20" />
      
      {/* Navbar List */}
      <ul className="flex flex-row gap-5 text-xl cursor-pointer">
        <li className="transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800">
          <Link href="/">Home</Link>
        </li>
        <li className="transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800">
          <Link href="/skills">Skills</Link>
        </li>
        <li className="transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
