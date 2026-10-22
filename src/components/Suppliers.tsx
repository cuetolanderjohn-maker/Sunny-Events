import React, { useState, useMemo } from 'react';
import { 
  Search, 
  CheckCircle2, 
  ExternalLink, 
  Utensils, 
  Palette, 
  Camera, 
  Mic2, 
  Cake, 
  Coffee, 
  PartyPopper, 
  Building2,
  X,
  Layers,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Supplier, SupplierCategory } from '../types';
import { SUPPLIERS_DATA } from '../data/suppliers';

interface SuppliersProps {
  onOpenInquiry: (note?: string) => void;
}

interface CategoryFilterItem {
  id: SupplierCategory;
  label: string;
  icon: React.ElementType;
}

const CATEGORY_ITEMS: CategoryFilterItem[] = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'catering', label: 'Catering', icon: Utensils },
  { id: 'styling', label: 'Styling', icon: Palette },
  { id: 'photo-video', label: 'Photo/Video', icon: Camera },
  { id: 'host-entertainment', label: 'Hosts & Shows', icon: Mic2 },
  { id: 'cakes-sweets', label: 'Cakes', icon: Cake },
  { id: 'food-carts', label: 'Food Carts', icon: Coffee },
  { id: 'activities-rentals', label: 'Activities', icon: PartyPopper },
  { id: 'venues', label: 'Venues', icon: Building2 },
];

export const Suppliers: React.FC<SuppliersProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<SupplierCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: SUPPLIERS_DATA.length };
    SUPPLIERS_DATA.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered suppliers
  const filteredSuppliers = useMemo(() => {
    return SUPPLIERS_DATA.filter((s) => {
      const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        s.name.toLowerCase().includes(q) ||
        s.specialty.toLowerCase().includes(q) ||
        (s.notes && s.notes.toLowerCase().includes(q)) ||
        s.sampleEvents.some((ev) => ev.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="suppliers" className="py-16 sm:py-20 bg-stone-50/70 border-t border-stone-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider block mb-1.5 font-mono">
            Supplier Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight leading-tight">
            Coordinated Supplier Roster
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
            Direct backstage sync with Metro Manila’s trusted caterers, stylists, photographers, magicians, and cake designers.
          </p>
        </div>

        {/* Compact Search & Category Filter Controls */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(8);
                }}
                placeholder="Search vendor or specialty..."
                className="w-full pl-9 pr-8 py-2 bg-white text-stone-900 placeholder-stone-400 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5 rounded-md"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-500 bg-white px-3 py-1.5 rounded-xl border border-stone-200/80 shadow-2xs self-start sm:self-auto">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>{filteredSuppliers.length} Verified Partners</span>
            </div>
          </div>

          {/* Compact Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
            {CATEGORY_ITEMS.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(8);
                  }}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-2xs ring-1 ring-amber-600'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-0.5 text-[10px] px-1 py-0.2 rounded-full font-sans ${
                      isActive ? 'bg-amber-700/60 text-white' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact 4-Column Suppliers Grid (Noticeably smaller scale than Parties Coordinated) */}
        {filteredSuppliers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSuppliers.slice(0, visibleCount).map((supplier) => (
                <div
                  key={supplier.id}
                  className="group rounded-xl bg-white overflow-hidden border border-stone-200/80 shadow-2xs hover:border-amber-400 hover:shadow-xs transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Compact Setup Photo */}
                    <div className="relative h-28 sm:h-32 bg-stone-100 overflow-hidden">
                      <img
                        src={supplier.imageUrl || 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80'}
                        alt={`${supplier.name} setup`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-2 inset-x-2 flex items-center justify-between gap-1 pointer-events-none">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-stone-900/80 backdrop-blur-xs text-white text-[9px] font-semibold tracking-wide uppercase">
                          {supplier.category.replace('-', ' ')}
                        </span>
                        {supplier.featured && (
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-amber-900 bg-amber-300 px-1.5 py-0.5 rounded-md shadow-2xs">
                            <CheckCircle2 className="w-2.5 h-2.5 text-amber-800" />
                            Top Pick
                          </span>
                        )}
                      </div>

                      {/* Bottom Setup Indicator */}
                      <div className="absolute bottom-1.5 left-2 text-white text-[10px] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Backstage Partner</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-3.5">
                      <h3 className="text-sm font-serif font-bold text-stone-900 group-hover:text-amber-700 transition leading-snug">
                        {supplier.name}
                      </h3>

                      <p className="mt-1 text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                        {supplier.specialty}
                      </p>

                      {/* Coordinated Events Chips (Compact) */}
                      {supplier.sampleEvents && supplier.sampleEvents.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-stone-100">
                          <div className="flex flex-wrap gap-1">
                            {supplier.sampleEvents.slice(0, 2).map((ev, i) => (
                              <span
                                key={i}
                                className="text-[9px] px-1.5 py-0.2 rounded bg-stone-50 text-stone-600 border border-stone-200/60 font-medium truncate max-w-[130px]"
                                title={ev}
                              >
                                {ev}
                              </span>
                            ))}
                            {supplier.sampleEvents.length > 2 && (
                              <span className="text-[9px] px-1 py-0.2 rounded bg-amber-50 text-amber-800 font-medium">
                                +{supplier.sampleEvents.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Compact Card Footer */}
                  <div className="px-3.5 pb-3 pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] text-stone-400">Coordinated</span>
                    <button
                      type="button"
                      onClick={() => onOpenInquiry(`I'm interested in coordinating with ${supplier.name}`)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 transition"
                    >
                      <span>Inquire</span>
                      <ExternalLink className="w-2.5 h-2.5 text-amber-700" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More / Show Less Toggle to keep section compact */}
            <div className="mt-6 flex items-center justify-center gap-3">
              {filteredSuppliers.length > visibleCount ? (
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="px-5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 text-xs font-semibold transition shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>Show More Suppliers ({filteredSuppliers.length - visibleCount} remaining)</span>
                  <ChevronDown className="w-3.5 h-3.5 text-amber-600" />
                </button>
              ) : visibleCount > 8 ? (
                <button
                  type="button"
                  onClick={() => setVisibleCount(8)}
                  className="px-5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-semibold transition shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>Collapse Supplier List</span>
                  <ChevronUp className="w-3.5 h-3.5 text-stone-500" />
                </button>
              ) : null}
            </div>
          </>
        ) : (
          /* Empty Search State */
          <div className="text-center py-12 px-4 bg-white rounded-2xl border border-stone-200/80 shadow-2xs max-w-sm mx-auto">
            <div className="w-9 h-9 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-amber-700 mb-3 ring-1 ring-amber-200">
              <Search className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-serif font-bold text-stone-900">No suppliers found</h3>
            <p className="mt-1 text-xs text-stone-500">
              No vendor matching "{searchQuery}".
            </p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-3.5 py-1.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition"
              >
                Clear filter
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
