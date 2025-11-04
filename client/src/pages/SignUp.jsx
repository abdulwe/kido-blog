import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";
import brand from "../assets/My_BrandLogo_original_-removebg-preview.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("⚠️ Please fill out all fields.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message || "Signup failed.");
      }

      setLoading(false);
      if (res.ok) {
        navigate("/Signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-10 px-4">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start"
          >
            <img
              src={brand}
              alt="KidoBlog Logo"
              className="h-20 w-auto mr-2"
            />
            <span className="text-3xl font-bold text-gray-800 dark:text-white">
              KidoBlog
            </span>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Welcome to <strong>KidoBlog</strong> — Where Global News Meets
            Everyday Living. Stay informed with updates on politics, football,
            tech, and fashion. Get parenting tips, educational insights, and
            promote your products easily. Explore, engage, and elevate your
            experience with KidoBlog.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 w-full bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-6 text-center">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 p-2.5 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 p-2.5 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 p-2.5 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white w-full py-2.5 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-300 disabled:opacity-70"
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <Spinner color="purple" size="sm" />
                  <span className="pl-3">Signing Up...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-sm mt-4 text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/Signin"
              className="text-purple-700 dark:text-purple-400 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>

          {errorMessage && (
            <Alert className="mt-6" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
