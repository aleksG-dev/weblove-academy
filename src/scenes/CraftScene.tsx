import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import type { Mesh } from 'three';

function Form() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.18;
      mesh.current.rotation.z += delta * 0.06;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <Icosahedron ref={mesh} args={[1.5, 16]}>
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#2a1c6b"
          emissiveIntensity={0.5}
          roughness={0.18}
          metalness={0.45}
          distort={0.38}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  );
}

export default function CraftScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.6], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1.3} />
      <pointLight position={[-5, -3, -2]} intensity={2.4} color="#8b5cf6" />
      <pointLight position={[4, -2, 3]} intensity={1.2} color="#3b82f6" />
      <Form />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
