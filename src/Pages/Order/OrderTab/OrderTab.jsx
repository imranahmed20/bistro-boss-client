import React from 'react';
import FoodCard from '../../../Share/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;