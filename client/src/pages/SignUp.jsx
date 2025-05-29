import React from "react";
import { Link } from 'react-router-dom';
import brand from '../assets/My_BrandLogo_original_-removebg-preview.png';
import { Label, TextInput, Button } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20 bg-white dark:bg-gray-900">
      <div className="flex p-6 max-w-5xl mx-auto flex-col md:flex-row items-center gap-8">
        
        {/* Left Side */}
        <div className="md:w-1/2">
          <Link to="/" className="flex items-center text-4xl mb-4">
            <img src={brand} className="h-20 w-auto mr-2" alt="KidoBlog Logo" />
            <span className="font-bold text-gray-800 dark:text-white">KidoBlog</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Welcome to <strong>KidoBlog</strong> – Where Global News Meets Everyday Living.
            Stay informed with the latest updates from around the world, covering everything from politics and football to tech and fashion. We also deliver insightful articles, expert parenting tips, kids' lifestyle trends, and educational resources. Our integrated marketplace makes it easy to promote and advertise your products seamlessly. Explore, engage, and elevate with KidoBlog — your destination for content and commerce.
          </p>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="md:w-1/2 w-full bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">Create an Account</h2>
          <form className="flex flex-col gap-4">
            <div>
              <Label htmlFor="username" value="Username" />
              <TextInput id="username" type="text" placeholder="Enter username" required />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput id="email" type="email" placeholder="name@company.com" required />
            </div>
            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput id="password" type="password" placeholder="Enter password" required />
            </div>
            <Button type="submit" color="purple">
              Sign Up
            </Button>
          </form>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/Signin" className="text-purple-800 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
