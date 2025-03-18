import React from 'react';

const TravelDetailsBanner = ({ destination, img, discountedPrice, OriginalPrice }) => {


  return (
    <div className="relative w-full h-[400px]">
      <img
        src={`${img}`}
        alt={destination}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">{destination}</h1>

        <div className="mt-4 text-center">
          <div className="bg-tmt-prim py-2 px-4 rounded-md">
            <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">
              ${discountedPrice}
            </span>
            <span className="text-sm md:text-base lg:text-lg text-gray-200 line-through ml-2">
              ${OriginalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetailsBanner;
