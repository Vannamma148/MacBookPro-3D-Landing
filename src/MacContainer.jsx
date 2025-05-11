import React from "react";
import {
  ScrollControls,
  useGLTF,
  useScroll,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export const MacContainer = () => {
    
  const { viewport } = useThree();

  let model = useGLTF("./mac.glb");
  let texture = useTexture("./red.jpg");
  let meshes = {};
  
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = texture;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  let data = useScroll();

  useFrame(() => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  const groupPosition = [
    viewport.width > 10 ? 0 : -0.5,
    viewport.height > 10 ? -12 : -10,
    14,
  ];

  return (
    <group position={groupPosition}>
      <primitive object={model.scene} />
    </group>
  );
};
