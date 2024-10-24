import React from 'react'
import Background from '../../images/background.png';
import Cyclist from '../../images/cyclist.gif';
import Volkswagen from '../../images/volkswagen.gif';

export default function Footer() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
      <div 
        className="bottom-0 w-full h-[266px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("${Background.src}")` }}
      >
      </div>

      <div 
        className="absolute bottom-0 left-[30%] w-[330px] h-[105px] bg-no-repeat bg-center bg-cover animate-first" 
        style={{ backgroundImage: `url("${Volkswagen.src}")` }}
      >
      </div>

      <div 
        className="absolute w-[90px] h-[100px] bottom-[0] bg-no-repeat bg-center bg-cover animate-first" 
        style={{ backgroundImage: `url("${Cyclist.src}")` }} 
      >
      </div>
    </div>
  );
}
