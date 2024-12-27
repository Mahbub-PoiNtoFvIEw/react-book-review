import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { TbPageBreak } from "react-icons/tb";

const WishListDetails = ({wishBook}) => {

    const {
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
      } = wishBook;
    return (
        <div className='flex p-4 gap-6'>
            <div className='bg-[#1313130D] flex justify-center items-center px-6 rounded-2xl'>
                <img className='h-32 w-24' src={image} alt="" />
            </div>
            <div className='space-y-3'>
                <h2 className='text-3xl font-bold'>{bookName}</h2>
                <p className='font-bold text-xl'>by : {author}</p>
                <div className='flex items-center gap-4'>
                    <span className='font-bold'>Tag :</span>
                    {
                        tags.map(tag => <p className="bg-[#23BE0A0D] text-[#23BE0A] rounded-xl px-2">#{tag}</p>)
                    }
                    <p className='flex gap-1 items-center'><IoLocationOutline></IoLocationOutline> Year of Publishing: {yearOfPublishing} </p>
                </div>
                <div className='flex gap-4 items-center border-b-[.5px] border-[#13131326] pb-2'>
                    <p className='flex items-center gap-2'><FcBusinessman></FcBusinessman> Publisher : {publisher}</p>
                    <p className='flex items-center gap-2'><TbPageBreak></TbPageBreak> pages : {totalPages}</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-[#328EFF26] text-[#328EFF] px-4 rounded-xl py-1'>Category : {category}</p>
                    <p className='bg-[#FFAC3326] text-[#FFAC33] px-4 rounded-xl py-1'>Rating : {rating}</p>
                    <button className='bg-[#23BE0A] text-[#FFFFFF] px-4 rounded-xl py-1'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default WishListDetails;