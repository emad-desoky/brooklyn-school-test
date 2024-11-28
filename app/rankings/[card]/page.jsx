import React from "react";
import Image from "next/image";

const Page = async ({ params }) => {
  let { card } = params;

  // Clean up the Base64 string (remove URL encoding, replace characters)
  card = card.replace(/-/g, "+").replace(/_/g, "/");

  // Handle the possible URL encoding issue and remove extra padding
  card = decodeURIComponent(card); // Decode URL encoding
  card = card.replace(/%3D/g, ""); // Remove any URL-encoded padding

  try {
    // Decode Base64 and parse the JSON data
    card = atob(card);
    card = JSON.parse(card);
  } catch (error) {
    console.error("Error decoding card data:", error);
    return <div>There was an error processing the data.</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our MBA Programs</h1>
        <p className="text-xl font-medium text-gray-200">
          Explore top-rated MBA programs from the best business schools.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="py-10 px-4 text-center">
        {/* Image Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <Image
            src={card.image}
            alt={card.title || "MBA Program Image"} // Use the title if no alt text is provided
            width={600} // Set a specific width for optimization
            height={400} // Set a specific height for optimization
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Dynamic Content Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {card.title}
        </h2>
        <p className="text-lg text-gray-700 mb-8">{card.description}</p>

        {/* Additional Static Data */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            About MBA Ranking Systems
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            MBA rankings are an essential resource for prospective students
            looking to choose the right program to advance their careers. The
            rankings are based on various factors, including academic
            reputation, employer reputation, alumni outcomes, and faculty
            quality. Leading ranking organizations such as QS, Financial Times,
            and U.S. News & World Report publish annual rankings of the best
            business schools worldwide.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Top MBA Ranking Criteria:
          </h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Academic Reputation</li>
            <li>Employer Reputation</li>
            <li>Alumni Outcomes</li>
            <li>Faculty Quality</li>
            <li>International Diversity</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Top MBA Schools Globally:
          </h4>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Harvard Business School</li>
            <li>Stanford Graduate School of Business</li>
            <li>The Wharton School of the University of Pennsylvania</li>
            <li>INSEAD</li>
            <li>London Business School</li>
          </ul>
        </div>
      </main>

      {/* Pre-Footer Section */}
      <footer className="bg-gray-100 py-8 text-center">
        <p className="text-xl text-gray-700">
          Explore more about our programs and find the right fit for your career
          goals!
        </p>
      </footer>
    </div>
  );
};

export default Page;
