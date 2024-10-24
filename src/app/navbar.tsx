"use client";

import React, { useState } from "react";
import Image from "next/image";
import LOGO from "../Images/LOGO.svg";
import Link from "next/link";
import Cart from "../Images/cart.svg";
import Profile from "../Images/profile.svg";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu after a link is clicked
  };

  return (
    <div className="flex justify-between items-center py-4 shadow-xl px-4 md:px-8 ">
      {/* Logo */}
      <div>
        <Image src={LOGO} alt="Logo" className="w-[70%]" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Links (hidden on mobile) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex-row md:flex flex flex-col z-50 space-y-5 md:space-y-0 items-center absolute md:static top-[70px] right-0 bg-gray md:bg-transparent p-5 md:p-0 md:space-x-5 w-full md:w-auto`}
      >
        <Link href="/" className="hover:text-orange font-bold text-lg" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/jordan" className="hover:text-orange font-bold text-lg" onClick={closeMenu}>
          Jordan
        </Link>
        <Link href="/sales" className="hover:text-orange font-bold text-lg" onClick={closeMenu}>
          Sale
        </Link>
        <div className="flex space-x-4 md:hidden">
          <Image src={Cart} alt="Cart" className="w-[25px]" />
          <Image src={Profile} alt="Profile" className="w-[25px]" />
        </div>
      </div>

     
      <div className="hidden md:flex space-x-4">
        <Image src={Cart} alt="Cart" className="w-[25px] " />
        <Image src={Profile} alt="Profile" className="w-[25px] " />
      </div>
    </div>
  );
};

export default Navbar;
