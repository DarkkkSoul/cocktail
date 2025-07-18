import React from 'react'
import { navLinks } from '../assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function Navbar() {

    useGSAP(() => {

        const navTl = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTl.fromTo('nav',
            {
                backgroundColor: 'transparent',
            }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blue(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });

    }, []);

    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" className='w-9' />
                    <p className='tracking-wider'>Hydrate</p>
                </a>

                <ul>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar