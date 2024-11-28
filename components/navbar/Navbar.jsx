"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon

export default function Navbar() {
  const [dropdown, setDropdown] = useState({});

  const toggleDropdown = (label) => {
    setDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Main navigation items with links
  const navItems = [
    { label: "Home", href: "/" },
    { label: "MBA Global", href: "/mba-global" },
    {
      label: "Regions",
      links: [
        { label: "MBA Asia", href: "/mba-asia" },
        { label: "MBA Canada", href: "/mba-canada" },
        { label: "MBA Latin America", href: "/mba-latin-america" },
        { label: "MBA Europe", href: "/mba-europe" },
        { label: "MBA Middle East & Africa", href: "/mba-middle-east-africa" },
        { label: "MBA Oceania", href: "/mba-oceania" },
        { label: "MBA United States", href: "/mba-united-states" },
      ],
    },
    { label: "MS Management", href: "/ms-management" },
    { label: "MS Finance", href: "/ms-finance" },
    { label: "MS Business Analytics", href: "/ms-business-analytics" },
    { label: "MS Marketing", href: "/ms-marketing" },
    {
      label: "MS Supply Chain Management",
      href: "/ms-supply-chain-management",
    },
  ];

  return (
    <nav className="navbar bg-[rgb(29,29,27)] p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          width={100}
          height={100}
          alt="logo"
          src="/ai-logo3.PNG"
          className="rounded-full"
        />
        {/* Nav Links */}
        <div className="flex space-x-6 font-semibold text-white">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => toggleDropdown(item.label)}
              onMouseLeave={() => toggleDropdown(item.label)}
            >
              <Link
                href={item.href || "#"} // Use item.href if available
                className="hover:text-yellow-400 transition duration-300 ease-in-out"
              >
                {item.label}
              </Link>
              <div
                className={`absolute top-10 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
              ></div>

              {/* Dropdown for Regions */}
              {item.links && dropdown[item.label] && (
                <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 transition-all duration-300 ease-in-out">
                  <ul>
                    {item.links.map((link) => (
                      <li key={link.label} className="hover:bg-gray-100">
                        <Link href={link.href} className="block px-4 py-2">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Login/Signup + Search Icon */}
        <div className="flex space-x-4 items-center">
          {/* Search Icon */}
          <button className="text-white p-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out">
            <FaSearch className="text-xl" />
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-700"
          >
            Login
          </Link>

          {/* Sign Up Button */}
          <Link
            href="/signup"
            className="text-white bg-green-600 py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-green-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
