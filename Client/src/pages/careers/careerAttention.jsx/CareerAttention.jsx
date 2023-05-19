import React, { useEffect, useRef, useState } from 'react'
import "./careerAttention.scss"
//import react icons
import { RiShareForward2Fill } from "react-icons/ri"
import { SendResume } from '../../../Services/api'

const CareerAttention = () => {
    const [showsuccessmsg, setshowsuccessmsg] = useState(false)
    const [successmsg, setsuccessmsg] = useState(true)
    const [showProgress, setshowProgress] = useState(false)
    const [selectedFile, setselectedFile] = useState(null)

    const handleFileinputChange = (e) => {
        e.preventDefault()
        setselectedFile(e.target.files[0])
    }
    useEffect(() => {
        if (selectedFile) {
            handleSubmit()
        }
    }, [selectedFile])

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.resume = selectedFile
        formData.name = ""
        formData.address = ""
        formData.mobile = ""
        formData.email = ""
        formData.jobtitle = ""
        setshowProgress(true)
        const res = await SendResume(formData)
        if (res.status === "ok") {
            setshowProgress(false)
            setsuccessmsg(true)
            setshowsuccessmsg(true)
        } else {
            setshowProgress(false)
            setsuccessmsg(false)
            setshowsuccessmsg(true)
        }
        setTimeout(() => {
            setshowsuccessmsg(false)
        }, 8000);
    }

    return (
        <div className='mt-4 pt-4 border-top '>
            <h5 className='fw-bold pb-2 text-center text-lg-start'>Attention</h5>
            <div className="row">
                <div className='col col-md-9 '>
                    We directly accept applications from eligible candidates and conduct interviews for the selection. We have not authorized any individual or entity to conduct recruitment or interview for employment in this company. If any vacancy's posted above is fit for you, <a href='mailto:hr@mcabee.in'> Apply here</a>.
                    <br />
                    Otherwise share your cv here, we will let you know, when the suitable vacancy’s available.
                </div>
                <div className='col col-md-3 text-end'>
                    <div className="btn btn-primary btn-file">
                        <RiShareForward2Fill size={30} />
                        <span> Share Your CV</span>
                        <input type="file" onChange={handleFileinputChange} name="resume" accept=".pdf" capture="filesystem" />
                    </div>
                    <div style={{ fontSize: "0.85rem" }}>
                        {
                            showProgress
                                ? (<div className="spinner-border text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                ) : ""
                        }
                        {
                            showsuccessmsg
                                ? (
                                    successmsg
                                        ? <span className='text-success'>Application has been Submitted successfully.</span>
                                        : <span className='text-danger'>Something went wrong. Please try again.</span>
                                )
                                : ""
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CareerAttention