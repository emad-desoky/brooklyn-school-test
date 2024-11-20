import React from "react";
import Tabs from "../ranking/Tabs";

const WhyMba = () => {
  const tabData2 = [
    {
      title: "MBA & Career Specialisation Rankings",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg",
          alt: "Global MBA Rankings",
          title: "Top MBA Programmes Worldwide",
          description:
            "Discover the top MBA programmes globally according to the QS Global MBA Rankings. Find the best business schools for your career.",
        },
        {
          image:
            "https://images.pexels.com/photos/3183189/pexels-photo-3183189.jpeg",
          alt: "MBA Ranking Methodology",
          title: "QS MBA Ranking",
        },
        {
          image:
            "https://images.pexels.com/photos/3270763/pexels-photo-3270763.jpeg",
          alt: "MBA by Career Specialisation",
          title: "Best MBA Schools",
        },
        {
          image:
            "https://images.pexels.com/photos/3759082/pexels-photo-3759082.jpeg",
          alt: "Operations Management MBA",
          title: "Operations Management.",
        },
        {
          image:
            "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
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
            "https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg",
          alt: "Executive MBA Rankings",
          title: "Top Executive MBA Programmes 2023",
          description:
            "Explore the top executive MBA programmes worldwide, offering opportunities for experienced professionals in 2023.",
        },
        {
          image:
            "https://images.pexels.com/photos/3183189/pexels-photo-3183189.jpeg",
          alt: "Healthcare Executive MBA",
          title: "Executive Education.",
        },
        {
          image:
            "https://images.pexels.com/photos/3270763/pexels-photo-3270763.jpeg",
          alt: "Technology in EMBA",
          title: "Role of Technology.",
        },
        {
          image:
            "https://images.pexels.com/photos/3759082/pexels-photo-3759082.jpeg",
          alt: "Skills from EMBA",
          title: "Skills Developed in Leading.",
        },
        {
          image:
            "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
          alt: "EMBA Work-Study Balance",
          title: "Balancing Work and Study.",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/3183189/pexels-photo-3183189.jpeg",
          alt: "European Online MBA",
          title: "Top Online MBA Programmes in Europe",
          description:
            "Explore the best online MBA programmes from European business schools.",
        },
        {
          image:
            "https://images.pexels.com/photos/3270763/pexels-photo-3270763.jpeg",
          alt: "Online MBA Innovations",
          title: "5 Innovations in the Online MBA for 2022",
          description:
            "Learn about the top 5 innovations in online MBA programmes for 2022.",
        },
        {
          image:
            "https://images.pexels.com/photos/3759082/pexels-photo-3759082.jpeg",
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
