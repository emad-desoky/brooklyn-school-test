import React from "react";
import Tabs from "../ranking/Tabs";

const AdmissionAdvice = () => {
  const tabData2 = [
    {
      title: "MBA & Career Specialisation Rankings",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg",
          alt: "Top MBA Programmes",
          title: "Top Global MBA Programmes",
          description:
            "Discover the top MBA programmes around the world, ranked according to the QS Global MBA Rankings. Learn which schools lead the world in business education.",
        },
        {
          image:
            "https://images.pexels.com/photos/3184385/pexels-photo-3184385.jpeg",
          alt: "MBA Ranking Methodology",
          title: "QS MBA Ranking",
        },
        {
          image:
            "https://images.pexels.com/photos/3183191/pexels-photo-3183191.jpeg",
          alt: "Finance MBA Rankings",
          title: "Top MBA Schools",
        },
        {
          image:
            "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
          alt: "Operations Management MBA",
          title: "Operations Management",
        },
        {
          image:
            "https://images.pexels.com/photos/3183189/pexels-photo-3183189.jpeg",
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
            "https://images.pexels.com/photos/3179239/pexels-photo-3179239.jpeg",
          alt: "Top EMBA Programmes",
          title: "Top EMBA Programmes Worldwide",
          description:
            "Explore the best Executive MBA programmes around the world. These top-ranked schools provide flexible and intensive education for senior professionals and executives.",
        },
        {
          image:
            "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg",
          alt: "Healthcare Executive Education",
          title: "Healthcare Executive",
        },
        {
          image:
            "https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg",
          alt: "Executive MBA HEC Paris",
          title: "HEC Paris Executive MBA",
        },
        {
          image:
            "https://images.pexels.com/photos/3184447/pexels-photo-3184447.jpeg",
          alt: "North America EMBA Rankings",
          title: "Top EMBA Programmes",
        },
        {
          image:
            "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
          alt: "UK Online MBA Rankings",
          title: "UK Top Online MBA",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg",
          alt: "European Online MBA",
          title: "Top European Online MBA Programmes",
          description:
            "Find the best online MBA programmes from prestigious European business schools, offering flexibility and high-quality education.",
        },
        {
          image:
            "https://images.pexels.com/photos/3184314/pexels-photo-3184314.jpeg",
          alt: "Online MBA Innovations",
          title: "Innovations in Online MBA",
        },
        {
          image:
            "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg",
          alt: "Online vs Campus MBA",
          title: "Online vs Campus MBA",
        },
        {
          image:
            "https://images.pexels.com/photos/3183192/pexels-photo-3183192.jpeg",
          alt: "MBA Alumni Network",
          title: "MBA Alumni.",
        },
        {
          image:
            "https://images.pexels.com/photos/3183182/pexels-photo-3183182.jpeg",
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
