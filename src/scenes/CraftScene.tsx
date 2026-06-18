import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges, Float, Icosahedron, OrbitControls } from '@react-three/drei';
import type { Mesh } from 'three';

function D20() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.22;
      mesh.current.rotation.x += delta * 0.08;
    }
  });
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.1}>
      {/* detail 0 = a true 20-faced icosahedron — a d20 */}
      <Icosahedron ref={mesh} args={[1.7, 0]}>
        <meshStandardMaterial
          color="#1a0f1c"
          emissive="#ff2d8e"
          emissiveIntensity={0.28}
          roughness={0.35}
          metalness={0.5}
          flatShading
        />
        <Edges threshold={1} color="#ff4da0" />
      </Icosahedron>
    </Float>
  );
}

export default function CraftScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 2]}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 4]} intensity={1.1} />
      <pointLight position={[-5, -3, -2]} intensity={2.6} color="#ff2d8e" />
      <pointLight position={[4, 2, 3]} intensity={1.1} color="#c4ff3d" />
      <D20 />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
