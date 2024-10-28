"use client"
import React, { useRef } from 'react'
import Cards from './Projects';
import ScrollColorText from '../Animations/ScrollColorText';

const imageData = [
  
  {
    src: "https://cdn.dribbble.com/userupload/3176037/file/original-3a3987a3c13aa0600ad39ef40ef366a5.png?resize=752x",
    alt: "Project Image 2",
    width: 500,
    height: 300,
  },
  {
    src: "https://cdn.dribbble.com/userupload/3176037/file/original-3a3987a3c13aa0600ad39ef40ef366a5.png?resize=752x",
    alt: "Project Image 3",
    width: 500,
    height: 300,
  },
  {
    src: "https://cdn.dribbble.com/userupload/3176037/file/original-3a3987a3c13aa0600ad39ef40ef366a5.png?resize=752x",
    alt: "Project Image 3",
    width: 500,
    height: 300,
  },
  {
    src: "https://cdn.dribbble.com/userupload/3176037/file/original-3a3987a3c13aa0600ad39ef40ef366a5.png?resize=752x",
    alt: "Project Image 3",
    width: 500,
    height: 300,
  },

];

export default function Page() {
  const wrapper = useRef<HTMLDivElement>(null)

  function onClick(direction: string){
    const step = 10;
    const left = (wrapper.current! as HTMLDivElement).getBoundingClientRect().left
    const right = (wrapper.current! as HTMLDivElement).getBoundingClientRect().right
  
    
    if(direction === "prev") {
      wrapper.current!.scrollTo({
        left: left + step,
        behavior: 'smooth'
      })
    }else {
      (wrapper.current! as HTMLDivElement).scrollTo({
        left: right + step,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div>
     <div className="flex flex-col items-center p-16 text-center">
  <h1 className="text-6xl mt-2 font-medium text-purple-950 w-fit staggered-reveal mb-16">My Projects</h1>
  <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
    Some things I've built with love and expertise
  </h2>
</div>

      <div className='flex items-center'>
        <button onClick={() => onClick("prev")} className='bg-white text-black rounded-full min-w-12 h-12'>Prev</button>
        <div className='flex overflow-x-scroll flex-grow no-scrollbar' ref={wrapper}>
          {imageData.map((image, index) => (
            <Cards 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              width={image.width} 
              height={image.height} 
            />
          ))}
          
        </div>
        <button onClick={() => onClick("next")} className='bg-white text-black rounded-full min-w-12 h-12'>Next</button>
      </div>
      <div>

      </div>
      <ScrollColorText phrases={["This version emphasizes your commitment to detail and excellence while connecting directly to your projects. If you need further adjustments or have specific points you'd like to highlight, let me know!"]} />
      </div>
  );
}