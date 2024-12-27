import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getReadingBook } from '../../utility/LocalStorage';
import ReadingListDetails from '../ReadingListDetails/ReadingListDetails';

const BooksReadingList = () => {
    const [readBooks, setReadBooks] = useState([]);
    const books = useLoaderData();
    
    useEffect(()=>{
        const storedBooksId = getReadingBook();
        if(books.length > 0){
           const listedBooks = books.filter(book => storedBooksId.includes(book.bookId))
           setReadBooks(listedBooks)
        }
    },[])
    // console.log(readBooks)
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                {
                    readBooks.map(readBook => <ReadingListDetails key={readBook.bookId} readBook={readBook}></ReadingListDetails>)
                }
            </div>
        </div>
    );
};

export default BooksReadingList;