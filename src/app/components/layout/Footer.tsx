'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Background from '../../images/background.png';
import Cyclist from '../../images/cyclist.gif';
import Volkswagen from '../../images/volkswagen.gif';

export default function Footer() {
  useEffect(() => {
    const vw = window.innerWidth; 
    const carAnimation = gsap.to('.car', {
      x: vw, 
      duration: 10, 
      ease: 'none',
      repeat: -1, 
      paused: false,
    });

    const cyclistAnimation = gsap.to('.cyclist', {
      x: vw, 
      duration: 15, 
      ease: 'none',
      repeat: -1,
      paused: false,
    });

    return () => {
      carAnimation.kill();
      cyclistAnimation.kill();
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
      <div 
        className="bottom-0 w-full h-[266px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("${Background.src}")` }}
      >
      </div>

      <div 
        className="absolute bottom-0 left-[30%] w-[330px] h-[105px] bg-no-repeat bg-center bg-cover car" 
        style={{ backgroundImage: `url("${Volkswagen.src}")` }}
      >
      </div>

      <div 
        className="absolute w-[90px] h-[100px] bottom-[0] bg-no-repeat bg-center bg-cover cyclist" 
        style={{ backgroundImage: `url("${Cyclist.src}")` }} 
      >
      </div>
    </div>
  );
}
