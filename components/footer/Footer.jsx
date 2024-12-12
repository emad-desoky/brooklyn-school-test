"use client";
import React, { useState } from "react";

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
        </div>
      </div>
    </div>
  );
};

export default Footer;
