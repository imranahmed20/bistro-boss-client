import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading="What Our Client Sat"
                heading="Testimonials"
            ></SectionTitle>
            <div>
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className='m-24'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                                    <p>{review.details}</p>

                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </>

            </div>
        </section>
    );
};

export default Reviews;