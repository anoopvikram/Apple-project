import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

export const StudioLight = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
            <group>
                <Lightformer
                    form="rect"
                    intensity={10}
                    scale={10}
                    position={[-15, 5, -5]}
                    rotation-y={Math.PI/2}
                />
                <Lightformer
                    form="rect"
                    intensity={10}
                    scale={10}
                    position={[15, 5, -5]}
                    rotation-y={Math.PI/2}
                />
            </group>
            
            
        </Environment>
            <group>
                <spotLight
                    position={[-8, 10,5]}
                    intensity={Math.PI *0.2}
                    angle={0.15}
                    decay={0}
                />
            </group>
    </group>
  )
}
