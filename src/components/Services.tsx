import React, { useState } from 'react';
import { 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Cookie, 
  Armchair
} from 'lucide-react';

interface ServicesProps {
  onOpenInquiry: (servicePreset?: string) => void;
}

interface ServiceCard {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  recommendedFor: string;
  popular?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('event-coordination');

  const services: ServiceCard[] = [
    {
      id: 'event-coordination',
      title: 'Event Coordination',
      shortTitle: 'Coordination',
      badge: 'Flagship Service • On-the-Day',
      icon: Clock,
      popular: true,
      description: 
        'Pamela and her dedicated squad take complete on-site command of your celebration. We manage supplier call-times, stage ingress, program cueing, and guest ushering so you celebrate worry-free as a guest.',
      deliverables: [
        'Master timeline & cue-by-minute execution',
        'Full supplier sync (caterer, stylist, photo/video, host)',
        'Guest reception desk, ushering & check-in',
        'Stage pacing: grand entrance, games & candle blowing',
        'End-of-event item turnover & prize handover'
      ],
      recommendedFor: '1st & 7th Birthdays, Baptisms & Milestones'
    },
    {
      id: 'dandd-delights',
      title: 'D&D Delights',
      shortTitle: 'D&D Delights',
      badge: 'Sister Venture • Handcrafted',
      icon: Cookie,
      popular: false,
      description: 
        'Brought to you by Sunny Events’ sister venture, D&D Delights (Dennis & Dean Delights). Handcrafted custom fondant sugar cookies and interactive DIY cookie painting kits that double as activities and souvenirs.',
      deliverables: [
        'Custom theme-sculpted royal icing sugar cookies',
        'Kids DIY cookie painting kits with edible palettes',
        'Specialized dessert table setup & favor packaging',
        'Personalized VIP, Ninong & Ninang gift boxes',
        'Freshly baked with certified kid-safe ingredients'
      ],
      recommendedFor: 'Kids Activity Corners & Edible Souvenirs'
    },
    {
      id: 'children-seat-rent',
      title: 'Children Seat Rent',
      shortTitle: 'Seat Rent',
      badge: 'Event Rentals • Kiddie Furniture',
      icon: Armchair,
      popular: false,
      description: 
        'Clean, sanitized, child-proportioned tables and chairs tailored for children’s parties and play corners. Provides young guests with a comfortable, picture-perfect dining and craft space of their own.',
      deliverables: [
        'Sanitized kid-sized chairs and activity tables',
        'Color-coordinated styling matching party theme',
        'Prompt on-site delivery, arrangement & teardown',
        'Sturdy, child-safe design with rounded safety edges',
        'Flexible packages for homes or large clubhouses'
      ],
      recommendedFor: 'Kiddie Birthday Parties & Play Corners'
    }
  ];

  const currentMobileService = services.find((s) => s.id === activeTab) || services[0];
  const MobileIcon = currentMobileService.icon;

  return (
    <section id="services" className="py-14 sm:py-20 md:py-24 px-4 bg-stone-50/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header - Clean Editorial */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider block mb-2 font-mono">
            Core Offerings
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
            Services Offered by Sunny Events
          </h2>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< md): Sleek Interactive Tab Switcher */}
        {/* ============================================================== */}
        <div className="md:hidden">
          {/* Segmented Tab Pill Selector */}
          <div className="flex items-center p-1 rounded-2xl bg-stone-200/70 border border-stone-300/60 mb-4 max-w-sm mx-auto shadow-2xs">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(service.id)}
                  className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{service.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Single Mobile Card - Super Compact & Fast */}
          <div
            key={currentMobileService.id}
            className={`rounded-2xl bg-white p-4 sm:p-5 border transition-all duration-300 shadow-xs ${
              currentMobileService.popular
                ? 'border-amber-400 ring-2 ring-amber-400/30'
                : 'border-stone-200/80'
            }`}
          >
            {/* Header row: Icon, Title & Badge */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  currentMobileService.popular ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-amber-50 text-amber-700'
                }`}>
                  <MobileIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-stone-900 leading-tight">
                    {currentMobileService.title}
                  </h3>
                  <span className="text-[10px] text-amber-800 font-semibold block mt-0.5">
                    {currentMobileService.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              {currentMobileService.description}
            </p>

            {/* Compact Deliverables */}
            <div className="pt-2.5 pb-3 border-t border-stone-100">
              <div className="text-[9px] uppercase font-bold tracking-wider text-stone-400 mb-1.5">
                What’s Included:
              </div>
              <ul className="space-y-1.5">
                {currentMobileService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div className="pt-2.5 border-t border-stone-100 flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenInquiry(`I would like to inquire about ${currentMobileService.title}.`)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95 ${
                  currentMobileService.popular
                    ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80'
                }`}
              >
                <span>Inquire About {currentMobileService.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (md:): Compact 3-Column Grid */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group rounded-2xl bg-white p-5 border flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md ${
                  service.popular
                    ? 'border-amber-400 ring-2 ring-amber-400/30'
                    : 'border-stone-200/80 hover:border-amber-300'
                }`}
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      service.popular ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-amber-50 text-amber-700'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      service.popular ? 'bg-amber-100 text-amber-900 font-extrabold ring-1 ring-amber-300' : 'bg-stone-100 text-stone-700'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg lg:text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-1.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mb-4 pt-3 border-t border-stone-100">
                    <div className="text-[9px] uppercase font-bold tracking-wider text-stone-400 mb-1.5">
                      What’s Included:
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended For & Action */}
                <div className="pt-3 border-t border-stone-100">
                  <div className="text-[10px] text-stone-500 mb-2.5 truncate">
                    <strong className="text-stone-800">Best For: </strong>
                    <span>{service.recommendedFor}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenInquiry(`I would like to inquire about ${service.title}.`)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95 ${
                      service.popular
                        ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-2xs'
                        : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80'
                    }`}
                  >
                    <span>Inquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Package Banner */}
        <div className="mt-8 sm:mt-10 rounded-2xl p-1 bg-stone-900/[0.03] ring-1 ring-stone-900/5">
          <div className="rounded-xl bg-white p-4 sm:p-5 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 ring-1 ring-amber-300">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-serif font-bold text-stone-900">
                  Custom Event Bundles Available
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-500 font-sans leading-tight mt-0.5">
                  Combine Coordination with D&D Delights and Children's Seating for an all-in-one celebration package.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenInquiry('I want a custom package combining Event Coordination, D&D Delights, and Children Seat Rent.')}
              className="w-full sm:w-auto whitespace-nowrap px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition shadow-2xs shrink-0 text-center"
            >
              Get Custom Package
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
