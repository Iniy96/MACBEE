import React from 'react'
import "./herosection.css"
import { GoogleMapIcon } from '../../assets/GoogleMapIcon';
import { motion } from "framer-motion"

export const HeroSection = ({ data }) => {
  
  const { image, topic, content, button,background } = data
  return (
    <div className={`hero-section ${background}`}>
      <div className='hero-section-content text-white'>
        {
          image && (
            <motion.div initial={{ opacity: 0, y: "-200vh" }}
            animate={{ opacity: 1, y: 1 }}
            transition={{delay:1.5}}  className='GoogleMapIconContainer'>
              <GoogleMapIcon width={5} height={5}/>
            </motion.div>
          )
        }

        <motion.h3
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 1 }}
          transition={{delay:0.5,duration:1        }}>
            {topic}
            </motion.h3>
        <motion.p initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 1 }}
          transition={{delay:3 ,duration:1 }} className='pb-4'>{content}</motion.p>
        {
          button && <motion.a initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: 1 }}
          transition={{delay:4.5,duration:1}} className='heroSectionbtn' href='#'>{button}</motion.a>
        }

      </div>
    </div>
  )
}
