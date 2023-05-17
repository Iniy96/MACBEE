import React from 'react'
import "./contact.css"
import { Navbar } from '../../components/navbar/Navbar'
import { HeroSection } from "../../components/heroSection/HeroSection"
import { ContactDetails } from './contactdetails/ContactDetails'
import { Questions } from './questions/Questions'
import { Footer } from '../../components/footer/Footer'
import { BottomGradient } from '../../components/bottomGradient/BottomGradient'

let hersectionData={
  "image":true,
  "topic":"Connect With MCABEE!",
  "content":"Thank you for reaching us ! Select the service you need form below.",
  "background":"herosecimgBg"
}

export const Contact = () => {
  return (
    <div >
      <Navbar />
      <HeroSection data={hersectionData}/>
      <div className='contact-page-content'>
        <ContactDetails />
        <Questions />
      </div>
      <Footer/>
      <BottomGradient/>
    </div>
  )
}
