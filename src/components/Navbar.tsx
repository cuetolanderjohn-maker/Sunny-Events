import React, { useState, useEffect } from 'react';
import { Phone, CalendarHeart, Menu, X, MessageSquare, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (servicePreset?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Celebrations', href: '#portfolio' },
    { label: 'Suppliers', href: '#suppliers' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border border-stone-200/90 py-2 px-3 sm:px-5'
            : 'bg-white/90 backdrop-blur-sm shadow-xs border border-stone-200/70 py-2.5 px-3 sm:px-5'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo & Name - strictly shrink-0 to prevent collision */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-amber-50 ring-2 ring-amber-400/50 shadow-xs shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center p-0.5">
              <img
                src="/sunny-events-logo.png"
                alt="Sunny Events by Pam Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-display font-extrabold text-stone-900 tracking-tight text-sm sm:text-base md:text-lg leading-none">
                Sunny Events
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-amber-700/90 leading-tight mt-0.5">
                by Pam • Event Coordination
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Only on xl screens (1280px+) to eliminate all tablet/laptop overlaps */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-stone-600 hover:text-amber-700 tracking-wide transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs - on large screens */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+639236599971"
              className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-amber-700 px-3 py-1.5 rounded-full hover:bg-stone-100 transition-colors whitespace-nowrap"
              title="Call or Viber Pamela"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>0923 659 9971</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenInquiry()}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-sm active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <CalendarHeart className="w-3.5 h-3.5 text-amber-400" />
              <span>Inquire With Pam</span>
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
                ↗
              </div>
            </button>
          </div>

          {/* Mobile & Tablet Controls (Screens below 1280px) */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <button
              type="button"
              onClick={() => onOpenInquiry()}
              className="px-3 py-1.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-[11px] font-bold shadow-xs active:scale-95 transition whitespace-nowrap"
            >
              Inquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center hover:bg-stone-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-xl mx-auto rounded-3xl bg-white/98 backdrop-blur-xl border border-stone-200/90 p-5 sm:p-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white ring-2 ring-amber-400/40 shrink-0 flex items-center justify-center p-0.5">
                <img
                  src="/sunny-events-logo.png"
                  alt="Sunny Events"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-bold text-stone-900 text-sm">Sunny Events by Pam</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 pb-4 border-b border-stone-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-stone-800 hover:text-amber-700 py-2.5 px-3 rounded-xl hover:bg-amber-50/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider px-1">
              Direct Contact Channels
            </div>
            <a
              href="tel:+639236599971"
              className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-800 transition"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call / Viber: 0923 659 9971</span>
              </div>
              <span className="text-[10px] text-stone-400 uppercase font-bold">Dial</span>
            </a>
            <a
              href="mailto:pamgueta@gmail.com"
              className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-800 transition"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>pamgueta@gmail.com</span>
              </div>
              <span className="text-[10px] text-stone-400 uppercase font-bold">Email</span>
            </a>
            <a
              href="https://m.me/sunnyeventsbypam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-xs font-semibold text-blue-900 transition"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Facebook Messenger</span>
              </div>
              <span className="text-blue-700 text-xs font-bold">Chat ↗</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full mt-2 py-3.5 rounded-xl bg-stone-900 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition"
            >
              <CalendarHeart className="w-4 h-4 text-amber-400" />
              <span>Plan Your Celebration With Pam</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
