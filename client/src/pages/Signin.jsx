import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner, Alert } from "flowbite-react";
import brand from "../assets/My_BrandLogo_original_-removebg-preview.png";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }

      setLoading(false);
      if (res.ok) navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-white dark:bg-gray-900 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 max-w-5xl mx-auto w-full">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start text-4xl mb-4"
          >
            <img
              src={brand}
              className="h-20 w-auto mr-2"
              alt="KidoBlog Logo"
            />
            <span className="font-bold text-gray-800 dark:text-white">
              KidoBlog
            </span>
          </Link>
          <h2 className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Welcome to <strong>KidoBlog</strong>. Sign in with your email and
            password to continue.
          </h2>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center md:text-left">
            Login to your account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 
                           dark:bg-gray-700 dark:text-white transition duration-200"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="**********"
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 
                           dark:bg-gray-700 dark:text-white transition duration-200"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white py-2 rounded-md font-medium 
                         hover:bg-purple-700 transition duration-300 flex justify-center items-center gap-2 
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Spinner color="purple" size="sm" />
                  <span>Signing In...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400 text-center md:text-left">
            Don’t have an account?{" "}
            <Link
              to="/Signup"
              className="text-purple-800 dark:text-purple-400 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

          {/* Error Message */}
          {errorMessage && (
            <Alert color="failure" className="mt-5">
              <span className="font-medium">Error:</span> {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
