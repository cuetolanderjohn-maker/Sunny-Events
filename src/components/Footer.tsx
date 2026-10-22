import React from 'react';
import { 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Cookie,
  ArrowUp,
  ShieldCheck
} from 'lucide-react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface FooterProps {
  onOpenInquiry?: (note?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 pt-14 pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-stone-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white ring-2 ring-amber-400/50 shrink-0 flex items-center justify-center p-0.5">
                <img
                  src="/sunny-events-logo.png"
                  alt="Sunny Events by Pam Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-white block">
                  Sunny Events <span className="font-sans text-xs text-amber-400 font-medium">by Pam</span>
                </span>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block">
                  Event & OTD Coordination
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Founded by <strong className="text-stone-200">Pamela Gueta-Tanael</strong>. 
              Dedicated to orchestrating joyful, seamless milestone celebrations with flawless backstage execution.
            </p>

            <div className="pt-2">
              <a
                href="https://www.facebook.com/sunnyeventsbypam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 border border-blue-500/20 text-xs transition"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400" />
                <span>facebook.com/sunnyeventsbypam</span>
              </a>
            </div>
          </div>

          {/* Col 2: The People Behind It */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              The People Behind Sunny Events
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Pamela Gueta-Tanael</strong>
                  <span className="text-stone-400">Founder, Lead Coordinator & Timeline Director</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Cookie className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">D&D Delights (Dennis & Dean)</strong>
                  <span className="text-stone-400">Sister venture: Handcrafted sugar cookies & kids party kits</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">On-Site Event Squad</strong>
                  <span className="text-stone-400">Dedicated 3-to-4 member crew handling stage, guest desk & logistics</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Reach Out */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Direct Contact Details
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <a
                  href="mailto:pamgueta@gmail.com"
                  className="flex items-center gap-2 text-stone-300 hover:text-white transition group"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition" />
                  <span className="underline decoration-stone-600 underline-offset-2">pamgueta@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sunnyeventsbypam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-300 hover:text-white transition group"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition" />
                  <span className="underline decoration-stone-600 underline-offset-2">facebook.com/sunnyeventsbypam</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+639236599971"
                  className="flex items-center gap-2 text-stone-300 hover:text-white transition group"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition" />
                  <span>+63 923 659 9971</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Pasig City, Metro Manila, Philippines</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Inquiry */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#services" className="hover:text-amber-400 transition">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition">
                  Celebration Portfolio ({53} Events)
                </a>
              </li>
              <li>
                <a href="#suppliers" className="hover:text-amber-400 transition">
                  Supplier Directory
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition">
                  Verified Reviews
                </a>
              </li>
            </ul>
            {onOpenInquiry && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenInquiry()}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-sm transition active:scale-95 text-center"
                >
                  Inquire With Pamela
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Sunny Events by Pam. Founded by Pamela Gueta-Tanael. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
