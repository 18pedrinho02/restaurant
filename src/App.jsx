import gsap from 'gsap'
import React from "react";
import {ScrollTrigger, SplitText} from 'gsap/all';
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Menu from './Components/Menu.jsx'
import Reservation from './Components/Reservation.jsx'
import Footer from './Components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App=()=>{
    return(
        <main>
            <Navbar/>
            <Hero/>
            <About/>
            <Menu/>
            <Reservation/>
            <Footer/>
        </main>
    )
}

export default App