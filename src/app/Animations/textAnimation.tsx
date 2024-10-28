import React, { useEffect } from 'react';
import gsap from 'gsap';

export const textTypingAnimation = (
  paragraphRef: React.RefObject<HTMLSpanElement>,
  cursorRef: React.RefObject<HTMLSpanElement>,
  //extraTextRe:  React.RefObject<HTMLSpanElement>
) => {
  if (!paragraphRef.current || !cursorRef.current) return;

  
  const sentences = [
    "This is a brief overview introducing my portfolio as a frontend developer",
    "Here, you'll find exciting new projects I've contributed to in both development and design..",
  ];

  let currentSentenceIndex = 0;

  const typeSentence = () => {
    const sentence = sentences[currentSentenceIndex];
    gsap.to(paragraphRef.current, {
      textContent: sentence,
      duration: sentence.length * 0.1,
      ease: "none",
      onUpdate: function () {
        if(paragraphRef.current) {
          paragraphRef.current.innerText = sentence.slice(0, Math.floor(this.progress() * sentence.length));
        }
    
      },
      onComplete: () => {
        
        gsap.to(cursorRef.current, { opacity: 0, repeat: -1, yoyo: true, duration: 0.6 });

        
        gsap.to(paragraphRef.current, {
          opacity: 0,
          delay: 1,
          duration: 0.5,
          onComplete: () => {
            
            currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
            gsap.to(paragraphRef.current, { opacity: 1, duration: 0.5 });
            typeSentence(); 
          }
        });
      }
    });
  };

  typeSentence(); 
};
