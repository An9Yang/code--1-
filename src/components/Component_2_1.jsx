import { useState, useEffect, useRef } from 'react';

/**
 * Hero Main Component with Typewriter Effect
 * 
 * This component displays "AI-Driven" followed by a rotating set of words
 * with a typewriter animation effect. The words cycle through:
 * - Touch
 * - Copy
 * - Human
 * 
 * Implementation:
 * 1. Uses state to track current word index, current text, and typing direction
 * 2. useEffect hook manages the typewriter animation with setInterval
 * 3. Types out each character one by one, then erases it before moving to next word
 * 4. Cursor blinks continuously for authentic typewriter effect
 */
function Component_2_1() {
  // Words to cycle through in the typewriter effect
  const words = ['Touch', 'Copy', 'Human'];
  
  // State management
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Ref to track if component is mounted
  const isMounted = useRef(true);

  // Typewriter effect
  useEffect(() => {
    isMounted.current = true;

    const currentWord = words[currentWordIndex];
    
    const typeSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const pauseBeforeDelete = 2000; // Pause at end of word
    const pauseBeforeType = 500; // Pause before typing next word

    const timer = setTimeout(() => {
      if (!isMounted.current) return;

      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Word complete, pause then start deleting
          setTimeout(() => {
            if (isMounted.current) {
              setIsDeleting(true);
            }
          }, pauseBeforeDelete);
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typeSpeed : (currentText.length === currentWord.length ? 0 : typeSpeed));

    return () => {
      clearTimeout(timer);
    };
  }, [currentText, isDeleting, currentWordIndex, words]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div
      className="hero_main"
      data-frz-id="h349ixp04r4"
      data-component-id="Component_2_1"
    >
      <div className="heading-hero-block" data-frz-id="y8y2wy7uhsa">
        <h1 className="heading-style-h1" data-frz-id="tvy3ezfv8tg">
          AI-Driven
        </h1>
        <div
          id="animated-text"
          className="heading-style-h1"
          data-frz-id="4kgrlypdlwa"
        >
          {currentText}
        </div>
        <h1
          id="hero-cursor"
          className="heading-style-h1"
          data-frz-id="2976o55w966"
          style={{ opacity: cursorVisible ? 1 : 0 }}
        >
          _
        </h1>
      </div>
      <img
        loading="lazy"
        src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6822faf7b267d2a617501370_Arrow%201.svg"
        className="hero_arrow"
        data-frz-id="u1xc9f2toa9"
      />
    </div>
  );
}

export default Component_2_1;
