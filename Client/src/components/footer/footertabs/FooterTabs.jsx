import React from 'react'
import "./footertabs.scss"

export const FooterTabs = ({ data }) => {
    return (
        data && (
            <div className='footerTabs ps-4 pt-3'>
                <h5 className='fw-bold fs-6 text-muted'>{data[0]}</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[1]}</a></li>
                    <li className="nav-item my-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[2]}</a></li>
                    <li className="nav-item my-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[3]}</a></li>
                    <li className="nav-item my-1"><a href="#" className={`nav-link p-0 ${data[4]==="View all"||data[4]==="More"?"text-primary":"text-body-secondary"} `}>{data[4]}</a></li>
                </ul>
            </div>
        )
    )
}
