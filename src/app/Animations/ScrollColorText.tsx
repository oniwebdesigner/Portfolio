// ScrollColorText.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type  ScrollColorTextProps = {
  phrases: string[];
}

const ScrollColorText: React.FC<ScrollColorTextProps> = ({ phrases }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Calculate color based on scroll position
      words.forEach((word, index) => {
        const scrollPercentage = scrollY / maxScroll;
        const colorValue = Math.floor(scrollPercentage * 255); // Generate color value
        gsap.to(word, {
          color: `rgb(${colorValue}, 0, ${255 - colorValue})`, // Transition from blue to red
          duration: 0.5
        });
      });
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div ref={textRef} className="text-5xl text-center space-y-2" style={{ fontFamily: 'Anton' }}>
        {phrases.map((phrase, index) => (
          <span key={index} className="word">{phrase}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollColorText;
