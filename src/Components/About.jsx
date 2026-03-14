import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {

  useGSAP(() => {
    // Split do título
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    // Define estado inicial das imagens
    gsap.set("#about .top-grid > div, #about .bottom-grid > div", {
      opacity: 0,
      y: 50
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1
      }
    });

    scrollTimeline
      // Animação do título
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out"
      })
      // Animação das imagens
      .to("#about .top-grid > div, #about .bottom-grid > div", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out"
      }, "-=0.5");
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="container">
          <div className="md:col-span-8">
            <h2>Where every detail matters — from the first bite to the last.</h2>
          </div>
          <div className="sub-content">
            <p>
              Every dish we serve is a reflection of our passion for detail — 
              from the finest ingredients to the final presentation. 
              That dedication is what turns a simple meal into a truly memorable experience.
            </p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="top-grid">
            <div className="md:col-span-3">
            <img src="https://i.pinimg.com/1200x/72/d9/af/72d9af964d384fc2a16fd087c1062a7c.jpg" />
            </div>
            <div className="md:col-span-6">
            <img src="https://i.pinimg.com/736x/f7/46/de/f746de84d2888d26dfeda84bad78e592.jpg" />
            </div>
            <div className="md:col-span-3">
            <img src="https://i.pinimg.com/1200x/8d/b5/dd/8db5ddfd1828d38ddbb00a0f628d0b3a.jpg" />
            </div>
        </div>

        <div className="bottom-grid">
            <div className="md:col-span-8">
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="md:col-span-4">
            <img src="https://i.pinimg.com/1200x/57/c4/e6/57c4e687343851e2025f282f39577339.jpg" />
            </div>
        </div>
        </div>
      </div>
  );
};

export default About;