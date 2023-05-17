import React, { useEffect} from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

//import styles
import "./aboutUsContact.scss"

export const AboutUsContact = () => {

  const aboutuscontactanimation1 = useAnimation();
  const aboutuscontactanimation2 = useAnimation();

  const [aboutuscontactref1, aboutuscontactinView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [aboutuscontactref2, aboutuscontactinView2] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (aboutuscontactinView1) {
      aboutuscontactanimation1.start({
        opacity: 1, y: 0,
        transition: { delay: 0.25, duration: 0.25 },
      });
    }
    if (!aboutuscontactinView1) { aboutuscontactanimation1.start({ opacity: 0, y:25 }); }
  }, [aboutuscontactinView1]);

  useEffect(() => {
    if (aboutuscontactinView2) {
      aboutuscontactanimation2.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.25, duration: 0.25 },
      });
    } 
    if (!aboutuscontactinView2) { aboutuscontactanimation2.start({ opacity: 0, y:-25 }); }
  }, [aboutuscontactinView2]);


  return (
    <div className='mt-5 py-4 d-flex justify-content-center'>
      <div className='px-3  '>
        <motion.div ref={aboutuscontactref1} animate={aboutuscontactanimation1}>
          <h4>Just Say 'Hi', We are here to assist you.    </h4>
          <h4 className='fw-700'>Contact MCABEE</h4>
        </motion.div>
        <motion.div className='whowerPageContactbtn' ref={aboutuscontactref2} animate={aboutuscontactanimation2}>
          <a href="#" className=''>CONTACT</a>
        </motion.div>
      </div>
    </div>
  )
}
