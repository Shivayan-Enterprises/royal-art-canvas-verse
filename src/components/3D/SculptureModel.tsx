
import { useRef, useEffect } from 'react';
import { useGLTF, OrbitControls, Stage, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Object3D, Mesh } from 'three';

// Define a path to our sample 3D model
// Using a simple vase as an example art piece
const MODEL_PATH = "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/vase-2/model.gltf";

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
  const ref = useRef<THREE.Group>(null);
  const gltf = useGLTF(MODEL_PATH);
  
  // Clone the model to avoid modifying the original
  useEffect(() => {
    if (ref.current) {
      if (gltf.scene) {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            // Apply a rich material to the model
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
              color: new THREE.Color(color),
              roughness: 0.3,
              metalness: 0.7,
              envMapIntensity: 1,
            });
          }
        });
      }
    }
  }, [gltf, color]);
  
  // Add subtle auto-rotation if enabled
  useFrame((state, delta) => {
    if (ref.current && autoRotate) {
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group dispose={null}>
      <primitive
        object={gltf.scene}
        ref={ref}
        position={position}
        scale={scale}
      />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);

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
