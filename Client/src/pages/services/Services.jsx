import React from 'react'
//import components
import { ServiceHeroSection } from './serviceHeroSection/ServiceHeroSection'
import { Navbar } from "../../components/navbar/Navbar"
import { HeroSection } from "../../components/heroSection/HeroSection"
import { AboutUsContact } from '../whoweare/AboutusContact/AboutUsContact'
import { Footer } from '../../components/footer/Footer'
import { BottomGradient } from '../../components/bottomGradient/BottomGradient'
import { SingleService } from './singleService/SingleService'

//import icons
import android from "../../assets/serviceicons/android.png"
import webappdevelopment from "../../assets/serviceicons/web-app-development.png"
import digitalmarketing from "../../assets/serviceicons/digital-marketing.png"
import cloudserver from "../../assets/serviceicons/cloud-server.png"
import dataanalysis from "../../assets/serviceicons/data-analysis.png"
import ux from "../../assets/serviceicons/ux.png"
import api from "../../assets/serviceicons/api.png"
import socialmedia from "../../assets/serviceicons/social-media.png"

const herosectionData = {
  "image": false,
  "topic": "",
  "content": "",
  "button": "",
  "background": "herosecGradientBg"
}

const servicesData = [
  {
    "id":1,"logoicon":android, "title":"Mobile App Development","content":"One of the best IOS - Android Mobile app development company in India","background": "bluetogreengradient"
  },
  {
    "id":2,"logoicon":webappdevelopment, "title":"Web Application’s","content":"One of the best IOS - Android Mobile app development company in India","background":"greentobluegradient"
  },
  {
    "id":3,"logoicon":ux, "title":"Web UI/UX Designs","content":"One of the best IOS - Android Mobile app development company in India","background":"greentobluegradient"
  },
  {
    "id":4,"logoicon":digitalmarketing, "title":"Digital Marketing, SEO","content":"One of the best IOS - Android Mobile app development company in India","background": "bluetogreengradient"
  },
  {
    "id":5,"logoicon":socialmedia, "title":"Social Media Marketing","content":"One of the best IOS - Android Mobile app development company in India","background": "bluetogreengradient"
  },
  {
    "id":6,"logoicon":cloudserver, "title":"Cloud Hosting","content":"One of the best IOS - Android Mobile app development company in India","background":"greentobluegradient"
  },
  {
    "id":7,"logoicon":api, "title":"API Integration","content":"One of the best IOS - Android Mobile app development company in India","background":"greentobluegradient"
  },
  {
    "id":8,"logoicon":dataanalysis, "title":"Big Data Analysis","content":"One of the best IOS - Android Mobile app development company in India","background": "bluetogreengradient"
  },
]

export const Services = () => {

  return (
    <>
      <Navbar />
      <HeroSection data={herosectionData} />
      <ServiceHeroSection />
      <div className='container mt-5'>
        <div className='justify-content-between d-flex flex-wrap'>
          {
            servicesData.map((item)=>{
              console.log("item",item);
              return <SingleService data={item} key={item.id} />
            })
          }
          
        </div>

      </div>
      <AboutUsContact />
      <Footer />
      <BottomGradient />
    </>
  )
}
