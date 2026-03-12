import { daysOpen, socials } from '../../Constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact =()=>{
    return(
        <footer id="contact">
            <div className='content'>
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Restaurant</h3>
                    <p>Restaurant address here</p>
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