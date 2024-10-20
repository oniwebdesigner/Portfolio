import React from 'react'
import SocialMediaButton from './common/SocialMediaButton'
import Boy from '../images/logo/boy.png';

export default function HeroSection() {
  return (
    <div className="flex flex-row items-center justify-center p-8">
      {/* Text Section */}
      <div className="w-1/2 text-left">
        <h2 className='text-base'>Hi, my name is</h2>
        <h1 className='text-4xl font-bold'>Oni</h1>
        <p className='text-lg mt-4'>This is a short paragraph introducing the hero section.</p>

        {/* Social Media Buttons */}
        <div className='flex flex-row gap-4 mt-6'>
          <SocialMediaButton href="https://facebook.com">
            Facebook
          </SocialMediaButton>
          <SocialMediaButton href="https://twitter.com">
            Twitter
          </SocialMediaButton>
          <SocialMediaButton href="https://instagram.com">
            Instagram
          </SocialMediaButton>
        </div>

        {/* Button */}
        <button className='mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
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
