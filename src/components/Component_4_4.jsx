import { useLayoutEffect, useRef } from 'react';

/**
 * Service Component 3 - Email Campaign & Landing Page
 * 
 * This component displays the third service offering with a scroll-triggered entrance animation.
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
function Component_4_4() {
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
      className="service _3"
      data-frz-id="fsw7exlqilu"
      data-component-id="Component_4_4"
    >
      <div className="service_top _3" data-frz-id="v2vrz64rlt">
        <img
          loading="lazy"
          sizes="(max-width: 1278px) 100vw, 1278px"
          src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510af9967589be805b436_young-man-in-a-blue-neon-room-wearing-cyber-glasse-2025-03-05-18-24-57-utc%201.png"
          srcSet="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510af9967589be805b436_young-man-in-a-blue-neon-room-wearing-cyber-glasse-2025-03-05-18-24-57-utc%201-p-500.png 500w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510af9967589be805b436_young-man-in-a-blue-neon-room-wearing-cyber-glasse-2025-03-05-18-24-57-utc%201-p-800.png 800w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510af9967589be805b436_young-man-in-a-blue-neon-room-wearing-cyber-glasse-2025-03-05-18-24-57-utc%201-p-1080.png 1080w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510af9967589be805b436_young-man-in-a-blue-neon-room-wearing-cyber-glasse-2025-03-05-18-24-57-utc%201.png 1278w"
          className="service_image _5 is-topleft"
          data-frz-id="zop0qkmx5u"
        />
      </div>
      <div className="service_title _3" data-frz-id="zdi9w637oai">
        <div
          className="heading-style-h1 text-height-100"
          data-frz-id="qh5esipeqs"
        >
          Email Campaign
          <br data-frz-id="9yyni8psmx" />& Landing Page
        </div>
        <div className="service_meta_mobile" data-frz-id="yb2k58y99kk">
          <div
            className="bodytext-style-bt1 text-color-n500"
            data-frz-id="ncb8pz4rm2k"
          >
            Conversion-focused emails and landing pages designed to drive action
            and keep your audience engaged.
          </div>
        </div>
      </div>
      <div className="service_bottom start-right _3" data-frz-id="5wv5ujt8nrd">
        <img
          loading="lazy"
          sizes="(max-width: 1212px) 100vw, 1212px"
          src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510ef13dd8237be6d9ce4_playing-cards-2024-10-18-05-55-14-utc%201%20(1).png"
          srcSet="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510ef13dd8237be6d9ce4_playing-cards-2024-10-18-05-55-14-utc%201%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510ef13dd8237be6d9ce4_playing-cards-2024-10-18-05-55-14-utc%201%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510ef13dd8237be6d9ce4_playing-cards-2024-10-18-05-55-14-utc%201%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/6822faf7b267d2a617501351/683510ef13dd8237be6d9ce4_playing-cards-2024-10-18-05-55-14-utc%201%20(1).png 1212w"
          className="service_image _6 is-bottomright"
          data-frz-id="yp565r2rmkg"
        />
        <div
          className="service_meta text-align-right"
          data-frz-id="2mwe3zr6nwh"
        >
          <div
            className="bodytext-style-bt1 text-color-n500"
            data-frz-id="qis7pbzmn8"
          >
            Conversion-focused emails and landing pages designed to drive action
            and keep your audience engaged.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_4_4;
