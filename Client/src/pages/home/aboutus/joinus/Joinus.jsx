import React, { useEffect } from 'react'
import "./joinus.scss"
import aboutusarowpng from "../../../../assets/aboutusarrow.png"
import readmoreArrow from "../../../../assets/readmorearrow.png"
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';


export const Joinus = () => {
    const joinusanimation1 = useAnimation();
    const joinusanimation2 = useAnimation();
    const joinusanimation3 = useAnimation();
    const joinusanimation4 = useAnimation();
    const joinusanimation5 = useAnimation();
    const joinusanimation6 = useAnimation();

    const [joinusref1, joinusinView1] = useInView({ threshold: 0.2,triggerOnce: true });
    const [joinusref2, joinusinView2] = useInView({ threshold: 0.2,triggerOnce: true });
    const [joinusref3, joinusinView3] = useInView({ threshold: 0.2,triggerOnce: true });
    const [joinusref4, joinusinView4] = useInView({ threshold: 0.2,triggerOnce: true });
    const [joinusref5, joinusinView5] = useInView({ threshold: 0.2,triggerOnce: true });
    const [joinusref6, joinusinView6] = useInView({ threshold: 0.2,triggerOnce: true });

    useEffect(() => {
        if (joinusinView1) {
            joinusanimation1.start({
                opacity: 1, y: 0,
                transition: { delay: 0.25, duration: 0.25 },
            });
        }
        if (!joinusinView1) { joinusanimation1.start({ opacity: 0, y: 75 }); }
    }, [joinusinView1]);

    useEffect(() => {
        if (joinusinView2) {
            joinusanimation2.start({
                opacity: 1, y: 0,
                transition: { delay: 0.25, duration: 0.25 },
            });
        }
        if (!joinusinView2) { joinusanimation2.start({ opacity: 0, y: -25 }); }
    }, [joinusinView2]);

    useEffect(() => {
        if (joinusinView3) {
            joinusanimation3.start({
                opacity: 1, scale: 1,
                transition: { delay: 0.65, duration: 0.25 },
            });
        }
        if (!joinusinView3) { joinusanimation3.start({ opacity: 0, scale: 0.5 }); }
    }, [joinusinView3]);

    useEffect(() => {
        if (joinusinView4) {
            joinusanimation4.start({
                opacity: 1, y: 0,
                transition: { delay: 0.45, duration: 0.25 },
            });
        }
        if (!joinusinView4) { joinusanimation4.start({ opacity: 0, y: 25 }); }
    }, [joinusinView4]);

    useEffect(() => {
        if (joinusinView5) {
            joinusanimation5.start({
                opacity: 1, y: 0, scale: 1,
                transition: { delay: 0.35, duration: 0.25 },
            });
        }
        if (!joinusinView5) { joinusanimation5.start({ opacity: 0, y:0, scale: 0 }); }
    }, [joinusinView5]);

    useEffect(() => {
        if (joinusinView6) {
            joinusanimation6.start({
                opacity: 1, y: 0, scale: 1,
                transition: { delay: 0.65, duration: 0.25 },
            });
        }
        if (!joinusinView6) { joinusanimation6.start({ opacity: 0, y: 25, scale: 0 }); }
    }, [joinusinView6]);

    return (
        <div className='joinus pt-5'>

            {/* THis is the product carousel.... 
            this will hidden normally and visible on smaller screens*/}

            <motion.div ref={joinusref1} animate={joinusanimation1} >
                <h2 className='fw-700 text-center'>Join us</h2>
                <p className='text-center mt-3'>See is there is a suitable position for you here.</p>
            </motion.div>
            <div className="joius-carousel-container mt-5">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    loop={true}
                    breakpoints={{
                        // when window width is >= 992px
                        900: {
                            slidesPerView: 3,

                        },
                        660: {
                            slidesPerView: 2,

                        }
                    }}
                >
                    <SwiperSlide >
                        <div className='div1'  >
                            <h5>Flutter Developer,Sr</h5>
                            <p>Inviting passionate, experienced Flutter Developers to join with our team. Qualified candidates share your profile with us!</p>
                            <a href=""><img src={readmoreArrow} alt="" /></a>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className='div2' >
                            <h5>Full Stack Developer,Sr</h5>
                            <p>Inviting passionate, experienced Full Stack Developers to join with our team. Qualified candidates share your profile with us!</p>
                            <a href="#"><img src={readmoreArrow} alt="" /></a>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className='div3' >
                            <h5>Software Tester,Sr</h5>
                            <p>Inviting experienced Software Tester to join with our team. Qualified candidates share your profile with us!</p>
                            <a href="#" className='mt-auto'><img src={readmoreArrow} alt="" /></a>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <motion.div className='aboutusarrow' ref={joinusref5} animate={joinusanimation5} >
                <img src={aboutusarowpng} alt="" />
            </motion.div>
            <motion.div className='text-center' ref={joinusref6} animate={joinusanimation6}>
            <button className='btn btn-outline-secondary' >Search and Apply</button>
            </motion.div>
        </div>
    )
}
