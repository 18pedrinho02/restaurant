import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const About=()=>{
    return (
        <section id="about" className=" px-4">
            <h1 className="text-5xl font-bold text-amber-900 text-center mt-30">About Us</h1>
            <p className="text-2xl text-amber-800 text-center mt-30">
                At Bella Taste, we craft unforgettable dining experiences. <br/>Our chefs blend traditional recipes with modern techniques, using only the finest ingredients.<br/>

Whether you’re here for a family dinner or a special celebration, every dish is prepared with passion and care.<br/><br/>

Chef Antonio Rossi<br/>
Head Chef & Culinary Director
            </p>
        </section>
    )
}

export default About