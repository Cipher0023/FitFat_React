import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Airplane } from '../models/Airplane'


type Props = object

export function TelaTheejs({}: Props) {
  return (
    <div className="">

      <Canvas
      className="w-full aspect-square"
      camera={{position: [1.5, 1, 1.4], fov:55}} 
      >
        <Suspense>

          <Scene/>

        </Suspense>
      </Canvas>
    </div>
  )
}

function Scene() {
  return (
    <group>

      <OrbitControls />

      <Environment preset="sunset" background /> 

      {/*<pointLight position={[1,1,1] intensity={5}} />  código para ponto de luz*/}


      <mesh>
        <meshStandardMaterial/>
        <Airplane/>
      </mesh>
  </group>
  )
}