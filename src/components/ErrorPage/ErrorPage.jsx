import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-10 space-y-4">
      <h2 className="text-6xl font-bold text-red-600">Oops...!!</h2>
      <p>Page Not Found...!!</p>
      <NavLink to={`/`}>
        <button className="btn bg-green-400 text-white px-12 py-1 rounded-xl font-bold text-2xl">
          Go back to home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
