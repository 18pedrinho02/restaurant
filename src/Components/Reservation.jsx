import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Reservation=()=>{
    return(
        <section className="center">
            <h1 className="text-5xl text-primary mt-30 font-bold mb-20">Contact Us</h1>
            <p className="text-amber-900 text-2xl font-semibold">Phone Number: +351 999 999 999</p>
            <p className="text-amber-900 text-2xl font-semibold">Email: restauranrname@gmail.com</p>
        </section>
    )
}

export default Reservation