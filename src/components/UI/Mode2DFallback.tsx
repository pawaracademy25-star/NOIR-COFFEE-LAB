import React from 'react';
import { useStore } from '../../store/useStore';
import { COFFEES } from '../../data/coffees';
import { MENU_ITEMS } from '../../data/menu';
import { JOURNAL_ARTICLES } from '../../data/journal';
import { EVENTS } from '../../data/events';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export function Mode2DFallback() {
  const { setView, setSelectedCoffee, addToCart, isAudioEnabled } = useStore();

  const handleAddToCart = (coffee: any) => {
    if (isAudioEnabled) soundFx.playClick();
    addToCart({
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      quantity: 1,
    });
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#11100F',
        color: '#E9E3D8',
        paddingTop: '120px',
        paddingBottom: '5rem',
        paddingLeft: 'max(2rem, 5vw)',
        paddingRight: 'max(2rem, 5vw)',
        overflowY: 'auto',
        pointerEvents: 'auto',
      }}
    >
      {/* HERO SECTION */}
      <section style={{ marginBottom: '6rem', maxWidth: '900px' }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#B35D38', textTransform: 'uppercase' }}>
          SPECIALTY COFFEE BAR & ROASTERY
        </span>
        <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem', fontWeight: 400, lineHeight: 1.1 }}>
          Walk into NOIR.<br />Coffee, stripped back.
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#A39B92', lineHeight: '1.8', maxWidth: '650px' }}>
          An urban specialty coffee bar focused on single-origin beans, precision extraction, and a minimal physical space designed for quiet focus.
        </p>
      </section>

      {/* FEATURED BEANS */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem', borderBottom: '1px solid #292521', paddingBottom: '1rem' }}>
          <h2 className="serif" style={{ fontSize: '2rem', fontWeight: 400 }}>Single Origin Beans</h2>
          <span style={{ fontSize: '0.8rem', color: '#A39B92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fresh Small-Batch Roasts</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {COFFEES.map((coffee) => (
            <div
              key={coffee.id}
              style={{
                background: '#1C1A18',
                border: '1px solid #292521',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', color: '#B35D38', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {coffee.origin} • {coffee.process}
                </span>
                <h3 className="serif" style={{ fontSize: '1.4rem', marginTop: '0.4rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  {coffee.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                  {coffee.tastingNotes.join(' / ')}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>₹{coffee.price}</span>
                  <span style={{ fontSize: '0.75rem', color: '#A39B92' }}>{coffee.weight}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(coffee)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: '#292521',
                    color: '#E9E3D8',
                    border: '1px solid #332D28',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <ShoppingBag size={14} /> Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem', borderBottom: '1px solid #292521', paddingBottom: '1rem' }}>
          <h2 className="serif" style={{ fontSize: '2rem', fontWeight: 400 }}>The Bar Menu</h2>
          <button
            onClick={() => setView('menu')}
            style={{ fontSize: '0.8rem', color: '#B35D38', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
          >
            View Full Menu →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {MENU_ITEMS.slice(0, 4).map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #292521', paddingBottom: '1.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h3 className="serif" style={{ fontSize: '1.2rem' }}>{item.name}</h3>
                <span style={{ fontWeight: 600 }}>₹{item.price}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.5' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNAL ESSAYS */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem', borderBottom: '1px solid #292521', paddingBottom: '1rem' }}>
          <h2 className="serif" style={{ fontSize: '2rem', fontWeight: 400 }}>Noir Journal</h2>
          <button
            onClick={() => setView('journal')}
            style={{ fontSize: '0.8rem', color: '#B35D38', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
          >
            Read Articles →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {JOURNAL_ARTICLES.slice(0, 3).map((art) => (
            <div
              key={art.id}
              onClick={() => setView('journal')}
              style={{
                background: '#1C1A18',
                border: '1px solid #292521',
                padding: '2rem',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '0.7rem', color: '#B35D38', textTransform: 'uppercase' }}>{art.category}</span>
              <h3 className="serif" style={{ fontSize: '1.3rem', margin: '0.5rem 0', fontWeight: 500 }}>{art.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.6' }}>{art.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
