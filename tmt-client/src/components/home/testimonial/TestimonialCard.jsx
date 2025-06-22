import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { name, review, rating, country } = testimonial;

  return (
   
    
    <div className="max-w-md w-full font-jost transition-all group lg:backdrop-blur-3xl bg-white/10 hover:bg-white/15 duration-300 lg:hover:scale-[1.05] mx-auto shadow-lg rounded-xl overflow-hidden p-6 border border-transparent hover:border-[#57B4BA] flex flex-col h-full">
      
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
