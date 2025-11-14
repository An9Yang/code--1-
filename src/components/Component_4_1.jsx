import { useLayoutEffect, useRef } from 'react';

/**
 * Service Section Header Component with Progressive Text Reveal Animation
 * 
 * This component creates a stunning scroll-triggered text animation where gray text
 * is progressively "painted over" with white text, line by line, as the user scrolls.
 * 
 * Animation Implementation:
 * 1. Text Structure:
 *    - The full text is pre-split into an array of lines
 *    - Both grey and white layers use the EXACT SAME array
 *    - This guarantees perfect alignment between the two layers
 * 
 * 2. Two perfectly-aligned text layers:
 *    - Bottom layer: gray text (always visible, acts as background)
 *    - Top layer: white text (initially hidden, revealed progressively)
 *    - Both layers render the exact same line breaks
 * 
 * 3. Each line of white text is initially clipped to 0% width using CSS clip-path
 * 
 * 4. When the user scrolls to this section:
 *    - GSAP ScrollTrigger activates the animation
 *    - Each line's clip-path is animated from "inset(0 100% 0 0)" to "inset(0 0% 0 0)"
 *    - This creates a left-to-right reveal effect, like a progress bar filling up
 *    - Lines animate sequentially (stagger) from top to bottom
 * 
 * 5. The animation is fully synchronized with scroll position (scrub: 1)
 *    - Scrolling down = revealing white text (like filling a progress bar)
 *    - Scrolling up = hiding white text (like emptying a progress bar)
 * 
 * Key Features:
 * - Smooth, scrubbed animation tied directly to scroll position
 * - Sequential line-by-line reveal for dramatic effect
 * - Fully reversible (works both directions)
 * - Perfect alignment between grey and white text layers
 * - Automatic cleanup on unmount
 */
function Component_4_1() {
  const containerRef = useRef(null);
  const whiteTextLinesRef = useRef([]);

  // Define the text lines - this ensures perfect alignment between layers
  const textLines = [
    'Unlock the full power of AI',
    'through expertly crafted',
    'prompts tailored to your',
    'goals.'
  ];

  useLayoutEffect(() => {
    // Ensure GSAP and ScrollTrigger are available
    if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger) {
      return;
    }

    const ctx = window.gsap.context(() => {
      // Animate each line of white text sequentially
      window.gsap.fromTo(
        whiteTextLinesRef.current,
        {
          // Initial state: completely clipped (hidden)
          clipPath: 'inset(0 100% 0 0)', // Clip from right edge
        },
        {
          // Final state: fully revealed
          clipPath: 'inset(0 0% 0 0)', // No clipping
          duration: 1,
          stagger: 0.3, // Delay between each line's animation start
          ease: 'none', // Linear progression for smooth scroll-sync
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%', // Start when element is 70% from top of viewport
            end: 'bottom 30%', // End when element is 30% from top of viewport
            scrub: 1, // Smooth scrubbing, animation tied to scroll position
            // markers: true, // Uncomment for debugging
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert(); // Clean up animations on unmount
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="services_head"
      data-frz-id="qwz24sv01wq"
      data-component-id="Component_4_1"
    >
      <div className="service_heading_block" data-frz-id="u4ydgri4u4">
        <div
          className="service_walking_block _1"
          data-frz-id="sijqgnor02"
        ></div>
        <div
          className="service_walking_block _2"
          data-frz-id="d9m1zpwl676"
        ></div>
        <div
          className="service_walking_block _3"
          data-frz-id="y16sdfgnbpm"
        ></div>
        <div
          className="service_walking_block _4"
          data-frz-id="m4ade8c141l"
        ></div>

        {/* Text animation container with two perfectly-aligned layers */}
        <div className="heading-style-h2" data-frz-id="83q338m8m3" style={{ position: 'relative' }}>
          {/* Bottom layer: Gray text (background) - always visible */}
          <div style={{ color: 'hsl(0, 0%, 60%)' }}>
            {textLines.map((line, index) => (
              <div key={`gray-${index}`}>{line}</div>
            ))}
          </div>

          {/* Top layer: White text (foreground) - revealed progressively */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              color: 'hsl(0, 0%, 100%)',
              pointerEvents: 'none', // Prevent interference with bottom layer
            }}
          >
            {/* Each line is a separate div for individual animation control */}
            {textLines.map((line, index) => (
              <div 
                key={`white-${index}`}
                ref={(el) => (whiteTextLinesRef.current[index] = el)}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6822faf7b267d2a617501371_Arrow%201.svg"
        data-frz-id="5t8by7bi2qi"
      />
    </div>
  );
}

export default Component_4_1;
