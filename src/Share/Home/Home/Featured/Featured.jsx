import React from 'react';
import SectionTitle from '../../../../Component/SectionTitle/SectionTitle';
import featured from '../../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <section className='featured-image bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center items-center py-20 px-36'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid reprehenderit perspiciatis aperiam id soluta praesentium. Minima soluta eum praesentium odit error porro molestiae enim corporis perferendis doloribus explicabo eveniet adipisci excepturi hic magni voluptatum quibusdam, cumque esse atque debitis eius accusamus repudiandae assumenda iste? Aut, fuga illo! Aliquam, eligendi.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;