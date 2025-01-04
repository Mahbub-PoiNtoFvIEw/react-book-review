import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import BooksReadingList from "./components/BooksReadingList/BooksReadingList.jsx";
import BooksWishList from "./components/BooksWishList/BooksWishList.jsx";
import { HelmetProvider } from "react-helmet-async";
import Signin from "./components/Signin/Signin.jsx";
import Signup from "./components/Signup/Signup.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booksList",
        element: <PrivateRoutes><ListedBooks></ListedBooks></PrivateRoutes>,
        children: [
          {
            path: "",
            element: <Navigate to={`readingList`}></Navigate>,
          },
          {
            path: "readingList",
            element: <BooksReadingList></BooksReadingList>,
            loader: () => fetch("../books.json"),
          },
          {
            path: "wishList",
            element: <BooksWishList></BooksWishList>,
            loader: () => fetch("../books.json"),
          },
        ],
      },
      {
        path: "/readingPage",
        element: <PrivateRoutes><PagesToRead></PagesToRead></PrivateRoutes>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
