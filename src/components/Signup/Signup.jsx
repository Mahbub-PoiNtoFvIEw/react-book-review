import React, { useContext, useState } from "react";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Signup = () => {
  const {createUser} = useContext(AuthContext);
//   console.log("auth context provider", authInfo);
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateUser = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password =  e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    console.log(name, email, password, photoUrl);

    createUser(email,password)
    .then(result=>{
        console.log(result.user);
        updateProfile(result.user,{
            displayName: name,
            photoURL: photoUrl
        })
        .then(r=>console.log('profile updated'))
        .catch(er=>console.error('update error:',er.message));
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
        <title>Am@r bOok | SignUp</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleCreateUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
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
            <input type="file" name="photoUrl" />
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
            <div>
              <p>
                Already have an account? please
                <Link to={`/signin`}>
                  <button className="btn btn-active btn-link">Signin</button>
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

export default Signup;
