import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Planet({ radius, distance, color, speed, isPaused, onClick }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!isPaused && meshRef.current) {
      const t = clock.getElapsedTime() * speed;
      meshRef.current.position.x = distance * Math.cos(t);
      meshRef.current.position.z = distance * Math.sin(t);
    }
  }); 
  
  return (
    <mesh position={[distance, 0, 0]} ref={meshRef} onClick={() => onClick()}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  ); 
}