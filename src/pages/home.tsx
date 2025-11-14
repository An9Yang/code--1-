import { ChevronDown } from "lucide-react";

/**
 * Home Page Component
 * 
 * Precisely replicates the hero section design from the reference image:
 * - Left sidebar navigation with bold font
 * - Center logo "Prompt Crafted" with extra bold weight
 * - Right-aligned Contact button with triangle arrow
 * - Right-aligned description text
 * - Extra large heading "AI-Driven Human" with thick underline
 * - Circular scroll indicator at bottom right
 */
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - White Background */}
      <section className="relative min-h-screen flex flex-col">
        {/* Top Navigation Bar */}
        <div className="flex items-start justify-between px-8 lg:px-16 pt-10">
          {/* Left Navigation Menu */}
          <nav className="flex flex-col gap-2">
            <a 
              href="#projects" 
              className="text-base font-bold text-black hover:opacity-60 transition-opacity"
            >
              Projects
            </a>
            <a 
              href="#services" 
              className="text-base font-bold text-black hover:opacity-60 transition-opacity"
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-base font-bold text-black hover:opacity-60 transition-opacity"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-base font-bold text-black hover:opacity-60 transition-opacity"
            >
              Contact
            </a>
          </nav>

          {/* Center Logo */}
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight">
              Prompt
            </h1>
            <p className="text-xl lg:text-2xl font-normal text-black mt-0 tracking-wide">
              Crafted
            </p>
          </div>

          {/* Top Right Contact Button */}
          <div>
            <button 
              className="text-base font-bold text-black hover:opacity-60 transition-opacity flex items-center gap-2 border-2 border-black px-5 py-2 rounded-full"
            >
              Contact
              <span className="inline-block w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-b-black border-r-[6px] border-r-transparent rotate-[-90deg]"></span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center px-8 lg:px-16 pb-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side - Large Heading */}
            <div className="lg:col-span-7">
              <div className="relative">
                <h2 className="text-[5rem] lg:text-[7rem] xl:text-[9rem] font-black leading-[0.9] text-black tracking-tighter">
                  AI-Driven Human
                </h2>
                {/* Underline decoration - positioned below "Human" */}
                <div className="absolute bottom-[-1rem] lg:bottom-[-1.5rem] right-0 w-20 lg:w-32 h-3 lg:h-4 bg-black"></div>
              </div>
            </div>

            {/* Right Side - Description Text */}
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-base lg:text-lg text-black leading-relaxed max-w-md lg:ml-auto font-normal">
                We are PromptCrafted Studio, an AI Prompt Engineer with a Copywriter's soul. I blend strategic language with powerful AI tools to deliver copy that connects, converts, and resonates.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 right-10 lg:right-16">
          <button 
            className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-full hover:bg-black hover:text-white transition-all group"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 group-hover:text-white" />
          </button>
        </div>
      </section>
    </div>
  );
}
