import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function CameraController({ camera, renderer, planetsRef, selectedPlanet }) {
  useEffect(() => {
    if (!camera || !renderer) return;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 50;
    controls.maxDistance = 2000;
    controls.maxPolarAngle = Math.PI / 2;

    const animateControls = () => {
      requestAnimationFrame(animateControls);
      controls.update();
    };
    animateControls();

    return () => {
      controls.dispose();
    };
  }, [camera, renderer]);

  useEffect(() => {
    if (!camera || !planetsRef?.current || !selectedPlanet) return;

    const planet = planetsRef.current[selectedPlanet];
    if (planet && planet.mesh) {
      const pos = planet.mesh.position;
      camera.position.set(pos.x + planet.distance * 0.5, pos.y + 50, pos.z + planet.distance * 0.5);
      camera.lookAt(pos);
    }
  }, [selectedPlanet, camera, planetsRef]);

  return null;
}