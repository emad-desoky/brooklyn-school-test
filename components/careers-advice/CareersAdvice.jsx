import React from "react";
import Tabs from "../ranking/Tabs";

const CareersAdvice = () => {
  const tabData2 = [
    {
      title: "MBA & Career",
      cards: [
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "Discover the top MBA programmes around the world according to the QS Global MBA Rankings.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "Discover the methodology behind the QS Global MBA Rankings, our assessment of the top full-time MBA programmes in the world.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "QS MBA by Career Specialisation Rankings 2023 have been released. Here we take a look at the top 10 schools specialising in finance on an MBA programme.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "Operations management is chiefly concerned with planning, organizing and supervising in the contexts of production, manufacturing or the provision of services. This article explains what operations management involves and what skills can make you a successful operations manager.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "Which MBA programmes are the best for a career in entrepreneurship? Discover the top 10 MBA programmes based on the QS MBA by Career Specialisation Rankings 2023: Entrepreneurship.",
        },
      ],
    },
    {
      title: "EMBA & Online MBA Rankings",
      cards: [
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description: "Top executive MBA programmes in the world 2023.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description: "Why healthcare needs executive education graduates.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "What makes the Executive MBA from HEC Paris the best in the world?",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          description:
            "We've released the QS Global EMBA Rankings. Take a look at the top 10 EMBA programmes in North America.",
        },
        {
          image: "https://example.com/uk-top-online.jpg",
          description: "UK’s top three online MBA programmes compared.",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          image: "https://example.com/eu-top-online.jpg",
          description:
            "Top online MBA programmes at European business schools.",
        },
        {
          image: "https://example.com/online-innovations.jpg",
          description: "5 innovative changes to the online MBA in 2022.",
        },
        {
          image: "https://example.com/online-vs-campus.jpg",
          description:
            "How can online MBAs replicate the on-campus experience?",
        },
      ],
    },
    {
      title: "MBA Alumni & Employment Insights",
      cards: [
        {
          image: "https://example.com/mba-alumni.jpg",
          description: "How MBA alumni can help your career growth.",
        },
        {
          image: "https://example.com/employment-opportunities.jpg",
          description:
            "The most promising employment opportunities for MBA graduates.",
        },
        {
          image: "https://example.com/mba-networking.jpg",
          description: "The power of networking for MBA students and alumni.",
        },
      ],
    },
  ];

  return (
    <>
      {" "}
      <div className="px-24 mt-8">
        <h1 className="mb-4 text-3xl font-semibold">Careers advice</h1>
      </div>
      <Tabs tabs={tabData2} />;
    </>
  );
};

export default CareersAdvice;
