import React, { useEffect, useState } from 'react';
import { getWishListBook } from '../../utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import WishListDetails from '../WishListDetails/WishListDetails';

const BooksWishList = () => {
    const [wishBooks, setWishBooks] = useState([]);
    const books = useLoaderData();

    useEffect(() =>{
        const storedWishBookId = getWishListBook();
        if(books.length > 0){
            const wishBookLists = books.filter(book => storedWishBookId.includes(book.bookId));
            setWishBooks(wishBookLists)
        }
    },[])
    // console.log(wishBooks)
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                {
                    wishBooks.map(wishBook => <WishListDetails key={wishBook.bookId} wishBook={wishBook}></WishListDetails>)
                }
            </div>
        </div>
    );
};

export default BooksWishList;