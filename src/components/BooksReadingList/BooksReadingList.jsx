import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getReadingBook } from '../../utility/LocalStorage';

const BooksReadingList = () => {
    const [bookList, setBookList] = useState([]);
    const books = useLoaderData();
    
    useEffect(()=>{
        const storedBooksId = getReadingBook();
        if(books.length > 0){
           const listedBooks = books.filter(book => storedBooksId.includes(book.bookId))
           setBookList(listedBooks)
        }
    },[])
    // console.log(bookList)
    return (
        <div>
            <h1>this reading list books</h1>
        </div>
    );
};

export default BooksReadingList;