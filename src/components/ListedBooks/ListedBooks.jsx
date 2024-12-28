import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import '../ListedBooks/ListBooks.css';

const ListedBooks = () => {
    const navigation = useNavigation();
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='bg-[#13131326] py-3 my-4 rounded-xl mx-2'>
                <h2 className='text-5xl font-bold text-center'>Books</h2>
            </div>
            <nav className='mt-6 border-b-[.5px] space-x-4 border-[#1313134D] mx-2 flex relative'>
                <NavLink 
                to={`readingList`}
                className={({ isActive, isPending }) =>
                    isActive
                      ? "chrome-tab-active"
                      
                      : "chrome-tab-inactive"
                  }
                >Read Books</NavLink>
                <NavLink 
                to={`wishList`}
                className={({ isActive }) =>
                    isActive
                      ? "chrome-tab-active"
                      : "chrome-tab-inactive"
                  }
                >Wishlist Books</NavLink>
            </nav>
            {
                navigation.state === "loading"? <div className="text-center mt-20">
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                </div>
                :
                <Outlet></Outlet>
            }
        </div>
    );
};

export default ListedBooks;