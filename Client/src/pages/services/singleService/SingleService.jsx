import React, { useEffect } from 'react'

//styles import 
import "./singleservicecard.scss"

//import animation lirary
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const SingleService = ({ data }) => {
    const { logoicon, title, content,background } = data

    const singleServiceAnimation1 = useAnimation()

    const [singleServiceRef1, singleServiceInView1] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (singleServiceInView1) {
            singleServiceAnimation1.start({
                opacity: 1,y:0,
                transition: { delay: 0.25, duration: 0.5 },
            });
        } 
    }, [singleServiceInView1]);

    return (
        <motion.div className={`border singleservicecard mt-4  px-4 py-3 ${background}`} ref={singleServiceRef1} animate={singleServiceAnimation1} initial={{opacity:0,y:-50}}>
            <div className='bg-light p-3' >
                <img src={logoicon} alt="" className='h-100 w-100' />
            </div>
            <h3 className='fw-700 fs-2 py-3 text-white'> {title}</h3>
            <p>{content}</p>
        </motion.div>
    )
}
