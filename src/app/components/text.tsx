// ExampleUsage.tsx
import React from 'react';
import ScrollColorText from '../Animations/ScrollColorText'; 

const Text: React.FC = () => {
  const textPhrases = [
    "I am a passionate Engineer",
    "who's focused on building",
    "scalable and performant apps.",
    "I take responsibility to craft",
    "a good user experience using",
    "modern frontend architecture."
  ];

  return (
    <div>
      <ScrollColorText phrases={textPhrases} />
    </div>
  );
};

export default Text;
