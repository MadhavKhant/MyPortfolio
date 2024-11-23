/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei'
import birdscene from '../Assets/3d/bird.glb'
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const BirdModel = () => {

    const bird = useGLTF(birdscene);
    const scene = bird.scene;
    const birdref = useRef();
    const animations = bird.animations;
    const AnimationName = animations[0].name;
    const {actions} = useAnimations(animations, birdref);

    useEffect(() => {
      actions[AnimationName].play();
    })

    useFrame(({clock, camera}) => {
      
      birdref.current.position.y = Math.sin(clock.elapsedTime)*0.6;
      
      if(birdref.current.position.x > camera.position.x + 5)
        birdref.current.rotation.y = 2;
      else if(birdref.current.position.x < camera.position.x - 5)
        birdref.current.rotation.y = 0;

      if(birdref.current.rotation.y === 0)
      {
        birdref.current.position.x += 0.01;
        birdref.current.position.z -= 0.01;
      }
      else
      {
        birdref.current.position.x -= 0.01;
        birdref.current.position.z += 0.01;
      }
    })

  return (
    <mesh 
      position={[-5, 2, 1]} 
      scale={[0.003, 0.003, 0.003]} 
      ref={birdref}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default BirdModel
