"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["500"] });

function Navbar({ page }: { page: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed z-50 bg-gradient-to-r font-semibold from-[#F4B518]/90 to-[#F2B318]/90 backdrop-blur-sm pb-10 ${ isOpen ? 'rounded-none': 'rounded-b-[50px]'} prevent-select w-full p-4 h-[5rem] flex items-center justify-between px-8 md:px-32 pt-10`}
    >
      <a href="/" className="">
        <Image
          className="w-16 h-16 md:w-24 md:h-24"
          alt="logo"
          src="/logo.svg"
          width={200}
          height={200}
        />
      </a>
      <div className="md:hidden">
        <button
          className="text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
            ></path>
          </svg>
        </button>
      </div>
      <div style={{ transitionProperty: 'max-height, opacity, transform' }}
        className={`${
          isOpen
            ? "max-h-[1000px] opacity-100 scale-100 flex bg-gradient-to-r from-[#F4B518]/90 to-[#F2B318]/90 backdrop-blur-sm "
            : "hidden"
        } transition-all duration-500 ease-in-out transform flex-col md:flex md:flex-row gap-8 items-center justify-center font-semibold absolute md:static top-[5rem] left-0 w-full md:w-auto rounded-b-[50px] md:rounded-none p-6 md:p-0 z-40`}
>        
        <a
          href="/"
          className={`${page == "home" ? "text-white" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="/events"
          className={`${page == "events" ? "text-white" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          Events
        </a>
        <a
          href="/team"
          className={`${page == "team" ? "text-white" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          Team
        </a>
        <a
          href="/about"
          className={`${page == "about" ? "text-white" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          About Us
        </a>
        <button
          className="px-5 py-2 bg-black text-white rounded-3xl font-[600]"
          onClick={() => setIsOpen(false)}
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default Navbar;
