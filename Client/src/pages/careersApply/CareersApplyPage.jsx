import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
//import Components
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { Footer2 } from '../../components/footer2/Footer2'
import HeroSection2 from '../../components/herosection2/HeroSection2'
import CareerOpeningApply from './careeropeningApply/CareerOpeningApply'



// import data
import JOBOPENINGS from '../../data/jobOpenings'

//import react iceons
import { BsArrowLeft } from "react-icons/bs"


export const CareersApplyPage = () => {

    const { jobtitle } = useParams()

    const [filterOpening, setfilterOpening] = useState("All")   //changes the selection menu in the herosection 2
    const [SelectedOpening, setSelectedOpening] = useState()
    const [displaySelectMenu, setdisplaySelectMenu] = useState(true)
    const [displaySearchFilter, setdisplaySearchFilter] = useState(true)
    const [renderCareerPage, setrenderCareerPage] = useState(false) //tell which component to render (job openings or job apply component)

    const careerList = JOBOPENINGS.map((OPENING) => OPENING.jobTitle)  //sets the list option for herosection2 which is going as object prop 

    useEffect(() => {
        const FilterParams = JOBOPENINGS.filter((OPENING) => jobtitle === OPENING.params)
        setfilterOpening(FilterParams[0].jobTitle)
    }, [])

    useEffect(() => {
        setSelectedOpening(JOBOPENINGS.filter((OPENING) => filterOpening === OPENING.jobTitle)[0])
    }, [filterOpening])

    const heroSection2 = {
        "title": "CAREER",
        "tagline": "Discover Your New Career",
        "shortDesc1": "Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours.Kickstart your journey today.",
        "List": careerList
    }


    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>

            <div className='container'>
                <HeroSection2 data={heroSection2} filter={filterOpening} setfilter={setfilterOpening} diplayListOption={renderCareerPage} displaySelectMenu={displaySelectMenu} displaySearchFilter={displaySearchFilter} />
                <div className=' pt-2 pb-2 border-top border-bottom '>
                    <Link to="/careers" className='text-dark' style={{ cursor: 'pointer' }}><BsArrowLeft size={25} /><span className='ps-3'>Back to Products</span>
                    </Link>

                </div>
                {
                    SelectedOpening && <CareerOpeningApply JOBOPENINGS={SelectedOpening} />
                }
            </div>

            <Footer2 />

        </div>
    )
}
