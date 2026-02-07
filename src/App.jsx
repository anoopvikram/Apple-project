import React, { Profiler } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductViewer } from './components/ProductViewer'
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from 'gsap';
export const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    </main>
  )
}
