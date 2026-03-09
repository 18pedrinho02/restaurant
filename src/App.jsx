import gsap from 'gsap'
import React from "react";
import {ScrollTrigger, SplitText} from 'gsap/all';
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App=()=>{
    return(
        <main>
            <Navbar/>
            <Hero/>
            <About/>
        </main>
    )
}

export default App