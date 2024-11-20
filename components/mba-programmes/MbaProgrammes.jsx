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
            "https://images.pexels.com/photos/5185439/pexels-photo-5185439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          description:
            "Discover the top MBA programmes around the world according to the QS Global MBA Rankings.",
        },
        {
          title: "QS Global MBA Rankings",
          image:
            "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "Top Schools Specialize",
          image:
            "https://images.pexels.com/photos/1181252/pexels-photo-1181252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "Operations Management",
          image:
            "https://images.pexels.com/photos/1661002/pexels-photo-1661002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "Best MBA Programmes",
          image:
            "https://images.pexels.com/photos/1661002/pexels-photo-1661002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    },
    {
      title: "EMBA & Online MBA Rankings",
      cards: [
        {
          title: "Top Executive MBA Programmes",
          image:
            "https://images.pexels.com/photos/3084665/pexels-photo-3084665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          description: "Top executive MBA programmes in the world 2023.",
        },
        {
          title: "Healthcare and Executive Education",
          image:
            "https://images.pexels.com/photos/3184333/pexels-photo-3184333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          description: "Why healthcare needs executive education graduates.",
        },
      ],
    },
    {
      title: "Additional MBA Insights",
      cards: [
        {
          title: "Top European Online MBA Programmes",
          image:
            "https://images.pexels.com/photos/1704124/pexels-photo-1704124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          description:
            "Top online MBA programmes at European business schools.",
        },
        {
          title: "Innovations in Online MBA",
          image:
            "https://images.pexels.com/photos/1181252/pexels-photo-1181252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "Online vs. Campus MBA",
          image:
            "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "The Value of MBA Alumni",
          image:
            "https://images.pexels.com/photos/1704124/pexels-photo-1704124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "Top Employment",
          image:
            "https://images.pexels.com/photos/3084665/pexels-photo-3084665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
