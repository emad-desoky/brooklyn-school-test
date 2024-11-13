import React from "react";
import Tabs from "./Tabs";

const Ranking = () => {
  const tabData2 = [
    {
      title: "MBA Rankings",
      cards: [
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "Top Global MBA Programs 2025",
          description:
            "Discover the top MBA programmes around the world according to the QS Global MBA Rankings.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
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
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "Top MBAs for Finance Careers",
          description:
            "QS MBA by Career Specialisation Rankings 2023 highlight the top 10 schools excelling in finance.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "Top MBAs for Operations Management",
          description:
            "Operations management focuses on planning, organizing, and supervising in production.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "Top 10 Entrepreneurship MBAs",
          description:
            "Explore the best MBA programs for aspiring entrepreneurs according to the QS MBA Rankings 2023.",
        },
      ],
    },
    {
      title: "EMBA Rankings",
      cards: [
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "Top Global EMBA Programs 2023",
          description: "See the top executive MBA programs worldwide for 2023.",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "EMBAs in Healthcare",
          description: "",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "HEC Paris EMBA",
          description: "",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "Top 10 EMBA Programs",
          description: "",
        },
        {
          image:
            "https://media.istockphoto.com/id/1363644604/photo/mba-master-of-business-administration-business.jpg?s=612x612&w=0&k=20&c=r7-ol8j6d4IvUMJZGcBqtl3ym7ayES5zDQk62E-cFBs=",
          title: "US Executive MBA",
          description: "",
        },
      ],
    },
    {
      title: "Online MBA Rankings",
      cards: [
        {
          image: "https://example.com/uk-top-online.jpg",
          title: "Top UK Online MBA Programs",
          description:
            "Comparison of the top three online MBA programs in the UK.",
        },
        {
          image: "https://example.com/eu-top-online.jpg",
          title: "Best European Online",
        },
        {
          image: "https://example.com/online-innovations.jpg",
          title: "Innovative Online ",
        },
        {
          image: "https://example.com/online-vs-campus.jpg",
          title: "Online vs On-Campus ",
        },
        {
          image: "https://example.com/choose-online-mba.jpg",
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
