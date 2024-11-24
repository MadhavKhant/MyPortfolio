/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import jetmodel from '../Assets/3d/jet.glb';
import smoke from '../Assets/images/smoke.png';
import * as THREE from 'three';

  let px = 40;
  let py = -10;
  let pz = -15;

const Jet = () => {
  const jet = useGLTF(jetmodel); // Load the 3D model
  const jetRef = useRef(); // Ref for controlling the plane
  const smokeRef = useRef([]); // Array of smoke particle refs
  const jetscene = jet.scene;

  const [particles, setParticles] = useState([]); // To manage smoke particles
  const smokeTexture = useTexture(smoke); // Load smoke texture

  // Define path (a quadratic Bézier curve in 3D)
  const pathPoints = [
    new THREE.Vector3(px - 20, py - 20, pz),
    new THREE.Vector3(px + 300, py + 200, pz - 300),
    new THREE.Vector3(px - 110, py + 20, pz - 50),
    new THREE.Vector3(px + 20, py , pz ),
    new THREE.Vector3(px + 500, py + 100, pz - 60),
  ];

  const path = new THREE.CatmullRomCurve3(pathPoints, false); // Create the curve path

  const rotationControlPoints = [
    { progress: 0, rotation: new THREE.Euler(3.7, 10, 10) }, // Start of the path
    { progress: 0.25, rotation: new THREE.Euler(3.8, 9.8, 11) }, // 25% of the way
    { progress: 0.60, rotation: new THREE.Euler(3.6, 7, 11) }, // 50% of the way
    { progress: 0.65, rotation: new THREE.Euler(3.6, 5, 11) }, // 75% of the way
    { progress: 1, rotation: new THREE.Euler(3, 5, 7) }, // End of the path
  ];

  // Animation progress (0 to 1) for moving along the path
  const [progress, setProgress] = useState(0);

  useFrame(() => {
    if (jetRef.current) {
      const newProgress = (progress + 0.001) % 1; // Loop the animation smoothly
      setProgress(newProgress); // Update progress

      // Get position along the path
      const position = path.getPointAt(newProgress); // Interpolate along the path
      jetRef.current.position.set(position.x, position.y, position.z);

      // Find the two closest control points for the current progress
      for (let i = 0; i < rotationControlPoints.length - 1; i++) {
        const start = rotationControlPoints[i];
        const end = rotationControlPoints[i + 1];
  
        // Interpolate between rotation control points
        if (newProgress >= start.progress && newProgress <= end.progress) {
          const alpha = (newProgress - start.progress) / (end.progress - start.progress);
  
          // Lerp between start and end rotations
          jetRef.current.rotation.set(
            THREE.MathUtils.lerp(start.rotation.x, end.rotation.x, alpha),
            THREE.MathUtils.lerp(start.rotation.y, end.rotation.y, alpha),
            THREE.MathUtils.lerp(start.rotation.z, end.rotation.z, alpha)
          );
          break;
        }
      }

      // Apply a second rotation based on the direction of travel (tangent)
      jetRef.current.rotation.set(
        jetRef.current.rotation.x, // Rotation based on direction
        jetRef.current.rotation.y,         // Maintain the previous yaw
        jetRef.current.rotation.z  // Rotation based on direction
      );
  
      // Smoke particle effect
      setParticles((prev) => [
        ...prev.slice(-100), // Limit the number of particles
        {
          position: [
            jetRef.current.position.x + 4, // Match jet's x position
            jetRef.current.position.y + 6, // Slightly above the jet's y position
            jetRef.current.position.z - 6, // Slightly behind the jet along z-axis
          ],
          rotation: [
            0.04, // Random rotation on X
            0.001, // Random rotation on Y
            1, // Random rotation on Z
          ],
          life: 1.0, // Initial particle life
        },
      ]);
    }
  
    // Update smoke particle lifetimes
    setParticles((prev) =>
      prev
        .map((p) => ({ ...p, life: p.life - 0.01 })) // Decrease life of each particle
        .filter((p) => p.life > 0) // Remove particles with expired life
    );
  });
  

  return (
    <>
      {/* Plane */}
      <mesh
        position={[22, 3, -15]} // Start position
        scale={[3, 3, 2]} // Adjust scale for the jet size
        ref={jetRef} // Attach ref to the mesh
      >
        <primitive object={jetscene} />
      </mesh>

      {/* Smoke Particles */}
      {particles.map((particle, index) => (
        <Plane
          key={index}
          position={particle.position} // Use the calculated position
          scale={5 * particle.life} // Scale decreases as life decreases
          ref={(el) => (smokeRef.current[index] = el)}
          rotation={new THREE.Euler(particle.rotation[0], particle.rotation[1], particle.rotation[2])} // Apply random rotation
        >
          <meshStandardMaterial
            attach="material"
            transparent
            opacity={particle.life} // Fade out as life decreases
            map={smokeTexture} // Apply smoke texture
            depthWrite={false} // Prevent depth issues
          />
        </Plane>
      ))}
    </>
  );
};

export default Jet;
