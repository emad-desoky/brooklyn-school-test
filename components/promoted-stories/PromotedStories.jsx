"use client";
import React from "react";

const PromotedStories = () => {
  const cards = [
    {
      image:
        "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
      title: "Top Global MBA Programs 2025",
      description:
        "Discover the top MBA programs worldwide, ranked in the QS Global MBA Rankings.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
      title: "QS MBA Ranking",
      description: "",
    },
    {
      image:
        "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
      title: "Top MBAs for Finance",
      description: "",
    },
    {
      image:
        "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
      title: "Operations Management",
      description: "",
    },
    {
      image:
        "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
      title: "Top Entrepreneurship MBA",
      description: "",
    },
  ];

  const Card = ({ card, className }) => (
    <div
      className={`card bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {/* Upper Part (Image) */}
      <div className="relative h-3/4">
        <img
          src={card.image}
          alt={`${card.title} - ${card.description}`}
          className="object-cover w-full h-full"
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
      <div className="flex space-x-4 h-[500px] mt-8">
        {/* Big Card */}
        <Card card={cards[0]} className="w-1/2 h-full" />
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
