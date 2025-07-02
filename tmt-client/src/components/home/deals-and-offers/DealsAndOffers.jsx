import { useEffect, useState } from "react";
import { FaPlaneDeparture, FaRegSadCry } from "react-icons/fa";
import DealsAndOfferCard from "./DeaslAndOfferCard";
import useTravelDealsData from "../../../hooks/userTravelDealsData";
import { Link } from "react-router";


const DealsAndOffers = () => {
  const { data: deals = [], isLoading } = useTravelDealsData();
  const [topDeals, setTopDeals] = useState([]);

  useEffect(() => {
    const filteredDeals = deals.filter((item) => item.topDeal);
    if (JSON.stringify(filteredDeals) !== JSON.stringify(topDeals)) {
      setTopDeals(filteredDeals);
    }
  }, [deals, topDeals]);

  return (
    <div className="bg-teal-50/70 py-16 font-lato">
      <div id="topdeals" className="container mx-auto px-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold text-center mb-3">
          <FaPlaneDeparture className="inline-block mr-2" /> Exclusive Travel Deals & Offers
        </h2>
        
        <p className="text-center text-gray-600 mb-8 text-lg sm:text-xl">
          Unlock incredible discounts on top destinations and elevate your travel experience!
        </p>

        {isLoading ? (
          <p className="text-center text-base sm:text-lg flex justify-center items-center gap-2 text-tmt-prim">
            <FaPlaneDeparture className="animate-bounce text-xl sm:text-2xl" />
            Fetching the best travel deals for you. Please wait...
          </p>
        ) : (
          <div className="flex flex-col items-center">
            
            {topDeals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mb-8">
                {topDeals.map((item) => (
                  <DealsAndOfferCard key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <p className="text-center text-base sm:text-lg flex justify-center items-center gap-2 text-tmt-prim mb-8">
                <FaRegSadCry className="shrink-0 text-2xl sm:text-3xl" />
                Currently, there are no top deals available. Stay tuned for upcoming offers!
              </p>
            )}

            {/* View All Deals Button */}
            <Link
              to="/all-travel-deals"
              className="btn bg-teal-500  hover:bg-teal-600 text-white px-6 py-3 rounded-md text-base sm:text-lg transition"
            >
              View All Deals
            </Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default DealsAndOffers;
