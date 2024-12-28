import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { isReadingExist, isWishExist, saveReadingBooks, saveWishListBooks } from '../../utility/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const book =  books.find((book) => id === book.bookId);
    const {
        bookId,
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
      } = book;

      const handleReadingBook = () =>{
            const exist = isReadingExist(bookId)
            if(!exist){
                saveReadingBooks(bookId)
                toast('Book Added To the Book List..!')
            }else{
                toast('Book already Added To the Book List..!')
            }
      }
      const handleWishListBook = () =>{
            const wishExist= isWishExist(bookId);
            const readingExist = isReadingExist(bookId);
            if(!wishExist && !readingExist){
                saveWishListBooks(bookId)
                toast('book added to the Wish List..!')
            }else{
                toast('book is in the reading list, you cant add this book in the wish list..!')
            }
      }
    return (
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-8 mb-6 px-2'>
            <Helmet>
                <title>Am@r bOok | Book Details</title>
            </Helmet>
            <div className='flex-grow bg-[#1313130D] flex justify-center items-center py-12 rounded-2xl'>
                <img className='h-96' src={image} alt="" />
            </div>
            <div className='space-y-3'>
                <h2 className='text-3xl font-bold'>{bookName}</h2>
                <p className='border-b-[.5px] border-dashed border-[#23BE0A4D] pb-3 text-xl'>By : {author}</p>
                <p className='border-b-[.5px] border-dashed border-[#23BE0A4D] pb-3 text-xl'>{category}</p>
                <p><span className='font-bold'>Review : </span>{review}</p>
                <div className="flex gap-4 border-b-[.5px] border-dashed border-[#23BE0A4D] pb-3">
                    <p className='font-bold'>Tag :</p>
                    {tags.map((tag) => (
                        <p className="bg-[#23BE0A0D] text-[#23BE0A] rounded-xl px-2">
                        #{tag}
                        </p>
                    ))}
                </div>
                <div>
                    <table className="table-auto w-[60%] border-collapse text-sm">
                        <tbody>
                            <tr>
                                <td>Number of Pages :</td>
                                <td className='font-bold py-1'>{totalPages}t</td>
                            </tr>
                            <tr>
                                <td>Publisher :</td>
                                <td className='font-bold py-1'>{publisher}</td>
                            </tr>
                            <tr>
                                <td>Year of Publishing :</td>
                                <td className='font-bold py-1'>{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td>Rating :</td>
                                <td className='font-bold py-1'>{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex gap-4'>
                    <button onClick={handleReadingBook} className='text-[#131313] border-[.5px] border-[#1313134D] rounded-lg px-6 py-2 font-bold'>Read</button>
                    <button onClick={handleWishListBook} className='px-6 py-2 font-bold text-white bg-[#50B1C9] rounded-lg'>Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;