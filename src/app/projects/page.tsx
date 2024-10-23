import React from 'react'
import Cards from './Projects';
import Projects from './Projects'

const imageData = [
  {
    src: "https://cdn.dribbble.com/userupload/3176037/file/original-3a3987a3c13aa0600ad39ef40ef366a5.png?resize=752x",
    alt: "Project Image 1",
    width: 500,
    height: 300,
  },
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
  return (
    <div>
      <h1 className='text-6xl mt-2 font-medium text-purple-950 w-fit staggered-reveal'>My Projects</h1>
      <h2 className='text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal'>Some things I've built with love and expertise</h2>

      <div className='flex flex-grow'>
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
    </div>
  );
}