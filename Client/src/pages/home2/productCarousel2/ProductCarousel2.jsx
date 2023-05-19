import React from 'react'
import "./productCarousel2.scss"
import { RiGooglePlayFill } from "react-icons/ri"
import { BsApple  } from "react-icons/bs"
import PRODUCTS from '../../../data/products'
import {Link} from "react-router-dom"


const ProductCarousel2 = () => {
    return (
        <>
            <div id="myCarousel" className="carousel py-5 my-3 productCarousel2 slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* item 1 */}
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col col-lg-5 ">
                                    <div className="card ">
                                        <div className="card-body mx-0 px-0 py-4">
                                            <div className='d-flex justify-content-between ms-5 pb-3'>
                                                <h5 className="card-title fw-700 m-0 ">{PRODUCTS[0].productName}</h5>
                                                <div className='bg-secondary text-white px-3'>{PRODUCTS[0].availability}</div>
                                            </div>
                                            <div className='mx-5'>
                                                <p className="card-text pb-3 m-0">{PRODUCTS[0].productTagline}</p>
                                                <Link to={`/products/${PRODUCTS[0].params}`} >Learn More</Link>
                                                <div className='d-flex mt-4 justify-content-between align-items-center'>
                                                    <p className='m-0'>For Downloads, Check it with</p>
                                                    <div className=' d-flex gap-2'>
                                                        <RiGooglePlayFill className="pc-bs-apple"  size={35} />
                                                        <BsApple className="pc-googleplay" size={30} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-5  d-none d-md-block">
                                    <div className="card">
                                        <div className="card-body mx-0 px-0 py-4">
                                            <div className='d-flex justify-content-between ms-5 pb-3'>
                                                <h5 className="card-title fw-700 m-0 ">{PRODUCTS[1].productName}</h5>
                                                <div className='bg-secondary text-white px-3'>{PRODUCTS[1].availability}</div>
                                            </div>
                                            <div className='mx-5'>
                                                <p className="card-text pb-3 m-0">{PRODUCTS[1].productTagline}</p>
                                                <Link to={`/products/${PRODUCTS[1].params}`} >Learn More</Link>
                                                <div className='d-flex mt-4 justify-content-between align-items-center'>
                                                    <p className='m-0'>For Downloads, Check it with</p>
                                                    <div className=' d-flex gap-2'>
                                                        <RiGooglePlayFill className="pc-bs-apple" size={35} />
                                                        <BsApple className="pc-googleplay" size={30} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item 2 */}
                    <div className="carousel-item ">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col col-lg-5 ">
                                    <div className="card">
                                        <div className="card-body mx-0 px-0 py-4">
                                            <div className='d-flex justify-content-between ms-5 pb-3'>
                                                <h5 className="card-title fw-700 m-0 ">{PRODUCTS[1].productName}</h5>
                                                <div className='bg-secondary text-white px-3'>{PRODUCTS[1].availability}</div>
                                            </div>
                                            <div className='mx-5'>
                                                <p className="card-text pb-3 m-0">{PRODUCTS[1].productTagline}</p>
                                                <Link to={`/products/${PRODUCTS[1].params}`} >Learn More</Link>
                                                <div className='d-flex mt-4 justify-content-between align-items-center'>
                                                    <p className='m-0'>For Downloads, Check it with</p>
                                                    <div className=' d-flex gap-2'>
                                                        <RiGooglePlayFill className="pc-bs-apple" size={35} />
                                                        <BsApple className="pc-googleplay" size={30} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-5  d-none d-md-block">
                                    <div className="card">
                                        <div className="card-body mx-0 px-0 py-4">
                                            <div className='d-flex justify-content-between ms-5 pb-3'>
                                                <h5 className="card-title fw-700 m-0 ">{PRODUCTS[2].productName}</h5>
                                                <div className='bg-secondary text-white px-3'>{PRODUCTS[2].availability}</div>
                                            </div>
                                            <div className='mx-5'>
                                                <p className="card-text pb-3 m-0">{PRODUCTS[2].productTagline}</p>
                                                <Link to={`/products/${PRODUCTS[2].params}`} >Learn More</Link>
                                                <div className='d-flex mt-4 justify-content-between align-items-center'>
                                                    <p className='m-0'>For Downloads, Check it with</p>
                                                    <div className=' d-flex gap-2'>
                                                        <RiGooglePlayFill className="pc-bs-apple" size={35} />
                                                        <BsApple className="pc-googleplay" size={30} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item 3 */}

                    <div className="carousel-item ">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col col-lg-5 ">
                                    <div className="card" >
                                        <div className="card-body mx-0 px-0 py-4">
                                            <div className='d-flex justify-content-between ms-5 pb-3'>
                                                <h5 className="card-title fw-700 m-0 ">{PRODUCTS[2].productName}</h5>
                                                <div className='bg-secondary text-white px-3'>{PRODUCTS[2].availability}</div>
                                            </div>
                                            <div className='mx-5'>
                                                <p className="card-text pb-3 m-0">{PRODUCTS[2].productTagline}</p>
                                                <Link to={`/products/${PRODUCTS[2].params}`} >Learn More</Link>
                                                <div className='d-flex mt-4 justify-content-between align-items-center'>
                                                    <p className='m-0'>For Downloads, Check it with</p>
                                                    <div className=' d-flex gap-2'>
                                                        <RiGooglePlayFill className="pc-bs-apple" size={35} />
                                                        <BsApple className="pc-googleplay" size={30} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-5  d-none d-md-block">
                                    <div className="card">
                                        <div className="card-body mx-0 px-0 py-4">
                                            <div className='d-flex justify-content-between ms-5 pb-3'>
                                                <h5 className="card-title fw-700 m-0 ">{PRODUCTS[0].productName}</h5>
                                                <div className='bg-secondary text-white px-3'>Available</div>
                                            </div>
                                            <div className='mx-5'>
                                                <p className="card-text pb-3 m-0">{PRODUCTS[0].productTagline}</p>
                                                <Link to={`/products/${PRODUCTS[0].params}`} >Learn More</Link>
                                                <div className='d-flex mt-4 justify-content-between align-items-center'>
                                                    <p className='m-0'>For Downloads, Check it with</p>
                                                    <div className=' d-flex gap-2'>
                                                        <RiGooglePlayFill className="pc-bs-apple" size={35} />
                                                        <BsApple className="pc-googleplay" size={30} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item 3 ens here */}
                </div>
                <button className="carousel-control-prev bg-secondary-subtle" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next bg-secondary-subtle" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   
                </button>
            </div>

        </>
    );


}

export default ProductCarousel2