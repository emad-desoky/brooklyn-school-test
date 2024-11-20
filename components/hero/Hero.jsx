// components/HeroSection.js

export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-32 bg-white">
        {/* Left Side with Text */}
        <div className="">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Explore, Meet, Network, Succeed
          </h1>
          <h2 className="text-2xl text-gray-700 mb-8 py-4">
            Your MBA journey starts here in one place - for free. Start your
            personalised application and career planning now.{" "}
            <p>2025 QS Global MBA Ranking : Global</p>
          </h2>
          <h3 className="text-blue-500 font-medium hover:underline relative inline-block">
            <a
              href="#"
              className="transition duration-200 hover:underline-offset-4"
            >
              Sign up today
            </a>
          </h3>
        </div>

        {/* Right Side with Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://www.topmba.com/sites/default/files/styles/ranking_header_250x217/public/2024-09/MAR-80193-%20Global%20MBA%20media%20content_TU%20table%20page-%20700x600_1.png.webp"
            alt="MBA Program"
          />
        </div>
      </section>
      {/* Search Bar Section */}
      <div className="p-16 px-[7rem]">
        <section className="flex justify-center bg-white h-20 shadow-md">
          <input
            id="search"
            type="text"
            placeholder=" Search for Rankings, universities, programs, tips and advice"
            className="flex-grow p-3 border border-gray-300 rounded-l-lg text-3xl focus:outline-none focus:ring-2 focus:ring-white"
          />
        </section>
      </div>
    </>
  );
}
