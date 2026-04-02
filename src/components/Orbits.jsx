import React, { useMemo } from "react";
import * as THREE from "three";

export default function Orbits({ distance, show = true, segments = 64 }) {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * 2 * Math.PI;
      vertices.push(Math.cos(theta) * distance, 0, Math.sin(theta) * distance);
    }
    geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geom;
  }, [distance, segments]);

  return show ? (
    <lineLoop geometry={geometry}>
      <lineBasicMaterial attach="material" color="white" linewidth={1} />
    </lineLoop>
  ) : null;
}