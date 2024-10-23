import React from 'react'
import SocialMediaButton from './common/SocialMediaButton'
import Boy from '../images/logo/boy.png'



export default function HeroSection() {
  return (
    <div className="flex flex-row items-center justify-center p-8">
      {/* Text Section */}
      <div className="w-1/2 text-left">
        <h2 className='text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal'>Hi, my name is</h2>
        <h1 className='text-6xl mt-2 font-medium text-purple-950 w-fit staggered-reveal'>Oni</h1>
        <p className='text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal'>This is a short paragraph introducing the hero section.</p>

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
        <button className='mt-8 px-4 py-2 border border-purple-950 rounded-lg text-purple-950 hover:bg-purple-950  hover:text-white transition'>
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
