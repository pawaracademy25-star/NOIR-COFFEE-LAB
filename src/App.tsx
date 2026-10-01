import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { CafeScene } from './components/Scene/CafeScene';
import { HeaderNav } from './components/UI/HeaderNav';
import { IntroScreen } from './components/UI/IntroScreen';
import { CoffeeBagDrawer } from './components/UI/CoffeeBagDrawer';
import { MenuModal } from './components/UI/MenuModal';
import { BrewingLabModal } from './components/UI/BrewingLabModal';
import { JournalModal } from './components/UI/JournalModal';
import { EventsModal } from './components/UI/EventsModal';
import { VisitModal } from './components/UI/VisitModal';
import { CartDrawer } from './components/UI/CartDrawer';
import { Mode2DFallback } from './components/UI/Mode2DFallback';
import { useStore } from './store/useStore';

function App() {
  const is3DMode = useStore((state) => state.is3DMode);

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'var(--color-bg)', overflow: 'hidden', position: 'relative' }}>
      {/* HEADER NAVIGATION */}
      <HeaderNav />

      {/* INTRO SCREEN */}
      <IntroScreen />

      {/* PRIMARY 3D CANVASES OR EDITORIAL 2D FALLBACK */}
      {is3DMode ? (
        <Suspense fallback={null}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 1.6, 4.8], fov: 45 }}
            style={{ width: '100%', height: '100%' }}
          >
            <CafeScene />
          </Canvas>
        </Suspense>
      ) : (
        <Mode2DFallback />
      )}

      {/* DREI ASSET LOADER */}
      <Loader
        containerStyles={{ background: '#11100F' }}
        innerStyles={{ width: '220px' }}
        barStyles={{ background: '#E9E3D8' }}
        dataInterpolation={(p) => `Preparing the bar... ${p.toFixed(0)}%`}
        dataStyles={{ color: '#E9E3D8', fontFamily: 'Inter', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.75rem' }}
      />

      {/* OVERLAY MODALS & DRAWERS */}
      <CoffeeBagDrawer />
      <MenuModal />
      <BrewingLabModal />
      <JournalModal />
      <EventsModal />
      <VisitModal />
      <CartDrawer />
    </div>
  );
}

export default App;
