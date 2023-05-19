import React from 'react'
import "./footertabs2.scss"
import { Link } from 'react-router-dom'

export const FooterTabs2 = ({ data }) => {
    return (
        <>
            <div className='footerTabs ps-4 pt-3'>
                <h5 className='fw-bold fs-6 text-muted'>Company</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-1"><Link to="/whoweare" className="nav-link p-0 text-body-secondary">About</Link></li>
                    <li className="nav-item my-1"><Link to="/careers" className="nav-link p-0 text-body-secondary">Careers</Link></li>
                    <li className="nav-item my-1"><Link to="/products" className="nav-link p-0 text-body-secondary">Products</Link></li>
                    <li className="nav-item my-1"><Link to="/services" className="nav-link p-0 text-body-secondary">Services</Link></li>
                </ul>
            </div>
            <div className='footerTabs ps-4 pt-3'>
                <h5 className='fw-bold fs-6 text-muted'>Products</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-1"><Link to="/products/firstlook" className="nav-link p-0 text-body-secondary">Firstlook</Link></li>
                    <li className="nav-item my-1"><Link to="/products/notepad" className="nav-link p-0 text-body-secondary">Notepad</Link></li>
                    <li className="nav-item my-1"><Link to="/products/quick_search" className="nav-link p-0 text-body-secondary">Search Engine</Link></li>
                    <li className="nav-item my-1"><Link to="/products" className="nav-link p-0 text-primary">View all</Link></li>
                </ul>
            </div>
            <div className='footerTabs ps-4 pt-3'>
                <h5 className='fw-bold fs-6 text-muted'>Services</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-1"><Link to="/services/serviceconsultation" className="nav-link p-0 text-body-secondary">Product Design</Link></li>
                    <li className="nav-item my-1"><Link to="/services/serviceconsultation" className="nav-link p-0 text-body-secondary">Mobile Application</Link></li>
                    <li className="nav-item my-1"><Link to="/services/serviceconsultation" className="nav-link p-0 text-body-secondary">Web Application</Link></li>
                    <li className="nav-item my-1"><Link to="/services/serviceconsultation" className="nav-link p-0 text-body-secondary">Cloud</Link></li>
                </ul>
            </div>
            <div className='footerTabs ps-4 pt-3'>
                <h5 className='fw-bold fs-6 text-muted'>Support</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-1"><a href="mailto:business@mcabee.in" className="nav-link p-0 text-body-secondary">Business Consulting</a></li>
                    <li className="nav-item my-1"><a href="mailto:hr@mcabee.in" className="nav-link p-0 text-body-secondary">HR Support</a></li>
                    <li className="nav-item my-1"><a href="mailto:business@mcabee.in" className="nav-link p-0 text-body-secondary">Product Related</a></li>
                    <li className="nav-item my-1"><a href="mailto:mail@mcabee.in" className="nav-link p-0 text-body-secondary">General Queries</a></li>
                </ul>
            </div>
            </>
        )
    
}