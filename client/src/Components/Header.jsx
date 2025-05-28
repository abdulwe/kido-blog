import React from 'react'
// import { Button, Navbar, TextInput } from "flowbite-react";
import { TextInput,Button, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from 'flowbite-react';

import brand from "../assets/My_BrandLogo_original_-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  return (
    
    <Navbar className="border-b-2">
      <NavbarBrand as={Link} to="/" className="flex items-center space-x-2">
  <img src={brand} className="h-12 w-auto py-1" alt="Logo" />
  <span className="font-semibold text-md dark:text-white">Kido Blog</span>
</NavbarBrand>


      <form className="flex items-center">
        <TextInput
          type="text"
          placeholder="search..."
          icon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/Signin">
          {/* Use color instead of gradientDuoTone if you get warnings */}
          <Button color="purple">Sign In</Button>
        </Link>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active = {location.pathname ==='/'}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/MeetFounder" active ={location.pathname === '/MeetFounder'}>
          Meet The Founder
        </NavbarLink>
        <NavbarLink as={Link} to="/Market" active = {location.pathname === '/Market'}>
          Market
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
    
    
  );
}

