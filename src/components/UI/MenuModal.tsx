import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { X, Plus } from 'lucide-react';
import { MENU_ITEMS } from '../../data/menu';
import type { MenuItem } from '../../data/menu';
import { soundFx } from '../../utils/audio';

export function MenuModal() {
  const { currentView, setView, addToCart, isAudioEnabled } = useStore();
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ESPRESSO' | 'FILTER' | 'COLD' | 'FOOD' | 'SEASONAL'>('ALL');

  if (currentView !== 'menu') return null;

  const categories = ['ALL', 'ESPRESSO', 'FILTER', 'COLD', 'SEASONAL', 'FOOD'] as const;

  const filteredItems = activeCategory === 'ALL'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleAddItem = (item: MenuItem) => {
    if (isAudioEnabled) soundFx.playClick();
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
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
            maxWidth: '900px',
            height: '85vh',
            background: '#1C1A18',
            border: '1px solid #292521',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            color: '#E9E3D8',
            overflow: 'hidden',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setView('cafe')}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              color: '#A39B92',
              cursor: 'pointer',
            }}
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#B35D38', textTransform: 'uppercase' }}>
              EDITORIAL MENU
            </span>
            <h2 className="serif" style={{ fontSize: '2.5rem', marginTop: '0.3rem', fontWeight: 400 }}>
              The Menu Board
            </h2>
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              borderBottom: '1px solid #292521',
              paddingBottom: '1rem',
              marginBottom: '2rem',
              overflowX: 'auto',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: activeCategory === cat ? '#E9E3D8' : '#A39B92',
                  borderBottom: activeCategory === cat ? '2px solid #B35D38' : 'none',
                  paddingBottom: '0.5rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items List */}
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderBottom: '1px solid #292521',
                    paddingBottom: '1.2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <h3 className="serif" style={{ fontSize: '1.25rem', fontWeight: 500 }}>
                        {item.name}
                      </h3>
                      <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#E9E3D8' }}>
                        ₹{item.price}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.5', marginBottom: '0.8rem' }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {item.tags?.map((tag) => (
                        <span key={tag} style={{ fontSize: '0.65rem', color: '#B35D38', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          • {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleAddItem(item)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.75rem',
                        padding: '0.4rem 0.8rem',
                        background: '#292521',
                        border: '1px solid #332D28',
                        color: '#E9E3D8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                      }}
                    >
                      <Plus size={14} /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
