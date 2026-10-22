import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Suppliers } from './components/Suppliers';
import { Portfolio } from './components/Portfolio';
import { EventModal } from './components/EventModal';
import { Testimonials } from './components/Testimonials';
import { InquiryDrawer } from './components/InquiryDrawer';
import { Footer } from './components/Footer';
import { EventCelebration } from './types';

export default function App() {
  // Inquiry Drawer State
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryNote, setInquiryNote] = useState('');
  const [inquiryEventType, setInquiryEventType] = useState('1st Birthday & Dedication');

  // Event Detail Modal State
  const [selectedEvent, setSelectedEvent] = useState<EventCelebration | null>(null);
  const [eventModalOpen, setEventModalOpen] = useState(false);

  // Open Inquiry with optional preset note
  const handleOpenInquiry = (preset?: string, eventType?: string) => {
    setInquiryNote(preset || '');
    if (eventType) {
      setInquiryEventType(eventType);
    }
    setInquiryOpen(true);
  };

  // Open Event Modal
  const handleOpenEventModal = (event: EventCelebration) => {
    setSelectedEvent(event);
    setEventModalOpen(true);
  };

  // Close Event Modal
  const handleCloseEventModal = () => {
    setEventModalOpen(false);
    setSelectedEvent(null);
  };

  // User clicked "Inquire For Similar Event" from EventModal
  const handleInquireFromEvent = (event: EventCelebration) => {
    handleOpenInquiry(
      `I'm interested in coordinating a celebration similar to "${event.title}" held at ${event.venue} (${event.theme || 'Custom theme'}).`,
      event.milestone
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#181512] font-sans antialiased selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden flex flex-col">
      {/* Floating Island Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Chapters */}
      <main className="flex-1">
        {/* Chapter 1: Hero */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Chapter 2: Services & Capabilities */}
        <Services onOpenInquiry={handleOpenInquiry} />

        {/* Chapter 3: Coordinated Suppliers Directory */}
        <Suppliers onOpenInquiry={handleOpenInquiry} />

        {/* Chapter 4: Real Celebrations & Facebook Photo Archives */}
        <Portfolio 
          onOpenEventModal={handleOpenEventModal} 
          onOpenInquiry={handleOpenInquiry} 
        />

        {/* Chapter 5: Verified Client Testimonials */}
        <Testimonials />
      </main>

      {/* Chapter 7: Rich Reach-Out Footer Hub */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Modals & Drawers */}
      <EventModal
        event={selectedEvent}
        isOpen={eventModalOpen}
        onClose={handleCloseEventModal}
        onInquireEvent={handleInquireFromEvent}
      />

      <InquiryDrawer
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialNote={inquiryNote}
        initialEventType={inquiryEventType}
      />
    </div>
  );
}
