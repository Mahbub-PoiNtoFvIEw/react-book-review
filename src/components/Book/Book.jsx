import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;
  return (
    <div>
      <Link to={`/book/${bookId}`}>
        <div className="border-[.5px] border-[#13131326] p-4 rounded-xl flex flex-col gap-3 cursor-pointer">
          <div className="bg-[#23BE0A0D] px-8 py-4 flex justify-center items-center rounded-xl">
            <img className="w-24 h-32 " src={image} alt="" />
          </div>
          <div className="flex-grow">
            <div className="flex gap-4">
              {tags.map((tag) => (
                <p className="bg-[#23BE0A0D] text-[#23BE0A] rounded-xl px-2">
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="border-b-[.5px] border-dashed border-[#23BE0A4D] space-y-2 pb-3">
            <h2 className="text-xl font-bold">{bookName}</h2>
            <p>by : {author}</p>
          </div>
          <div className="flex justify-between">
            <p>{category}</p>
            <p className="flex gap-2 items-center">
              {rating} <CiStar></CiStar>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
