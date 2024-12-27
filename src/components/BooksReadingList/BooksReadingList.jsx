import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getReadingBook } from '../../utility/LocalStorage';
import ReadingListDetails from '../ReadingListDetails/ReadingListDetails';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const BooksReadingList = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [sort, setSort] = useState([]);
    const [menuIcon, setMenuIcon] = useState(false);
    const books = useLoaderData();

    useEffect(()=>{
        const storedBooksId = getReadingBook();
        if(books.length > 0){
           const listedBooks = books.filter(book => storedBooksId.includes(book.bookId))
           setSort(listedBooks)
           setReadBooks(listedBooks)
        }
    },[books]);

    const handleSortByRating = () =>{
        const sortByRating = [...readBooks].sort((a, b) => b.rating - a.rating );
        setSort(sortByRating);
    }

    const handleSortByPages = () =>{
        const sortByPages = [...readBooks].sort((a, b) => b.totalPages - a.totalPages );
        setSort(sortByPages);
    }

    const handleSortByPublishYear = () =>{
        const sortByPublishYear = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
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
                    sort.map((readBook, idx) => <ReadingListDetails key={idx} readBook={readBook}></ReadingListDetails>)
                }
            </div>
        </div>
    );
};

export default BooksReadingList;