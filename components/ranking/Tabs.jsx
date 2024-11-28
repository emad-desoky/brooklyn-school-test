"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderCards = (cards) => {
    const cardCount = cards.length;

    if (cardCount === 2) {
      return (
        <div className="flex space-x-4 px-[90px] h-[500px]">
          {cards.map((card, index) => (
            <Card key={index} card={card} className="w-1/2" />
          ))}
        </div>
      );
    } else if (cardCount === 3) {
      return (
        <div className="grid grid-cols-3 gap-4 px-[100px] h-[540px]">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      );
    } else if (cardCount === 5) {
      return (
        <div className="flex space-x-4 px-[90px] h-[650px]">
          {/* Big Card */}
          <Card card={cards[0]} className="w-[50%] h-full" />
          {/* Small Cards */}
          <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            {cards.slice(1).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="tabs">
        {/* Tab Headers */}
        <div className="flex space-x-4 mb-6 ml-28 bg-white border-b-2 border-gray-200 w-[1050px]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 relative ${
                index === activeTab
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {tab.title}
              {index === activeTab && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">{renderCards(tabs[activeTab].cards)}</div>
      </div>
    </>
  );
};

// Card Component with optimized images
const Card = ({ card, className }) => (
  <div
    className={`card bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
  >
    {/* Upper Part (Image) */}
    <div className="relative h-3/4">
      <Link href={`rankings/${btoa(JSON.stringify(card))}`}>
        <Image
          src={card.image}
          alt={card.alt || "Image"} // Use alt text if available
          layout="fill"
          objectFit="cover" // Ensures the image covers the container
          objectPosition="center" // Centers the image
          loading="lazy"
          quality={65}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive images based on viewport width
        />
      </Link>
    </div>
    {/* Lower Part (Title and Description) */}
    <div className="p-4 h-1/4">
      <h3 className="text-lg font-semibold">{card.title}</h3>
      <p className="text-gray-700 text-sm">{card.description}</p>
    </div>
  </div>
);

export default Tabs;
