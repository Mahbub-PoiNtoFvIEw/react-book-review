import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ListedBooks = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-5xl font-bold text-center'>Listed Books</h2>
            <div className='mt-6 border-b-[.5px] space-x-4 border-[#1313134D]'>
                <NavLink 
                to={`readingList`}
                className={({ isActive }) =>
                    isActive
                      ? "border-[.5px] border-b-0 border-[#1313134D] py-1 px-3 rounded-t-lg text-[#131313CC]"
                      : "text-[#13131380] py-1 px-3"
                  }
                >Read Books</NavLink>
                <NavLink 
                to={`wishList`}
                className={({ isActive }) =>
                    isActive
                      ? "border-[.5px] border-b-0 border-[#1313134D] py-1 px-3 rounded-t-lg text-[#131313CC]"
                      : "text-[#13131380] py-1 px-3"
                  }
                >Wishlist Books</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;