import React, { useEffect, useState } from 'react';
import { getWishListBook } from '../../utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';

const BooksWishList = () => {
    const [wishList, setWishList] = useState([]);
    const books = useLoaderData();

    useEffect(() =>{
        const storedWishBookId = getWishListBook();
        if(books.length > 0){
            const wishBookLists = books.filter(book => storedWishBookId.includes(book.bookId));
            setWishList(wishBookLists)
        }
    },[])
    console.log(wishList)
    return (
        <div>
            <h1>this is wish list books</h1>
        </div>
    );
};

export default BooksWishList;