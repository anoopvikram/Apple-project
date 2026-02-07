import React, { useEffect, useRef } from 'react'

export const Hero = () => {
    const videoRef = useRef();

    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate = 3;
    },[]);

  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png"/>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
            <button>Buy</button>
            <p>From $1000 or $100/mo for 12 months</p>
        </div>
    </section>
  )
}
