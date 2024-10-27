'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import SocialMediaButton from './common/SocialMediaButton';
import Boy from '../images/logo/boy.png';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { textTypingAnimation } from '../Animations/textAnimation';
import { animateBoy } from '../Animations/boyAnimation';
import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroSection() {
  const paragraphRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const extraTextRef = useRef<HTMLParagraphElement>(null);
  const boyRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    textTypingAnimation(paragraphRef, cursorRef, extraTextRef);
    const tl = animateBoy(boyRef);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-center p-8">
      <div className="w-1/2 text-left">
        <h2 className='text-xl'>Hi, my name is</h2>
        <h1 className='text-7xl mt-2 font-bold text-purple-900 w-fit staggered-reveal mb-5' style={{ fontFamily: 'Anton' }}>Oni</h1>

        <p className='font-mono text-4xl text-gray-400 h-20'>
          <span ref={paragraphRef}></span>
          <span ref={cursorRef} className='font-mono text-xl text-white'>|</span>
        </p>
        <p ref={extraTextRef} className='font-mono text-lg text-white opacity-0 mt-4'>
          This is the additional sentence that complements the first one.
        </p>
        <div className="flex flex-row gap-4 mt-6 text-xl">
          <SocialMediaButton href="https://facebook.com">
            <FaFacebook className="inline-block mr-2 transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800" /> 
            <span className="transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800">Facebook</span>
          </SocialMediaButton>

          <SocialMediaButton href="https://twitter.com">
            <FaTwitter className="inline-block mr-2 transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800" /> 
            <span className="transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800">Twitter</span>
          </SocialMediaButton>

          <SocialMediaButton href="https://instagram.com">
            <FaInstagram className="inline-block mr-2 transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800" /> 
            <span className="transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:text-purple-800">Instagram</span>
          </SocialMediaButton>
        </div>
        <div className='flex py-8'>
          <Link href="/contact">
            <div className='mt-8 px-4 py-2 border border-purple-900 text-purple-900 rounded hover:bg-purple-900 hover:text-white transition flex items-center'>
              <b>Let's talk</b>
              <FaArrowRightLong className='mr-2 ml-3' />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-1/3 flex justify-center">
        <img ref={boyRef} src={Boy.src} alt="Boy" className='w-96 h-auto' />
      </div>
    </div>
  );
}
