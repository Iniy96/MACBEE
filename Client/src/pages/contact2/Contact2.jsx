import React, { useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import HeroSection2 from '../../components/herosection2/HeroSection2'
import { Footer2 } from '../../components/footer2/Footer2'
import "./contact2.scss"

const Contact2 = () => {
    const [filterRegion, setfilterRegion] = useState("All")//changes the selection menu in the herosection 2
    const [displaySelectMenu, setdisplaySelectMenu] = useState(true)
    const [displaySearchFilter, setdisplaySearchFilter] = useState(true)
    const [renderContactPage, setrenderContactPage] = useState(false) //tell which component to render (job openings or job apply component)

    const regionList = ["India", "Europe", "Australia-NZ", "US-Canada", "Middle East"] //sets the list option for herosection2 which is going as object prop 

    //const SelectedProduct = PRODUCTS.filter((PRODUCT) => filterProduct === PRODUCT.productName) //filters the job which the user select through a select list in herosection2

    const contactSection2 = {
        "title": "CONTACT",
        "tagline": "Connect with MCABEE",
        "shortDesc1": "You can check out some of our amazing products here. Experience the difference from similar one’s in the market. Our aim is to make some useful applications that are needed in the life of a common man.",
        "List": regionList,
    }

    /*  const handleLearnMoreBtn = (product) => {
         setrenderProductPage(!renderProductPage)
         setfilterProduct(product)
     } */
    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 data={contactSection2} filter={filterRegion} setfilter={setfilterRegion} diplayListOption={setrenderContactPage} displaySelectMenu={displaySelectMenu} displaySearchFilter={displaySearchFilter}/>

                <div className='contact-page-details-content2 pt-5 pb-3 border-top'>
                    <div>
                        <h5 className='mb-4 fw-700'>For General Enquiries</h5>
                        <div >
                            <div className='d-flex pb-2 '>
                                <div className='col-4 col-md-2'>Phone:</div>
                                <div className=' d-flex flex-column flex-md-row' >
                                    <div className='ps-3' style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 400 }} >+91 90722 08666</div>
                                    <div className='ps-3' style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 400 }}>+91 90722 05666</div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='col-4 col-md-2'>Email:</div>
                                <div className='ps-3'><a href="mailto:mail@mcabee.in" className='ahovercontactdetail2' style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 400 }}>mail@mcabee.in</a></div>
                            </div>
                        </div>
                        <div className='contact-page-details-content2 pt-5'>
                            <h5 className='mb-4 fw-700'>For Specific Suport, Choose from below</h5>
                            <div className='d-flex pb-2 '>
                                <div className='col-4 col-md-2'>For business</div>
                                <div className='ps-3'><a href="mailto:mail@mcabee.in" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 400 }}>business@mcabee.in</a></div>
                            </div>
                            <div className='d-flex pb-2'>
                                <div className='col-4 col-md-2'>Job Seekers</div>
                                <div className='ps-3'><a href="mailto:mail@mcabee.in" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 400 }}>hr@mcabee.in</a></div>
                            </div>
                            <div className='d-flex pb-2'>
                                <div className='col-4 col-md-2'>Our Employees</div>
                                <div className='ps-3'><a href="mailto:mail@mcabee.in" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 400 }}>family@mcabee.in</a></div>
                            </div>
                            <div className='d-flex pb-2'>
                                <div className='col-4 col-md-2'>Media/PR</div>
                                <div className='ps-3'><a href="mailto:mail@mcabee.in" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 400 }}>media@mcabee.in</a></div>
                            </div>
                        </div>
                        <div className='contact-page-details-content2 pt-5 pb-2'>
                            <h5 className='mb-4 fw-700'>Find a location</h5>
                            <div className='d-flex flex-column flex-lg-row'>
                                <div className='col col-lg-4 pb-4'>
                                    <h6 className='fw-700 m-0 py-2 border-top border-bottom'>INDIA</h6>
                                    <div className='d-flex flex-row pt-4'>
                                        <div className='fw-700 col-4'>Chennai</div>
                                        <div>
                                        <span className='fw-700'> Regd. office @</span> <br/>715A, 7th Floor, Spencer Plaza<br/>Mount Road, Anna Salai<br/>Chennai - 600 002<br/>Tamil Nadu
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row pt-4'>
                                        <div className='fw-700 col-4'>Kochi</div>
                                        <div>
                                        <span className='fw-700'>Work Station @</span> <br/>Building No. Appartment<br/>Street Name, Location<br/>Ernakulam - 600 018<br/>Kerala
                                        </div>
                                    </div>
                                </div>
                                <div className='col col-lg-4'>
                                    <h6 className='fw-700 m-0 py-2 border-top border-bottom'>UK</h6>
                                </div>
                                <div className='col col-lg-4'>
                                    <h6 className='fw-700 m-0 py-2 border-top border-bottom'>MIDDLE EAST</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer2 />

        </div>
    )
}

export default Contact2