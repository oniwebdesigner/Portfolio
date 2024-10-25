import React from 'react';
import Html from '../skills/html.svg';
import Css from '../skills/css.svg';
import Javascript from '../skills/javascript.svg';
import TypeScript from '../skills/typescript.svg';
import Sass from '../skills/sass.svg';
import Nodejs from '../skills/nodejs.svg';
import Reactt from '../skills/react.svg';
import Redux from '../skills/redux.svg';
import Tailwinds from '../skills/tailwindcss.svg';
import Mongo from '../skills/mongodb.svg';
import Git from '../skills/git.svg';
import Next from '../skills/nextjs.svg';
import Vite from '../skills/vite.svg';
import MySql from '../skills/mysql.svg';


export default function Skills() {
  const skills = [
    { src: Html.src, alt: 'HTML' },
    { src: Css.src, alt: 'CSS' },
    { src: Javascript.src, alt: 'JavaScript' },
    { src: Nodejs.src, alt: 'Node' },
    { src : TypeScript.src, alt: 'TypeScript'},
    { src : Sass.src, alt: 'sass'},
    { src : Vite.src, alt : 'vite'}
  ];

  const libraries = [
    { src: Reactt.src, alt: 'React' },
    { src: Redux.src, alt: 'Redux' },
    { src: Tailwinds.src, alt: 'TailwindCSS' },
    //{ src: Next.src, alt : 'Next'}
  ];

  const tools = [
    { src: Mongo.src, alt: 'MongoDB' },
    { src: Git.src, alt: 'Git' },
    { src: MySql.src, alt : 'mysql'}
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-16">
      <div>
        
        <h1 className="text-6xl mt-2 font-medium text-purple-950 w-fit staggered-reveal p-16">My Skills</h1>
        <h3 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
          <b className="ml-16 block w-full">I like to take responsibility to craft aesthetic user experience using modern architecture</b>
        </h3>
        
        <div className="mt-10">
          <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-xl mb-4 staggered-reveal ml-16">
           <b> LANGUAGES AND TOOLS </b>
          </h3>
          <div className="flex gap-10 ml-16 mb-8">
            {skills.map((skill, index) => (
              <img key={index} src={skill.src} alt={skill.alt} width={50} />
            ))}
          </div>
        </div>

        <div className="py-5">
          <h2 className="uppercase tracking-widest text-gray-light-2 font-medium text-xl staggered-reveal ml-16 mb-4">
           <b> LIBRARIES AND FRAMEWORKS </b>
          </h2>
          <div className="flex gap-10 ml-16 mb-8">
            {libraries.map((lib, index) => (
              <img key={index} src={lib.src} alt={lib.alt} width={50} />
            ))}
          </div>
        </div>

        <div className="py-5 flex flex-row gap-20 uppercase tracking-widest text-gray-light-2 font-medium text-xl staggered-reveal ml-16">
          <h2> <b> Databases </b></h2>
          <h2> <b> Others </b></h2>
        </div>

        <div className="flex flex-row gap-24 ml-20">
          {tools.map((tool, index) => (
            <img key={index} src={tool.src} alt={tool.alt} width={50} />
          ))}
        </div>
      </div>

      <div className="flex justify-end items-start h-screen">
        <svg width="320" height="700" viewBox="0 0 320 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M348.473 701.543C348.473 701.543 298.276 596.14 174.1 614.848C34.8642 635.837 -24.8935 514.122 9.52697 430.964C44.0669 347.805 171.829 353.623 175.773 195.519C179.717 33.9935 340.585 0 340.585 0" stroke="#7000ff" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M385.882 579.714C385.882 579.714 279.752 534.085 174.22 550.397C68.6886 566.824 56.259 493.019 68.6886 463.703C94.2648 402.788 231.229 391.039 240.073 292.709C246.766 218.79 201.887 118.201 322 65.5001" stroke="#7000ff" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M338.553 530.549C338.553 530.549 230.153 546.975 249.515 474.311C271.744 391.039 323.853 392.293 274.613 286.891C257.044 249.361 251.905 98.33 348.473 128.787" stroke="#7000ff" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M106.095 477.848C106.095 495.299 127.927 509.446 154.858 509.446C181.788 509.446 203.62 495.299 203.62 477.848C203.62 460.397 181.788 446.25 154.858 446.25C127.927 446.25 106.095 460.397 106.095 477.848Z" stroke="#7000ff" strokeWidth="2" strokeMiterlimit="10" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="300" height="700" fill="white" transform="translate(0)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
