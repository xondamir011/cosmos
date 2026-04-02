import React, { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

export default function Starfield({ count = 2000 }) {
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push((Math.random() - 0.5) * 2000); // x
      arr.push((Math.random() - 0.5) * 2000); // y
      arr.push((Math.random() - 0.5) * 2000); // z
    }
    return new Float32Array(arr);
  }, [count]);

  return (
    <Points positions={positions}>
      <PointMaterial color="white" size={1.5} sizeAttenuation />
    </Points>
  );
}