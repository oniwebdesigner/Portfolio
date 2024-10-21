import React from 'react';

function Cards({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className="" 
    />
  );
}

export default Cards;
