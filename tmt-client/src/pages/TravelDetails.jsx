import React from "react";
import TravelDetailsBanner from "../components/travel-details/TravelDetailsBanner";
import DetailsSection from "../components/travel-details/DetailsSection";
import ContactUsSection from "../components/travel-details/ContactUsSection";
import { useLocation } from "react-router";
import TitleProvider from "../providers/TitleProvider";

const TravelDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <>
    <TitleProvider title={item.title ? item.title : "Loading..."} />
    
      <TravelDetailsBanner
        destination={item.destination}
        img={item.image}
        discountedPrice={item.discountedPrice}
        OriginalPrice={item.originalPrice}
      />
      <div className="container mx-auto px-10 lg:px-20">
        <DetailsSection item={item} />
        <ContactUsSection />
      </div>
    </>
  );
};

export default TravelDetails;
