import React from "react";
import Tabs from "../ranking/Tabs";

const AdmissionAdvice = () => {
  const tabData2 = [
    {
      title: "MBA & Career Specialisation Rankings",
      cards: [
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Top MBA Programmes",
          title: "Top Global MBA Programmes",
          description:
            "Discover the top MBA programmes around the world, ranked according to the QS Global MBA Rankings. Learn which schools lead the world in business education.",
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
          alt: "Finance MBA Rankings",
          title: "Top MBA Schools",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Operations Management MBA",
          title: "Operations Management",
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
          alt: "Top EMBA Programmes",
          title: "Top EMBA Programmes Worldwide",
          description:
            "Explore the best Executive MBA programmes around the world. These top-ranked schools provide flexible and intensive education for senior professionals and executives.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Healthcare Executive Education",
          title: "Healthcare Executive",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "Executive MBA HEC Paris",
          title: "HEC Paris Executive MBA",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          alt: "North America EMBA Rankings",
          title: "Top EMBA Programmes",
        },
        {
          image: "https://example.com/uk-top-online.jpg",
          alt: "UK Online MBA Rankings",
          title: "Uk Top Online MBA",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          image: "https://example.com/eu-top-online.jpg",
          alt: "European Online MBA",
          title: "Top European Online MBA Programmes",
          description:
            "Find the best online MBA programmes from prestigious European business schools, offering flexibility and high-quality education.",
        },
        {
          image: "https://example.com/online-innovations.jpg",
          alt: "Online MBA Innovations",
          title: "Innovations in Online MBA",
        },
        {
          image: "https://example.com/online-vs-campus.jpg",
          alt: "Online vs Campus MBA",
          title: "Online vs Campus MBA",
        },
        {
          image: "https://example.com/mba-alumni.jpg",
          alt: "MBA Alumni Network",
          title: "MBA Alumni.",
        },
        {
          image: "https://example.com/employment-opportunities.jpg",
          alt: "MBA Employment Opportunities",
          title: "Top Employment Opportunities.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-24 mt-8">
        <h1 className="mb-4 text-3xl font-semibold">MBA Admission Advice</h1>
        <p className="text-gray-700 mb-4">
          Get expert advice on MBA admissions, including insights into top MBA
          rankings, executive education, and online MBA programmes. Explore the
          best business schools and career specializations to help you make the
          right decision.
        </p>
      </div>
      <Tabs tabs={tabData2} />
    </>
  );
};

export default AdmissionAdvice;
