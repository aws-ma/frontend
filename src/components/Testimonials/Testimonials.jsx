import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialSlide from "./TestimonialSlide";
import { testimonialsArray } from "./testimonialsData";
import { useEffect } from "react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
    useEffect(() => {}, []);
    return (
        <div className='g-container g-section-container'>
            <h1 className='g-section-heading'>Testimonials</h1>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={40}>
                {testimonialsArray.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <TestimonialSlide {...testimonial} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Testimonials;
