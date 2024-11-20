"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // You can use react-icons for the search icon

export default function Navbar() {
  // State to control dropdown visibility
  const [dropdown, setDropdown] = useState({});

  const toggleDropdown = (label) => {
    setDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const navItems = [
    { label: "Rankings", links: ["Top 10", "World Rankings", "Regionals"] },
    { label: "Discover", links: ["Events", "Media", "Blogs"] },
    { label: "Events", links: ["Upcoming", "Past Events"] },
    { label: "Prepare", links: ["Training", "Resources", "Guides"] },
    { label: "Apply", links: ["Start Application", "Submit Resume"] },
    { label: "Careers", links: ["Job Openings", "Internships"] },
    { label: "Resources", links: ["Guides", "Downloads", "FAQ"] },
  ];

  return (
    <nav className="navbar bg-[rgb(29,29,27)] p-2 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between ml-1">
        {/* Logo */}
        <Image width={200} height={200} alt="logo" src="/Logo.png" />

        {/* Nav Links (aligned to the left next to the logo) */}
        <div className="flex px-4 mr-[500px] space-x-8 font-semibold">
          {" "}
          {/* Added left margin here */}
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => toggleDropdown(item.label)}
              onMouseLeave={() => toggleDropdown(item.label)}
            >
              {/* Nav link */}
              <Link
                href="#"
                className="text-white hover:text-gray-400 transition-all duration-200 ease-in-out"
              >
                {item.label}
              </Link>

              {/* Hover line below the label */}
              <div
                className={`absolute top-10 left-0 w-[90px] h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
              ></div>

              {/* Drop-down menu */}
              {dropdown[item.label] && (
                <div className="absolute left-0 mt-[20px] bg-white text-black rounded-md shadow-lg w-64 transition-all duration-300 ease-in-out">
                  <ul>
                    {item.links.map((link, index) => (
                      <li key={index} className="hover:bg-white px-4 py-2">
                        <Link href="#" className="block">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Login/Signup + Search Icon (aligned to the right) */}
        <div className="flex space-x-4 items-center">
          {/* Search Icon */}
          <button className="text-white p-2 hover:bg-gray-700 rounded-full">
            <FaSearch className="text-xl" />
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="text-white px-4 py-2 rounded-md transition-all duration-200 ease-in-out"
          >
            Login
          </Link>

          {/* Sign Up Button */}
          <Link
            href="/signup"
            className="text-white bg-green-600 py-2 px-2 rounded-md transition-all duration-200 ease-in-out"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
