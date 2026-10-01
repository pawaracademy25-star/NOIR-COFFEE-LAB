import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';
import type { CameraState } from '../../store/useStore';

interface CameraTransform {
  position: [number, number, number];
  target: [number, number, number];
}

const CAMERA_PRESETS: Record<CameraState, CameraTransform> = {
  entrance: {
    position: [0, 1.6, 4.8],
    target: [0, 1.2, 0],
  },
  counter: {
    position: [0, 1.4, 2.2],
    target: [0, 1.1, 0],
  },
  espresso: {
    position: [-0.6, 1.35, 1.2],
    target: [-0.6, 1.25, 0],
  },
  brewing: {
    position: [1.2, 1.35, 1.2],
    target: [1.2, 1.2, 0],
  },
  coffee_shelf: {
    position: [-1.8, 1.8, 0.8],
    target: [-1.8, 1.8, -1.2],
  },
  journal_table: {
    position: [2.0, 1.4, 3.2],
    target: [2.2, 0.7, 2.2],
  },
  event_poster: {
    position: [-2.6, 1.8, 0.2],
    target: [-3.4, 1.9, -1.8],
  },
  menu_board: {
    position: [0, 2.1, 1.5],
    target: [0, 2.3, -1.8],
  },
  seating: {
    position: [2.5, 1.4, 3.5],
    target: [2.2, 0.8, 2.0],
  },
};

export function CameraController() {
  const { camera } = useThree();
  const cameraState = useStore((state) => state.cameraState);
  const targetVec = new THREE.Vector3();
  const currentLookAt = new THREE.Vector3();

  useFrame((_, delta) => {
    const preset = CAMERA_PRESETS[cameraState] || CAMERA_PRESETS.entrance;

    // Smoothly interpolate camera position using damp
    camera.position.lerp(new THREE.Vector3(...preset.position), delta * 2.5);

    // Calculate lookAt interpolation
    targetVec.set(...preset.target);
    camera.getWorldDirection(currentLookAt);
    
    // Smooth camera lookAt point
    const currentTarget = camera.position.clone().add(currentLookAt);
    currentTarget.lerp(targetVec, delta * 2.5);
    camera.lookAt(currentTarget);
  });

  return null;
}
