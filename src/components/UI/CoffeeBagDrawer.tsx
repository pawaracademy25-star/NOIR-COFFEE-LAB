import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { X, ShoppingBag } from 'lucide-react';
import { COFFEES } from '../../data/coffees';
import { soundFx } from '../../utils/audio';

export function CoffeeBagDrawer() {
  const { currentView, setView, selectedCoffee, setSelectedCoffee, addToCart, isAudioEnabled } = useStore();

  if (currentView !== 'product_detail') return null;

  const coffee = selectedCoffee || COFFEES[0];

  const handleAddToCart = () => {
    if (isAudioEnabled) soundFx.playClick();
    addToCart({
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      quantity: 1,
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '420px',
          maxWidth: '90vw',
          background: '#1C1A18',
          borderLeft: '1px solid #292521',
          zIndex: 40,
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#E9E3D8',
          pointerEvents: 'auto',
          overflowY: 'auto',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#B35D38', textTransform: 'uppercase' }}>
              SINGLE ORIGIN BEANS
            </span>
            <button
              onClick={() => setView('cafe')}
              style={{ padding: '0.4rem', color: '#A39B92', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Coffee Title */}
          <h2 className="serif" style={{ fontSize: '2.2rem', marginBottom: '0.3rem', fontWeight: 400 }}>
            {coffee.name}
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#A39B92', marginBottom: '1.8rem' }}>
            {coffee.subname}
          </p>

          {/* Key Metadata Table */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '2rem', borderTop: '1px solid #292521', borderBottom: '1px solid #292521', padding: '1.5rem 0' }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Origin</span>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, marginTop: '0.2rem' }}>{coffee.origin}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Process</span>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, marginTop: '0.2rem' }}>{coffee.process}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Altitude</span>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, marginTop: '0.2rem' }}>{coffee.altitude}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Roast</span>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, marginTop: '0.2rem' }}>{coffee.roastProfile}</p>
            </div>
          </div>

          {/* Tasting Notes */}
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.7rem', color: '#A39B92', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.8rem' }}>
              Tasting Notes
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {coffee.tastingNotes.map((note) => (
                <span
                  key={note}
                  style={{
                    padding: '0.4rem 0.8rem',
                    background: '#292521',
                    border: '1px solid #332D28',
                    fontSize: '0.8rem',
                    color: '#E9E3D8',
                  }}
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#A39B92', marginBottom: '2rem' }}>
            {coffee.description}
          </p>
        </div>

        {/* Footer Add To Bag */}
        <div style={{ borderTop: '1px solid #292521', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 500 }}>₹{coffee.price}</span>
            <span style={{ fontSize: '0.85rem', color: '#A39B92' }}>{coffee.weight} bag</span>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              padding: '1rem',
              background: '#E9E3D8',
              color: '#11100F',
              border: 'none',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              cursor: 'pointer',
            }}
          >
            <ShoppingBag size={18} />
            Add to Bag
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
