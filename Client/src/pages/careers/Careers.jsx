import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import Components
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { Footer2 } from '../../components/footer2/Footer2'
import CareerOpenings from './openings/CareerOpenings'
import CareerAttention from './careerAttention.jsx/CareerAttention'
import HeroSection2 from '../../components/herosection2/HeroSection2'
import CareerOpeningApply from './careeropeningApply/CareerOpeningApply'

//import styles
import "./careers.scss"

// import data
import JOBOPENINGS from '../../data/jobOpenings'

//import react iceons
import { BsArrowLeft } from "react-icons/bs"


export const Careers = () => {

  const [filterOpening, setfilterOpening] = useState("All")   //changes the selection menu in the herosection 2
  const [renderCareerPage, setrenderCareerPage] = useState(true) //tell which component to render (job openings or job apply component)

  const careerList = JOBOPENINGS.map((OPENING) => OPENING.jobTitle)  //sets the list option for herosection2 which is going as object prop 

  const SelectedOpening = JOBOPENINGS.filter((OPENING) => filterOpening === OPENING.jobTitle) //filters the job which the user select through a select list in herosection2

  const heroSection2 = {
    "title": "CAREER",
    "tagline": "Discover Your New Career",
    "shortDesc1": "Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours.Kickstart your journey today.",
    "List": careerList
  }

  const handleApplyBtn=(jobtitle)=>{
    setrenderCareerPage(!renderCareerPage)
    setfilterOpening(jobtitle)
  }


  return (
    <div className='careers-page-wrapper pb-3'>
      <div className='container pt-3'>
        <Navbar2 />
      </div>

      <div className='container'>
        <HeroSection2 data={heroSection2} filter={filterOpening} setfilter={setfilterOpening} diplayListOption={renderCareerPage}/>
        {
          renderCareerPage ? (
            <>
              {
                filterOpening === "All"
                 ? <CareerOpenings JOBOPENINGS={JOBOPENINGS} handleApplyBtn={handleApplyBtn}/> 
                 : <CareerOpenings JOBOPENINGS={SelectedOpening} handleApplyBtn={handleApplyBtn}/>
              }
              <CareerAttention />
            </>
          ) : (
            <>
              <div className=' pt-2 pb-2 border-top border-bottom '>

                <div className='m-0'>
                  <div className='text-dark' style={{cursor:'pointer'}} onClick={()=>{setrenderCareerPage(!renderCareerPage);setfilterOpening("All")}}>
                    <BsArrowLeft size={25} />
                    <span className='ps-3'>Back to Careers</span>
                  </div>
                </div>

              </div>
              {
                <CareerOpeningApply  JOBOPENINGS={SelectedOpening[0]}/>
              }
            </>
          )
        }

      </div>

      <Footer2 />

    </div>
  )
}
