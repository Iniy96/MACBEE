import React from 'react'
import "./careerAttention.scss"
//import react icons
import { RiShareForward2Fill } from "react-icons/ri"

const CareerAttention = () => {
    return (
        <div className='mt-4 pt-4 border-top '>
            <h5 className='fw-bold pb-2 text-center text-lg-start'>Attention</h5>
            <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                <p style={{ width: "80%" }}>We directly accept applications from eligible candidates and conduct interviews for the selection. We have not authorized any individual or entity to conduct recruitment or interview for employment in this company. If any vacancy's posted above is fit for you, <a href='#'> Apply here</a>.
                    <br />
                    Otherwise share your cv here, we will let you know, when the suitable vacancy’s available.</p>
                <div class="upload-btn-wrapper">
                    <button class="btn btn-primary "><span className='pe-3'><RiShareForward2Fill size={30} /></span><span >Share Your CV </span> </button>
                    <input type="file" name="myfile" />
                </div>
            </div>
        </div>
    )
}

export default CareerAttention