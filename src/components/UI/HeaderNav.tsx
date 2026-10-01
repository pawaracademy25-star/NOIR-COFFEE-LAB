import React from 'react';
import { useStore } from '../../store/useStore';
import type { CameraState, ViewState } from '../../store/useStore';
import { ShoppingBag, Volume2, VolumeX, Eye, Layers, Compass } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export function HeaderNav() {
  const {
    currentView,
    setView,
    setCameraState,
    cart,
    setIsCartOpen,
    is3DMode,
    toggle3DMode,
    isAudioEnabled,
    toggleAudio,
  } = useStore();

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (view: ViewState, cameraState: CameraState) => {
    if (isAudioEnabled) soundFx.playClick();
    setCameraState(cameraState);
    setView(view);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 50,
        background: 'linear-gradient(to bottom, rgba(17,16,15,0.95), rgba(17,16,15,0))',
        pointerEvents: 'auto',
      }}
    >
      {/* BRAND LOGO */}
      <button
        onClick={() => handleNavClick('cafe', 'entrance')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}
      >
        <span
          className="serif"
          style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--color-text)',
          }}
        >
          NOIR
        </span>
        <span
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
          }}
        >
          Coffee Lab
        </span>
      </button>

      {/* CONVENTIONAL NAVIGATION */}
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <button
          onClick={() => handleNavClick('cafe', 'entrance')}
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: currentView === 'cafe' ? 'var(--color-accent)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          Explore
        </button>

        <button
          onClick={() => handleNavClick('product_detail', 'coffee_shelf')}
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: currentView === 'product_detail' ? 'var(--color-accent)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          Coffees
        </button>

        <button
          onClick={() => handleNavClick('menu', 'menu_board')}
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: currentView === 'menu' ? 'var(--color-accent)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          Menu
        </button>

        <button
          onClick={() => handleNavClick('lab', 'brewing')}
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: currentView === 'lab' ? 'var(--color-accent)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          The Lab
        </button>

        <button
          onClick={() => handleNavClick('journal', 'journal_table')}
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: currentView === 'journal' ? 'var(--color-accent)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          Journal
        </button>

        <button
          onClick={() => handleNavClick('events', 'event_poster')}
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: currentView === 'events' ? 'var(--color-accent)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          Events
        </button>

        <button
          onClick={() => handleNavClick('visit', 'entrance')}
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: currentView === 'visit' ? 'var(--color-accent)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          Visit
        </button>
      </nav>

      {/* CONTROLS & CART */}
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        {/* Audio Toggle */}
        <button
          onClick={toggleAudio}
          title={isAudioEnabled ? 'Mute Ambient Audio' : 'Enable Ambient Audio'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.75rem',
            color: isAudioEnabled ? 'var(--color-accent)' : 'var(--color-text-muted)',
            padding: '0.4rem 0.6rem',
            border: '1px solid var(--color-surface-warm)',
            borderRadius: '2px',
          }}
        >
          {isAudioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span style={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
            {isAudioEnabled ? 'Sound On' : 'Muted'}
          </span>
        </button>

        {/* 2D / 3D Mode Toggle */}
        <button
          onClick={toggle3DMode}
          title="Toggle 2D / 3D Experience"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.75rem',
            color: 'var(--color-text)',
            padding: '0.4rem 0.6rem',
            border: '1px solid var(--color-surface-warm)',
            borderRadius: '2px',
          }}
        >
          {is3DMode ? <Layers size={16} /> : <Compass size={16} />}
          <span style={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
            {is3DMode ? '3D View' : '2D Editorial'}
          </span>
        </button>

        {/* Shopping Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.8rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-surface-warm)',
            color: 'var(--color-text)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          <ShoppingBag size={16} />
          <span>Bag</span>
          {totalCartItems > 0 && (
            <span
              style={{
                background: 'var(--color-accent)',
                color: '#fff',
                fontSize: '0.7rem',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
              }}
            >
              {totalCartItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
