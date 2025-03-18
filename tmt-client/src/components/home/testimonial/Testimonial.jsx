import React from "react";
import { TESTIMONIALS } from "../../../contants/indes";
import TestimonialCard from "./TestimonialCard";
import { reviewBg, } from "../../../assets";

const Testimonial = () => {
  return (
    <div
      className="py-20  bg-center bg-tmt-prim/90 bg-cover"
      // style={{
      //   backgroundImage: `url(${reviewBg})`,
      // }}
    >
      <div className="container mx-auto px-5   lg:px-20">
        <h2 className="text-3xl text-white font-lato font-bold text-center  mb-3">
          What Our Clients Say
        </h2>
        <p className="text-center mb-8 font-lato text-white">
          Real experiences from happy travelers who explored the world with TMT
          Travel
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;
