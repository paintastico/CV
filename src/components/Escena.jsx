/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, } from 'react'
import { useGLTF } from '@react-three/drei'


const Escena = (props) => {



  const modelPath = `${import.meta.env.BASE_URL}models/simpleDuck2.glb`;


  // ▶ 2. Carga el modelo con la ruta condicional
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <group {...props} dispose={null} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials['Material.002']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_3.geometry} material={materials.BLU} />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/simpleDuck2.glb`);

export default Escena;



