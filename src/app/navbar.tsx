"use client"

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

  return (
    <div className="flex justify-between items-center py-4 shadow-xl px-4 md:px-8 z-50">
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
        } md:flex space-x-5 absolute md:static top-[70px] right-0 bg-white md:bg-transparent p-5 md:p-0 md:space-x-5 w-full md:w-auto`}
      >
        <Link href="/" className="hover:text-orange font-bold text-lg">
          Home
        </Link>
        <Link href="/jordan" className="hover:text-orange font-bold text-lg">
          Jordan
        </Link>
        <Link href="/sales" className="hover:text-orange font-bold text-lg">
          Sale
        </Link>
      </div>

      {/* Icons (always visible) */}
      <div className="flex space-x-4">
        <Image src={Cart} alt="Cart" className="w-[25px]" />
        <Image src={Profile} alt="Profile" className="w-[25px]" />
      </div>
    </div>
  );
};

export default Navbar;
