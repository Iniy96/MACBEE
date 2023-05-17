import React, { useEffect } from 'react'
import "./servicecards.scss"
import { useAnimation,motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const ServiceCards = () => {

    const servicecardanimation1 = useAnimation();
    const servicecardanimation2 = useAnimation();
    const servicecardanimation3 = useAnimation();

    const [servicecardref1, servicecardinView1] = useInView({threshold: 0.2,triggerOnce: true});
    const [servicecardref2, servicecardinView2] = useInView({threshold: 0.2,triggerOnce: true});
    const [servicecardref3, servicecardinView3] = useInView({threshold: 0.2,triggerOnce: true});

    useEffect(() => {
        if (servicecardinView1) {
            servicecardanimation1.start({opacity: 1,y: 0,
            transition: { delay: 0.25, duration: 0.25 },
          });
        } 
        if(!servicecardinView1){servicecardanimation1.start({ opacity: 0, y: 75,transition: { delay: 0.25, duration: 0.25 } });}
      }, [servicecardinView1]);
      
    useEffect(() => {
        if (servicecardinView2) {
            servicecardanimation2.start({opacity: 1,y: 0,
            transition: { delay: 0.45, duration: 0.25 },
          });
        } 
        if(!servicecardinView2){servicecardanimation2.start({ opacity: 0, y: 75,transition: { delay: 0.25, duration: 0.25 }, });}
      }, [servicecardinView2]);
    useEffect(() => {
        if (servicecardinView3) {
            servicecardanimation3.start({opacity: 1,y: 0,
            transition: { delay: 0.65, duration: 0.25 },
          });
        } 
        if(!servicecardinView3){servicecardanimation3.start({ opacity: 0, y: 75,transition: { delay: 0.25, duration: 0.25 }, });}
      }, [servicecardinView3]);

    return (
        <div className='servicecard d-flex flex-column flex-lg-row justify-content-evenly mt-5'>
            <motion.div className='servicecard1 ' ref={servicecardref1}  animate={servicecardanimation1}>
                <p className='fs-6 fw-700'>Explore Products, <br /> Endless Possiblities ...</p>
                <p>We are working to introduce some amazing products with great features to the market by adding some innovative elements in areas where there is a need for innovation and great business potential.</p>
                <p>We want it to be completely different from the existing ones and innovative enough to be ripe for the next generation.</p>
                <p>Click here to view more</p>
                <button className='text-muted'>Explore</button>
            </motion.div>
            <motion.div className='servicecard1 servicecard2' ref={servicecardref2} animate={servicecardanimation2}>
                <p className='fs-6 fw-bold'>Service offerings .. <br /> Your perfect technology partner..</p>
                <p>From Start-up companies to corporate entries, we are capable to lead them in their web mobile application development,product design and development, digital and social media marketing, cloud hosting and big data analysis related projects.</p>
                <p>From the moment of the ideation to project implimentation and service, we are capable of providing dedicated support</p>
                <p>Read more about our sevices</p>
                <button className='text-muted'>Learn more</button>
            </motion.div>
            <motion.div className='servicecard3' ref={servicecardref3} animate={servicecardanimation3} >
                <p className='fs-6 fw-bold'>In the <span className='fs-5'>NEWS</span></p>
                <div className='border-bottom'>
                    <p className='fw-700'><a href="#" className='text-reset servicecardhoverlink'>MCABEE launched 'Firstlook' a social app for matchmaking, the first of its kind.</a> </p>
                    <p>India's first social network to help find life partners has launched, ushering in a quarter century long shift in the online matchmaking era.</p>
                    <p className="date">01 July 2023</p>
                </div>
                <div className='pt-3'>
                    <p className='fw-700'><a href="#" className='text-reset servicecardhoverlink'>MCABEE announced their 'Notepad' app today.</a> </p>
                    <p>MCABEE announced that their new product 'Notepad' app will be launched in 2023 itself.</p>
                    <p className="date">22 June 2023</p>
                </div>
                <a href="/" className='text-reset servicecardhoverlink'>more</a>
            </motion.div>
        </div>
    )
}
