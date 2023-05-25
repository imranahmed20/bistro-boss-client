import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import image1 from '../../../../assets/home/slide1.jpg'
import image2 from '../../../../assets/home/slide2.jpg'
import image3 from '../../../../assets/home/slide3.jpg'
import image4 from '../../../../assets/home/slide4.jpg'
import image5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../../Component/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading='From 11.00am to 10.00pm'
                heading={"Order Online"}
            ></SectionTitle>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide>
                        <img src={image1} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image4} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </>
        </section>
    );
};

export default Category;