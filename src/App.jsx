import gsap from 'gsap'
import React from "react";
import {ScrollTrigger, SplitText} from 'gsap/all';
import Navbar from './Components/Navbar.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App=()=>{
    return(
        <Navbar/>
    )
}

export default App