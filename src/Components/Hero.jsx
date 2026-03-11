import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import { SplitText } from "gsap/all";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    // Text animation
    gsap.from(heroSplit.chars, {
      yPercent: 200,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });


    // Example scrollTrigger using isMobile
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    // You can create another timeline using startValue/endValue if needed
  }, []);

  return (
    <section id="hero">
      <h1 className="title col-center mt-30 md:mt-50 text-8xl font-serif">Belle Cousin</h1>

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Fresh. Flavorful. Unforgettable.</p>
            <p className="subtitle">Savor the Essence <br />of Fine Dining</p>
          </div>

          <div className="view-menu">
            <p className="subtitle">
              Every dish on our menu is crafted with the finest ingredients,
              culinary expertise, and a passion for flavor — 
              designed to create a memorable dining experience.
            </p>
            <a href="#menu">View Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;