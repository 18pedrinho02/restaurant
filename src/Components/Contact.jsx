import { daysOpen, socials } from '../../Constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact =()=>{

    useGSAP(()=>{
        const titleSplit=SplitText.create('#contact h2', {type:'words'});

        const pSplit=SplitText.create('#contact p', {type:'lines'});

        const scrollTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:"top 80%",
                end:'bottom 20%',
                scrub:1
            }
        });

        const scrollTimeline2=gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:"top 60%",
                end:'bottom 0%',
                scrub:1
            }
        });

        scrollTimeline.from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            duration:1,
            stagger:0.05,
            ease:'expo.out'
        })

        scrollTimeline2.from(pSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1,
            stagger:0.05,
            ease:'expo.out'
        })

    });


    return(
        <footer id="contact">
            <div className='content'>
                <h2>Where to Find Us</h2>
                <div className='iframe'>
                    <h3>Visit Our Restaurant</h3>
                    <p>Restaurant address here</p>
                    <iframe
                        src="https://www.google.com/maps/embed?...">
                    </iframe>
                </div>
                <div>
                    <h3>
                        Contact
                    </h3>
                    <p>Phone Number: +351 999 999 999</p>
                    <p>Email: restauarnt@myrestaurant.com</p>
                </div>
                <div>
                    <h3>Days Open</h3>
                    {daysOpen.map((time)=>(
                        <p key={time.day}>
                            {time.day}:{time.hours}
                        </p>
                    ))}
                </div>
                <div className='socials'>
                    <h3>Socials</h3>
                <div className='icons'>
                    {socials.map((social)=>(
                        <a key={social.name} href={social.url} target='_blank' aria-label={social.name}>
                            <img src={social.img}/>
                        </a>
                    ))}
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact