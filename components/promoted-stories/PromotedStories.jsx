"use client";
import React from "react";
import Image from "next/image";

const PromotedStories = () => {
  const cards = [
    {
      image: "sixthteen.jpeg",
      title: "Top Global MBA Programs 2025",
      description:
        "Explore the best MBA programs around the world, ranked in the QS Global MBA Rankings for 2025.",
    },
    {
      image: "seventeen.jpeg",

      title: "QS MBA Ranking Methodology",
      description: "Understand the methodology behind the QS ",
    },
    {
      image: "eighteen.jpeg",

      title: "Top MBAs for Finance Careers",
      description: "Check out the best MBA programs for a career",
    },
    {
      image: "nineteen.jpg",

      title: "Operations Management MBA Programs",
      description: "Discover the best MBA programs that.",
    },
    {
      image: "twenty.jpeg",

      title: "Top Entrepreneurship MBA Programs",
      description:
        "Explore the top MBA programs for aspiring entrepreneurs, ranked globally for 2025.",
    },
  ];

  const Card = ({ card, className }) => (
    <div
      className={`card bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {/* Upper Part (Image) */}
      <div className="relative h-3/4">
        <Image
          src={card.image}
          alt={`${card.title} - ${card.description}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      {/* Lower Part (Title and Description) */}
      <div className="p-4 h-1/4">
        <h2 className="text-lg font-semibold">{card.title}</h2>
        <p className="text-gray-700 text-sm mt-2">{card.description}</p>
      </div>
    </div>
  );

  return (
    <div className="px-24 py-4">
      <h1 className="text-3xl font-semibold mt-4">Promoted Stories</h1>
      <p className="text-gray-700 text-lg mt-2">
        Explore our latest selection of top MBA programs, including global
        rankings, methodology insights, and specialized MBA programs for
        finance, operations, and entrepreneurship.
      </p>
      {/* Displaying the 5 cards */}
      <div className="flex space-x-4 h-[650px] mt-4">
        {/* Big Card */}
        <Card card={cards[0]} className="w-[60%] h-full" />
        {/* Small Cards */}
        <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {cards.slice(1).map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotedStories;
