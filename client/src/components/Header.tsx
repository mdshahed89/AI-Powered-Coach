"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Logo from "@/assets/Logo.png";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed h-[90px] z-[1000]  top-0 w-full ${
        scrolled ? "bg-[#fff] shadow-md" : "bg-transparent"
      } z-50 transition-colors duration-300 ease-in-out`}
    >
      <div className="text-[#111] py-5 flex max-w-[1400px] pr-3 mx-auto justify-between items-center">
        <div className=" flex items-center gap-10  ">
          <Link href={"/"} className=" w-auto h-auto ">
            <Image
              src={Logo}
              alt="Sidesone - Profesjonelle nettsider, nettbutikker og webapper"
              className="w-[211px] h-[35px] object-contain"
            />
          </Link>
          <nav
            className={`lg:flex lg:items-center hidden ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex items-center space-x-8 font-medium ">
              <li className="relative group">Home</li>
              <li className="relative group">About</li>
              <li className="relative group">Pricing</li>
              <li className="relative group">Consulting</li>
              <li className="relative group">Ai Coach</li>
            </ul>
          </nav>
        </div>
        <div className=" flex items-center gap-4 md:gap-6 pr-2 ">
          <div className=" px-4 md:px-6 py-2 border border-[#111] rounded-full ">
            Get Started
          </div>
          <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <HiMiniBars3BottomRight className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full lg:hidden  bg-[#fff] text-[#111] py-5 transition-all duration-300 h-[100vh] overflow-y-auto flex flex-col justify-between ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="   ">
          <div className="flex items-center justify-between pl-2 pr-5 ">
          <Link href={"/"} className=" w-auto h-auto ">
            <Image
              src={Logo}
              alt="Sidesone - Profesjonelle nettsider, nettbutikker og webapper"
              className="w-[211px] h-[35px] object-contain"
            />
          </Link>
            <button onClick={() => setMenuOpen(false)}>
              <RxCross2 className="text-[2rem] cursor-pointer" />
            </button>
          </div>
          <ul className="flex flex-col mt-14 px-5 text-[#111] space-y-6 ">
            <li className="relative group ">
              <div
                className={`flex items-center justify-between pb-2 cursor-pointer text-[1.4rem] 
                `}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </div>
            </li>
            <li className="relative group ">
              <div
                className={`flex items-center justify-between pb-2 cursor-pointer text-[1.4rem] 
                `}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  About
                </Link>
              </div>
            </li>
            <li className="relative group ">
              <div
                className={`flex items-center justify-between pb-2 cursor-pointer text-[1.4rem] 
                `}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Pricing
                </Link>
              </div>
            </li>
            <li className="relative group ">
              <div
                className={`flex items-center justify-between pb-2 cursor-pointer text-[1.4rem] 
                `}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Consulting
                </Link>
              </div>
            </li>
            <li className="relative group ">
              <div
                className={`flex items-center justify-between pb-2 cursor-pointer text-[1.4rem] 
                `}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Ai Coach
                </Link>
              </div>
            </li>
          </ul>

          <div className=" flex items-center mt-auto justify-center gap-4 h-full ">
            <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1.2rem] cursor-pointer ">
              <FaFacebookF className=" " />
            </div>
            <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1.2rem] cursor-pointer ">
              <FaInstagram className=" " />
            </div>
            <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1.2rem] cursor-pointer ">
              <FaLinkedinIn className=" " />
            </div>
            <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1.2rem] cursor-pointer ">
              <BsTwitterX className="  " />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
