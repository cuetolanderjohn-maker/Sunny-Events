import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  MessageCircle, 
  Phone, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote?: string;
  initialEventType?: string;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialNote = '',
  initialEventType = ''
}) => {
  const [copiedNote, setCopiedNote] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const subjectText = initialEventType 
    ? `Inquiry: ${initialEventType} - Sunny Events by Pam` 
    : 'Inquiry for Sunny Events by Pam';

  const bodyText = initialNote 
    ? `Hi Pamela,\n\n${initialNote}\n\nI would love to inquire about availability and details for an upcoming celebration.\n\nThank you!` 
    : 'Hi Pamela,\n\nI would love to inquire about event coordination with Sunny Events by Pam for an upcoming celebration.\n\nThank you!';

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=pamgueta@gmail.com&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  const mailtoUrl = `mailto:pamgueta@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

  const handleCopyNote = async () => {
    try {
      await navigator.clipboard.writeText(bodyText);
      setCopiedNote(true);
      setTimeout(() => setCopiedNote(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText('09236599971');
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('pamgueta@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-xl bg-[#FAFAF8] shadow-2xl flex flex-col border-l border-stone-200">
          
          {/* Header */}
          <div className="bg-stone-900 text-white p-6 sm:p-7 shrink-0 border-b border-stone-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1.5 font-mono">
                  Direct Reach-Out
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  Connect With Pamela
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  Founder & Lead Coordinator • Sunny Events by Pam
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition"
                aria-label="Close reach-out drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body - Scrollable Links */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4">

            {/* Preset Inquiry Note Callout (if opened with specific interest) */}
            {initialNote && (
              <div className="rounded-2xl bg-amber-50/80 p-4 sm:p-5 border border-amber-200/90 shadow-2xs">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 font-mono">
                    Selected Topic / Peg
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyNote}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 transition"
                  >
                    {copiedNote ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy message</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed italic font-serif">
                  "{initialNote}"
                </p>
                <p className="mt-2 text-[11px] text-stone-500 font-sans">
                  Tap any channel below to message Pamela directly with this inquiry.
                </p>
              </div>
            )}

            {/* Channel 1: Facebook Messenger (Fastest Response) */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-stone-200/90 shadow-2xs hover:border-blue-400 transition-all duration-200 group">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 ring-1 ring-blue-100 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-tight">
                      Facebook Messenger
                    </h3>
                    <span className="text-[11px] font-semibold text-blue-700 block mt-0.5">
                      Fastest Response • Direct with Pamela Gueta
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                  Recommended
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-4 font-sans">
                Chat directly with Pamela on Messenger. Ideal for quick date availability inquiries, rates, and sharing photo pegs.
              </p>

              <a
                href="https://m.me/sunnyeventsbypam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#0084FF] hover:bg-[#0074E0] text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]"
              >
                <span>Chat on Messenger</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Channel 2: Email pamgueta@gmail.com */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-all duration-200 group">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 ring-1 ring-amber-200/60 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-tight">
                      Email Pamela Directly
                    </h3>
                    <span className="text-[11px] font-semibold text-amber-800 block mt-0.5 font-mono">
                      pamgueta@gmail.com
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100 transition shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-4 font-sans">
                Best for sending formal coordination briefs, supplier contracts, detailed venue layouts, and program timelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-2xs text-center"
                >
                  <span>Open in Gmail (Web)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={mailtoUrl}
                  className="py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-2xs text-center"
                >
                  <span>Default Mail App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Channel 3: Phone / Viber */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-stone-200/90 shadow-2xs hover:border-emerald-400 transition-all duration-200 group">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 ring-1 ring-emerald-200/60 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-tight">
                      Call / Viber / SMS
                    </h3>
                    <span className="text-[11px] font-semibold text-emerald-800 block mt-0.5 font-mono">
                      0923 659 9971
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100 transition shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-4 font-sans">
                Direct phone consultation with Pamela for timeline sync, venue coordination questions, and urgent event inquiries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="tel:+639236599971"
                  className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-2xs text-center"
                >
                  <span>Call: 0923 659 9971</span>
                </a>

                <a
                  href="viber://chat?number=%2B639236599971"
                  className="py-2.5 px-3 rounded-xl bg-[#7360F2] hover:bg-[#6250e0] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-2xs text-center"
                >
                  <span>Message on Viber</span>
                </a>
              </div>
            </div>

            {/* Channel 4: Official Facebook Page & Albums */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-all duration-200 group">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center shrink-0 ring-1 ring-stone-200 group-hover:scale-105 transition-transform">
                    <FacebookIcon className="w-5 h-5 text-stone-900" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-tight">
                      Official Facebook Page
                    </h3>
                    <span className="text-[11px] font-semibold text-stone-600 block mt-0.5">
                      facebook.com/sunnyeventsbypam
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-4 font-sans">
                Explore 53+ documented celebration albums, behind-the-scenes moments, client reviews, and supplier partner tags.
              </p>

              <a
                href="https://www.facebook.com/sunnyeventsbypam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>Visit Official Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 bg-white border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 shrink-0 font-sans">
            <div>
              <span>Pamela Gueta-Tanael • Sunny Events</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-stone-700 hover:bg-stone-100 font-semibold transition"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
