import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import planets from "../data/planets";
import Planet from "./Planet";
import Orbits from "./Orbits";
import Starfield from "./StarField";
import Card from "./Card";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
`;

// 🔥 Planetlarni almashib turish uchun komponent
function PlanetSelector({ setSelectedPlanet }) {
  const [index, setIndex] = useState(0);

  useFrame((state) => {
    const nextIndex = Math.floor(state.clock.elapsedTime / 6) % planets.length;
    if (nextIndex !== index) {
      setIndex(nextIndex);
      setSelectedPlanet(planets[nextIndex]);
    }
  });

  return null; // hech narsa chizmaymiz
}

export default function SolarSystem3D({ isPaused = false, showOrbit = true }) {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 100, 500], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={1} />

        <Starfield count={3000} />

        {/* Sun */}
        <mesh>
          <sphereGeometry args={[25, 32, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* Planets */}
        {planets.map((p) => (
          <React.Fragment key={p.name}>
            <Orbits distance={p.distance} show={showOrbit} />
            <Planet {...p} isPaused={isPaused} />
          </React.Fragment>
        ))}

        {/* PlanetSelector Canvas ichida bo‘lishi kerak */}
        <PlanetSelector setSelectedPlanet={setSelectedPlanet} />

        <OrbitControls />
      </Canvas>

      {/* Panel doim tepada */}
      <Card planet={selectedPlanet} />
    </CanvasContainer>
  );
}