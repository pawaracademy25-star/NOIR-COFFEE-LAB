import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SteamProps {
  position: [number, number, number];
  count?: number;
}

export function SteamParticles({ position, count = 15 }: SteamProps) {
  const particlesRef = useRef<THREE.Points>(null);

  // Initialize particle positions and random offsets
  const positions = new Float32Array(count * 3);
  const opacityOffset = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 0.15;
    positions[i * 3 + 1] = Math.random() * 0.4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
    opacityOffset[i] = Math.random();
  }

  useFrame((state, delta) => {
    if (!particlesRef.current) return;
    const geo = particlesRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Move particles up
      pos[i * 3 + 1] += delta * 0.15;
      pos[i * 3] += Math.sin(state.clock.getElapsedTime() * 2 + i) * 0.001;

      // Reset when particle floats too high
      if (pos[i * 3 + 1] > 0.5) {
        pos[i * 3 + 1] = 0;
        pos[i * 3] = (Math.random() - 0.5) * 0.15;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
      }
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <group position={position}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#E9E3D8"
          transparent
          opacity={0.25}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
