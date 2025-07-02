import { SERVICES } from "../../contants/indes";
import ServiceCard from "./ServiceCard";





const OurServices = () => (
 <div className="bg-teal-50/70">
   <section className="py-16 container mx-auto px-10 lg:px-10">
    <div className="px-10 lg:px-20 container font-lato mx-auto text-center">
      <h2 className="text-sm font-semibold text-tmt-prim tracking-wide uppercase">
        Our Services
      </h2>
      <p className="mt-2 text-3xl  lg:text-4xl  font-extrabold text-gray-700 ">
        Comprehensive Solutions Tailored to Your Needs
      </p>
      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
        We offer a range of specialized services to meet the diverse requirements of our clients.
      </p>
    </div>

    <div className="mt-12 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </section>
 </div>
);

export default OurServices;
