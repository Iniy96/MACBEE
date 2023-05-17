import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';


import "./productCarousel.scss";

import firstlook from "../../../assets/homeassets/firstlookproductimg.png"
import firstlooklogo from "../../../assets/homeassets/Layer-12.png"
import notepad from "../../../assets/homeassets/pcNoteImg.png"
import notepadlogo from "../../../assets/homeassets/Layer-49.png"
import quick from "../../../assets/homeassets/Quickproductimg.png"
import quicklogo from "../../../assets/homeassets/Layer-24.png"


const productcardDetails = [
    {
        "image": firstlook,
        "logo": firstlooklogo,
        "title": "FIRSTLOOK",
        "content": "India's first social Network to find life partners, it was the first of its kind globally.",
        "link": ""

    },
    {
        "image": notepad,
        "logo": notepadlogo,
        "title": "NotePad",
        "content": "A personal note, also with diary with essential features we need regular use.",
        "link": ""

    },
    {
        "image": quick,
        "logo": quicklogo,
        "title": "Quick Search",
        "content": "One of the best local search engine and business listing for products and services.",
        "link": ""

    },
    {
        "image": firstlook,
        "logo": firstlooklogo,
        "title": "FIRSTLOOK",
        "content": "India's first social Network to find life partners, it was the first of its kind globally.",
        "link": ""

    },
    {
        "image": notepad,
        "logo": notepadlogo,
        "title": "NotePad",
        "content": "A personal note, also with diary with essential features we need regular use.",
        "link": ""

    },
    {
        "image": quick,
        "logo": quicklogo,
        "title": "Quick Search",
        "content": "One of the best local search engine and business listing for products and services.",
        "link": ""

    },
    {
        "image": firstlook,
        "logo": firstlooklogo,
        "title": "FIRSTLOOK",
        "content": "India's first social Network to find life partners, it was the first of its kind globally.",
        "link": ""

    },
    {
        "image": notepad,
        "logo": notepadlogo,
        "title": "NotePad",
        "content": "A personal note, also with diary with essential features we need regular use.",
        "link": ""

    },
    {
        "image": quick,
        "logo": quicklogo,
        "title": "Quick Search",
        "content": "One of the best local search engine and business listing for products and services.",
        "link": ""

    },
]

export default function ProductCarousel() {

    return (
        <div className="product-carousel-container">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                loop={true}
                breakpoints={{
                    // when window width is <= 640px
                    490: {
                        slidesPerView: 1.5,

                    },
                    680: {
                        slidesPerView: 2.5,
                    },
                    992: {
                        slidesPerView: 3.5,

                    }
                }}
            >
                {
                    productcardDetails?.map((item, index) => {
                        return (<SwiperSlide key={index}>
                            <div className="carouselcard col col-lg-8 border">
                                {/* main image */}
                                <div>
                                    <img src={item.image} className="swiper-lazy" alt="" />
                                </div>
                                {/* details card */}
                                <div className=" card-body p-3">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-end ">
                                            <div className="productLogo">
                                                <img src={item.logo} alt="" />
                                            </div>
                                            <h6 className="ps-2 fw-700 text-muted">{item.title}</h6>
                                        </div>
                                        <p className="producttext text-secondary pt-2">{item.content}</p>

                                        <div className=" position-absolute bottom-0 pb-3" style={{ width: "80%" }}>
                                            <div className="d-flex justify-content-between">
                                                <a className="text-muted pc-learnmore" style={{fontSize:"1rem"}}>Learn More</a>
                                                <div className="d-flex gap-3">
                                                    <BsApple className="pc-bs-apple" size={20} />
                                                    <FaGooglePlay className="pc-googleplay" size={20} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    })
                }
            </Swiper>
        </div>
    );
}
