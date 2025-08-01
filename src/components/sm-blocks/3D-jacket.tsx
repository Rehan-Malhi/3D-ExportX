"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function JacketModel() {
  const gltf = useLoader(GLTFLoader, '/models/jacket.glb');
  return <primitive object={gltf.scene} scale={0.5} />;
}

export default function JacketViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }} className="!w-full !h-full">
      <ambientLight />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <JacketModel />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
