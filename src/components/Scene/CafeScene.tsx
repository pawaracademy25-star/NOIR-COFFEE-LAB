import React from 'react';
import { Text, Environment } from '@react-three/drei';
import { useStore } from '../../store/useStore';
import { CameraController } from './CameraController';
import { InteractiveStation } from './InteractiveStation';
import { SteamParticles } from './SteamParticles';
import { COFFEES } from '../../data/coffees';
import { soundFx } from '../../utils/audio';

export function CafeScene() {
  const { setView, setSelectedCoffee, setCameraState, isAudioEnabled } = useStore();

  return (
    <>
      <color attach="background" args={['#0A0A09']} />
      <CameraController />

      {/* Architectural Warm Lighting System */}
      <ambientLight intensity={0.3} color="#E9E3D8" />
      <directionalLight position={[4, 8, 4]} intensity={0.7} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[0, 3, 0]} intensity={2.0} color="#FFD1A3" distance={6} />
      <pointLight position={[-1.8, 2.5, -1]} intensity={1.5} color="#FFB870" distance={4} />

      <group position={[0, -1, 0]}>
        {/* FLOOR: Dark charcoal slate floor */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[16, 16]} />
          <meshStandardMaterial color="#11100F" roughness={0.85} metalness={0.1} />
        </mesh>

        {/* BACK WALL: Architectural slat panel wall */}
        <mesh position={[0, 3, -2.5]} receiveShadow>
          <planeGeometry args={[16, 6]} />
          <meshStandardMaterial color="#1C1A18" roughness={0.9} />
        </mesh>

        {/* LEFT WALL */}
        <mesh position={[-5, 3, 1]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <planeGeometry args={[10, 6]} />
          <meshStandardMaterial color="#171513" roughness={0.9} />
        </mesh>

        {/* BAR COUNTER: Solid charcoal block with warm zinc top */}
        <group position={[0, 0.6, 0]}>
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[4.5, 1.2, 1.4]} />
            <meshStandardMaterial color="#1C1A18" roughness={0.5} />
          </mesh>
          {/* Brushed metal counter top */}
          <mesh position={[0, 0.61, 0]} receiveShadow castShadow>
            <boxGeometry args={[4.6, 0.04, 1.45]} />
            <meshStandardMaterial color="#292521" roughness={0.3} metalness={0.4} />
          </mesh>
        </group>

        {/* STATIONS ON COUNTER */}

        {/* 1. ESPRESSO MACHINE STATION */}
        <InteractiveStation
          position={[-0.7, 1.5, 0]}
          title="ESPRESSO BAR"
          subtitle="Precision Extraction"
          onClick={() => {
            if (isAudioEnabled) soundFx.playSteam();
            setCameraState('espresso');
            setView('menu');
          }}
        >
          {/* Main Body */}
          <mesh castShadow position={[0, 0.2, 0]}>
            <boxGeometry args={[0.9, 0.5, 0.55]} />
            <meshStandardMaterial color="#222" metalness={0.7} roughness={0.2} />
          </mesh>
          {/* Metallic Portafilter heads */}
          <mesh position={[-0.2, 0.05, 0.28]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.12, 16]} />
            <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0.2, 0.05, 0.28]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.12, 16]} />
            <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Coffee Grinder next to machine */}
          <mesh position={[0.65, 0.25, -0.05]} castShadow>
            <cylinderGeometry args={[0.12, 0.14, 0.6, 16]} />
            <meshStandardMaterial color="#111" metalness={0.5} roughness={0.3} />
          </mesh>
          {/* Grinder Hopper */}
          <mesh position={[0.65, 0.65, -0.05]} castShadow>
            <coneGeometry args={[0.16, 0.25, 16]} />
            <meshStandardMaterial color="#554433" transparent opacity={0.7} roughness={0.1} />
          </mesh>
          {/* Rising Steam */}
          <SteamParticles position={[-0.2, 0.4, 0.2]} count={12} />
        </InteractiveStation>

        {/* 2. V60 BREWING LAB */}
        <InteractiveStation
          position={[1.2, 1.45, 0]}
          title="BREWING LAB"
          subtitle="V60 & Aeropress"
          onClick={() => {
            setCameraState('brewing');
            setView('lab');
          }}
        >
          {/* Wooden Drip Stand */}
          <mesh castShadow position={[0, 0.15, 0]}>
            <boxGeometry args={[0.5, 0.3, 0.35]} />
            <meshStandardMaterial color="#292521" roughness={0.6} />
          </mesh>
          {/* V60 Cone */}
          <mesh position={[0, 0.38, 0]} castShadow>
            <coneGeometry args={[0.12, 0.16, 16]} />
            <meshStandardMaterial color="#E9E3D8" roughness={0.3} />
          </mesh>
          {/* Glass Carafe */}
          <mesh position={[0, 0.12, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.08, 0.2, 16]} />
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.5} roughness={0.1} />
          </mesh>
          {/* Steam */}
          <SteamParticles position={[0, 0.45, 0]} count={10} />
        </InteractiveStation>

        {/* 3. COFFEE BAGS SHELF */}
        <group position={[-1.8, 2.2, -2.4]}>
          {/* Wooden Shelf */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[2.2, 0.06, 0.4]} />
            <meshStandardMaterial color="#292521" roughness={0.7} />
          </mesh>
          {/* 4 Interactive Coffee Bags */}
          {COFFEES.map((coffee, idx) => {
            const posX = -0.7 + idx * 0.45;
            return (
              <InteractiveStation
                key={coffee.id}
                position={[posX, 0.22, 0]}
                title={coffee.name}
                subtitle={`${coffee.origin} • ₹${coffee.price}`}
                onClick={() => {
                  setSelectedCoffee(coffee);
                  setCameraState('coffee_shelf');
                  setView('product_detail');
                }}
              >
                <mesh castShadow>
                  <boxGeometry args={[0.22, 0.35, 0.16]} />
                  <meshStandardMaterial color={coffee.bagColor} roughness={0.9} />
                </mesh>
                <Text
                  position={[0, 0, 0.09]}
                  fontSize={0.035}
                  color="#E9E3D8"
                  anchorX="center"
                  anchorY="middle"
                >
                  {coffee.origin.toUpperCase()}
                </Text>
              </InteractiveStation>
            );
          })}
        </group>

        {/* 4. WALL MENU BOARD */}
        <InteractiveStation
          position={[0, 2.6, -2.45]}
          title="THE MENU BOARD"
          subtitle="Explore Full Menu"
          onClick={() => {
            setCameraState('menu_board');
            setView('menu');
          }}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.8, 1.2, 0.04]} />
            <meshStandardMaterial color="#171513" roughness={0.6} />
          </mesh>
          <Text
            position={[0, 0.4, 0.03]}
            fontSize={0.09}
            color="#E9E3D8"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.1}
          >
            NOIR MENU
          </Text>
          <Text
            position={[-0.6, 0.15, 0.03]}
            fontSize={0.05}
            color="#A39B92"
            anchorX="left"
            anchorY="middle"
          >
            ESPRESSO ---------------- ₹160
          </Text>
          <Text
            position={[-0.6, 0.02, 0.03]}
            fontSize={0.05}
            color="#A39B92"
            anchorX="left"
            anchorY="middle"
          >
            FLAT WHITE ------------ ₹220
          </Text>
          <Text
            position={[-0.6, -0.11, 0.03]}
            fontSize={0.05}
            color="#A39B92"
            anchorX="left"
            anchorY="middle"
          >
            V60 FILTER -------------- ₹280
          </Text>
          <Text
            position={[-0.6, -0.24, 0.03]}
            fontSize={0.05}
            color="#B35D38"
            anchorX="left"
            anchorY="middle"
          >
            KYOTO COLD DRIP ------- ₹260
          </Text>
        </InteractiveStation>

        {/* 5. EVENT POSTER ON WALL */}
        <InteractiveStation
          position={[-3.8, 2.4, -2.45]}
          title="NOIR AFTER DARK"
          subtitle="View Upcoming Events"
          onClick={() => {
            setCameraState('event_poster');
            setView('events');
          }}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.1, 1.6, 0.03]} />
            <meshStandardMaterial color="#E9E3D8" roughness={0.3} />
          </mesh>
          <Text
            position={[0, 0.5, 0.02]}
            fontSize={0.07}
            color="#11100F"
            anchorX="center"
            anchorY="middle"
          >
            NOIR
          </Text>
          <Text
            position={[0, 0.3, 0.02]}
            fontSize={0.09}
            color="#B35D38"
            anchorX="center"
            anchorY="middle"
          >
            AFTER DARK
          </Text>
          <Text
            position={[0, 0, 0.02]}
            fontSize={0.045}
            color="#11100F"
            anchorX="center"
            anchorY="middle"
          >
            COFFEE + VINYL
          </Text>
          <Text
            position={[0, -0.4, 0.02]}
            fontSize={0.04}
            color="#11100F"
            anchorX="center"
            anchorY="middle"
          >
            OCTOBER 23 • 8:00 PM
          </Text>
        </InteractiveStation>

        {/* 6. SEATING AREA & JOURNAL TABLE */}
        <group position={[2.2, 0, 2.0]}>
          {/* Round Oak Table */}
          <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.6, 0.6, 0.05, 32]} />
            <meshStandardMaterial color="#292521" roughness={0.5} />
          </mesh>
          <mesh castShadow position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.5, 16]} />
            <meshStandardMaterial color="#111" metalness={0.8} />
          </mesh>

          {/* Open Journal Notebook on Table */}
          <InteractiveStation
            position={[-0.1, 0.55, 0]}
            title="NOIR JOURNAL"
            subtitle="Articles & Essays"
            onClick={() => {
              setCameraState('journal_table');
              setView('journal');
            }}
          >
            <mesh castShadow rotation={[-Math.PI / 2, 0, 0.2]}>
              <boxGeometry args={[0.3, 0.4, 0.03]} />
              <meshStandardMaterial color="#E9E3D8" roughness={0.9} />
            </mesh>
          </InteractiveStation>

          {/* Ceramic Coffee Cup */}
          <mesh position={[0.2, 0.56, 0.1]} castShadow>
            <cylinderGeometry args={[0.06, 0.05, 0.1, 16]} />
            <meshStandardMaterial color="#1C1A18" roughness={0.4} />
          </mesh>

          {/* Minimal Chair */}
          <group position={[0.8, 0, 0]} rotation={[0, -Math.PI / 3, 0]}>
            <mesh castShadow position={[0, 0.4, 0]}>
              <boxGeometry args={[0.45, 0.04, 0.45]} />
              <meshStandardMaterial color="#1C1A18" roughness={0.6} />
            </mesh>
            <mesh castShadow position={[0, 0.65, -0.2]}>
              <boxGeometry args={[0.45, 0.4, 0.04]} />
              <meshStandardMaterial color="#1C1A18" roughness={0.6} />
            </mesh>
          </group>
        </group>

        {/* 7. INDOOR BOTANICAL PLANT */}
        <group position={[-4, 0, -1]}>
          {/* Ceramic Pot */}
          <mesh castShadow position={[0, 0.35, 0]}>
            <cylinderGeometry args={[0.3, 0.22, 0.7, 16]} />
            <meshStandardMaterial color="#1C1A18" roughness={0.6} />
          </mesh>
          {/* Plant Leaves */}
          <mesh position={[0, 0.9, 0]} castShadow>
            <sphereGeometry args={[0.4, 8, 8]} />
            <meshStandardMaterial color="#2E382B" roughness={0.9} />
          </mesh>
        </group>

        {/* 8. ENTRANCE MAT / VISIT NODE */}
        <InteractiveStation
          position={[0, 0.02, 4.0]}
          title="VISIT NOIR"
          subtitle="Hours & Location"
          onClick={() => {
            setCameraState('entrance');
            setView('visit');
          }}
        >
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.6, 1.0]} />
            <meshStandardMaterial color="#1C1A18" roughness={0.9} />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.08}
            color="#A39B92"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.1}
          >
            WELCOME TO NOIR
          </Text>
        </InteractiveStation>

      </group>

      <Environment preset="night" />
    </>
  );
}
