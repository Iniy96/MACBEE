import React, { useRef, useState } from "react";

import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

import image from "../../../assets/homeassets/firstlookproductimg.png"

import "./productcontainer.scss"

import PRODUCTS from "../../../data/products"
import { Link } from "react-router-dom";


export default function ProductsContainer({PRODUCTS,handleLearnMoreBtn}) { 
    return (
        <>
                    {/*  */}
                    {/* Product Card Start here */}
                    {/* Product Card Start here */}
                    {/* Product Card Start here */}
                    {
                        
                        PRODUCTS.map((PRODUCT) => {
                            return (
                                <div key={PRODUCT.productName} className="card productContainerCard pb-3" >
                                    <img src={PRODUCT.image} className="card-img-top" alt="..." />
                                    <div className="card-body position-relative pt-4 d-flex flex-column" >
                                        <h5 className="card-title fs-5 fw-700">{PRODUCT.productName}</h5>
                                        <p className="position-absolute bg-primary px-3 text-white" style={{ top: "1.4rem", right: "0",fontSize:"0.8rem" }}>{PRODUCT.availability}</p>
                                        <p className="card-text pt-3">{PRODUCT.productTagline}</p>
                                        <Link to={`/products/${PRODUCT.params}`} className="btn p-0 mt-auto text-primary" style={{width:"fit-content"}}>Learn More</Link>
                                        <div className="pt-4 d-flex align-items-center">
                                            <p className="m-0">For Downloads,Check it with</p>
                                            <div className=" ms-auto d-flex gap-2 storeIcons">
                                                <a href="#"><FaGooglePlay size={25} /></a>
                                                <a href="#"><BsApple size={25} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/*  */}
                    {/* Product cardv ends here */}

        </>

    );
}
