import React from "react";
import Tabs from "../ranking/Tabs";

const CareersAdvice = () => {
  const tabData2 = [
    {
      title: "MBA & Career",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/3823545/pexels-photo-3823545.jpeg", // MBA Business Leadership
          description:
            "Explore top MBA programmes worldwide, ranked by career opportunities and alumni network strength.",
        },
        {
          image:
            "https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg", // Business Networking
          description:
            "Understand the methodology behind the QS Global MBA Rankings and discover the leading MBA schools.",
        },
        {
          image:
            "https://images.pexels.com/photos/4386414/pexels-photo-4386414.jpeg", // Finance Career MBA
          description:
            "Top 10 MBA programmes by career specialisation in finance, helping you sharpen your financial expertise.",
        },
        {
          image:
            "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg", // Business Strategy Management
          description:
            "Operations management is key to business success. Explore how this specialisation can enhance your career.",
        },
        {
          image:
            "https://images.pexels.com/photos/3178796/pexels-photo-3178796.jpeg", // Entrepreneurship MBA
          description:
            "Which MBA programmes are best for launching your entrepreneurship career? Discover our top recommendations.",
        },
      ],
    },
    {
      title: "EMBA & Online MBA Rankings",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/4386424/pexels-photo-4386424.jpeg", // Executive MBA
          description:
            "Explore the world’s best executive MBA programmes for 2023.",
        },
        {
          image:
            "https://images.pexels.com/photos/5312765/pexels-photo-5312765.jpeg", // Healthcare Executive Education
          description:
            "The importance of healthcare leadership in MBA education.",
        },
        {
          image:
            "https://images.pexels.com/photos/3775105/pexels-photo-3775105.jpeg", // Online MBA Executive
          description:
            "HEC Paris' Executive MBA is one of the world’s best. Learn why this programme stands out.",
        },
        {
          image:
            "https://images.pexels.com/photos/4167693/pexels-photo-4167693.jpeg", // North America EMBA
          description:
            "The QS Global EMBA Rankings highlight the top executive MBA programmes across North America.",
        },
        {
          image:
            "https://images.pexels.com/photos/4188041/pexels-photo-4188041.jpeg", // UK Online MBA
          description:
            "A comparison of the top three online MBA programmes in the UK.",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/2741215/pexels-photo-2741215.jpeg", // Europe Online MBA
          description:
            "Explore top online MBA programmes in Europe for a global career boost.",
        },
        {
          image:
            "https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg", // Online MBA Innovations
          description:
            "Innovative changes in online MBA education that shape future leaders.",
        },
        {
          image:
            "https://images.pexels.com/photos/3748256/pexels-photo-3748256.jpeg", // Online vs Campus MBA
          description:
            "How can online MBAs provide a comparable experience to traditional on-campus learning?",
        },
      ],
    },
    {
      title: "MBA Alumni & Employment Insights",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg", // Alumni Network MBA
          description:
            "Leverage MBA alumni networks for career advancement and business success.",
        },
        {
          image:
            "https://images.pexels.com/photos/2676142/pexels-photo-2676142.jpeg", // Employment Opportunities MBA
          description:
            "The top employment opportunities available for MBA graduates worldwide.",
        },
        {
          image:
            "https://images.pexels.com/photos/4427662/pexels-photo-4427662.jpeg", // MBA Networking
          description:
            "The importance of networking for MBA students and how to use it effectively.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-24 mt-8">
        <h1 className="mb-4 text-3xl font-semibold">Careers Advice</h1>
      </div>
      <Tabs tabs={tabData2} />;
    </>
  );
};

export default CareersAdvice;
