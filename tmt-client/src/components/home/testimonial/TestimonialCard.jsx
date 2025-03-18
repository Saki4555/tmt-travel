import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { name, review, rating, country } = testimonial;

  return (
   
    //   <div className="max-w-md   w-full transition-all group hover:backdrop-blur-xl duration-300 hover:bg-transparent hover:scale-105 mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6 border border-gray-200 hover:border-gray-500 flex flex-col h-full">
      
    //   {/* Quote Icon */}
    //   <FaQuoteLeft className="text-[#57B4BA] text-3xl" />
  
    //   {/* Review Text */}
    //   <p className="text-gray-700 group-hover:text-gray-100 italic mt-3 flex-1">
    //     {review}
    //   </p>
  
    //   {/* User Info & Rating */}
    //   <div className="flex justify-between items-center mt-4">
    //     <div>
    //       <h3 className="text font-semibold group-hover:text-gray-50 text-gray-800">{name}</h3>
    //       <p className="text-sm text-gray-500 group-hover:text-gray-200 flex items-center">
    //         <span className="mr-1">{country}</span>
    //       </p>
    //     </div>
  
    //     {/* Star Rating */}
    //     <div className="flex items-center">
    //       {Array.from({ length: 5 }, (_, index) => (
    //         <FaStar
    //           key={index}
    //           className={`text-lg ${index < rating ? "text-[#57B4BA]" : "text-gray-300"}`}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-md w-full font-jost transition-all group backdrop-blur-3xl bg-white/10 hover:bg-white/15 duration-300 hover:scale-[1.05] mx-auto shadow-lg rounded-xl overflow-hidden p-6 border border-transparent hover:border-[#57B4BA] flex flex-col h-full">
      
    {/* Quote Icon */}
    <FaQuoteLeft className="text-slate-600 text-4xl opacity-80" />

    {/* Review Text */}
    <p className="text-white group-hover:text-white italic mt-3 flex-1 text-lg leading-relaxed">
      {review}
    </p>

    {/* User Info & Rating */}
    <div className="flex justify-between items-center mt-6">
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-100 flex items-center">
          <span className="mr-1">{country}</span>
        </p>
      </div>

      {/* Star Rating */}
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={`text-xl ${index < rating ? "text-[#FFD700]" : "text-gray-500"}`}
          />
        ))}
      </div>
    </div>
  </div>

 

  

  );
};

export default TestimonialCard;
