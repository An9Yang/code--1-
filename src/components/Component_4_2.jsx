import { useLayoutEffect, useRef } from 'react';

/**
 * Service Component 1 - Website Copywriting
 * 
 * This component displays the first service offering with a scroll-triggered entrance animation.
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
function Component_4_2() {
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
      className="service _1"
      data-frz-id="km1iysbhh5n"
      data-component-id="Component_4_2"
    >
      <div className="service_top _1" data-frz-id="j5ewrys6tta">
        <img
          loading="lazy"
          sizes="(max-width: 1032px) 100vw, 1032px"
          src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f1b9967589be804b558_stylish-young-man-displays-unique-fashion-in-artis-2025-04-02-20-40-02-utc%201%20(1).png"
          srcSet="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f1b9967589be804b558_stylish-young-man-displays-unique-fashion-in-artis-2025-04-02-20-40-02-utc%201%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f1b9967589be804b558_stylish-young-man-displays-unique-fashion-in-artis-2025-04-02-20-40-02-utc%201%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f1b9967589be804b558_stylish-young-man-displays-unique-fashion-in-artis-2025-04-02-20-40-02-utc%201%20(1).png 1032w"
          className="service_image _1 is-topleft"
          data-frz-id="ycj2uvkpft"
        />
        <div
          className="service_meta text-align-right"
          data-frz-id="1nxub59co93"
        >
          <div
            className="bodytext-style-bt1 text-color-n500"
            data-frz-id="2fuzextisn2"
          >
            Smart, fast, and effective website copy powered by AI—tailored to
            your brand and optimized for clarity and engagement.
          </div>
        </div>
      </div>
      <div className="service_title _1" data-frz-id="si32tjxfur">
        <div
          className="heading-style-h1 text-height-100"
          data-frz-id="1bumwqwzk7v"
        >
          Website
          <br data-frz-id="hnwtvnf5h3h" />
          Copywriting
        </div>
        <div className="service_meta_mobile" data-frz-id="yucf7ppmnr">
          <div
            className="bodytext-style-bt1 text-color-n500"
            data-frz-id="aqzemazjbs7"
          >
            Smart, fast, and effective website copy powered by AI—tailored to
            your brand and optimized for clarity and engagement.
          </div>
        </div>
      </div>
      <div className="service_bottom _1" data-frz-id="urzig8z97a">
        <img
          loading="lazy"
          sizes="(max-width: 999px) 100vw, 999px"
          src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f82cbeea7fd1756979e_happy-new-year-chinese-couplet-2025-04-02-09-23-44-utc%201%20(1).png"
          srcSet="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f82cbeea7fd1756979e_happy-new-year-chinese-couplet-2025-04-02-09-23-44-utc%201%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f82cbeea7fd1756979e_happy-new-year-chinese-couplet-2025-04-02-09-23-44-utc%201%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/68350f82cbeea7fd1756979e_happy-new-year-chinese-couplet-2025-04-02-09-23-44-utc%201%20(1).png 999w"
          className="service_image _2 is-bottomright"
          data-frz-id="8c9w20m972v"
        />
      </div>
    </div>
  );
}

export default Component_4_2;
