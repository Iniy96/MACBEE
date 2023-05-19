import React, { useEffect, useState } from 'react'
import "./footer2.scss"
import { FooterTabs2 } from './footertabs2/FooterTabs2'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import upbottomarrow from "../../assets/Layer-38.png"

export const Footer2 = () => {

    const [selectvalue, setselectvalue] = useState("Select Region")

    const handleSelectValue = (e)=>{
        e.preventDefault()
        setselectvalue(e.target.value)
    }

    const footeranimation1 = useAnimation()

    const [footerref1,footerinView1] = useInView({threshold:0.2,triggerOnce:true})

    useEffect(()=>{
        if(footerinView1){
            footeranimation1.start({opacity:1,y:0,transition:{delay:0.25,duration:0.25}})
        }
        if(!footerinView1){footeranimation1.start({opacity:0,y:-75})}
    },[footerinView1])

    return (
        <div className="container-fluid footer-container2 mt-5 pt-5" style={{ borderTop: "1px dashed black" }} >
            <motion.footer ref={footerref1}
        animate={footeranimation1}>
                <div className="footerTab2 position-relative">
                    <FooterTabs2/>
        

                    <div className='footericontab2 pt-3'>
                        <h5 className='fw-bold fs-6 text-end  text-muted'>Follow us on</h5>
                        <div className='d-flex gap-2'>
                            <a className='footerIconDiv2 footerfbsocialmediaicon' href='https://www.facebook.com/'><FaFacebookF className='' /></a>
                            <a className='footerIconDiv2 footerlinkedinmediaicon' href='https://www.linkedin.com/'><FaLinkedinIn className='' /></a>
                            <a className='footerIconDiv2 footertweetsocialmediaicon' href='https://twitter.com/home'> <FaTwitter className='' /></a>
                          {/*   <a className='footerIconDiv2 footerwhastapsocialmediaicon' href='https://www.whatsapp.com/'><FaWhatsapp className='' /></a> */}
                        </div>
                        {/*  */}
                        <select value={selectvalue} onChange={(e)=>handleSelectValue(e)} className="form-select"  style={{ width: "fit-content",fontSize:"0.8rem" }}>
                        <option >Region</option>
                        <option value="1">India</option>
                        <option value="2">Europe</option>
                        <option value="3">Australia-NZ</option>
                        <option value="4">US-Canada</option>
                        <option value="5">Middle East</option>
                    </select>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4 mt-4 border-top">
                    <p className='m-0'>Copyright (c) 2023 <span className='fw-bold'><a href="#">MCABEE</a> </span></p>
                    <div className='position-relative' style={{fontSize:"14px"}}>
                            <span><a className='texthoverunderline2 text-muted' href="#">Privacy</a> </span>
                            <span className='px-3 texthoverunderline2'>
                                <a href="#" className='text-muted'>Terms</a></span>
                            {/* <span className='px-3 termscookiesverLine texthoverunderline text-muted'><a href="#">Term</a></span> */}
                            <span><a className='texthoverunderline2 text-muted' href="#">Cookies</a> </span>
                        </div>
                    
                </div>
                {/* <div className='upbotomarrowdiv'>
                   <a href="#"> <img src={upbottomarrow} alt="" className='upbotomarrow' /></a>
                </div> */}
            </motion.footer>
        </div>
    )
}
