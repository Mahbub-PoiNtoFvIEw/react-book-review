import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-5xl font-bold text-center mb-6'>Books</h2>
            <div className='grid md:grid-cols-3 gap-6 px-2'>
                {
                    books.slice(0, dataLength).map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
            <div className={`text-center my-4 ${dataLength === books.length && 'hidden'}`}>
                <button onClick={() => setDataLength(books.length)} className='btn font-bold px-8 md:px-14 rounded-lg text-white bg-[#23BE0A]'>Show more <IoIosArrowDown className='text-2xl'></IoIosArrowDown></button>
            </div>
            <div className={`text-center my-4 ${dataLength !== books.length && 'hidden'}`}>
                <button onClick={() => setDataLength(6)} className='btn font-bold px-8 md:px-14 rounded-lg text-white bg-[#23BE0A]'>Show Less <IoIosArrowUp className='text-2xl'></IoIosArrowUp></button>
            </div>
        </div>
    );
};

export default Books;