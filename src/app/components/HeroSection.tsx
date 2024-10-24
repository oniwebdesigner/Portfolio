import React from 'react'
import SocialMediaButton from './common/SocialMediaButton'
import Boy from '../images/logo/boy.png';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



export default function HeroSection() {
  return (
    <div className="flex flex-row items-center justify-center p-8">
      {/* Text Section */}
      <div className="w-1/2 text-left">
        <h2 className='text-lg'>Hi, my name is</h2>
        <h1 className='text-6xl mt-2 font-bold text-purple-950 w-fit staggered-reveal' style={{ fontFamily: 'Anton' }}>Oni</h1>
        <p className='font-mono text-lg text-white'>This is a short paragraph introducing the hero section.</p>

        {/* Social Media Buttons */}
        <div className="flex flex-row gap-4 mt-6 text-xl">
      <SocialMediaButton href="https://facebook.com">
        <FaFacebook className="inline-block mr-2" /> Facebook
      </SocialMediaButton>
      <SocialMediaButton href="https://twitter.com">
        <FaTwitter className="inline-block mr-2" /> Twitter
      </SocialMediaButton>
      <SocialMediaButton href="https://instagram.com">
        <FaInstagram className="inline-block mr-2" /> Instagram
      </SocialMediaButton>
    </div>

        {/* Button */}
        <button className='mt-8 px-4 py-2 border border-purple-900 text-purple-900 rounded hover:bg-purple-900 hover:text-white transition'>
  Let's go
</button>

      </div>

      {/* Image Section */}
      <div className="w-1/2 flex justify-center">
        <img src={Boy.src} alt="Boy" className='w-96 h-auto' />
      </div>
      <div>
      </div>
    </div>
    
  );
}
