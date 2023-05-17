import React from 'react'

import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

//import styles
import "./singleProductComponent.scss"
//img import 
import productImg from "../../../assets/homeassets/firstlookproductimg.png"

const SingleProductComponent = ({data}) => {
    const PRODUCT = data[0]
    return (
        <div className='SingleProductComponent d-flex pt-5  flex-column flex-md-row ' >
            <div className='SingleProductComponent-left border'>
                <div >
                    <img src={PRODUCT?.image} className='w-100 h-100' alt="" />
                </div>
                <div className='p-4 pt-5 position-relative'>
                    <h6 className='fw-700'>{PRODUCT?.productName}</h6>
                    <p className='pt-3' style={{ textAlign: "justify" }}>{PRODUCT.productTagline}</p>
                    <div className='position-absolute end-0 bg-primary px-2 text-white' style={{ top: "3rem", fontSize: "0.8rem" }}>{PRODUCT.availability}</div>
                </div>
            </div>
            <div className='SingleProductComponent-right'>
                <h4 className='fw-700'>{PRODUCT?.productName}</h4>
                <p className='pt-2 text-muted' style={{ textAlign: "justify" }}>{PRODUCT.productDesc}</p>
                <div className='d-flex flex-column flex-md-row justify-content-between gap-5'>
                    <div className='col col-lg-4'>
                        <div>
                            <h5 className='fw-700 m-0'>{PRODUCT.playStoreDownloads}+</h5>
                            <p style={{ fontSize: "0.9m" }}>Downloads</p>
                        </div>
                        <div>
                            <h5 className='fw-700 m-0'>{PRODUCT.ratingonPlayStore}</h5>
                            <p style={{ fontSize: "0.9m" }}>Rating on Playstore</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.9m" }}>For downloads, Check it with</p>
                        </div>
                        <a className='btn btn-outline-secondary p-2' href="#"><FaGooglePlay size={32}/><span className='ps-2'>Google Playstore</span></a>
                    </div>
                    <div className='col col-lg-4'>
                        <div>
                            <h5 className='fw-700 m-0'>{PRODUCT.appStoreDownloads}+</h5>
                            <p style={{ fontSize: "0.9m" }}>Downloads</p>
                        </div>
                        <div>
                            <h5 className='fw-700 m-0'>{PRODUCT.ratingonAppStore}</h5>
                            <p style={{ fontSize: "0.9m" }}>Rating on Playstore</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.9m" }}>For downloads, Check it with</p>
                        </div>
                        <a className='btn btn-outline-secondary p-2' href="#"><BsApple size={32}/><span className='ps-2'>Apple Appstore</span></a>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default SingleProductComponent