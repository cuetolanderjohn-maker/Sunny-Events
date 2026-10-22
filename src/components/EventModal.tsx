import React, { useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Layers, 
  ExternalLink,
  ShieldCheck,
  Camera
} from 'lucide-react';
import { EventCelebration } from '../types';

interface EventModalProps {
  event: EventCelebration | null;
  isOpen: boolean;
  onClose: () => void;
  onInquireEvent: (event: EventCelebration) => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  isOpen,
  onClose,
  onInquireEvent,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden z-10 my-2 sm:my-8 flex flex-col max-h-[94vh] sm:max-h-[90vh]"
      >
        {/* Photo Banner */}
        <div className="relative h-56 sm:h-64 bg-stone-900 w-full overflow-hidden shrink-0">
          <img
            src={event.imageUrl || 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80'}
            alt={event.title}
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-stone-900/60 backdrop-blur-sm hover:bg-stone-900 transition z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Overlaid Text */}
          <div className="absolute bottom-4 inset-x-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold tracking-wide">
                {event.milestone}
              </span>
              <span className="text-xs text-stone-300 font-sans flex items-center gap-1 bg-stone-900/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                <MapPin className="w-3 h-3 text-amber-400" />
                {event.venue} • {event.locationArea}
              </span>
              <span className="text-xs text-stone-300 font-sans flex items-center gap-1 bg-stone-900/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                <Camera className="w-3 h-3 text-amber-400" />
                {event.itemCount} Photos Uploaded
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Theme & Overview */}
          <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200/60">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-1">
              Celebration Theme & Concept
            </div>
            <p className="text-base font-serif font-semibold text-stone-900">
              {event.theme || 'Custom Milestone Celebration'}
            </p>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              {event.highlightDescription}
            </p>
          </div>

          {/* Coordinated Suppliers Roll Call */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-700" />
                Coordinated Suppliers Roll-Call ({event.suppliers.length})
              </h3>
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Facebook Credit
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {event.suppliers.map((supplier, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-amber-300 transition flex flex-col justify-center"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-800 font-sans">
                    {supplier.role}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900 mt-0.5">
                    {supplier.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Facebook Link Card */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="font-semibold text-stone-900">Official Facebook Album:</div>
              <div className="text-stone-500 mt-0.5">
                Contains {event.itemCount} high-resolution photos uploaded by Sunny Events by Pam.
              </div>
            </div>
            {event.albumUrl && (
              <a
                href={event.albumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shrink-0"
              >
                <span>View Full Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition text-center"
          >
            Close
          </button>
          
          <button
            type="button"
            onClick={() => {
              onClose();
              onInquireEvent(event);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition shadow-sm shadow-amber-600/30 inline-flex items-center justify-center gap-1.5"
          >
            <span>Inquire For Similar Event</span>
          </button>
        </div>
      </div>
    </div>
  );
};
