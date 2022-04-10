import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googleIcon from "../../images/Google-icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const logEmailChange = e => {
    setEmail(e.target.value);
  };
  const logPasswordChange = e => {
    setPassword(e.target.value);
  };
  if (user) {
    navigate("/Shop");
  }
  const logFormSubmit = e => {
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(result => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch(error => {
    //     console.error();
    //   });
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <div className="border-2 rounded-md w-fit m-auto mt-5 p-4">
        <h1 className="text-4xl  text-blue-500"> Log In...</h1>
        <form onSubmit={logFormSubmit} className="w-fit m-auto">
          <div className="my-3">
            <label className="block mb-2 text-left text-m font-medium text-gray-900 dark:text-gray-800">
              Email
            </label>
            <input
              onBlur={logEmailChange}
              type="email"
              id="email"
              className="bg-orange-50 border border-orange-300 
              text-gray-900 text-md rounded-lg focus:ring-orange-200 focus:border-orange-200 block w-full p-2.5
               dark:bg-orange-300 dark:border-orange-300 dark:placeholder-orange-100 dark:text-black dark:focus:ring-orange-200 font-medium	
               dark:focus:border-orange-200"
              placeholder="Please type Email address"
              required="Please type Email address"
            />
            <p className="text-gray-400">
              We'll never share your email with anyone else.
            </p>
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-m text-left font-medium text-gray-900 dark:text-gray-700">
              Password
            </label>
            <input
              onBlur={logPasswordChange}
              type="password"
              id="password"
              className="bg-orange-50 border border-orange-300 
              text-gray-900 text-md rounded-lg focus:ring-orange-200 focus:border-orange-200 block w-full p-2.5 font-medium	
               dark:bg-orange-300 dark:border-orange-300 dark:placeholder-orange-100 dark:text-black dark:focus:ring-orange-200 
               dark:focus:border-orange-200"
              placeholder="Please type Email password"
              required
            />
          </div>
          <div className="flex items-start mb-3">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-medium text-gray-900 dark:text-gray-700">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md 
            w-3/4  sm:w-auto px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
          >
            Log In
          </button>
          <div className="my-2 te">
            New to Ema John?
            <Link
              className="text-amber-300 ml-3 hover:text-amber-500 hover:text-md"
              to="/Register"
            >
              Register
            </Link>
          </div>
        </form>
        <div className="flex justify-center items-center my-3">
          <hr className="h-1 w-1/2 bg-amber-300 border-2 border-amber-400" />
          <h1 className="mx-2">OR</h1>
          <hr className="h-1 w-1/2 bg-amber-300 border-2 border-amber-400" />
        </div>
        <div onClick={googleSignIn}>
          <button
            className="text-white flex bg-orange-300 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg 
              w-3/4  sm:w-auto px-20 py-2.5 text-center dark:bg-orange-300 dark:hover:bg-orange-400 dark:focus:ring-orange-500"
          >
            <img className="w-6 mr-1" src={googleIcon} alt="" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
