import { useEffect } from 'react';
import * as THREE from 'three';

const Sun = ({ scene, onSunReady }) => {
  useEffect(() => {
    if (!scene) return;

    const sunGeometry = new THREE.SphereGeometry(15, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xfdb813,
      emissive: 0xfdb813,
      emissiveIntensity: 1
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    onSunReady?.(sun);

    return () => {
      scene.remove(sun);
      sunGeometry.dispose();
      sunMaterial.dispose();
    };
  }, [scene, onSunReady]);

  return null;
};

export default Sun;