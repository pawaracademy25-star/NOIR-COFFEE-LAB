import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { soundFx } from '../../utils/audio';

export function IntroScreen() {
  const { hasEntered, setHasEntered, isAudioEnabled } = useStore();

  if (hasEntered) return null;

  const handleEnter = () => {
    if (isAudioEnabled) soundFx.playClick();
    setHasEntered(true);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#11100F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E9E3D8',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '400px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="serif"
          style={{ fontSize: '3rem', letterSpacing: '0.15em', fontWeight: 400, marginBottom: '0.5rem' }}
        >
          NOIR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="serif"
          style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#A39B92', marginBottom: '3rem' }}
        >
          Coffee, stripped back.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={handleEnter}
          className="pointer-events-auto"
          style={{
            padding: '1rem 2.5rem',
            border: '1px solid #292521',
            background: '#1C1A18',
            color: '#E9E3D8',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B35D38')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#292521')}
        >
          Come in.
        </motion.button>
      </div>

      <button
        onClick={handleEnter}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          fontSize: '0.75rem',
          color: '#A39B92',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Skip intro
      </button>
    </motion.div>
  );
}
