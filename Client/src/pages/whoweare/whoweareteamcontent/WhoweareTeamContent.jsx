import React, { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

//import styles
import "./whoweareTeamContent.scss"

export const WhoweareTeamContent = () => {
  const whowearTeameAnimation1 = useAnimation();
  const whowearTeameAnimation2 = useAnimation();

  const [whowearTeameref1, whowearTeameinView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whowearTeameref2, whowearTeameinView2] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (whowearTeameinView1) {
      whowearTeameAnimation1.start({
        opacity: 1, y: 0,
        transition: { delay: 0.25, duration: 0.25 },
      });
    }
    if (!whowearTeameinView1) { whowearTeameAnimation1.start({ opacity: 0, y: 75 }); }
  }, [whowearTeameinView1]);

  useEffect(() => {
    if (whowearTeameinView2) {
      whowearTeameAnimation2.start({
        opacity: 1, y: 0,
        transition: { delay: 0.25, duration: 0.25 },
      });
    }
    if (!whowearTeameinView2) { whowearTeameAnimation2.start({ opacity: 0, y: 75 }); }
  }, [whowearTeameinView2]);

  return (
    <>
      <div className='col  mt-5' style={{ padding: "0 25px" }}>
        <div className="d-flex flex-column flex-lg-row gap-4 ">
          <motion.div className='border d-flex flex-column WhoweareTeamContent WhoweareTeamContent1' ref={whowearTeameref1} animate={whowearTeameAnimation1}>
            <h5 className='text-primary mb-3 fw-700'>About MCABEE</h5>
            <p>A team that treats technology as a passion!</p>
            <p style={{ textAlign: "justify" }}>MCABEE is a company founded with the aim of making some useful applications that are needed in the daily life of a common man.  It doesn't have to be a completely new invention.  The aim is to create a change in the market by completely replacing an existing product that demands a reinvention.</p>

            <p class="collapse" id="collapseExample1" style={{ textAlign: "justify" }}>By providing such a product, our desire is to provide a new experience to the customers, completely change the current trend and gain better income through it.  We mostly target subscription-based SaaS products in B2B and B2C segments.  Rather than how many players there are at present, we consider whether it is possible to overcome them if a reinvention is done.  Also, this product should surprise the users.</p>

            <button className='btn mt-auto btn-outline-secondary' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" style={{ width: "fit-Content" }}>MORE</button>
          </motion.div>

          {/* Col 2 */}
          <motion.div className='border d-flex flex-column WhoweareTeamContent WhoweareTeamContent2' ref={whowearTeameref2} animate={whowearTeameAnimation2}>
            <h5 className='text-primary pb-3  fw-700'>Our Story, Team</h5>
            <p>Our Story</p>
            <p style={{ textAlign: "justify" }}>Originated as a startup company in May 2012, we developed two SaaS products in Healthcare and Architecture segments.  Also, as a web design and development company, we successfully completed web applications for 25+ organizations.</p>

            <p class="collapse" id="collapseExample1" style={{ textAlign: "justify" }}>Shibin Sebastian, the founder of MCABEE, has 11 years of experience.  An entrepreneur as well as a professional UI/UX design expert, he has been working in the field of web design and development since 2012.</p>

            <button className='btn mt-auto  btn-outline-secondary' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"  style={{ width: "fit-Content" }}>MORE</button>
          </motion.div>
        </div>
      </div>
    </>
  )
}
