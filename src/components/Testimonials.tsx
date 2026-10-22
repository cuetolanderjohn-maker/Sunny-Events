import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Heart, 
  Globe, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-50/70 border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider block mb-2 font-mono">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            Words From Our Sunny Families
          </h2>
        </div>

        {/* Minimalist Editorial Stat Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 border-y border-stone-200/80 mb-10">
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-display font-black text-stone-900">5.0 / 5.0</div>
            <div className="text-xs text-stone-500 mt-0.5">Perfect Facebook Rating</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-display font-black text-amber-600">100%</div>
            <div className="text-xs text-stone-500 mt-0.5">Client Recommendation</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-display font-black text-stone-900">8+ Years</div>
            <div className="text-xs text-stone-500 mt-0.5">Continuous Coordination</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-display font-black text-stone-900">Global</div>
            <div className="text-xs text-stone-500 mt-0.5">Overseas Parents Welcomed</div>
          </div>
        </div>

        {/* Featured Spotlight: Kristel's Overseas Story */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 p-6 sm:p-8 border border-amber-200/80 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-white text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              Featured Story • Overseas Client (2 Months Prep)
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>

          <Quote className="w-8 h-8 text-amber-600/30 mb-2" />
          
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-serif italic mb-6">
            "We are based overseas and decided to celebrate my daughter's bday party in the Philippines with just 2 months left to prepare. 
            <span className="font-semibold text-stone-950 not-italic"> Pam saved my sanity during those 2 months. </span>
            Kung wala ang expert advise niya and yung professional handling of everything up to the littlest of details na hindi ko na naiisip, baka kung ano nangyari sa event namin. 
            Pam knew right away to tell us the suppliers to prioritize booking and those we can do later on... 
            Sis Pam is literally just a message away and sobrang bilis niya magreply. Thank you sis Pam and the whole team for being so organized up to the end of the event. 
            <span className="font-semibold text-stone-950 not-italic"> Na-enjoy ko ang party because you guys made sure everything will go smoothly. Book them na for your next event!</span>"
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-amber-200/50">
            <div>
              <h4 className="text-sm font-serif font-bold text-stone-900">Kristel Dianne Ramos-Santiago</h4>
              <p className="text-xs text-stone-500">Mother of Celebrant • March 30 Milestone</p>
            </div>
            <a
              href="https://www.facebook.com/sunnyeventsbypam/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-800 hover:text-amber-950 font-semibold inline-flex items-center gap-1"
            >
              <span>Read verified on Facebook</span>
              <ExternalLink className="w-3 h-3 text-amber-700" />
            </a>
          </div>
        </div>

        {/* Grid of Other Verbatim Reviews - Clean Single Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.slice(1).map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-5 sm:p-6 border border-stone-200/80 shadow-xs hover:border-amber-400 hover:shadow-sm transition flex flex-col justify-between"
            >
              <div>
                {/* Rating & Highlight Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-amber-900 bg-amber-100/60 px-2.5 py-0.5 rounded-md">
                    {item.highlightTag}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans mb-4">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-bold text-stone-900">{item.clientName}</h4>
                  <p className="text-[11px] text-stone-500">{item.relationship} • {item.event}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
