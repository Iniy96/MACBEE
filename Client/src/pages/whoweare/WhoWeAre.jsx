//library imports
import React from 'react'


// component import
import { HeroSection } from "../../components/heroSection/HeroSection"
import { Navbar } from "../../components/navbar/Navbar"
import { AboutUs } from '../home/aboutus/AboutUs'
import { ServiceCards } from '../home/aboutus/servicecards/ServiceCards'
import { Footer } from '../../components/footer/Footer'
import { BottomGradient } from '../../components/bottomGradient/BottomGradient'
import { AboutUsContact } from './AboutusContact/AboutUsContact'
import { WhoweareTeamContent } from './whoweareteamcontent/WhoweareTeamContent'

//styles import

const herosectionData = {
  "image": false,
  "topic": "The Story Behind Us!",
  "content": "Here we share some important facts that you need to know about us!",
  "button": "Learn More",
  "background": "herosecGradientBg"
}

const whoweareteamcontent1 =["About MCABEE", "A team that treats technology as a passion!", "MCABEE is a company founded with the aim of making some useful applications that are needed in the daily life of a common man.  It doesn't have to be a completely new invention.  The aim is to create a change in the market by completely replacing an existing product that demands a reinvention.", "By providing such a product, our desire is to provide a new experience to the customers, completely change the current trend and gain better income through it.  We mostly target subscription-based SaaS products in B2B and B2C segments.  Rather than how many players there are at present, we consider whether it is possible to overcome them if a reinvention is done.  Also, this product should surprise the users."]

const whoweareteamcontent2 = ["Our Story, Team", "Our Story", "Originated as a startup company in May 2012, we developed two SaaS products in Healthcare and Architecture segments.  Also, as a web design and development company, we successfully completed web applications for 25+ organizations.", "Shibin Sebastian, the founder of MCABEE, has 11 years of experience.  An entrepreneur as well as a professional UI/UX design expert, he has been working in the field of web design and development since 2012."]



export const WhoWeAre = () => {
  return (
    <>
      <Navbar />
      <HeroSection data={herosectionData} />
      <AboutUs />
      <WhoweareTeamContent />
      <div className=' d-flex justify-content-evenly'>
        <ServiceCards />
      </div>
      <AboutUsContact />
      <Footer />
      <BottomGradient />
    </>
  )
}
