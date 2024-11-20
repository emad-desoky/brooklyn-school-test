import React from "react";
import Tabs from "./Tabs";

const Ranking = () => {
  const tabData2 = [
    {
      title: "MBA Rankings",
      cards: [
        {
          image: "/one.jpg",
          title: "Top Global MBA Programs 2025",
          description:
            "Discover the top MBA programmes around the world according to the QS Global MBA Rankings.",
        },
        {
          image: "two.jpg",
          title: "QS MBA Ranking Methodology",
          description:
            "Learn the methodology behind the QS Global MBA Rankings, assessing the top full-time MBA programs worldwide.",
        },
      ],
    },

    {
      title: "Career Specialisation Rankings",
      cards: [
        {
          image: "/three.jpeg",
          title: "Top MBAs for Finance Careers",
          description:
            "QS MBA by Career Specialisation Rankings 2025 highlight the top 10 schools excelling in finance.",
        },
        {
          image: "/four.jpeg",

          title: "Top MBAs for Operations Management",
          description:
            "Operations management focuses on planning, organizing, and supervising in production.",
        },
        {
          image: "/five.jpeg",

          title: "Top 10 Entrepreneurship MBAs",
          description:
            "Explore the best MBA programs for aspiring entrepreneurs according to the QS MBA Rankings 2025.",
        },
      ],
    },

    {
      title: "EMBA Rankings",
      cards: [
        {
          image: "/six.jpg.webp",

          title: "Top Global EMBA Programs 2025",
          description: "See the top executive MBA programs worldwide for 2025.",
        },
        {
          image: "/seven.png",

          title: "EMBAs in Healthcare",
          description: "EMBAs in Healthcare",
        },
        {
          image: "/eight.jpg.webp",

          description: "",
        },
        {
          image: "/nine.jpg.webp",

          title: "Top 10 EMBA Programs",
          description: "",
        },
        {
          image: "/ten.jpg.webp",

          title: "US Executive MBA",
          description: "",
        },
      ],
    },
    {
      title: "Online MBA Rankings",
      cards: [
        {
          image: "/eleven.jpg.webp",

          title: "Top UK Online MBA Programs",
          description:
            "Comparison of the top three online MBA programs in the UK.",
        },
        {
          image: "/twelve.jpg.webp",

          title: "Best European Online",
        },
        {
          image: "/thirteen.jpg.webp",

          title: "Innovative Online ",
        },
        {
          image: "/fourteen.jpeg",

          title: "Online vs On-Campus ",
        },
        {
          image: "/fifteen.jpeg",

          title: "Choosing the Right Online",
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-28 mt-20">
        <h1 className="mb-8 text-3xl font-semibold">
          Top MBA Program Rankings 2025 , Global, Specializations & Online MBAs
        </h1>
        <h2 className="mb-4 text-lg font-medium">
          Explore the latest MBA programme rankings worldwide, including QS
          Global MBA Rankings 2025, top Executive MBA programs, specialized
          career MBA rankings, and the best online MBA programs for flexible
          study.
        </h2>
        <p className="text-gray-700 text-base mb-4">
          Whether you&#8217;re interested in global full-time MBA programs,
          career-specialized MBAs, Executive MBA rankings, or online MBA
          comparisons, our comprehensive QS Rankings 2025 covers it all.
          Discover the top business schools and enhance your career in finance,
          entrepreneurship, healthcare, and more.
        </p>
      </div>

      {/* SEO: Structured content for each section */}
      <section aria-labelledby="mba-rankings">
        <Tabs tabs={tabData2} />
      </section>
    </>
  );
};

export default Ranking;
