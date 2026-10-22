import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Layers, 
  ArrowRight, 
  Award,
  Camera,
  ExternalLink,
  Search,
  X,
  CheckCircle2
} from 'lucide-react';
import { EventCelebration, PartyTypeCategory } from '../types';
import { EVENTS_DATA } from '../data/events';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface PortfolioProps {
  onOpenEventModal: (event: EventCelebration) => void;
  onOpenInquiry: (note?: string) => void;
}

interface FilterTab {
  id: PartyTypeCategory | 'all';
  label: string;
}

const FILTER_TABS: FilterTab[] = [
  { id: 'all', label: 'All Celebrations' },
  { id: '1st-birthday', label: '1st Birthdays' },
  { id: '7th-birthday', label: '7th Birthdays' },
  { id: 'baptism-dedication', label: 'Dedications & Baptisms' },
  { id: 'kids-party', label: 'Kiddie Themes' },
  { id: 'adult-milestone', label: 'Adult Jubilees' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate Events' },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenEventModal, onOpenInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<PartyTypeCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((ev) => {
      const matchesFilter = activeFilter === 'all' || ev.category === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesFilter;

      const matchesSearch =
        ev.title.toLowerCase().includes(q) ||
        ev.celebrant.toLowerCase().includes(q) ||
        ev.venue.toLowerCase().includes(q) ||
        (ev.theme && ev.theme.toLowerCase().includes(q)) ||
        ev.suppliers.some((s) => s.name.toLowerCase().includes(q) || s.role.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Handle fallback image if a specific Facebook link expires or fails
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, category: string) => {
    const target = e.currentTarget;
    if (category === '7th-birthday') {
      target.src = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80';
    } else if (category === '1st-birthday') {
      target.src = 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80';
    } else if (category === 'baptism-dedication') {
      target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';
    } else if (category === 'wedding') {
      target.src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80';
    } else {
      target.src = 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80';
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-stone-100/60 border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider block mb-2 font-mono">
            Celebration Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            All Celebrations Coordinated by Sunny Events
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed font-sans">
            Transparency is at the heart of what we do. Below is the complete archive of <strong>{EVENTS_DATA.length} documented celebrations</strong>, 
            featuring authentic Facebook album cover photos, photo counts, dates, venues, and full supplier roll-calls.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search celebrant, milestone, venue, or theme..."
                className="w-full pl-10 pr-10 py-2.5 bg-white text-stone-900 placeholder-stone-400 text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-stone-600 bg-white/90 px-3.5 py-2 rounded-xl border border-stone-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Showing {filteredEvents.length} of {EVENTS_DATA.length} Documented Events</span>
            </div>
          </div>

          {/* Filter Pills with Edge-Bleeding Mobile Swipe */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              const count = tab.id === 'all' 
                ? EVENTS_DATA.length 
                : EVENTS_DATA.filter((e) => e.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setVisibleCount(12);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-sm ring-1 ring-stone-900'
                      : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200/80'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                      isActive ? 'bg-stone-700 text-stone-200' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Events Grid - Clean Single-Layer Agency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.slice(0, visibleCount).map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl bg-white overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-lg hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Container */}
                <div className="relative h-52 sm:h-56 bg-stone-100 overflow-hidden">
                  <img
                    src={event.imageUrl || 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80'}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, event.category)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-stone-900/85 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide ring-1 ring-white/20">
                      {event.milestone}
                    </span>
                    {event.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 bg-amber-300 px-2.5 py-0.5 rounded-md shadow-xs">
                        <Award className="w-3 h-3 text-amber-800" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Bottom Floating Stats */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5 bg-stone-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px]">
                      <Camera className="w-3 h-3 text-amber-400" />
                      <span>{event.itemCount} Photos Uploaded</span>
                    </div>
                    {event.albumUrl && (
                      <a
                        href={event.albumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] bg-blue-600/90 hover:bg-blue-600 px-2 py-1 rounded-md text-white font-medium transition shadow-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Album</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-800 transition leading-snug">
                    {event.title}
                  </h3>

                  {/* Venue & Location */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-stone-500 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{event.venue} • {event.locationArea}</span>
                  </div>

                  {/* Theme Chip */}
                  {event.theme && (
                    <div className="mt-2.5">
                      <span className="inline-block text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md">
                        Theme: <span className="text-stone-900 font-semibold">{event.theme}</span>
                      </span>
                    </div>
                  )}

                  {/* Highlight Excerpt */}
                  <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {event.highlightDescription}
                  </p>
                </div>
              </div>

              {/* Footer with Supplier Count & Modal Trigger */}
              <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-stone-500 font-medium">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span>{event.suppliers.length} Coordinated Vendors</span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenEventModal(event)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-900 transition"
                >
                  <span>View Roll-Call</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button if more events exist */}
        {filteredEvents.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition shadow-sm inline-flex items-center gap-2"
            >
              <span>Load More Celebrations ({filteredEvents.length - visibleCount} remaining)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200/80 shadow-xs max-w-lg mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-amber-700 mb-4 ring-1 ring-amber-200">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">No celebrations found</h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-500">
              We couldn't find any celebration matching "{searchQuery}".
            </p>
            <div className="mt-5">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-xl hover:bg-stone-800 transition"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* Facebook Page Live Callout - Clean Single-Layer Card */}
        <div className="mt-14 sm:mt-16 rounded-2xl bg-white p-6 sm:p-8 border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 ring-1 ring-blue-200">
              <FacebookIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                800+ Celebration Photos & Video Highlights on Facebook
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 font-sans">
                Every celebration is fully documented on the official Facebook page with original albums, supplier tags, and behind-the-scenes moments.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="https://www.facebook.com/sunnyeventsbypam/photos_albums"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs sm:text-sm font-semibold hover:bg-stone-800 transition"
            >
              <span>Browse Facebook Albums</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => onOpenInquiry('I want to check date availability for my upcoming milestone celebration.')}
              className="flex-1 md:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-600 text-white text-xs sm:text-sm font-semibold hover:bg-amber-500 transition shadow-sm"
            >
              Book Date With Pam
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
