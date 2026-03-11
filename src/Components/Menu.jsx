import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { menuList } from '../../Constants/index.js'

const Menu=()=>{
    return(
        <section id="menu">
            <div className="container">
                <div className='mini-container'>
                    <h2 className='text-3xl'>Starters</h2>
                    <ul>
                        {menuList
                            .filter(item => item.category==='starter') // só pega os que têm popular: false
                            .map(({ name, description, price }) => (
                            <li key={name} className="flex justify-between items-start">
                                <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mini-container'>
                    <h2 className='text-3xl'>Mains</h2>
                    <ul>
                        {menuList
                            .filter(item => item.category==='main') // só pega os que têm popular: false
                            .map(({ name, description, price }) => (
                            <li key={name} className="flex justify-between items-start">
                                <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mini-container'>
                    <h2 className='text-3xl'>Desserts</h2>
                    <ul>
                        {menuList
                            .filter(item => item.category==='dessert') // só pega os que têm popular: false
                            .map(({ name, description, price }) => (
                            <li key={name} className="flex justify-between items-start">
                                <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Menu