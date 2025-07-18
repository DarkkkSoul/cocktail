import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

function Hero() {

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paraSplit = new SplitText('.subtitle', { type: 'lines' });

        gsap.from(heroSplit.chars, {
            yPercent: 70,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
        });

        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            stagger: 0.05,
            ease: 'expo.out',
            delay: 0.8,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)
    }, [])

    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>

                <img src="/images/hero-left-leaf.png" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" className='right-leaf' />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">sip the Spirit <br /> of Summer</p>
                        </div>

                        <div className="view-cocktails">
                            <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed to delight your senses.</p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Hero