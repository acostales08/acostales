import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  loop?: boolean;
  typeSpeed: number // An array of strings to type out
}

const TypedText: React.FC<TypedTextProps> = ({ strings, typeSpeed, loop = true }) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings,
        typeSpeed, // typing speed in milliseconds
        backSpeed: 30,
        loop,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy(); // Cleanup when component unmounts
      };
    }
  }, [strings, typeSpeed, loop]);

  return <span ref={typedRef}></span>;
};

export default TypedText;
