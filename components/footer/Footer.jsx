"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle email subscription logic here
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="bg-[#171717] border-t-8 border-[#ffae00] mt-4">
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-48 text-white">
          {/* Left Section (Links) */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap gap-5">
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
              <a href="#" className="hover:text-yellow-500">
                Privacy
              </a>
              <a href="#" className="hover:text-yellow-500">
                Users
              </a>
              <a href="#" className="hover:text-yellow-500">
                Cookies
              </a>
              <a href="#" className="hover:text-yellow-500">
                DATA
              </a>
              <a href="#" className="hover:text-yellow-500">
                COPYRIGHT
              </a>
              <a href="#" className="hover:text-yellow-500">
                Terms & Conditions
              </a>
            </div>
            <p className="text-sm mt-4 text-white opacity-80">
              © emad 1994 - 2024. All rights reserved.
            </p>
          </div>

          {/* Right Section (Newsletter & Social Icons) */}
          <div className="flex flex-col items-start space-y-6">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <div className="bg-white p-3 rounded-full cursor-pointer hover:bg-gray-300 transition-colors">
                <FaFacebookF className="text-gray-700 text-xl" />
              </div>
              <div className="bg-white p-3 rounded-full cursor-pointer hover:bg-gray-300 transition-colors">
                <FaTwitter className="text-gray-700 text-xl" />
              </div>
              <div className="bg-black p-3 rounded-full cursor-pointer hover:bg-gray-300 transition-colors">
                <FaLinkedinIn className="text-gray-700 text-xl" />
              </div>
              <div className="bg-white p-3 rounded-full cursor-pointer hover:bg-gray-300 transition-colors">
                <FaInstagram className="text-gray-700 text-xl" />
              </div>
            </div>
            {/* Newsletter Subscription */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-white">
                Subscribe to Our Newsletter
              </label>
              <div className="flex items-center ">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="p-3 rounded-l-md focus:outline-none w-full max-w-xs"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-yellow-500 text-black px-6 py-3 rounded-r-md hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
