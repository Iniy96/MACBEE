import React, { useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2';
import HeroSection2 from '../../components/herosection2/HeroSection2';
import { Footer2 } from '../../components/footer2/Footer2';
import SERVICES from '../../data/services';
import { useNavigate } from 'react-router-dom';

const Services2 = () => {

    const navigate = useNavigate()

    const [displaySearchFilter, setdisplaySearchFilter] = useState(true)

    const serviceSection2 = {
        "title": "SERVICES",
        "tagline": "Future makes simple, through Technology",
        "shortDesc1": "Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours. Kickstart your journey today.",
        "List": [],
    }
    
    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 data={serviceSection2} displaySearchFilter={displaySearchFilter} />
                <div className=' pt-4 pb-5 border-top'>
                    <p className='pt-3'>We directly accept applications from eligible candidates and conduct interviews for the selection. We have not authorized </p>
                </div>

                <div>
                    <div className="row mx-0 gy-5 pb-3" style={{ columnGap: "6rem" }}>
                        {
                            SERVICES?.map((SERVICE) => {
                                return (
                                    <div key={SERVICE.title} className="col-12 px-0 border-bottom col-md-5">
                                        <h6 className='fw-700'>{SERVICE.title}</h6>
                                        <p >{SERVICE.shortDesc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-5 pb-3'>
                        <p>We directly accept applications from eligible candidates and conduct interviews for the selection. We have not authorized any individual or entity to conduct recruitment or interview for employment in this company. If any vacancy's posted above is fit for you, Apply here.</p>
                        <button className='btn btn-outline-secondary mt-3' onClick={() => navigate("/services/serviceconsultation")}>Book a Consultation</button>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Services2