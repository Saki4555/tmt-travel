

import  { useState } from "react";
import { useNavigate } from "react-router";
import useTravelDealsData from "../hooks/userTravelDealsData";
import DataLoading from "../components/shared/DataLoading";
import { allTravelDealsHeroImg } from "../assets";
import { MdOutlineErrorOutline } from "react-icons/md";
import TitleProvider from "../providers/TitleProvider";

const AllTravelDeals = () => {
  const { data: deals = [], isLoading } = useTravelDealsData();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter deals based on search term (case-insensitive)
  const filteredDeals = deals.filter((item) =>
    item.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TitleProvider title="Travel Deals" />
      <div className="relative bg-teal-50/70">
        
        {/* Hero Section */}
        <section
          className="relative w-full h-72 md:h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${allTravelDealsHeroImg})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center flex flex-col justify-center h-full items-center text-white px-6 py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl  font-semibold font-jost mb-4">
              Explore Exclusive Travel Deals
            </h1>
            <p className="text-lg sm:text-xl mb-6 font-jost">
              Discover your next adventure with our curated offers
            </p>
          </div>
        </section>

        {/* Travel Deals Section */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-28 py-16 font-lato">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-6">
            Featured Deals
          </h2>

          {/* Search Input */}
          <div className="flex justify-center mb-10">
            <input
              type="text"
              placeholder="Search by destination..."
              className={`input ${searchTerm ? "" : "animate-pulse"} placeholder:text-gray-700 placeholder:font-semibold placeholder:font-jost placeholder:tracking-wide input-bordered focus:outline-1 focus:outline-teal-600 focus:border-teal-500 focus:ring-teal-500 w-full max-w-xs`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-[100px]">
              <DataLoading />
            </div>
          ) : filteredDeals.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[200px] bg-white py-12 rounded-md shadow-inner">
              <MdOutlineErrorOutline className="text-5xl text-teal-600 mb-4" />
              <h2 className="text-2xl text-gray-700 font-semibold mb-2">
                No Travel Deals Found
              </h2>
              <p className="text-center text-lg text-gray-500 max-w-xs">
                We couldn't find any deals matching your search. Try a different destination.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDeals.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow-lg group rounded-lg overflow-hidden transform transition-all relative"
                >
                  {/* Top Deal Badge */}
                  {item.topDeal && (
                    <div className="absolute top-4 z-10 left-4 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs px-3 py-1 rounded-full">
                      Top Deal
                    </div>
                  )}
                  <img
                    src={item.image}
                    alt={item.destination}
                    loading="lazy"
                    className="w-full h-56 group-hover:scale-105 transition duration-300 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="sm:text-lg font-semibold text-gray-800 mb-2">
                      {item.destination}
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="sm:text-lg font-bold text-teal-600">
                        ${item.discountedPrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        navigate(`/details/${item._id}`, { state: { item } })
                      }
                      className="inline-block w-full py-2 bg-gradient-to-r from-btn-color/70 to-btn-color text-white text-center rounded-lg hover:scale-105 transition duration-300 text-sm sm:text-base"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllTravelDeals;
