import React from 'react';
import Component_1 from './components/Component_1';
import Component_2 from './components/Component_2';
import Component_3 from './components/Component_3';
import Component_4 from './components/Component_4';
import Component_5 from './components/Component_5';
import Component_6 from './components/Component_6';
import Component_7 from './components/Component_7';

/**
 * Main App Component
 * 
 * This is the root component of the application.
 * All delayed script loading logic has been removed to prevent conflicts
 * with GSAP ScrollTrigger animations that are now managed within individual components.
 */
function App() {
  return (
    <>
      <div className="page-wrapper" data-frz-id="9x4p5zxumym">
        <div className="nav padding-global" data-frz-id="gizgos6dhl7">
          <Component_1 />
        </div>
        <main className="main-wrapper" data-frz-id="s0ooztij7qr">
          <Component_2 />
          <Component_3 />
          <Component_4 />
          <Component_5 />
          <Component_6 />
        </main>
        <section className="footer" data-frz-id="xj5oag1y5u">
          <Component_7 />
        </section>
      </div>
    </>
  );
}

export default App;
