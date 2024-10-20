'use client'
import React from 'react'
import Logo  from '../../images/logo/logo.svg';

export default function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center py-6'>
      {/* logo */}
      <img src={Logo.src} alt="logo"
      width={30}/>
      {/* list */}
      <ul className='flex flex-row gap-5 cursor-pointer text-xl'>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      
    </nav>
  )
}
