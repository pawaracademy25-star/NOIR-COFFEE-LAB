import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { X, MapPin, Clock, Phone, Globe, Navigation } from 'lucide-react';

export function VisitModal() {
  const { currentView, setView } = useStore();

  if (currentView !== 'visit') return null;

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
            maxWidth: '750px',
            background: '#1C1A18',
            border: '1px solid #292521',
            padding: '3rem',
            position: 'relative',
            color: '#E9E3D8',
          }}
        >
          <button
            onClick={() => setView('cafe')}
            style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#A39B92', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>

          <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#B35D38', textTransform: 'uppercase' }}>
            PHYSICAL SPACE
          </span>
          <h2 className="serif" style={{ fontSize: '2.5rem', marginTop: '0.3rem', marginBottom: '2.5rem', fontWeight: 400 }}>
            Visit NOIR
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <MapPin size={14} /> Address
                </span>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontWeight: 500 }}>
                  NOIR Coffee Lab<br />
                  17 Senapati Bapat Road<br />
                  Pune, Maharashtra 411016
                </p>
                <span style={{ fontSize: '0.75rem', color: '#B35D38', fontStyle: 'italic', display: 'block', marginTop: '0.4rem' }}>
                  *Fictional demo location
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <Clock size={14} /> Hours
                </span>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <strong>Mon – Fri:</strong> 8:00 AM — 9:00 PM<br />
                  <strong>Sat – Sun:</strong> 8:30 AM — 10:00 PM
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ background: '#11100F', border: '1px solid #292521', padding: '1.5rem', borderRadius: '2px' }}>
                <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Space Details
                </span>
                <ul style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                  <li>• High-speed Optical Wi-Fi</li>
                  <li>• Individual Power Outlets at Bar</li>
                  <li>• Quiet Morning Hours (8am - 11am)</li>
                  <li>• Indoor & Outdoor Bench Seating</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button
                  onClick={() => alert('Demo directions link.')}
                  style={{
                    flex: 1,
                    padding: '0.8rem',
                    background: '#E9E3D8',
                    color: '#11100F',
                    border: 'none',
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Navigation size={14} /> Get Directions
                </button>
                <button
                  onClick={() => alert('Demo Instagram.')}
                  style={{
                    padding: '0.8rem',
                    background: '#292521',
                    color: '#E9E3D8',
                    border: '1px solid #332D28',
                    cursor: 'pointer',
                  }}
                >
                  <Globe size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
