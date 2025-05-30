import React from "react";
import { Link, useNavigate } from "react-router-dom";
import brand from "../assets/My_BrandLogo_original_-removebg-preview.png";
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import { useState } from "react";


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
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/Signin');
      }
      // Optionally redirect or show success message here
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-white dark:bg-gray-900">
      <div className="flex p-6 max-w-5xl mx-auto flex-col md:flex-row items-center gap-8">
        {/* Left Side */}
        <div className="md:w-1/2">
          <Link to="/" className="flex items-center text-4xl mb-4">
            <img src={brand} className="h-20 w-auto mr-2" alt="KidoBlog Logo" />
            <span className="font-bold text-gray-800 dark:text-white">
              KidoBlog
            </span>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Welcome to <strong>KidoBlog</strong> – Where Global News Meets
            Everyday Living. Stay informed with the latest updates from around
            the world, covering everything from politics and football to tech
            and fashion. We also deliver insightful articles, expert parenting
            tips, kids' lifestyle trends, and educational resources. Our
            integrated marketplace makes it easy to promote and advertise your
            products seamlessly. Explore, engage, and elevate with KidoBlog —
            your destination for content and commerce.
          </p>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="md:w-1/2 w-full bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">
            Create an Account
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" value="Username" />
              <TextInput
                id="username"
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>
            <Button type="submit" color="purple" disabled={loading}>
              {loading ? (
                <>
                  <Spinner color="purple" size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/Signin" className="text-purple-800 hover:underline">
              Login here
            </Link>
          </p>
          {/* Error Message */}
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
        </div>

        
      </div>
      
    </div>
  );
}
