// app/page.tsx — 3D Jacket Customizer (1‑Day MVP)
// Requirements: Next.js (app router), Tailwind optional (used for utility classes),
// npm i three @react-three/fiber @react-three/drei
// Place your model at: public/jacket.glb  (so it resolves as "/jacket.glb")

"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds } from "@react-three/drei";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Html,
  ContactShadows,
  Loader,
} from "@react-three/drei";
import type { Group, Mesh, MeshStandardMaterial } from "three";
import { ACESFilmicToneMapping, SRGBColorSpace, Color } from "three";

function JacketModel({ color }: { color: string }) {
  // If your file is somewhere else, change the path below.
  const { scene } = useGLTF("/jacket.glb");
  const localRef = useRef<Group>(null);

  // Apply a single color to all mesh materials in the model
  useEffect(() => {
    if (!scene) return;
    const c = new Color(color);
    // eslint-disable-next-line
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        const mesh = obj as Mesh;
        // eslint-disable-next-line
        const mat = mesh.material as MeshStandardMaterial | MeshStandardMaterial[] | any;
        if (Array.isArray(mat)) {
          mat.forEach((m) => {
            if (m && "color" in m) (m as MeshStandardMaterial).color.copy(c);
          });
        } else if (mat && "color" in mat) {
          (mat as MeshStandardMaterial).color.copy(c);
        }
      }
    });
  }, [scene, color]);

  return <primitive ref={localRef} object={scene} />;
}
useGLTF.preload("/jacket.glb");

export default function Page() {
  const [color, setColor] = useState<string>("#d1d5db"); // default gray
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const swatches = [
    "#111827", // near-black
    "#6b7280", // gray
    "#ef4444", // red
    "#0ea5e9", // sky
    "#10b981", // emerald
    "#f59e0b", // amber
  ];

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "jacket.png";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">3D Jacket Customizer (1‑Day MVP)</h1>
        <p className="text-gray-600 mt-2">
          Put your <code>jacket.glb</code> in <code>/public</code>. If parts don’t recolor separately, your model
          likely uses a single material—split materials in Blender for per‑part colors.
        </p>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 mt-6">
          {/* Viewer Card */}
          <div className="bg-white rounded-2xl shadow-lg p-3">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Canvas
                gl={{ preserveDrawingBuffer: true }}
                onCreated={({ gl }) => {
                  gl.toneMapping = ACESFilmicToneMapping;
                  gl.outputColorSpace = SRGBColorSpace;
                  canvasRef.current = gl.domElement;
                }}
                shadows
                camera={{ fov: 45 }}
              >
                <Suspense
                  fallback={
                    <Html center className="text-sm text-gray-700 bg-white/80 rounded-xl px-3 py-2 shadow">
                      Loading jacket…
                    </Html>
                  }
                >
                  {/* Realistic environment */}
                  <Environment preset="apartment" background={false} />

                  {/* Lights */}
                  <ambientLight intensity={0.5} />
                  <directionalLight
                    position={[3, 5, 3]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                  />
                  <spotLight position={[-3, 4, -3]} angle={0.3} intensity={0.6} />

                  {/* Auto-fit & center the model */}
                  <Bounds fit clip margin={1.1}>
                    <JacketModel color={color} />
                  </Bounds>


                  {/* Shadows under model */}
                  <ContactShadows position={[0, -1, 0]} opacity={0.5} blur={2} far={4} />

                  {/* Controls */}
                  <OrbitControls
                    makeDefault
                    enablePan={false}
                    minDistance={1}
                    maxDistance={4}
                    autoRotate
                    autoRotateSpeed={0.6}
                  />

                </Suspense>
              </Canvas>

            </div>
          </div>

          {/* Controls Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold">Colors</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {swatches.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-label={`Select ${c}`}
                  className="h-10 w-10 rounded-full border border-black/10 ring-offset-2 focus:ring-2"
                  style={{ background: c, outline: color === c ? "3px solid rgba(0,0,0,.15)" : undefined }}
                  title={c}
                />
              ))}
            </div>

            <div className="mt-6">
              <label className="block text-sm text-gray-600 mb-2">Pick any color</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-10 w-24 cursor-pointer"
              />
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-black text-white shadow hover:opacity-90"
              >
                Download PNG
              </button>
              <a
                href="https://threejs.org/editor/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200"
              >
                Model tips
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Pro tip: For sleeves/zip/body separate colors, split the mesh by parts in Blender and assign
              distinct materials. Then target by material name in code.
            </p>
          </div>
        </div>
      </div>
      <Loader />
    </div>
  );
}
