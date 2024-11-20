import React from "react";
import Image from "next/image"; // Import Next.js Image component

const cards = [
  {
    title: "Discover MBAs",
    description:
      "Start your MBA journey by discovering the right programme and business school for you.",
    image: "/logo1.png",
    link: "#",
  },
  {
    title: "Meet with schools",
    description:
      "In-person and virtual worldwide events. Get your questions answered by admissions reps from around the world.",
    image: "/logo2.png",

    link: "#",
  },
  {
    title: "Prepare your application",
    description:
      "Get ready to sit the GMAT or GRE by joining the world's first social test-prep platform for free.",
    image: "/logo3.png",

    link: "#",
  },
];

const Cards = () => {
  return (
    <div className="flex space-x-6 justify-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[21rem] bg-white shadow-lg rounded-lg p-6"
        >
          <div className="flex justify-center mb-10">
            <Image
              src={card.image}
              alt={card.title}
              width={100} // Equivalent to h-12 and w-12 in Tailwind
              height={100} // Ensures the image has the correct aspect ratio
            />
          </div>
          <h3 className="text-center text-xl font-semibold mb-10">
            {card.title}
          </h3>
          <p className="text-center text-gray-600 mb-4">{card.description}</p>
          <div className="text-center">
            <a
              href={card.link}
              className="text-blue-600 font-semibold flex items-center justify-center space-x-2"
            >
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5-5 5M6 12h12"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
