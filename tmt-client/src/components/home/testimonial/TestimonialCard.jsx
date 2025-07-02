
// v1
// import React from "react";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";

// const TestimonialCard = ({ testimonial }) => {
//   const { name, review, rating, country } = testimonial;

//   return (
   
    
//     <div className="max-w-md w-full font-jost transition-all group lg:backdrop-blur-3xl bg-white/10 hover:bg-white/15 duration-300 lg:hover:scale-[1.05] mx-auto shadow-lg rounded-xl overflow-hidden p-6 border border-transparent hover:border-[#57B4BA] flex flex-col h-full">
      
//     {/* Quote Icon */}
//     <FaQuoteLeft className="text-slate-600 text-4xl opacity-80" />

//     {/* Review Text */}
//     <p className="text-white group-hover:text-white italic mt-3 flex-1 text-lg leading-relaxed">
//       {review}
//     </p>

//     {/* User Info & Rating */}
//     <div className="flex justify-between items-center mt-6">
//       <div>
//         <h3 className="text-lg font-semibold text-white">{name}</h3>
//         <p className="text-sm text-gray-100 flex items-center">
//           <span className="mr-1">{country}</span>
//         </p>
//       </div>

//       {/* Star Rating */}
//       <div className="flex items-center space-x-1">
//         {Array.from({ length: 5 }, (_, index) => (
//           <FaStar
//             key={index}
//             className={`text-xl ${index < rating ? "text-[#FFD700]" : "text-gray-500"}`}
//           />
//         ))}
//       </div>
//     </div>
//   </div>

 

  

//   );
// };

// export default TestimonialCard;


// v2
// import React from "react";
// import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from "react-icons/fa";

// const TestimonialCard = ({ testimonial, index }) => {
//   const { name, review, rating, country } = testimonial;

//   return (
//     <article
//       className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-transform duration-500 hover:scale-[1.02] flex flex-col h-full overflow-hidden"
//       style={{
//         animationDelay: `${index * 0.1}s`,
//       }}
//       role="article"
//       aria-label={`Testimonial from ${name}`}
//     >
//       {/* Subtle glowing border effect */}
//       <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/10 via-teal-400/10 to-teal-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col h-full">
        
//         {/* Quote icon */}
//         <div className="mb-6">
//           <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-500 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg">
//             <FaQuoteLeft className="w-6 h-6 text-white" />
//           </div>
//         </div>

//         {/* Review text */}
//         <div className="flex-1 mb-6">
//           <blockquote>
//             <p className="text-gray-700 text-base leading-relaxed font-medium">
//               "{review}"
//             </p>
//           </blockquote>
//         </div>

//         {/* Divider */}
//         <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-transparent mb-6"></div>

//         {/* Footer */}
//         <footer className="flex items-center justify-between">
          
//           {/* User Info */}
//           <div className="flex-1 min-w-0">
//             <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
//               {name}
//             </h3>
//             <div className="flex items-center text-sm text-gray-500">
//               <FaMapMarkerAlt className="w-3.5 h-3.5 mr-1 text-teal-500" />
//               <span className="truncate">{country}</span>
//             </div>
//           </div>

//           {/* Rating */}
//           <div className="flex items-center ml-4">
//             <div className="flex items-center space-x-0.5 mr-2">
//               {Array.from({ length: 5 }, (_, starIndex) => (
//                 <FaStar
//                   key={starIndex}
//                   className={`w-4 h-4 ${
//                     starIndex < rating ? "text-teal-500" : "text-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//             <span className="text-sm font-medium text-gray-700 tabular-nums">
//               {rating}.0
//             </span>
//           </div>
          
//         </footer>
//       </div>
//     </article>
//   );
// };

// export default TestimonialCard;

// v3
import React from "react";
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { name, review, rating, country } = testimonial;

  return (
    <article
      className="relative bg-gray-50/80 rounded-3xl p-8 border border-gray-400/60 shadow-md hover:shadow-xl transition-shadow flex flex-col h-full overflow-hidden"
      role="article"
      aria-label={`Testimonial from ${name}`}
    >
      {/* Subtle glowing border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Quote Icon */}
        <div className="mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-md">
            <FaQuoteLeft className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Review Text */}
        <div className="flex-1 mb-6">
          <blockquote>
            <p className="text-gray-700 text-base leading-relaxed font-medium italic">
              "{review}"
            </p>
          </blockquote>
        </div>

        {/* Decorative Divider */}
        <div className="h-0.5 w-16 bg-gradient-to-r from-teal-500 to-transparent rounded-full mb-6"></div>

        {/* Footer */}
        <footer className="flex items-center justify-between">
          
          {/* User Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
              {name}
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <FaMapMarkerAlt className="w-3.5 h-3.5 mr-1 text-teal-500" />
              <span className="truncate">{country}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center ml-4">
            <div className="flex items-center space-x-0.5 mr-2">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <FaStar
                  key={starIndex}
                  className={`w-4 h-4 ${
                    starIndex < rating ? "text-teal-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 tabular-nums">
              {rating}.0
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default TestimonialCard;


