'use client'
import React from 'react'
import Link from '../../../../node_modules/next/link';
import Logo  from '../../images/logo/logo.svg';


export default function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center py-6'>
      {/* logo */}
      <img src={Logo.src} alt="logo"
      width={30}/>
      {/* list */}
      
<ul className='flex flex-row gap-5 cursor-pointer text-xl'>
  <li><Link href="/">Home</Link></li>
  <li><Link href="/skills">Skills</Link></li>
  <li><Link href="/projects">Projects</Link></li>
  <li><Link href="/work">Work</Link></li>
  <li><Link href="/contact">Contact</Link></li>
</ul>
      
    </nav>
  )
}
