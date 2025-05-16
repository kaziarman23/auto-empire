"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClick = () => {
    if (isOpen) return setIsOpen(false);
  };

  //this one is for scroll Lock
  useEffect(() => {
    const target = document.body;

    if (isOpen) {
      disableBodyScroll(target);
    } else if (!isOpen) {
      enableBodyScroll(target);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <>
      <nav className="w-full h-10 relative flex justify-center items-center">
        <div className="w-full h-10 fixed bg-zinc-900 z-50 flex justify-evenly items-center sm:hidden md:hidden lg:hidden xl:hidden">
          <div>
            <h1 className="font-bold text-sm">
              <Link href="/">Auto empire</Link>
            </h1>
          </div>
          <div onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {!isOpen ? (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              ) : (
                <path d="M6 18L18 6M6 6l12 12"></path>
              )}
            </svg>
          </div>
        </div>

        {/*big screen disign  */}
        <div className="w-full h-10 fixed bg-zinc-900 z-50 flex  max-sm:hidden sm:text-sm sm:justify-center md:text-md lg:justify-evenly lg:items-center lg:text-lg">
          <Link href="/">
            <h3 className="p-3 text-white hover:text-orange-500">Home</h3>
          </Link>
          <Link href="/luxury-cars">
            <h3 className="p-3 text-white hover:text-orange-500">
              Luxury cars
            </h3>
          </Link>
          <Link href="/race-cars">
            <h3 className="p-3 text-white hover:text-orange-500">
              Racing cars
            </h3>
          </Link>
          <Link href="/suv-cars">
            <h3 className="p-3 text-white hover:text-orange-500">
              SUVs monsters
            </h3>
          </Link>
          <Link href="/contact-us">
            <h3 className="p-3 text-white hover:text-orange-500">Contact Us</h3>
          </Link>
        </div>
      </nav>

      {/*mobile disign  */}
      {isOpen && (
        <div className="w-full h-screen bg-zinc-800 z-50 flex justify-start items-end gap-3 flex-col">
          <div className="w-60 h-60 text-right">
          <Link href="/">
            <motion.h3
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              onClick={handleClick}
              className="p-3  text-white hover:text-orange-500"
            >
              Home
            </motion.h3>
          </Link>
          <Link href="/luxury-cars">
            <motion.h3
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: "easeInOut",
              }}
              onClick={handleClick}
              className="p-3  text-white hover:text-orange-500"
            >
              Luxury cars
            </motion.h3>
          </Link>
          <Link href="/race-cars">
            <motion.h3
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeInOut",
              }}
              onClick={handleClick}
              className="p-3  text-white hover:text-orange-500"
            >
              Racing cars
            </motion.h3>
          </Link>
          <Link href="/suv-cars">
            <motion.h3
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: "easeInOut",
              }}
              onClick={handleClick}
              className="p-3  text-white hover:text-orange-500"
            >
              SUVs monsters
            </motion.h3>
          </Link>
          <Link href="/contact-us">
            <motion.h3
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: "easeInOut",
              }}
              onClick={handleClick}
              className="p-3  text-white hover:text-orange-500"
            >
              Contact Us
            </motion.h3>
          </Link>
          </div>
          
        </div>
      )}
    </>
  );
}

export default Navbar;
