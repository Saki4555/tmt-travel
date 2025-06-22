import React, { useEffect, useState } from "react";
import { FaPlaneDeparture, FaRegSadCry } from "react-icons/fa";
import DealsAndOfferCard from "./DeaslAndOfferCard";
import useTravelDealsData from "../../../hooks/userTravelDealsData";

const DealsAndOffers = () => {
  const { data: deals = [], isLoading } = useTravelDealsData();
  const [topDeals, setTopDeals] = useState([]);

  useEffect(() => {
    const filteredDeals = deals.filter((item) => item.topDeal);
    // Update state only if the filtered deals have changed
    if (JSON.stringify(filteredDeals) !== JSON.stringify(topDeals)) {
      setTopDeals(filteredDeals);
    }
  }, [deals, topDeals]); // Ensure topDeals is in dependencies to check for changes

  return (
    <div className="bg-teal-50/70 py-16 font-lato">
      <div id="topdeals" className="container mx-auto px-10 ">
        <h2 className="text-3xl text-gray-600 font-bold text-center mb-3">
          <FaPlaneDeparture className="inline-block mr-2" /> Exclusive Travel
          Deals & Offers
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Unlock incredible discounts on top destinations and elevate your
          travel experience!
        </p>

      
        {isLoading ? (
          <p className="text-center text-base sm:text-lg flex justify-center items-center gap-2 text-tmt-prim">
            <FaPlaneDeparture className="animate-bounce text-xl sm:text-2xl" />
            Fetching the best travel deals for you. Please wait...
          </p>
        ) : (
          <div className="flex justify-center">
            {topDeals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                {topDeals.map((item) => (
                  <DealsAndOfferCard key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <p className="text-center  text-base sm:text-lg flex justify-center items-center gap-2 text-tmt-prim">
                <FaRegSadCry className="shrink-0 text-2xl sm:text-3xl" />
                Currently, there are no top deals available. Stay tuned for
                upcoming offers!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DealsAndOffers;
