import React from "react";
import Tabs from "../ranking/Tabs";

const WhyMba = () => {
  const tabData2 = [
    {
      title: "MBA & Career Specialisation Rankings",
      cards: [
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Global MBA Rankings",
          title: "Top MBA Programmes Worldwide",
          description:
            "Discover the top MBA programmes globally according to the QS Global MBA Rankings. Find the best business schools for your career.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "MBA Ranking Methodology",
          title: "QS MBA Ranking",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "MBA by Career Specialisation",
          title: "Best MBA Schools",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Operations Management MBA",
          title: "Operations Management.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Entrepreneurship MBA Rankings",
          title: "Top MBA Programmes",
        },
      ],
    },
    {
      title: "EMBA & Online MBA Rankings",
      cards: [
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Executive MBA Rankings",
          title: "Top Executive MBA Programmes 2023",
          description:
            "Explore the top executive MBA programmes worldwide, offering opportunities for experienced professionals in 2023.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Healthcare Executive MBA",
          title: "Executive Education.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Technology in EMBA",
          title: "Role of Technology.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Skills from EMBA",
          title: "Skills Developed in Leading.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "EMBA Work-Study Balance",
          title: "Balancing Work and Study.",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          image: "https://example.com/eu-top-online.jpg",
          alt: "European Online MBA",
          title: "Top Online MBA Programmes in Europe",
          description:
            "Explore the best online MBA programmes from European business schools.",
        },
        {
          image: "https://example.com/online-innovations.jpg",
          alt: "Online MBA Innovations",
          title: "5 Innovations in the Online MBA for 2022",
          description:
            "Learn about the top 5 innovations in online MBA programmes for 2022.",
        },
        {
          image: "https://example.com/online-vs-campus.jpg",
          alt: "Online vs Campus MBA",
          title: "Online vs Campus MBA: Which is Right for You?",
          description:
            "Compare online and traditional campus-based MBA programmes and find out.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-24 mt-8">
        <h1 className="mb-4 text-3xl font-semibold">Why Pursue an MBA?</h1>
        <p className="text-gray-700 mb-4">
          Learn why an MBA can enhance your career with insights into top MBA
          rankings, career specialisations, and the benefits of executive
          education. Explore the best global, EMBA, and online MBA programmes,
          and find your ideal fit for career advancement.
        </p>
      </div>
      <Tabs tabs={tabData2} />
    </>
  );
};

export default WhyMba;
