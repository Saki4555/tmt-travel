import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // Fixed incorrect import

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import SocialSignin from "../components/shared/SocialSignin";
import TitleProvider from "../providers/TitleProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate("/");
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const validDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "yahoo.com.sg", // Added
    "tmtquickservice.com", // Added
  ];

  // Mutation to send user data to the backend
  const createUserMutation = useMutation({
    mutationFn: async (newUser) => {
      return await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/users/register`,
        newUser
      );
    },
    onSuccess: () => {
      reset();
      toast.success("Account Created Successfully!");
      navigate(from, {replace: true})
    },
    onError: (error) => {
      console.error("Failed to create account:", error);
      toast.error("Error creating account. Try again.");
    },
  });

  const { createUser, updateUserProfile } = useAuth();

  const onSubmit = async (data) => {
    try {
      // Create user in Firebase Auth
      const userCredential = await createUser(data.email, data.password);
      const user = userCredential.user;

      // Update Firebase user profile
      await updateUserProfile(data.name);

      // Prepare user data for database
      const newUser = {
        uid: user.uid,
        email: user.email,
        name: data.name,
        role: "traveler", // Default role

        status: "approved", // Default status
      };

      // Send user data to the backend using TanStack Query
      createUserMutation.mutate(newUser);
    } catch (error) {
      toast.error("Error creating account. Try again.");
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex font-lato items-center pt-10 pb-16 justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <TitleProvider title="Sign Up" />
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-6">
          Create an Account
        </h2>

        {/* Google Sign-In (You need to implement the function) */}
        <SocialSignin />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-600 text-sm">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Full name is required" })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim text-gray-700"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-600 text-sm">Email</label>
           
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
                validate: (value) => {
                  const domain = value.split("@")[1];
                  return (
                    validDomains.includes(domain) ||
                    "Enter a valid email domain"
                  );
                },
              })} className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim text-gray-700"
              
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  message: "Include a number & special character",
                },
              })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim text-gray-700"
            />
            <span
              className="absolute top-[44px] right-4 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label className="block text-gray-600 text-sm">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim text-gray-700"
            />
            <span
              className="absolute top-[44px] right-4 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn hover:bg-slate-700 bg-tmt-prim text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
            disabled={createUserMutation.isPending}
          >
            {createUserMutation.isPending ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-tmt-prim font-semibold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
