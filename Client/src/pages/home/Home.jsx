import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { HeroSection } from '../../components/heroSection/HeroSection'
import { Footer } from '../../components/footer/Footer'
import { AboutUs } from './aboutus/AboutUs'
import { Joinus } from './aboutus/joinus/Joinus'
import { Questions } from '../contact/questions/Questions'
import { BottomGradient } from '../../components/bottomGradient/BottomGradient'
import ProductCarousel from './productCarousel/ProductCarousel'
import { motion, spring, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ServiceCards } from './aboutus/servicecards/ServiceCards'


let herosectionData = {
  "image": false,
  "topic": "Think Different Make Difference!",
  "content": "A pure play internet company have multiple products in various sectors.",
  "button": "Learn More",
  "background": "herosecimgBg"
}

export const Home = () => {


  // const homeanimation1 = useAnimation()
  //homeanimation1.start({ opacity: 1, y: 1, transition: { delay: 0.25, duration: 0.25 } })

  const homeanimation1 = useAnimation();
  const homeanimation2 = useAnimation();
  const homeanimation3 = useAnimation();


  const [homeref1, home1inView] = useInView({
    threshold: 0.2, triggerOnce: true
  });

  const [homeref2, home2inView] = useInView({
    threshold: 0.2, triggerOnce: true
  });
  const [homeref3, home3inView] = useInView({
    threshold: 0.2, triggerOnce: true
  });


  useEffect(() => {
    if (home1inView) {
      homeanimation1.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.25, duration: 0.5 },
      });
    } else {
      homeanimation1.start({ opacity: 0, y: -50 });
    }
  }, [home1inView]);

  useEffect(() => {
    if (home2inView) {
      homeanimation2.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.25, duration: 0.25 },
      });
    }
    if (!home2inView) {
      homeanimation2.start({ opacity: 0, y: -50 });
    }
  }, [home2inView]);

  useEffect(() => {
    if (home3inView) {
      homeanimation3.start({
        opacity: 1,
        y: 0, scale: 1,
        transition: { delay: 1, duration: 0.2, type: spring },
      });
    }
    if (!home3inView) {
      homeanimation3.start({ opacity: 0, y: -100, scale: 0.75 });
    }
  }, [home3inView]);




  return (
    <>
      <div>

        <Navbar />

        <HeroSection data={herosectionData} />
        <div >
          <motion.p ref={homeref1}
            animate={homeanimation1}
            className='text-center my-5 m-0 px-2'>
            You can check out some of our amazing products here. Experience the difference from the similar one's!
          </motion.p>
          <div>
            <motion.div ref={homeref2} animate={homeanimation2}
              className='col-9 col-lg-10 mx-auto'>
              <ProductCarousel />
            </motion.div>
          </div>
          <motion.div
            ref={homeref3} animate={homeanimation3}
            className='pt-5 text-center'>
            <a href="#" className='btn btn-outline-secondary '>VIEW ALL PRODUCTS</a>
          </motion.div>

        </div>
        <motion.div>
          <AboutUs />
        </motion.div>
        <div className=' d-flex justify-content-evenly'>
          <ServiceCards />
        </div>
        <div>
          <Joinus />
        </div>
        <div className='container'>
          <Questions />
        </div>
        <Footer />
        <BottomGradient />
      </div>
    </>
  )
}
