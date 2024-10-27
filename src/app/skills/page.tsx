// Page.tsx
import React from 'react';
import Skills from './Skills';
import ScrollColorText from '../Animations/ScrollColorText';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <Skills />
      <ScrollColorText phrases={['Driven by a passion for excellence, I dedicate my skills and creativity to the finest details, believing that even the smallest touch has the power to create something remarkable and memorable.']} />
    </div>
  );
}
