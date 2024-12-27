import React from 'react';
import banner from '../../assets/images/banner--3.jpeg';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto px-2 my-6'>
            <div className='bg-[#1313130D] flex justify-evenly items-center md:px-24 px-6 py-4 rounded-2xl'>
                <div className='space-y-6'>
                    <h2 className='md:text-6xl text-3xl font-bold mb-6'>Books to freshen up your bookshelf</h2>
                    <NavLink to={'/booksList'}>
                        <button className='btn font-bold px-8 md:px-14 rounded-lg text-white bg-[#23BE0A]'>View the List</button>
                    </NavLink>
                </div>
                <div>
                    <img className='w-[850px]' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;