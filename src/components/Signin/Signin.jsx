import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Signin = () => {
    const {signInUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

  const handleSignInUser = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signInUser(email, password)
    .then(result=>{
        console.log('signin success ful', result.user);
        navigate('/')
    })
    .catch(error=>{
        console.error(error.message);
    })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Am@r bOok | SignIn</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">SignIn now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignInUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div
                className="absolute text-2xl right-1 top-12 text-slate-500 cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <GoEyeClosed></GoEyeClosed> : <GoEye></GoEye>}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignIn</button>
            </div>
            <div>
              <p>
                new to amar book? please
                <Link to={`/signup`}>
                  <button className="btn btn-active btn-link">SignUp</button>
                </Link>
              </p>
            </div>
            {/* <div>
              {errorMessage && (
                <p className="text-red-700  font-bold">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-700 font-bold">{successMessage}</p>
              )}
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
