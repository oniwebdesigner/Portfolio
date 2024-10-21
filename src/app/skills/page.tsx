import React from 'react';
import Skills from './Skills';
import Html from '../skills/html.svg';
import Css from '../skills/css.svg';
import Javascript from '../skills/javascript.svg';
import Nodejs from '../skills/nodejs.svg';
import Reactt from '../skills/react.svg';
import Redux from '../skills/redux.svg';
import Tailwinds from '../skills/tailwindcss.svg';
import Mongo from '../skills/mongodb.svg';
import Git from '../skills/git.svg';


export default function Page() {
  return (
    <div>
      <Skills />
      <div className="flex gap-10"> 
        <img src={Html.src} alt="HTML " width={40} />
        <img src={Css.src} alt="CSS " width={40} />
        <img src={Javascript.src} alt="javascript" width={40} />
        <img src={Nodejs.src} alt="node" width={40} />
      </div>

      <div className='py-5'>
        <h2 className='uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal'>LIBRARIES AND FRAMEWORKS</h2>
      </div>
      
      <div className="flex gap-10"> 
        <img src={Reactt.src} alt="react" width={40} />
        <img src={Redux.src} alt="redux" width={40} />
        <img src={Tailwinds.src} alt="tailwinds" width={40} />
      </div>
      <div className='py-5 flex flex-row gap-20 uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal'>
        <h2>Databases</h2>
        <h2>Others</h2>
      </div>

      <div className=' flex flex-row gap-24'>
      <img src={Mongo.src} alt="tailwinds" width={40} />
      <img src={Git.src} alt="tailwinds" width={40} />
      </div>
      <p className='text-5xl text-center'>I have strong obsession for attention to detail</p>
    </div>
  );
}
