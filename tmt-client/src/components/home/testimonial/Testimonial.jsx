// v1
// import { TESTIMONIALS } from "../../../contants/indes";
// import TestimonialCard from "./TestimonialCard";


// const Testimonial = () => {
//   return (
//     <div
//       className="py-20  bg-center bg-[#1d8991] bg-cover"
//       // style={{
//       //   backgroundImage: `url(${reviewBg})`,
//       // }}
//     >
//       <div className="container mx-auto px-5   lg:px-20">
//         <h2 className="text-3xl text-white font-lato font-bold text-center  mb-3">
//           What Our Clients Say
//         </h2>
//         <p className="text-center mb-8 font-lato text-white">
//           Real experiences from happy travelers who explored the world with TMT
//           Travel
//         </p>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {TESTIMONIALS.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Testimonial;


// v2

// Testimonial.jsx
// Testimonial.jsx
import { TESTIMONIALS } from "../../../contants/indes";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section 
      className="py-16 md:py-20 bg-gray-100 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-teal-600"></div>
              <svg 
                className="w-6 h-6 text-teal-600" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <div className="w-8 h-0.5 bg-teal-600"></div>
            </div>
          </div>
          
          <h2 
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold mb-4"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real experiences from happy travelers who explored the world with TMT Travel
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;












