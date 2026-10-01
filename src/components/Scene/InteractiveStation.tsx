import React, { useState } from 'react';
import { Text, useCursor } from '@react-three/drei';
import { useStore } from '../../store/useStore';
import { soundFx } from '../../utils/audio';

interface StationProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  title: string;
  subtitle?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export function InteractiveStation({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  title,
  subtitle,
  onClick,
  children,
}: StationProps) {
  const [hovered, setHovered] = useState(false);
  const isAudioEnabled = useStore((state) => state.isAudioEnabled);
  useCursor(hovered, 'pointer', 'auto');

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (isAudioEnabled) soundFx.playClick();
    onClick();
  };

  return (
    <group
      position={position}
      rotation={rotation}
      scale={hovered ? [scale[0] * 1.03, scale[1] * 1.03, scale[2] * 1.03] : scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {children}

      {/* Floating Tactical Label on Hover */}
      {hovered && (
        <group position={[0, 0.6, 0]}>
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[1.4, 0.4]} />
            <meshBasicMaterial color="#11100F" transparent opacity={0.85} />
          </mesh>
          <Text
            position={[0, 0.08, 0]}
            fontSize={0.09}
            color="#E9E3D8"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.05}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              position={[0, -0.08, 0]}
              fontSize={0.06}
              color="#B35D38"
              anchorX="center"
              anchorY="middle"
              letterSpacing={0.04}
            >
              {subtitle}
            </Text>
          )}
        </group>
      )}
    </group>
  );
}
