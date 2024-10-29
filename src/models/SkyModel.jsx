/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


import {  useGLTF } from '@react-three/drei'
import skyscene from '../Assets/3d/sky.glb'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SkyModel = ({isRotating}) => {
  const sky = useGLTF(skyscene); 
  const skyref = useRef();

  useFrame(() => {
    if(isRotating)
      skyref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={skyref}>
      <primitive object={sky.scene} /> 
    </mesh>
  );
}

export default SkyModel;
