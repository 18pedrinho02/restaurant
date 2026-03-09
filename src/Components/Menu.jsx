import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { menuList } from "../../Constants/index.js";

const Menu=()=>{

    const popularDishes = menuList.filter(dish => dish.popular);

    return (
        <section id="menu" className="center">
            <h1 className="text-5xl font-bold text-white text-center mt-30">Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 w-[80%]">
                {popularDishes.map((item) => (
                <div key={item.id} className="bg-white text-black p-6 rounded-xl">
                    <img src={item.image} className="w-full h-48 object-cover rounded-lg"/>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                    <span className="font-bold">{item.price}</span>
                </div>
                ))}
            </div>
            <button className="mt-10 border border-white">See Full Menu</button>
        </section>
    )
}

export default Menu