"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FileLock, FileLock2, LucideIdCard } from "lucide-react";
import auth from "../../firebase/firebase.config";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import useBWToast from "./useCustomToast";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/userSlice";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userName);
  const router = useRouter();
  const { showSuccess } = useBWToast();

  console.log("user:", user);

  // Links for navigation
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/inventory", name: "Inventory" },
    { path: "/about", name: "About Us" },
    { path: "/contact", name: "Contact Us" },
  ];

  // State to manage visibility and interactivity
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for detecting outside click
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Handle hiding navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menus if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => setMenuOpen((prev) => !prev);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // handle logout
  const handleLogout = () => {
    // signing out the user
    signOut(auth);

    // removing the user from redux store
    dispatch(logoutUser());

    // showing alert
    showSuccess("Logout Successfull!");

    // navigating the user
    router.push("/");
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-gray-700 bg-black shadow-md transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-0">
        {/* Logo */}
        <Link href="#hero">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Other_Images/logo.png"
              alt="logo"
              quality={100}
              width={30}
              height={30}
            />
            <p className="text-3xl font-bold">Auto Empire</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className={`border-b-2 border-transparent text-white transition-colors hover:border-orange-500 hover:text-orange-500 ${
                pathname === path ? "border-orange-500 text-orange-500" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right: Fake Account Dropdown */}
        <div className="hidden w-1/5 justify-end lg:flex">
          <div className="relative" ref={dropdownRef}>
            <Button
              onClick={toggleDropdown}
              className="flex items-center gap-2 border border-white"
            >
              <LucideIdCard className="text-white" size={18} />
              Account
            </Button>
            {user && menuOpen ? (
              <ul className="absolute right-0 mt-2 w-40 space-y-2 rounded-md border border-gray-700 bg-black p-2 shadow-lg">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-white hover:text-orange-500"
                  >
                    <MdOutlineSpaceDashboard size={20} />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Button onClick={handleLogout} className="w-full text-sm">
                    Logout
                  </Button>
                </li>
              </ul>
            ) : menuOpen ? (
              <ul className="absolute right-0 mt-2 w-40 space-y-2 rounded-md border border-gray-700 bg-black p-2 shadow-lg">
                <li>
                  <Link href="/authintication">
                    <Button className="flex w-full items-center gap-2 text-sm hover:gap-3 hover:font-bold">
                      <FileLock className="text-white" size={18} />
                      Login
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/authintication">
                    <Button className="flex w-full items-center gap-2 text-sm hover:gap-3 hover:font-bold">
                      <FileLock2 className="text-white" size={18} />
                      Register
                    </Button>
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="relative lg:hidden" ref={mobileDropdownRef}>
          <Button onClick={toggleMobileMenu} className="p-2">
            <HiMenu className="text-2xl text-white" />
          </Button>

          {user && mobileMenuOpen ? (
            <div className="absolute right-0 z-50 mt-2 w-44 rounded-lg bg-black p-3 shadow-lg">
              {navLinks.map(({ path, name }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={toggleMobileMenu}
                  className={`block rounded-md px-3 py-2 text-white transition hover:bg-orange-500 ${
                    pathname === path ? "bg-orange-500" : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
              <div className="my-2 border-t border-gray-700" />
              <Link
                href="/dashboard"
                onClick={toggleMobileMenu}
                className="block rounded-md px-3 py-2 text-white hover:bg-orange-500"
              >
                Dashboard
              </Link>
              <Button onClick={handleLogout} className="mt-2 w-full text-sm">
                Logout
              </Button>
            </div>
          ) : mobileMenuOpen ? (
            <div className="absolute right-0 z-50 mt-2 w-44 rounded-lg bg-black p-3 shadow-lg">
              {navLinks.map(({ path, name }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={toggleMobileMenu}
                  className={`block rounded-md px-3 py-2 text-white transition hover:bg-orange-500 ${
                    pathname === path ? "bg-orange-500" : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
              <div className="my-2 border-t border-gray-700" />

              <Link href="/authintication">
                <Button className="flex w-full items-center gap-2 text-sm hover:gap-3 hover:font-bold">
                  <FileLock className="text-white" size={18} />
                  Login
                </Button>
              </Link>
              <Link href="/authintication">
                <Button className="flex w-full items-center gap-2 text-sm hover:gap-3 hover:font-bold">
                  <FileLock2 className="text-white" size={18} />
                  Register
                </Button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
