import React, { useState } from 'react'


const CareerOpeningApply = ({JOBOPENINGS}) => {

    const [selectFile, setselectFile] = useState(null);

    const changeHandler = (event) => {
		setselectFile(event.target.files[0]);
	};

    console.log("selectFile",selectFile);

    return (
        <>
        {
            
        }
            <div className='pt-4 pb-5'>
                <h6 className='fw-700'>{JOBOPENINGS.jobTitle}</h6>
                <p className='mb-2 fw-bold ' style={{ fontSize: "0.9rem" }}>{JOBOPENINGS.experience}yr experience <span className='text-muted'>|</span> {JOBOPENINGS.noOfOpenings} Opening</p>
                <p className='m-0 pb-2'>{JOBOPENINGS.shortDesc}</p>
                <p className='text-muted' style={{ fontSize: "0.9rem" }}>Posted on: {JOBOPENINGS.postedOn}</p>
                <p className='fw-bold'>Job Description</p>
                <ul className='p-0' style={{ textAlign: "justify" }}>
                    {
                        JOBOPENINGS.jobDesc.slice(0,2).map((item,i)=>{
                            return <li key={i}>{item}</li>
                        })
                        }
                    <div className="collapse" id="careeropeningApplyCollapse-description">
                        {
                            JOBOPENINGS.jobDesc.slice(2).map((item,i)=>{
                                return <li key={i}>{item}</li>
                            })
                        }
                    </div>
                    <p className='text-primary pt-3' >
                        <a data-bs-toggle="collapse" href="#careeropeningApplyCollapse-description" aria-expanded="false">
                            More ...
                        </a></p>
                </ul>
                <p className='fw-bold'>Job Location : {JOBOPENINGS.location}</p>
                <div className='w-50'>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-700 '>Apply</p>
                        <p>
                            <a className='text-dark' data-bs-toggle="collapse" href="#careeropeningApplyCollapse-formopenclose" aria-expanded="false">
                                Open
                            </a></p>
                    </div>
                    <div className="collapse" id="careeropeningApplyCollapse-formopenclose">
                        <div className='d-flex flex-column gap-4 pt-3'>
                            <input type="text" className="form-control" placeholder="Full Name" />
                            <input type="text" className="form-control" placeholder="Address" />
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">+91</span>
                                <input type="text" className="form-control" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <input type="text" className="form-control" placeholder="Email-id" />
                            <input type="file" onChange={changeHandler} className="form-control btn btn-primary" id="myFile" name="filename" />
                        </div>
                        <div className='d-flex gap-5 mt-5 align-items-center'>
                            <button type='submit' className='btn btn-outline-secondary '>Submit</button>
                            <div className='text-success'>Application has been successfully submited.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default CareerOpeningApply