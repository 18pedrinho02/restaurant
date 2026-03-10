import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import {navLinks} from '../../Constants/index.js'

const Navbar=()=>{

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                <p>Bella Taste</p>
                </a>
                
                <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar