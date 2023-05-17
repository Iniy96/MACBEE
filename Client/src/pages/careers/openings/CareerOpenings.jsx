import React from 'react'

const CareerOpenings = ({ JOBOPENINGS, handleApplyBtn }) => {
    const calculateTotalOpenings = () => {
        return JOBOPENINGS.reduce((accumulator, current) => accumulator + (current.noOfOpenings), 0);
    }
    return (
        <>
            {<div className=' pt-4 pb-3 border-top'>
                <h4 className='fw-700 fs-3 pt-2 pb-0 text-center text-lg-start'>0{calculateTotalOpenings()} Openings</h4>
                <div className="row gap-3">
                    {
                        JOBOPENINGS?.map((OPENING) => {
                            return (
                                <div key={OPENING.jobTitle} className="col-12 col-md-5 py-4">
                                    <h6 className='fw-700'>{OPENING.jobTitle}</h6>
                                    <p className='mb-2  fw-bold ' style={{ fontSize: "0.9rem" }}>0{OPENING.experience} yr experience  <span className='text-muted'>|</span>  0{OPENING.noOfOpenings} Opening </p>
                                    <p>{OPENING.shortDesc}</p>
                                    <p className='text-muted' style={{ fontSize: "0.9rem" }}>Posted on: {OPENING.postedOn}</p>
                                    <button className='btn btn-outline-secondary ' onClick={() => handleApplyBtn(OPENING.jobTitle)}>APPLY</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>}
        </>
    )
}

export default CareerOpenings