import React from 'react'
import { Footer2 } from '../../components/footer2/Footer2'
import { HeroSection } from '../../components/heroSection/HeroSection'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { BsArrowRight } from "react-icons/bs"
import "./home2.scss"
import ProductCarousel2 from './productCarousel2/ProductCarousel2'
import PRODUCTS from '../../data/products'
import { useNavigate, Link } from 'react-router-dom'


let herosectionData = {
    "image": false,
    "topic": "Think Different Make Difference!",
    "content": "A pure play internet company have multiple products in various sectors.",
    "button": "Learn More",
    "background": "herosecimgBg"
}

const Home2 = () => {
    const navigate = useNavigate()
    return (
        <div className='careers-page-wrapper pb-3'>
            <HeroSection data={herosectionData} />
            <div className="container position-absolute" style={{ top: "1rem", right: "50%", transform: "translateX(50%)" }}>
                <Navbar2 />
            </div>
            <div className="container pt-5 ">
                <div  >
                    <h5 className='fw-700 pb-2'>PRODUCTS</h5>
                    <h3 className='fw-700 pb-2'>We have the Team, technology and Tenacity</h3>
                    <div className='ps-3' style={{ borderLeft: "3px solid #FF4BB7", textAlign: "justify" }}>
                        <p>Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                        <p>Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints. Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                    </div>
                </div>
                <button className='btn btn-outline-secondary mt-3 ms-4' onClick={() => navigate("/products")} >Know More</button>
                {/* carousel  */}
                <ProductCarousel2 />
                <div className='text-end' >
                    <h5 className='fw-700 pb-2'>SERVICES</h5>
                    <h3 className='fw-700 pb-2'>We have the Team, technology and Tenacity</h3>
                    <div className='pe-3' style={{ borderRight: "3px solid #FF4BB7", textAlign: "justify" }}>
                        <p>Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                        <p>Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints. Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                    </div>
                </div>
                <div className='d-flex gap-4 pt-5 pb-3 mt-3 flex-column flex-md-row justify-content-between'>
                    <div className='text-start'>
                        <h5 className='fw-700'>Mobile App Development</h5>
                        <p>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                    </div>
                    <div className='text-center'>
                        <h5 className='fw-700'>Mobile App Development</h5>
                        <p>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                    </div>
                    <div className='text-end'>
                        <h5 className='fw-700'>Mobile App Development</h5>
                        <p>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <button className='btn btn-outline-secondary ' onClick={() => navigate("/services")}>Know More</button>
                </div>
                <div className='d-flex flex-column py-5 my-3 flex-lg-row justify-content-between align-items-center'>
                    <div className=' py-4 col col-lg-6'>
                        <h5 className='fw-700 pb-2'>CAREER</h5>
                        <h3 className='fw-700 pb-2'>Discover your New Career</h3>
                        <p>Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours.</p>
                        <div className='d-flex  align-items-center' >
                            Explore Openings <Link to="/careers" className='text-dark exploreOpeningsbtn ms-4' ><BsArrowRight size={20} /></Link>
                        </div>
                    </div>
                    <div className='bg-white border px-5 py-4 ' style={{ maxWidth: "400px", borderRadius: "1rem" }}>

                        <h5 className='fw-700 pb-2'>News</h5>
                        <div>
                            <h6 className='fw-700 text-muted'>Extensive experience building modern web applications using React.</h6>
                            <p>Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right ..</p>
                        </div>
                        <button className='btn btn-outline-secondary'>More News</button>

                    </div>
                </div>
                <div className='pb-4' >
                    <h5 className='fw-700 pb-2'>ABOUT</h5>
                    <h3 className='fw-700 pb-2'>We have the Team, technology and Tenacity</h3>
                    <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between'>
                        <div className='col col-md-8 col-lg-9'>
                            <div className='ps-3' style={{ borderLeft: "3px solid #FF4BB7", textAlign: "justify" }}>
                                <p>Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                                <p>Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints. Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints.</p>
                            </div>
                        </div>
                        <div className='col-5 ms-auto col-md-3 col-lg-2 text-end'>
                            <p className='border-bottom' style={{cursor:"pointer"}}>Our Story</p>
                            <p className='border-bottom' style={{cursor:"pointer"}}>The Team</p>
                            <p className='border-bottom' style={{cursor:"pointer"}}>Our Principles</p>
                            <p className='border-bottom' style={{cursor:"pointer"}}>Future</p>
                        </div>
                    </div>
                    <button className='btn btn-outline-secondary mt-3 ms-4' onClick={() => navigate("/whoweare")} >Know More</button>

                </div>











            </div>

            <Footer2 />
        </div>
    )
}

export default Home2