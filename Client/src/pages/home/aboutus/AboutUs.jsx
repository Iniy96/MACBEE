import React, { useEffect, useRef, useState } from 'react'
import "./aboutus.scss"
import aboutusimg from "../../../assets/aboutus.png"
import CountUp from 'react-countup'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const AboutUs = () => {
    const [counter, setcounter] = useState(false)
    const elementRef = useRef(null);

    // for handling the count animation
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setcounter(true)
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '5px',
            threshold: 0.5, // adjust as needed
            triggerOnce: true
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [elementRef]);

    // for handling motion framer animation
    const aboutusanimation1 = useAnimation();
    const aboutusanimation2 = useAnimation();
    const aboutusanimation3 = useAnimation();
    const aboutusanimation4 = useAnimation();

    const [aboutusref1, aboutusinView1] = useInView({ threshold: 0.2,triggerOnce: true});
    const [aboutusref2, aboutusinView2] = useInView({ threshold: 0.2,triggerOnce: true });
    const [aboutusref3, aboutusinView3] = useInView({ threshold: 0.2,triggerOnce: true });
    const [aboutusref4, aboutusinView4] = useInView({ threshold: 0.2,triggerOnce: true });

    useEffect(() => {
        if (aboutusinView1) {
            aboutusanimation1.start({
                opacity: 1, y: 0,
                transition: { delay: 0.25, duration: 0.25 },
            });
        }
        if (!aboutusinView1) { aboutusanimation1.start({ opacity: 0, y:75 }); }
    }, [aboutusinView1]);

    useEffect(() => {
        if (aboutusinView2) {
            aboutusanimation2.start({
                opacity: 1,
                x: 0,
                transition: { delay: 0.25, duration: 0.35 },
            });
        }
        if (!aboutusinView2) {
            aboutusanimation2.start({ opacity: 0, x: -20 });
        }
    }, [aboutusinView2]);

    useEffect(() => {
        if (aboutusinView3) {
            aboutusanimation3.start({
                opacity: 1,
                x: -30,
                transition: { delay: 0.25, duration: 0.35 },
            });
        }
        if (!aboutusinView3) {
            aboutusanimation3.start({ opacity: 0, x: 10 });
        }
    }, [aboutusinView3]);

    useEffect(() => {
        if (aboutusinView4) {
            aboutusanimation4.start({
                opacity: 1,
                x: 0,
                transition: { delay: 0.5, duration: 0.5 },
            });
        }
        if (!aboutusinView4) {
            aboutusanimation4.start({ opacity: 0, x: 0 });
        }
    }, [aboutusinView4]);


    return (
        <div className='aboutus-content pt-5'>
            <motion.div ref={aboutusref1} animate={aboutusanimation1}>
                <h2 className='fw-700 text-center m-0'>About us</h2>
                <p className='text-center m-0 mt-3'>A team that treats technology as a passion!</p>
            </motion.div>
            <div className='d-flex flex-column flex-md-row col col-md-10 col-lg-8 my-4 pb-4 gap-3 mx-auto justify-content-between'>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-3' ref={elementRef} >
                        {
                            counter && <CountUp start={0} end={100} duration={3} delay={0.3} />
                        }
                    </div>
                    <motion.div ref={aboutusref4} animate={aboutusanimation4}>
                        <div className='fs-4 text-muted'>thousand +</div>
                        <div >product users globally</div>
                    </motion.div>
                </div>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-3' ref={elementRef} >
                        {
                            counter && <CountUp start={0} end={14} duration={3} delay={0.3} />
                        }
                    </div>
                    <motion.div animate={aboutusanimation4}>
                        <div className='fs-4 text-muted'>countries</div>
                        <div >products presence in</div>
                    </motion.div>
                </div>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-3' ref={elementRef} >0{
                        counter && <CountUp start={0} end={3} duration={2} delay={0.3} />
                    }</div>
                    <motion.div animate={aboutusanimation4}>
                        <div className='fs-4 text-muted'>products</div>
                        <div >globally recognized</div>
                    </motion.div>
                </div>
            </div>
            <div className='d-flex align-items-center flex-column flex-lg-row gap-2'>
                <motion.div className='aboutusimg col col-lg-6' ref={aboutusref2} animate={aboutusanimation2}>
                    <img src={aboutusimg} />
                </motion.div>
                <motion.div className='aboutusimgcontent border ' ref={aboutusref3} animate={aboutusanimation3}>
                    <p className='text-muted'>WHO WE ARE</p>
                    <p className='fs-4'>we step into the future with a passionate mind and competitive intelligence.</p>
                    <p style={{ fontSize: "0.9rem" }}>In this rapidly changing world of technology, we pursue it with a competitive intelligence. We focus more making market fit SaaS products. We achieve that goal by redefining the existing products or inventing new products.</p>
                    <p style={{ fontSize: "0.9rem" }}>And also we provide technical support for startup to enterprise level projects.</p>
                    <button className='btn btn-outline-secondary'>more</button>
                </motion.div>
            </div>
            
            
        </div>
    )
}
