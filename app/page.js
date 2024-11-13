import AddmissionAdvice from "@/components/addmission-advice/AddmissionAdvice";
import CareersAdvice from "@/components/careers-advice/CareersAdvice";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/Hero";
import MbaProgrammes from "@/components/mba-programmes/MbaProgrammes";
import Navbar from "@/components/navbar/Navbar";
import Cards from "@/components/post-hero/Cards";
import PromotedStories from "@/components/promoted-stories/PromotedStories";
import Ranking from "@/components/ranking/Ranking";
import StudentsVoice from "@/components/students-voice/StudentsVoice";
import WhyMba from "@/components/why-mba/WhyMba";

export const metadata = {
  title: "Top MBA Rankings 2024 | Global MBA Program Rankings",
  description:
    "Explore top MBA programs and global rankings for 2024. Compare MBA programs by region, career opportunities, and more to find your ideal program.",
  keywords: [
    "Top MBA Rankings",
    "Global MBA Programs",
    "MBA Rankings 2024",
    "Business Schools",
    "MBA Careers",
    "MBA Resources",
  ],
  openGraph: {
    type: "website",
    url: "https://www.example-mbarankings.com",
    title: "Top MBA Rankings 2024 | Global MBA Programs",
    description:
      "Discover the best MBA programs around the globe for 2024. Find your ideal MBA program for advancing your career.",
    images: [
      {
        url: "https://www.example-mbarankings.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Top MBA Rankings Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top MBA Rankings 2024",
    description:
      "Explore our rankings of the best MBA programs globally for 2024.",
    images: ["https://www.example-mbarankings.com/twitter-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main-wrapper">
        <HeroSection />
        <Cards />
        <Ranking />
        <PromotedStories />
        <StudentsVoice />
        <WhyMba />
        <AddmissionAdvice />
        <MbaProgrammes />
        <CareersAdvice />
      </div>
      <Footer />
    </>
  );
}
