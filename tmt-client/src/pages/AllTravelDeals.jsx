import React from 'react';
import { useNavigate } from 'react-router';
import useTravelDealsData from '../hooks/userTravelDealsData';
import DataLoading from '../components/shared/DataLoading';
import { allTravelDealsHeroImg } from '../assets';
import { MdOutlineErrorOutline } from 'react-icons/md';

const AllTravelDeals = () => {
  const { data: deals = [], isLoading } = useTravelDealsData();
  const navigate = useNavigate();

  return (
    <div className="relative bg-teal-50/70">
      {/*  Hero Section (always visible) */}
      <section
        className="relative w-full h-72 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${allTravelDealsHeroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center flex flex-col justify-center h-full items-center text-white px-6 py-24">
          <h1 className="text-2xl  md:text-3xl font-semibold font-jost mb-4">
            Explore Exclusive Travel Deals
          </h1>
          <p className="text-base sm:text-lg mb-6 font-jost">
            Discover your next adventure with our curated offers
          </p>
        </div>
      </section>

      {/* ✅ Travel Deals Section */}
      <div className="container mx-auto px-8 font-lato lg:px-28 py-16">
        <h2 className="text-xl sm:text-3xl font-semibold text-center mb-6">Featured Deals</h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-[100px]">
            <DataLoading />
          </div>
        ) : deals.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[200px] bg-white py-12 rounded-md shadow-inner">
            <MdOutlineErrorOutline className="text-5xl text-teal-600 mb-4" />
            <h2 className="text-2xl text-gray-700 font-semibold mb-2">
              No Travel Deals Available
            </h2>
            <p className="text-center text-lg text-gray-500 max-w-xs">
              Unfortunately, there are no current deals. Please check back later or explore other
              sections of the site.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((item) => (
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
                  className="w-full h-56 group-hover:scale-105 transition duration-300 object-cover"
                />
                <div className="p-6">
                  <h3 className="sm:text-lg font-semibold text-gray-800 mb-2">{item.destination}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="sm:text-lg font-bold text-teal-600">${item.discountedPrice}</span>
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => navigate(`/details/${item._id}`, { state: { item } })}
                    className="inline-block w-full py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white text-center rounded-lg hover:scale-105 transition duration-300 text-sm sm:text-base"
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
  );
};

export default AllTravelDeals;
