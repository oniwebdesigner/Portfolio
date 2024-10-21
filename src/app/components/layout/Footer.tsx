import React from 'react'
import Background from '../../images/background.png';
import Cyclist from '../../images/cyclist.gif';
import Volkswagen from '../../images/volkswagen.gif';

export default function Footer() {
  return (
    <div className="w-screen">
      <footer className="bg-purple-500">
        <div className="relative w-full h-auto">
          <img src={Background.src} alt="background" className="w-full h-auto object-cover" />
          <img src={Cyclist.src} alt="cyclist" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36" />
          <img src={Volkswagen.src} alt="volkswagen" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </footer>
    </div>
  );
}

