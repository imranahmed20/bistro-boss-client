import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../src/assets/home/404.avif'

const Error = () => {
    return (
        <div className='text-center'>
            <img className='h-80 mx-auto' src={error} alt="" />
            <Link to='/'><button className='btn btn-warning'>Go go Home</button></Link>

        </div>
    );
};

export default Error;