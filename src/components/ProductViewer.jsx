import React from 'react'
import { useMacbookStore } from '../store';
import clsx from "clsx";
import { Canvas } from '@react-three/fiber';
import MacbookModel14 from './models/Macbook-14';
import { OrbitControls } from '@react-three/drei';
import useMediaQuery from "react-responsive"
import { StudioLight } from './three/StudioLight';
import { ModelSwitcher } from './three/ModelSwitcher';


export const ProductViewer = () => {
    const {color, scale, setColor, setScale} = useMacbookStore(); 
    const isMobile = useMediaQuery({query: '(max-width:1024px)'})
    return (
    <section id="product-viewer">
        <h2>Take a closer look.</h2>
        <div className='controls'>
            <p className='info'>MacBook 16" in {color}</p>

            <div className='flex-center gap-5 mt-5'>
                <div className='color-control'>
                    <div onClick={()=>setColor('#fc8282')} className={clsx('bg-red-300', color === '#fc8282' && 'active')}></div>
                    <div onClick={()=>(setColor('#68bbfb'))} className={clsx('bg-blue-500', color === '#68bbfb' && 'active')}></div>
                </div>

                <div className='size-control'>
                    <div onClick={()=>(setScale(0.06))} className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                        <p>14"</p>
                    </div>
                    <div onClick={()=>setScale(0.08)} className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                        <p>16"</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-white text-4xl'>Render Canvas</p>
            <Canvas id="canvas" camera={{position:[0,2,5], fov:50, near:0.1, far:100}}>
                <StudioLight/>
                <ModelSwitcher scale={scale} isMobile={isMobile}/>
            </Canvas>
    </section>
  )
}
