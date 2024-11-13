import React from "react";
import Tabs from "../ranking/Tabs";

const MbaProgrammes = () => {
  const tabData2 = [
    {
      title: "MBA & Career Specialisation Rankings",
      cards: [
        {
          title: "Top MBA Programmes Worldwide",
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "Discover the top MBA programmes around the world according to the QS Global MBA Rankings.",
        },
        {
          title: "QS Global MBA Rankings",
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
        },
        {
          title: "Top Schools Specialize",
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
        },
        {
          title: "Operations Management",
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
        },
        {
          title: "Best MBA Programmes",
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
        },
      ],
    },
    {
      title: "EMBA & Online MBA Rankings",
      cards: [
        {
          title: "Top Executive MBA Programmes",
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description: "Top executive MBA programmes in the world 2023.",
        },
        {
          title: "Healthcare and Executive Education",
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description: "Why healthcare needs executive education graduates.",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          title: "Top European Online MBA Programmes",
          image: "https://example.com/eu-top-online.jpg",
          description:
            "Top online MBA programmes at European business schools.",
        },
        {
          title: "Innovations in Online MBA",
          image: "https://example.com/online-innovations.jpg",
        },
        {
          title: "Online vs. Campus MBA",
          image: "https://example.com/online-vs-campus.jpg",
        },
        {
          title: "The Value of MBA Alumni ",
          image: "https://example.com/mba-alumni.jpg",
        },
        {
          title: "Top Employment",
          image: "https://example.com/employment-opportunities.jpg",
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-24 mt-8">
        <h1 className="mb-4 text-3xl font-semibold">MBA Programmes</h1>
      </div>
      <Tabs tabs={tabData2} />
    </>
  );
};

export default MbaProgrammes;
