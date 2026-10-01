import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { X, Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { EVENTS } from '../../data/events';
import type { EventItem } from '../../data/events';
import { soundFx } from '../../utils/audio';

export function EventsModal() {
  const { currentView, setView, isAudioEnabled } = useStore();
  const [rsvpState, setRsvpState] = useState<Record<string, boolean>>({});

  if (currentView !== 'events') return null;

  const handleRsvp = (id: string) => {
    if (isAudioEnabled) soundFx.playClick();
    setRsvpState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(17, 16, 15, 0.96)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          pointerEvents: 'auto',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '850px',
            maxHeight: '85vh',
            background: '#1C1A18',
            border: '1px solid #292521',
            padding: '3rem',
            position: 'relative',
            color: '#E9E3D8',
            overflowY: 'auto',
          }}
        >
          <button
            onClick={() => setView('cafe')}
            style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#A39B92', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>

          <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#B35D38', textTransform: 'uppercase' }}>
            UPCOMING SESSIONS
          </span>
          <h2 className="serif" style={{ fontSize: '2.5rem', marginTop: '0.3rem', marginBottom: '2.5rem', fontWeight: 400 }}>
            Events & Workshops
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {EVENTS.map((event) => (
              <div
                key={event.id}
                style={{
                  background: '#11100F',
                  border: '1px solid #292521',
                  padding: '2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '2rem',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#B35D38', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                      {event.date}
                    </span>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: '#292521', color: '#A39B92' }}>
                      {event.status}
                    </span>
                  </div>

                  <h3 className="serif" style={{ fontSize: '1.6rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                    {event.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#E9E3D8', marginBottom: '1rem', fontStyle: 'italic' }}>
                    {event.subtitle}
                  </p>

                  <p style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {event.description}
                  </p>

                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: '#A39B92' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={14} /> {event.time}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={14} /> {event.location}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                  <button
                    onClick={() => handleRsvp(event.id)}
                    style={{
                      padding: '0.8rem 1.6rem',
                      background: rsvpState[event.id] ? '#2E382B' : '#E9E3D8',
                      color: rsvpState[event.id] ? '#E9E3D8' : '#11100F',
                      border: 'none',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {rsvpState[event.id] ? (
                      <>
                        <CheckCircle size={16} /> RSVP Confirmed
                      </>
                    ) : (
                      'Reserve Seat'
                    )}
                  </button>
                  <span style={{ fontSize: '0.7rem', color: '#A39B92', marginTop: '0.6rem' }}>
                    {event.capacity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
