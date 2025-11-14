import { useLayoutEffect, useRef } from 'react';
import Component_5_1 from './Component_5_1';

/**
 * Testimonials Section Component with Full-Screen Scroll-Triggered Switching Animation
 * 
 * FIXED VERSION - Clean Slide Transitions (No Fade/Blur)
 * 
 * Core Changes:
 * 1. Uses pure Y-axis translation (no opacity fade) for crisp transitions
 * 2. Current card slides UP and out (-100%)
 * 3. Next card slides UP from below (100% → 0%)
 * 4. Fixed end-state logic: ensures final testimonial stays visible after unpin
 * 
 * Technical Details:
 * - Pin duration: 4000px (800px per transition × 5 testimonials)
 * - Scrub: 1 (smooth scroll-linked animation)
 * - No overlapping elements = no blur/ghosting
 * - Visibility controlled by display property, not opacity
 */
function Component_5() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Check if GSAP and ScrollTrigger are available
    if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger) {
      console.warn('GSAP or ScrollTrigger not available');
      return;
    }

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const section = sectionRef.current;
    if (!section) return;

    // Helper function to map index to card class name
    const getCardClass = (index) => {
      const classMap = {
        1: '1st',
        2: '2nd',
        3: '3rd',
        4: '1st',
        5: '2nd'
      };
      return classMap[index];
    };

    // Set initial state: All cards positioned below, except first one
    gsap.set('.testimony', { 
      display: 'none',
      yPercent: 100,
      opacity: 1 // Always visible, we use display to control visibility
    });
    
    gsap.set('.testimony.is-1st', { 
      display: 'flex',
      yPercent: 0
    });
    
    // Initialize left side
    gsap.set('.testimonial_button', { opacity: 0.4 });
    gsap.set('.testimonial_button._1', { opacity: 1 });
    gsap.set('.special-text', { display: 'none' });
    gsap.set('.special-text._1', { display: 'block' });
    gsap.set('.testimony_author', { display: 'none' });
    gsap.set('.testimony_author._1', { display: 'flex' });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=4000', // 4000px of scroll distance
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onLeave: () => {
          // Lock to final state (testimonial #5, which uses is-2nd class)
          gsap.set('.testimony', { display: 'none', yPercent: -100 });
          gsap.set('.testimony.is-2nd', { display: 'flex', yPercent: 0 });
          gsap.set('.testimonial_button', { opacity: 0.4 });
          gsap.set('.testimonial_button._5', { opacity: 1 });
          gsap.set('.special-text', { display: 'none' });
          gsap.set('.special-text._5', { display: 'block' });
          gsap.set('.testimony_author', { display: 'none' });
          gsap.set('.testimony_author._5', { display: 'flex' });
        },
        onEnterBack: () => {
          // Reset to first testimonial when scrolling back up
          gsap.set('.testimony', { display: 'none', yPercent: 100 });
          gsap.set('.testimony.is-1st', { display: 'flex', yPercent: 0 });
          gsap.set('.testimonial_button', { opacity: 0.4 });
          gsap.set('.testimonial_button._1', { opacity: 1 });
          gsap.set('.special-text', { display: 'none' });
          gsap.set('.special-text._1', { display: 'block' });
          gsap.set('.testimony_author', { display: 'none' });
          gsap.set('.testimony_author._1', { display: 'flex' });
        }
      }
    });

    /**
     * Helper function to create a clean slide-up transition
     * @param {number} fromIndex - Current testimonial (1-5)
     * @param {number} toIndex - Next testimonial (1-5)
     * @param {number} position - Timeline position (0-1)
     */
    const createTransition = (fromIndex, toIndex, position) => {
      const duration = 0.8;
      const fromClass = getCardClass(fromIndex);
      const toClass = getCardClass(toIndex);
      
      // RIGHT SIDE: Prepare next card (show it below the viewport)
      tl.set(`.testimony.is-${toClass}`, {
        display: 'flex',
        yPercent: 100
      }, position);

      // RIGHT SIDE: Slide current card UP and out
      tl.to(`.testimony.is-${fromClass}`, {
        yPercent: -100,
        duration: duration,
        ease: 'power2.inOut',
        onComplete: () => {
          // Hide it after animation completes to save GPU resources
          gsap.set(`.testimony.is-${fromClass}`, { display: 'none' });
        }
      }, position);

      // RIGHT SIDE: Slide next card UP into view
      tl.to(`.testimony.is-${toClass}`, {
        yPercent: 0,
        duration: duration,
        ease: 'power2.inOut'
      }, position);

      // LEFT SIDE: Update button opacity
      tl.to(`.testimonial_button`, {
        opacity: 0.4,
        duration: duration * 0.4
      }, position);
      
      tl.to(`.testimonial_button._${toIndex}`, {
        opacity: 1,
        duration: duration * 0.4
      }, position + 0.1);

      // LEFT SIDE: Switch special-text (big number)
      tl.to(`.special-text._${fromIndex}`, {
        display: 'none',
        duration: 0.01
      }, position);
      
      tl.to(`.special-text._${toIndex}`, {
        display: 'block',
        duration: 0.01
      }, position + 0.1);

      // LEFT SIDE: Switch author info
      tl.to(`.testimony_author._${fromIndex}`, {
        display: 'none',
        duration: 0.01
      }, position);
      
      tl.to(`.testimony_author._${toIndex}`, {
        display: 'flex',
        duration: 0.01
      }, position + 0.1);
    };

    // Build timeline: 5 transitions
    // Each transition gets 0.2 (20%) of the total scroll distance
    createTransition(1, 2, 0);     // 0% - 20%
    createTransition(2, 3, 0.2);   // 20% - 40%
    createTransition(3, 4, 0.4);   // 40% - 60%
    createTransition(4, 5, 0.6);   // 60% - 80%
    // 80% - 100%: Hold on testimonial #5, then unpin smoothly

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-w-id="1b691e15-91fa-dcf9-8092-e503524cb275"
      id="testimonial"
      className="section_testimonials"
      data-frz-id="tib4pgv8gj"
      data-component-id="Component_5"
    >
      <div className="testimonials_content" data-frz-id="w3f7f5r6c3g">
        <div
          className="testimonials_left padding-global"
          data-frz-id="rbesh13oona"
        >
          <div className="testimonials_top" data-frz-id="01zdj0597cxc">
            <div className="testimonials_links" data-frz-id="8bimlvlxyxk">
              <div className="testimonial_button _1" data-frz-id="yv5mno84qjs">
                <div className="button-style-b3" data-frz-id="xgf9ythxe1">
                  01
                </div>
                <div className="button-style-b3" data-frz-id="it2u8acsdw">
                  Drew Norman
                </div>
              </div>
              <div className="testimonial_button _2" data-frz-id="o1m48tso7yc">
                <div className="button-style-b3" data-frz-id="sb2jdtpl3n">
                  02
                </div>
                <div className="button-style-b3" data-frz-id="sc4agxbayg">
                  Yusuf Omar
                </div>
              </div>
              <div className="testimonial_button _3" data-frz-id="ecaod4ajbs">
                <div className="button-style-b3" data-frz-id="q7pa94wc87e">
                  03
                </div>
                <div className="button-style-b3" data-frz-id="3k0mhcm0i13">
                  Linda Lee
                </div>
              </div>
              <div className="testimonial_button _4" data-frz-id="ulos9jq973t">
                <div className="button-style-b3" data-frz-id="y0iac451ds">
                  04
                </div>
                <div className="button-style-b3" data-frz-id="wjxh066hqm">
                  Rajan Patel
                </div>
              </div>
              <div className="testimonial_button _5" data-frz-id="c67he2n8oh9">
                <div className="button-style-b3" data-frz-id="mrevz0mhv9">
                  05
                </div>
                <div className="button-style-b3" data-frz-id="uugetht3d4">
                  Sutrisno Budi
                </div>
              </div>
            </div>
            <div className="special-text-block" data-frz-id="wx6qxnwshra">
              <div className="special-text _1" data-frz-id="d7cgwu668t">
                01
              </div>
              <div className="special-text _2" data-frz-id="21qh4jcbn31">
                02
              </div>
              <div className="special-text _3" data-frz-id="hety3882q1q">
                03
              </div>
              <div className="special-text _4" data-frz-id="p5r44czk9hd">
                04
              </div>
              <div className="special-text _5" data-frz-id="59upwd0k449">
                05
              </div>
            </div>
          </div>
          <div className="testimony_author_block" data-frz-id="rv5h76kjzs">
            <div className="testimony_author _1" data-frz-id="mx0hzwfrkwe">
              <div className="heading-style-h2" data-frz-id="drllfpo9dl">
                Drew Norman
              </div>
              <div
                className="heading-style-h4 text-color-n500"
                data-frz-id="dzmp3gsgo1a"
              >
                CEO of NovaTech Solutions
              </div>
            </div>
            <div className="testimony_author _2" data-frz-id="4v73ikbejcf">
              <div className="heading-style-h2" data-frz-id="3tq1s9ybnzp">
                Yusuf Omar
              </div>
              <div
                className="heading-style-h4 text-color-n500"
                data-frz-id="gqy4lvl7skt"
              >
                CEO of NovaTech Solutions
              </div>
            </div>
            <div className="testimony_author _3" data-frz-id="ynmd04zi4f">
              <div className="heading-style-h2" data-frz-id="ly6k1ywp1dh">
                Linda Lee
              </div>
              <div
                className="heading-style-h4 text-color-n500"
                data-frz-id="ogj9givur4q"
              >
                CEO of NovaTech Solutions
              </div>
            </div>
            <div className="testimony_author _4" data-frz-id="d5sbmrep0p">
              <div className="heading-style-h2" data-frz-id="o75o9nd23af">
                Rajan Patel
              </div>
              <div
                className="heading-style-h4 text-color-n500"
                data-frz-id="14i8lrlvhjl"
              >
                CEO of NovaTech Solutions
              </div>
            </div>
            <div className="testimony_author _5" data-frz-id="gmyphjb2td5">
              <div className="heading-style-h2" data-frz-id="z6cmriuplln">
                Sutrisno Budi
              </div>
              <div
                className="heading-style-h4 text-color-n500"
                data-frz-id="un1jm6cod1q"
              >
                CEO of NovaTech Solutions
              </div>
            </div>
          </div>
          <div className="testimony_swipe" data-frz-id="y36drhpdt9o">
            <div className="heading-style-h6" data-frz-id="1l0u6ewcjyj">
              Swipe For More
            </div>
          </div>
        </div>
        <Component_5_1 />
      </div>
    </section>
  );
}

export default Component_5;
