import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = ()=>{
    return(
        <section id="hero" className="restaurant-img">

            <div className="flex-center col-center abs-center">
                <h1>Fine Dining Experience</h1>
                <p>Discover unforgettable flavors</p>
                <button href="#reservation">Reserve a Table</button>
            </div>

        </section>
    )
}

export default Hero