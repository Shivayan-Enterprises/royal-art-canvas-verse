
import { useRef, useEffect } from 'react';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SculptureModelProps {
  autoRotate?: boolean;
  position?: [number, number, number];
  scale?: number;
  color?: string;
}

export function SculptureModel({ 
  autoRotate = true,
  position = [0, 0, 0], 
  scale = 1, 
  color = "#8A5E3C"
}: SculptureModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Add subtle auto-rotation if enabled
  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <cylinderGeometry args={[0.7, 1, 2, 32]} />
      <meshStandardMaterial 
        color={color}
        roughness={0.3}
        metalness={0.7}
        envMapIntensity={1}
      />
    </mesh>
  );
}

interface SceneWrapperProps {
  autoRotate?: boolean;
  color?: string;
}

export default function SceneWrapper({ autoRotate = true, color = "#8A5E3C" }: SceneWrapperProps) {
  return (
    <>
      <Stage
        adjustCamera={1.5}
        preset="soft"
        shadows={false}
        intensity={0.5}
        environment="city"
      >
        <SculptureModel autoRotate={autoRotate} color={color} />
      </Stage>
      <OrbitControls 
        makeDefault 
        minPolarAngle={0} 
        maxPolarAngle={Math.PI / 1.75} 
        enableZoom={true}
        enablePan={false}
        zoomSpeed={0.5}
      />
      <Environment preset="sunset" />
    </>
  );
}
