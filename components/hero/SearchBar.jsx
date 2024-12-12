"use client";

import React, { createContext, useState, useContext } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "MBA Global", href: "/mba-global" },
  { label: "MBA Asia", href: "/mba-asia" },
  { label: "MBA Canada", href: "/mba-canada" },
  { label: "MBA Latin America", href: "/mba-latin-america" },
  { label: "MBA Europe", href: "/mba-europe" },
  { label: "MBA Middle East & Africa", href: "/mba-middle-east-africa" },
  { label: "MBA Oceania", href: "/mba-oceania" },
  { label: "MBA United States", href: "/mba-united-states" },
  { label: "MS Management", href: "/ms-management" },
  { label: "MS Finance", href: "/ms-finance" },
  { label: "MS Business Analytics", href: "/ms-business-analytics" },
  { label: "MS Marketing", href: "/ms-marketing" },
  { label: "MS Supply Chain Management", href: "/ms-supply-chain-management" },
];

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const findMatchingPage = (term) => {
    const lowercaseTerm = term.toLowerCase();
    const match = navItems.find(
      (item) =>
        item.label.toLowerCase().includes(lowercaseTerm) ||
        item.href.toLowerCase().includes(lowercaseTerm)
    );
    return match ? match.href : "/mba-global";
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, findMatchingPage }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
