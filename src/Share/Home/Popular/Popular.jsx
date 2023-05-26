import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuItem from '../../Menu/MenuItem';

const Popular = () => {
    const [popular, setPopular] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setPopular(popularItems)
            })
    }, [])
    return (
        <section className='mb-16 mt-8'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Popular;