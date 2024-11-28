import React from "react";
import Tabs from "../ranking/Tabs";

const StudentVoice = () => {
  const tabData2 = [
    {
      title: "Student Voices on MBA Rankings",
      cards: [
        {
          image: "/twenty-one.jpeg",
          title: "Global MBA Rankings Overview",
          description:
            "Discover what students think about the top MBA programmes worldwide as ranked by QS Global MBA Rankings.",
        },
        {
          image: "/twenty-two.jpeg",

          title: "QS MBA Ranking Insights",
          description:
            "Get insights from students on why QS MBA Rankings are crucial in selecting the right business school.",
        },
        {
          image: "/twenty-three.jpeg",

          title: "Top MBA Schools: Student Experiences",
          description:
            "Hear from students about their experiences at some of the top MBA schools around the world.",
        },
        {
          image: "/twenty-four.jpeg",

          title: "Operations Management Programs",
          description:
            "Learn how MBA students with an operations management specialization are advancing in the business world.",
        },
        {
          image: "/twenty-five.jpeg",

          title: "Top MBA Programs for You",
          description:
            "Discover the best MBA programs for aspiring professionals, based on student feedback and expert rankings.",
        },
      ],
    },
    {
      title: "EMBA & Online MBA Insights",
      cards: [
        {
          image: "/twenty-six.jpeg",

          title: "Global Executive MBA Rankings 2023",
          description:
            "Explore the top executive MBA programmes as shared by students in 2023, offering real-world insights.",
        },
        {
          image: "/twenty-seven.jpeg",

          title: "Healthcare Focus: EMBA Programs",
          description:
            "Find out how EMBA programs with a healthcare focus are transforming careers in the healthcare sector.",
        },
        {
          image: "/twenty-one.jpeg",

          title: "HEC Paris Executive MBA Experience",
          description:
            "Get firsthand accounts from students who have pursued the prestigious HEC Paris Executive MBA program.",
        },
        {
          image: "/twenty-eight.jpeg",

          title: "Top 10 North American EMBA Programs",
          description:
            "Explore the top-ranked EMBA programs in North America and hear from students about their transformative experiences.",
        },
        {
          image: "/twenty-nine.jpeg",

          title: "Top Online MBA Programs from Student Perspectives",
          description:
            "Learn what students have to say about their experiences in the best online MBA programs around the world.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-24 mt-8">
        <h1 className="mb-8 text-3xl font-semibold">Student Voices</h1>
        <p className="text-gray-700 mb-4">
          Dive into the perspectives of students and discover top MBA programs
          globally with our in-depth rankings. From specialized MBAs to top
          online and EMBA programs, explore insights from students and industry
          experts.
        </p>
      </div>
      <Tabs tabs={tabData2} />
    </>
  );
};

export default StudentVoice;
