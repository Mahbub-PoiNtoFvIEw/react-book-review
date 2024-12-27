import React, { useEffect, useState } from 'react';
import { getWishListBook } from '../../utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import WishListDetails from '../WishListDetails/WishListDetails';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const BooksWishList = () => {
    const [wishBooks, setWishBooks] = useState([]);
    const [sort, setSort] = useState([]);
    const [menuIcon, setMenuIcon] = useState(false);
    const books = useLoaderData();

    useEffect(() =>{
        const storedWishBookId = getWishListBook();
        if(books.length > 0){
            const wishBookLists = books.filter(book => storedWishBookId.includes(book.bookId));
            setSort(wishBookLists);
            setWishBooks(wishBookLists);
        }
    },[books]);

    // sort in descending order
    const handleSortByRating = () =>{
        const sortByRating = [...wishBooks].sort((a,b) => b.rating - a.rating);
        setSort(sortByRating);
    }

    const handleSortByPages = () =>{
        const sortByPages = [...wishBooks].sort((a, b) => b.totalPages - a.totalPages);
        setSort(sortByPages);
    }

    const handleSortByPublishYear = () =>{
        const sortByPublishYear = [...wishBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setSort(sortByPublishYear);
    }
    return (
        <div>
            <details className="dropdown flex justify-end items-center">
                <summary onClick={()=>setMenuIcon(!menuIcon)} className="btn m-1 px-6 text-[#FFFFFF] bg-[#23BE0A]">open or close
                    {
                        menuIcon === true ? <IoIosArrowUp className='text-2xl'></IoIosArrowUp>
                        :
                        <IoIosArrowDown className='text-2xl'></IoIosArrowDown>
                    }
                     </summary>
                <ul className="menu dropdown-content rounded-box z-[1] w-40 p-1 shadow absolute top-10 right-2 space-y-2 bg-[#1313130D] text-[#131313CC]">
                    <li onClick={handleSortByRating} className='text-center cursor-pointer mt-4 hover:bg-[#13131333] hover:font-bold rounded-xl'>Rating</li>
                    <li onClick={handleSortByPages} className='text-center cursor-pointer hover:bg-[#13131333] hover:font-bold rounded-xl'>Number of pages</li>
                    <li onClick={handleSortByPublishYear} className='text-center cursor-pointer pb-2 hover:bg-[#13131333] hover:font-bold rounded-xl'>Publisher Year</li>
                </ul>
            </details>
            <div className='max-w-6xl mx-auto'>
                {
                    sort.map(wishBook => <WishListDetails key={wishBook.bookId} wishBook={wishBook}></WishListDetails>)
                }
            </div>
        </div>
    );
};

export default BooksWishList;