import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterProps {
  onInit?: (typewriter: any) => void;
}

const CustomTypewriter: React.FC<TypewriterProps> = ({ onInit }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelectorAll('.Typewriter__wrapper').forEach((el) => {
        el.classList.add('blue-text');
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typewriter
      onInit={(typewriter) => {
        if (onInit) onInit(typewriter);
      }}
      options={{
        loop: true, // Enable looping
      }}
    />
  );
};

export default CustomTypewriter;
