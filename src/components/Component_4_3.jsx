import { useLayoutEffect, useRef } from 'react';

/**
 * Service Component 2 - Brand Story & Voice Crafting
 * 
 * This component displays the second service offering with a scroll-triggered entrance animation.
 * 
 * Animation Implementation:
 * 1. When the component enters the viewport from the bottom, it starts at 1.5x scale (appears larger/closer)
 * 2. As the user scrolls up, GSAP ScrollTrigger smoothly animates the scale from 1.5 to 1.0
 * 3. Once it reaches 1.0 scale, it maintains that size as it continues scrolling up
 * 4. This creates a "zoom out and settle" effect that adds depth and visual interest
 * 
 * ScrollTrigger Configuration:
 * - trigger: The component itself
 * - start: Animation begins when the component's top edge reaches the viewport's bottom edge
 * - end: Animation completes when the component's top edge reaches 60% from the viewport top
 * - scrub: 1 - Smooth animation tied directly to scroll position (1 second smoothing)
 */
function Component_4_3() {
  const serviceRef = useRef(null);

  useLayoutEffect(() => {
    const service = serviceRef.current;
    if (!service) return;

    // Check if GSAP and ScrollTrigger are available
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const ctx = window.gsap.context(() => {
        window.gsap.fromTo(
          service,
          {
            scale: 1.5, // Start at 1.5x size (larger)
          },
          {
            scale: 1, // End at 1.0x size (normal)
            ease: 'none',
            scrollTrigger: {
              trigger: service,
              start: 'top bottom', // When top of element hits bottom of viewport
              end: 'top 60%', // When top of element hits 60% from top of viewport
              scrub: 1, // Smooth scrubbing with 1 second delay
            },
          }
        );
      }, serviceRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div
      ref={serviceRef}
      className="service _2"
      data-frz-id="74dqq45em4v"
      data-component-id="Component_4_3"
    >
      <div className="service_top _2" data-frz-id="cl7jj5jxrn7">
        <img
          loading="lazy"
          sizes="(max-width: 1032px) 100vw, 1032px"
          src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350fd95b4a80953890dc2f_vintage-microphone-2025-03-06-01-26-36-utc%201%20(1).png"
          srcSet="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350fd95b4a80953890dc2f_vintage-microphone-2025-03-06-01-26-36-utc%201%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350fd95b4a80953890dc2f_vintage-microphone-2025-03-06-01-26-36-utc%201%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350fd95b4a80953890dc2f_vintage-microphone-2025-03-06-01-26-36-utc%201%20(1).png 1032w"
          className="service_image _3 is-topleft"
          data-frz-id="mojzc8fa99"
        />
      </div>
      <div className="service_title _2" data-frz-id="dwvzvtig6z9">
        <div
          className="heading-style-h1 text-height-100"
          data-frz-id="74mhwjwzc4y"
        >
          Brand Story &
          <br data-frz-id="obg0uz1rbk" />
          Voice Crafting
        </div>
        <div className="service_meta_mobile" data-frz-id="qyj3a0jngyo">
          <div
            className="bodytext-style-bt1 text-color-n500"
            data-frz-id="w5jyto83umq"
          >
            Define a unique brand voice and compelling story that builds
            connection and trust with your audience.
          </div>
        </div>
      </div>
      <div className="service_bottom _2" data-frz-id="5irvng4wcdk">
        <img
          loading="lazy"
          sizes="(max-width: 1278px) 100vw, 1278px"
          src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6835104d9967589be8057562_creative-photo-of-a-modern-bottle-of-perfume-2025-01-09-02-02-49-utc%201.png"
          srcSet="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6835104d9967589be8057562_creative-photo-of-a-modern-bottle-of-perfume-2025-01-09-02-02-49-utc%201-p-500.png 500w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6835104d9967589be8057562_creative-photo-of-a-modern-bottle-of-perfume-2025-01-09-02-02-49-utc%201-p-800.png 800w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6835104d9967589be8057562_creative-photo-of-a-modern-bottle-of-perfume-2025-01-09-02-02-49-utc%201-p-1080.png 1080w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6835104d9967589be8057562_creative-photo-of-a-modern-bottle-of-perfume-2025-01-09-02-02-49-utc%201.png 1278w"
          className="service_image _4 is-bottomright"
          data-frz-id="41h0eyxa9eq"
        />
        <div className="service_meta" data-frz-id="pvq81bxg2d">
          <div
            className="bodytext-style-bt1 text-color-n500"
            data-frz-id="y3fn8ryfdmc"
          >
            Define a unique brand voice and compelling story that builds
            connection and trust with your audience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_4_3;
