import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (servicePreset?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 px-4 overflow-hidden">
      {/* Background warm radial wash */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] md:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-b from-amber-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Grand Brand Sunflower Logo Medallion */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center relative animate-in fade-in zoom-in-95 duration-500">
          {/* Ambient Glow Halo */}
          <div className="absolute inset-0 bg-amber-400/25 rounded-full blur-2xl scale-125 pointer-events-none -z-10" />
          
          <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden bg-white ring-4 sm:ring-[7px] ring-amber-400/60 shadow-2xl shadow-amber-500/25 hover:scale-105 transition-transform duration-300 flex items-center justify-center p-2 sm:p-3">
            <img
              src="/sunny-events-logo.png"
              alt="Sunny Events by Pam Official Logo"
              className="w-full h-full object-contain drop-shadow-xs"
            />
          </div>
        </div>

        {/* Display H1 - Strict 2 lines max on desktop with wide container */}
        <h1 className="font-display text-2.5xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-stone-900 tracking-tight leading-[1.14] sm:leading-[1.08] max-w-4xl mx-auto mb-8 sm:mb-10 px-1">
          Worry No More. Celebrate Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800">Guest on Your Own Event.</span>
        </h1>

        {/* High-Contrast Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={() => onOpenInquiry('I would like to inquire about Event Coordination for an upcoming celebration.')}
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm shadow-md active:scale-[0.98] transition-all min-h-[50px]"
          >
            <span>Plan Your Celebration With Pam</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </div>
          </button>

          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-stone-50 border border-stone-200/90 text-stone-800 font-semibold text-xs sm:text-sm shadow-xs hover:border-amber-400 transition-all min-h-[50px]"
          >
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>Explore 53 Documented Parties</span>
          </a>
        </div>

      </div>
    </section>
  );
};
