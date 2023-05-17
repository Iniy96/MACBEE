import React, { useEffect } from 'react'
//image import
import Serviceheroectionimage from "../../../assets/servicesHeroSection.png"
//import styles
import "./servicesHeroSection.scss"
//import animation lirary
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const ServiceHeroSection = () => {

    const serviceHeroAnimation1 = useAnimation()

    const [serviceHeroRef1, serviceHeroInView1] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (serviceHeroInView1) {
            serviceHeroAnimation1.start({
                opacity: 1,
                transition: { delay: 0.75, duration: 2 },
            });
        } 
    }, [serviceHeroInView1]);

    return (
        <motion.div className='ServicesHeroSection-wrapper' initial={{opacity:0}} ref={serviceHeroRef1} animate={serviceHeroAnimation1}>
            <div className='ServicesHeroSection-left'>
                <h3>Our Services</h3>
                <p>What we do</p>
            </div>
            <div className='ServicesHeroSection-right'>
                <div className='w-100 h-100'>
                    <img src={Serviceheroectionimage} alt="" className='w-100 h-100' style={{ borderRadius: "1rem" }} />
                </div>
                <p>End to end solution for our customers tailored to their needs is what makes us different.</p>
                <p>   Not only it saves cost, but makes it easy for the customers to engage with our solutions.</p>
            </div>
        </motion.div>
    )
}
