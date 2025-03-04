import React from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei';

const Bird = () => {
    const {scene, animatons} = useGLTF(birdScene);
  return (
    <mesh position={[5, 1, 0]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird