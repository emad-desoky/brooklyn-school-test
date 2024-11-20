import React from "react";
import Tabs from "./Tabs";

const Ranking = () => {
  const tabData2 = [
    {
      title: "MBA Rankings",
      cards: [
        {
          image:
            "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJ1c2luZXNzJTIwc2Nob29sfGVufDB8fHx8MTY5Mzg0MTA5MA&ixlib=rb-4.0.3&q=80&w=1080", // Verified working business school image
          title: "Top Global MBA Programs 2025",
          description:
            "Discover the top MBA programmes around the world according to the QS Global MBA Rankings.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1529243856184-fd5465488984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHNhbXBsZXxlbnwwfHx8fDE2OTM4NDEwOTI&ixlib=rb-4.0.3&q=80&w=1080", // Verified working image for methodology
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
            "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", // Working image for finance career
          title: "Top MBAs for Finance Careers",
          description:
            "QS MBA by Career Specialisation Rankings 2025 highlight the top 10 schools excelling in finance.",
        },
        {
          image:
            "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg", // Working image for operations management
          title: "Top MBAs for Operations Management",
          description:
            "Operations management focuses on planning, organizing, and supervising in production.",
        },
        {
          image:
            "https://images.pexels.com/photos/1582493/pexels-photo-1582493.jpeg", // Working image for entrepreneurship MBA
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
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/articles/lead-images/huntsman_hall_wharton_0.jpg.webp",
          title: "Top Global EMBA Programs 2025",
          description: "See the top executive MBA programs worldwide for 2025.",
        },
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/articles/lead-images/huntsman_hall_wharton_0.jpg.webp",
          title: "EMBAs in Healthcare",
          description: "EMBAs in Healthcare",
        },
        {
          image:
            "https://www.hec.edu/sites/default/files/styles/newsroom_media/public/2024-04/j-emba-46-header-_sept_2023_intake.png?itok=f6F25azE",
          title: "HEC Paris EMBA",
          description: "",
        },
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/articles/lead-images/huntsman_hall_wharton_0.jpg.webp",
          title: "Top 10 EMBA Programs",
          description: "",
        },
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/embed-carousel/nus450_1.jpg.webp",
          title: "US Executive MBA",
          description: "",
        },
      ],
    },
    {
      title: "Online MBA Rankings",
      cards: [
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/articles/lead-images/istock-695147934_1.jpg.webp",
          title: "Top UK Online MBA Programs",
          description:
            "Comparison of the top three online MBA programs in the UK.",
        },
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/embed-carousel/iStock-1185326263.jpg.webp",
          title: "Best European Online",
        },
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/articles/lead-images/rotman_school_edit.jpg.webp",
          title: "Innovative Online ",
        },
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/articles/lead-images/combining-their-creative-powers-picture-id890775054_1.jpg.webp",
          title: "Online vs On-Campus ",
        },
        {
          image:
            "https://www.topmba.com/sites/default/files/styles/articles_inline/public/embed-carousel/pexels-karolina-grabowska-5908776%20%281%29.jpg.webp",
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
