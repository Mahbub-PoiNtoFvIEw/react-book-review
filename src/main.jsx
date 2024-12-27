import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import BooksReadingList from './components/BooksReadingList/BooksReadingList.jsx';
import BooksWishList from './components/BooksWishList/BooksWishList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/booksList',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            path: '',
            element: <BooksReadingList></BooksReadingList>,
            loader: ()=> fetch ('../books.json')
          },
          {
            path: 'readingList',
            element: <BooksReadingList></BooksReadingList>,
            loader: ()=> fetch ('../books.json')
          },
          {
            path: 'wishList',
            element: <BooksWishList></BooksWishList>,
            loader: ()=> fetch ('../books.json')
          }
        ]
      },
      {
        path: '/readingPage',
        element: <PagesToRead></PagesToRead>,
      },{
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
