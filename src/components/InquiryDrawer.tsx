import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Send, 
  Mail, 
  MessageCircle, 
  Phone, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Cookie,
  Armchair,
  Clock,
  Copy,
  Check,
  ExternalLink,
  Loader2,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

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
  initialEventType = '1st Birthday & Dedication'
}) => {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(initialEventType);
  const [eventDate, setEventDate] = useState('');
  const [venueLocation, setVenueLocation] = useState('');
  const [guestCount, setGuestCount] = useState('80-120 guests');
  const [services, setServices] = useState<string[]>([
    'Event Coordination'
  ]);
  const [notes, setNotes] = useState(initialNote);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync initial props when opened
  useEffect(() => {
    if (initialNote) setNotes(initialNote);
    if (initialEventType) setEventType(initialEventType);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [initialNote, initialEventType, isOpen]);

  // Handle service toggle
  const toggleService = (srv: string) => {
    setServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  // Formatted message text
  const formattedMessage = useMemo(() => {
    return (
      `Hi Pamela,\n\nI would love to inquire about event coordination with Sunny Events by Pam!\n\n` +
      `CELEBRATION DETAILS:\n` +
      `• Celebrant / Client: ${name || 'Not provided'}\n` +
      `• Event Type: ${eventType}\n` +
      `• Target Date: ${eventDate || 'Pending finalization'}\n` +
      `• Target Venue / City: ${venueLocation || 'Metro Manila'}\n` +
      `• Estimated Guest Count: ${guestCount}\n` +
      `• Services Desired: ${services.join(', ') || 'Event Coordination'}\n` +
      `• Contact Phone / Viber: ${phone || 'Not provided'}\n` +
      `• Contact Email: ${email || 'Not provided'}\n\n` +
      `EVENT VISION & NOTES:\n` +
      `${notes || 'None specified'}\n\n` +
      `Looking forward to hearing from you and planning a sunny celebration together!\n`
    );
  }, [name, eventType, eventDate, venueLocation, guestCount, services, phone, email, notes]);

  const emailSubject = `[Inquiry] ${eventType} - ${name || 'Celebration'}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=pamgueta@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(formattedMessage)}`;
  const mailtoUrl = `mailto:pamgueta@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(formattedMessage)}`;

  // Handle Form Submission
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback gracefully if canvas fails
    }

    const payload = {
      _subject: `New Event Inquiry: ${eventType} - ${name || 'Client'}`,
      _replyto: email,
      _template: 'table',
      'Client Name': name,
      'Contact Phone / Viber': phone,
      'Client Email': email,
      'Celebration Type': eventType,
      'Target Event Date': eventDate || 'TBD / Pending',
      'Target Venue / Location': venueLocation || 'Metro Manila',
      'Estimated Guests': guestCount,
      'Services Desired': services.join(', ') || 'Event Coordination',
      'Event Vision & Notes': notes || 'None specified'
    };

    try {
      await fetch('https://formsubmit.co/ajax/pamgueta@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('FormSubmit background dispatch note:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleCopyDetails = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard fallback
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-xl bg-white shadow-2xl flex flex-col border-l border-stone-200">
          
          {/* Drawer Header */}
          <div className="bg-stone-900 text-white p-6 flex items-start justify-between gap-4 shrink-0">
            <div>
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider block mb-1 font-mono">
                Direct Inquiry Hub
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Plan Your Celebration With Pam
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-sans">
                Get a customized quote and timeline assessment directly from founder Pamela Gueta-Tanael.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Direct Contact Pills */}
          <div className="bg-stone-100 p-3 sm:p-4 border-b border-stone-200 flex flex-wrap items-center gap-2 text-xs shrink-0">
            <a
              href="mailto:pamgueta@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-stone-800 font-medium hover:bg-amber-50 border border-stone-200 shadow-2xs transition"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>pamgueta@gmail.com</span>
            </a>
            <a
              href="https://m.me/sunnyeventsbypam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 border border-blue-200 shadow-2xs transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Facebook Messenger</span>
            </a>
            <a
              href="tel:+639236599971"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-stone-800 font-medium hover:bg-stone-50 border border-stone-200 shadow-2xs transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>+63 923 659 9971</span>
            </a>
          </div>

          {/* Success Hub State */}
          {submitted ? (
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-emerald-50 via-white to-stone-50 border border-emerald-200/90 shadow-xs">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 ring-4 ring-emerald-50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Inquiry Dispatched to Pamela!
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been submitted for <strong className="text-stone-900">pamgueta@gmail.com</strong>. 
                  To ensure instant delivery across your preferred app, you can also launch one of the channels below with all details pre-filled:
                </p>
              </div>

              {/* Direct Multi-Channel Dispatch Buttons */}
              <div className="space-y-3">
                {/* 1. Gmail Web */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm transition shadow-sm flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white shrink-0" />
                    <div className="text-left">
                      <span className="block font-bold">Open & Send in Gmail (Web)</span>
                      <span className="block text-[11px] text-red-100 font-normal">Pre-filled and ready to send directly in your browser</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-red-200 group-hover:translate-x-0.5 transition shrink-0" />
                </a>

                {/* 2. Default Email App */}
                <a
                  href={mailtoUrl}
                  className="w-full p-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition shadow-sm flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                    <div className="text-left">
                      <span className="block font-bold">Open in Default Mail Client</span>
                      <span className="block text-[11px] text-stone-300 font-normal">Apple Mail, Outlook, or smartphone email app</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition shrink-0" />
                </a>

                {/* 3. Facebook Messenger */}
                <a
                  href="https://m.me/sunnyeventsbypam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-xl bg-[#0084FF] hover:bg-[#0074E0] text-white font-semibold text-xs sm:text-sm transition shadow-sm flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-white shrink-0" />
                    <div className="text-left">
                      <span className="block font-bold">Chat with Pam on Messenger</span>
                      <span className="block text-[11px] text-blue-100 font-normal">Direct Facebook Messenger chat with Pamela Gueta</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition shrink-0" />
                </a>

                {/* 4. Copy to Clipboard */}
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="w-full p-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition border border-stone-200 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Inquiry Details Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-600" />
                      <span>Copy Full Inquiry Details (for Viber / WhatsApp / SMS)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formatted Message Summary Card */}
              <div className="rounded-xl p-4 bg-stone-50 border border-stone-200">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Inquiry Summary Sent to Pamela
                </div>
                <pre className="text-xs text-stone-700 font-mono whitespace-pre-wrap leading-relaxed max-h-44 overflow-y-auto bg-white p-3 rounded-lg border border-stone-200/60">
                  {formattedMessage}
                </pre>
              </div>

              {/* Edit Details or Reset */}
              <div className="pt-2 pb-6 text-center">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 underline font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Edit details or submit another inquiry</span>
                </button>
              </div>

            </div>
          ) : (
            /* Active Form Body */
            <form onSubmit={handleSubmitForm} className="flex-1 overflow-y-auto p-6 space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maria Santos"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Phone / Viber Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0917 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. maria@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                />
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Celebration Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                  >
                    <option value="1st Birthday & Dedication">1st Birthday & Dedication</option>
                    <option value="7th Birthday Milestone">7th Birthday Milestone</option>
                    <option value="Themed Kiddie Party">Themed Kiddie Party</option>
                    <option value="Christening & Baby Dedication">Christening & Baby Dedication</option>
                    <option value="Wedding & Reception">Wedding & Reception</option>
                    <option value="Adult Birthday / Jubilee">Adult Birthday / Jubilee (60th / 70th / 80th)</option>
                    <option value="Debut (18th Birthday)">Debut (18th Birthday)</option>
                    <option value="Corporate Event / Family Day">Corporate Event / Family Day</option>
                    <option value="Other Custom Milestone">Other Custom Milestone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Target Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                  />
                </div>
              </div>

              {/* Venue & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Target Venue / City
                  </label>
                  <input
                    type="text"
                    value={venueLocation}
                    onChange={(e) => setVenueLocation(e.target.value)}
                    placeholder="e.g. Valle Verde Clubhouse, BGC"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                  >
                    <option value="Intimate (Under 50 guests)">Intimate (Under 50 guests)</option>
                    <option value="50-100 guests">50 - 100 guests</option>
                    <option value="100-200 guests">100 - 200 guests</option>
                    <option value="200-350 guests">200 - 350 guests</option>
                    <option value="Grand (350+ guests)">Grand (350+ guests)</option>
                  </select>
                </div>
              </div>

              {/* 3 Streamlined Services Checklist */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Services You Need
                </label>
                <div className="space-y-2">
                  {[
                    {
                      title: 'Event Coordination',
                      desc: 'Full on-site team handling timeline, cueing suppliers, running program flow, and managing guest reception.',
                      icon: Clock
                    },
                    {
                      title: 'D&D Delights (Dennis & Dean)',
                      desc: 'Handcrafted custom theme fondant sugar cookies and interactive kids DIY cookie decorating craft kits.',
                      icon: Cookie
                    },
                    {
                      title: 'Children Seat Rent',
                      desc: 'Clean, sanitized, child-proportioned tables and chairs with on-site delivery, arrangement, and teardown.',
                      icon: Armchair
                    }
                  ].map((srv, idx) => {
                    const isChecked = services.includes(srv.title);
                    const SrvIcon = srv.icon;
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleService(srv.title)}
                        className={`p-3 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                          isChecked
                            ? 'bg-amber-50/70 border-amber-400 ring-1 ring-amber-400/30'
                            : 'bg-stone-50 border-stone-200 hover:bg-stone-100/70'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent onClick
                          className="mt-1 rounded text-amber-600 focus:ring-amber-500"
                        />
                        <div className="text-xs flex-1">
                          <div className="flex items-center gap-1.5">
                            <SrvIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span className="font-semibold text-stone-900">{srv.title}</span>
                          </div>
                          <span className="text-stone-500 block mt-0.5">{srv.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notes / Coordinated Suppliers */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Event Vision, Coordinated Suppliers or Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell Pam about your celebrant, theme ideas, already-booked suppliers, or specific questions..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-70 text-white font-semibold text-sm transition shadow-md shadow-amber-600/30 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Inquiry to Pam...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                      <span>Send Inquiry to Pam (pamgueta@gmail.com)</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="https://m.me/sunnyeventsbypam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-3 rounded-xl bg-[#0084FF] hover:bg-[#0074E0] text-white font-semibold text-xs sm:text-sm text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on Messenger</span>
                  </a>

                  <a
                    href="tel:+639236599971"
                    className="flex-1 py-3 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm text-center transition flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call 0923 659 9971</span>
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-stone-400 text-center pb-4">
                Sunny Events respects your privacy. Inquiries are delivered directly to Pamela Gueta-Tanael.
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
