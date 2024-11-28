"use client";
import React, { useState } from "react";

const MSTable = ({ degreeRankings }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    countryOrTerritory: [],
    region: [],
  });

  const itemsPerPage = 10;

  // Extract unique filter options
  const uniqueCountries = [
    ...new Set(degreeRankings.map((ranking) => ranking.countryOrTerritory)),
  ];
  const uniqueRegions = [
    ...new Set(degreeRankings.map((ranking) => ranking.region)),
  ];

  // Handle filter checkbox changes
  const handleFilterChange = (type, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilter = prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value];
      return { ...prevFilters, [type]: updatedFilter };
    });
  };

  // Filter rankings based on search term and filters
  const filteredRankings = degreeRankings.filter((ranking) => {
    const matchesSearch =
      ranking.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ranking.countryOrTerritory
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedFilters.countryOrTerritory.length === 0 ||
      selectedFilters.countryOrTerritory.includes(ranking.countryOrTerritory);
    const matchesRegion =
      selectedFilters.region.length === 0 ||
      selectedFilters.region.includes(ranking.region);

    return matchesSearch && matchesCountry && matchesRegion;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRankings.length / itemsPerPage);
  const currentRankings = filteredRankings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">
        Master{"'"}s in {degreeRankings[0].degree}
      </h1>
      <div className="p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">
            SEARCH FOR AN INSTITUTION OR COUNTRY
          </p>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            placeholder="Search for an institution or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Options */}
        <div className="mb-4 bg-gray-50 p-4 rounded-lg shadow-md flex gap-6 flex-wrap">
          {/* Country Filter */}
          <div>
            <h4 className="font-bold text-gray-700 mb-2">Country/Territory</h4>
            <div className="flex flex-wrap gap-2">
              {uniqueCountries.map((country) => (
                <label
                  key={country}
                  className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-600"
                    checked={selectedFilters.countryOrTerritory.includes(
                      country
                    )}
                    onChange={() =>
                      handleFilterChange("countryOrTerritory", country)
                    }
                  />
                  {country}
                </label>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div>
            <h4 className="font-bold text-gray-700 mb-2">Region</h4>
            <div className="flex flex-wrap gap-2">
              {uniqueRegions.map((region) => (
                <label
                  key={region}
                  className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="accent-green-600"
                    checked={selectedFilters.region.includes(region)}
                    onChange={() => handleFilterChange("region", region)}
                  />
                  {region}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4">Rank 2025</th>
                <th className="py-3 px-4">Rank 2024</th>
                <th className="py-3 px-4">Institution</th>
                <th className="py-3 px-4">Country/Territory</th>
                <th className="py-3 px-4">Region</th>
                <th className="py-3 px-4">Employability Score</th>
                <th className="py-3 px-4">Overall Score</th>
                <th className="py-3 px-4">Degree</th>
              </tr>
            </thead>
            <tbody>
              {currentRankings.map((ranking) => (
                <tr
                  key={ranking.id}
                  className={`hover:bg-gray-100 ${
                    parseInt(ranking.rank2025) <= 10
                      ? "bg-green-50"
                      : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 border">{ranking.rank2025}</td>
                  <td className="py-3 px-4 border">{ranking.rank2024}</td>
                  <td className="py-3 px-4 border">{ranking.institution}</td>
                  <td className="py-3 px-4 border">
                    {ranking.countryOrTerritory}
                  </td>
                  <td className="py-3 px-4 border">{ranking.region}</td>
                  <td className="py-3 px-4 border">
                    {ranking.employabilityScore?.toFixed(2) || "N/A"}
                  </td>
                  <td className="py-3 px-4 border">
                    {ranking.overallScore?.toFixed(2) || "N/A"}
                  </td>
                  <td className="py-3 px-4 border">
                    {ranking.degree || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default MSTable;
