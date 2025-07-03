"use client";
import { Typewriter } from 'react-simple-typewriter';

const TypingHeading = () => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center md:text-left max-w-xl">
  <Typewriter
    words={[
      'Bouet Valentin, Développeur web',
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={60}
    deleteSpeed={40}
    delaySpeed={2000}
  />
</h1>
  );
};

export default TypingHeading;