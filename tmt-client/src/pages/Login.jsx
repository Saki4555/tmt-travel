import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import useAuth from "../hooks/useAuth";
import SocialSignin from "../components/shared/SocialSignin";
import toast from "react-hot-toast";
import { useState } from "react";
import TitleProvider from "../providers/TitleProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { signIn} = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const [isAuthError, setIsAuthError] = useState("");


  const onSubmit = (data) => {
   
    // console.log("Login Data:", data);
    signIn(data.password, data.email).then(() => {
      reset();
      setIsAuthError("");
      toast.success("Logged In Successfully");
      navigate(from, {replace: true})
    }).catch((err) => {
      setIsAuthError("Wrong Email or Password")
      console.log(err.message)
    })
   
  };

  
  return (
    <div className="flex font-lato font items-center justify-center pt-10 pb-16 min-h-[calc(100vh-500px)] bg-gray-100 px-4 sm:px-6 lg:px-8">
      <TitleProvider title="Login" />
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-6">Sign In to Your Account</h2>

        {/* Continue with Google */}
     <SocialSignin />

       {
        isAuthError && <p className="text-red-500 text-sm">Wrong Email or Password</p>
       }
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-600 text-sm">Email</label>
            <input
              type="email"
              {...register("email", { required: "Please fill this field" })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim focus:border-tmt-prim text-gray-700"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Please fill this field",
              })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim focus:border-tmt-prim text-gray-700"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn  hover:bg-slate-700 bg-tmt-prim text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
            // disabled={loading}
          >
           Sign In
          </button>
        </form>

        {/* Forgot Password and Signup */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-tmt-prim font-semibold">Sign Up</Link>
          </p>
          {/* <p className="text-sm text-gray-500 mt-2">
            <Link to="/forgot-password" className="text-tmt-prim font-semibold">Forgot Password?</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
