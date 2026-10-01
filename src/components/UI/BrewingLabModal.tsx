import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { X, Droplets, Thermometer, Clock, Scale } from 'lucide-react';

export function BrewingLabModal() {
  const { currentView, setView } = useStore();
  const [method, setMethod] = useState<'V60' | 'AEROPRESS' | 'COLD_BREW'>('V60');

  if (currentView !== 'lab') return null;

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
            BREWING MASTERCLASS
          </span>
          <h2 className="serif" style={{ fontSize: '2.5rem', marginTop: '0.3rem', marginBottom: '2rem', fontWeight: 400 }}>
            How We Brew
          </h2>

          {/* Method Selector */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
            {(['V60', 'AEROPRESS', 'COLD_BREW'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                style={{
                  padding: '0.8rem 1.5rem',
                  background: method === m ? '#E9E3D8' : '#292521',
                  color: method === m ? '#11100F' : '#E9E3D8',
                  border: '1px solid #332D28',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {m.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* Brewing Recipe Breakdown */}
          {method === 'V60' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem', background: '#11100F', padding: '1.5rem', border: '1px solid #292521' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Scale size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Dose</span>
                    <p style={{ fontWeight: 600 }}>15g Coffee</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Droplets size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Yield</span>
                    <p style={{ fontWeight: 600 }}>250g Water</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Thermometer size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Temp</span>
                    <p style={{ fontWeight: 600 }}>93°C Spring</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Clock size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Time</span>
                    <p style={{ fontWeight: 600 }}>2m 45s</p>
                  </div>
                </div>
              </div>

              <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>Pouring Technique</h4>
              <p style={{ fontSize: '0.9rem', color: '#A39B92', lineHeight: '1.7' }}>
                0:00 — 50g Bloom pour with 3 gentle swirls. Wait 45s for CO2 degassing.<br/>
                0:45 — Pour steadily in tight concentric circles up to 150g.<br/>
                1:30 — Final pour up to 250g. Give carafe one final tap to lock horizontal bed.
              </p>
            </div>
          )}

          {method === 'AEROPRESS' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem', background: '#11100F', padding: '1.5rem', border: '1px solid #292521' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Scale size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Dose</span>
                    <p style={{ fontWeight: 600 }}>18g Medium-Fine</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Droplets size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Yield</span>
                    <p style={{ fontWeight: 600 }}>200g Water</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Thermometer size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Temp</span>
                    <p style={{ fontWeight: 600 }}>88°C Water</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Clock size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Time</span>
                    <p style={{ fontWeight: 600 }}>2m 00s</p>
                  </div>
                </div>
              </div>

              <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>Inverted Method</h4>
              <p style={{ fontSize: '0.9rem', color: '#A39B92', lineHeight: '1.7' }}>
                Full immersion extraction delivers rich body with bright top-note clarity. Stir 10 times immediately after filling, attach paper filter cap, flip at 1:30 and plunge steadily over 30 seconds.
              </p>
            </div>
          )}

          {method === 'COLD_BREW' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem', background: '#11100F', padding: '1.5rem', border: '1px solid #292521' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Scale size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Dose</span>
                    <p style={{ fontWeight: 600 }}>100g Coarse</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Droplets size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Yield</span>
                    <p style={{ fontWeight: 600 }}>1000g Cold Water</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Thermometer size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Temp</span>
                    <p style={{ fontWeight: 600 }}>4°C Steep</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Clock size={20} color="#B35D38" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase' }}>Time</span>
                    <p style={{ fontWeight: 600 }}>18 Hours</p>
                  </div>
                </div>
              </div>

              <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>Kyoto Drip Steep</h4>
              <p style={{ fontSize: '0.9rem', color: '#A39B92', lineHeight: '1.7' }}>
                Slow cold-water steeping extracts rich chocolate, malt, and low-acidity sweetness while leaving behind bitter tannins.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
