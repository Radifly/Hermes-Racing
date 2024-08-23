import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import "./css/ModelViewer.css";

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    loader.crossOrigin = "";
  });

  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material) {
        node.material.side = THREE.DoubleSide; // Ensure materials render both sides
        node.material.flatShading = false; // Ensure smooth shading
      }
    }
  });

  return (
    <primitive object={gltf.scene} scale={[4, 4, 4]} position={[0, -1, -1.6]} />
  );
};

const CircularBorder = ({ position, radius, thickness }) => {
  const segments = 128; // Number of segments for the circular geometry
  const ring = new THREE.RingGeometry(
    radius - thickness / 2,
    radius + thickness / 2,
    segments
  );

  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <primitive attach="geometry" object={ring} />
      <meshBasicMaterial
        color="rgba(235, 109, 144, 1)"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export const ModelViewer = ({ modelUrl }) => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [10, 5, 10], fov: 50 }}
        gl={{ antialias: true }}
        shadows
      >
        <ambientLight intensity={0.75} />

        <directionalLight
          intensity={2}
          position={[5, 10, 7.5]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <pointLight position={[-10, 10, -10]} intensity={500} />

        <pointLight position={[10, -10, 10]} intensity={30} />
        <pointLight position={[-10, -10, -10]} intensity={30} />
        <pointLight position={[10, 10, -10]} intensity={30} />
        <pointLight position={[-10, 10, 10]} intensity={30} />

        <Suspense fallback={"Loading"}>
          <Model url={modelUrl} />
        </Suspense>

        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enablePan={false}
          enableDamping
          dampingFactor={0.25}
          rotateSpeed={0.5}
        />

        <CircularBorder position={[0, -1, 0]} radius={8} thickness={0.2} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
