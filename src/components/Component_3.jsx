import { useLayoutEffect, useRef } from 'react';
import Component_3_1 from './Component_3_1';
import Component_3_2 from './Component_3_2';
import Component_3_3 from './Component_3_3';
import Component_3_4 from './Component_3_4';
import Component_3_5 from './Component_3_5';

/**
 * Horizontal Scroll Parallax Component
 * 
 * This component creates a smooth horizontal scrolling experience using GSAP ScrollTrigger.
 * 
 * Implementation Details:
 * 1. The component is "pinned" to the viewport when it enters view
 * 2. During the pinned state, the inner scroller container moves horizontally
 * 3. The animation dynamically calculates the actual width of all cards
 * 4. Total scroll distance = (scroller.scrollWidth - viewport.innerWidth)
 * 5. scrub: 1 ensures animation is synchronized with scroll position
 * 
 * Key Features:
 * - Smooth transitions when entering/exiting the pinned section
 * - No flicker or position jump issues
 * - Works seamlessly in both scroll directions (up/down)
 * - Automatic cleanup on component unmount
 * - Cards can have any width - animation adapts dynamically
 */
function Component_3() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure GSAP and ScrollTrigger are available
    if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger) {
      console.error('[Component_3] GSAP or ScrollTrigger not loaded');
      return;
    }

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get DOM elements
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (!container || !scroller) {
      console.error('[Component_3] Container or scroller ref not found');
      return;
    }

    // Calculate the actual total width needed to scroll
    // This allows cards to have any width, not just 100vw
    const getScrollAmount = () => {
      const scrollerWidth = scroller.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(scrollerWidth - viewportWidth);
    };

    console.log(`[Component_3] Initializing horizontal scroll with dynamic width calculation`);

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(scroller, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scroller.scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false, // Set to true for debugging
      },
    });

    console.log('[Component_3] ScrollTrigger initialized successfully');

    // Cleanup function
    return () => {
      console.log('[Component_3] Cleaning up ScrollTrigger');
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-w-id="952e6c8f-691b-1c9b-3fb0-6f9cf81dd64e"
      id="project"
      className="page-track content-list"
      data-frz-id="qsgtvw13iq"
      data-component-id="Component_3"
      style={{ 
        overflow: 'hidden',
        width: '100vw',
        height: '100vh'
      }}
    >
      <div 
        ref={scrollerRef}
        className="horizontal-scroller"
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 'fit-content',
          height: '100vh',
          willChange: 'transform'
        }}
      >
        <Component_3_1 />
        <Component_3_2 />
        <Component_3_3 />
        <Component_3_4 />
        <Component_3_5 />
      </div>
    </div>
  );
}

export default Component_3;
