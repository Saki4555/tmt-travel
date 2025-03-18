import { aboutImg1, aboutImg2 } from "../../assets";



const WhySelectUs = () => {
    return (
      <div className="bg-teal-50/70 py-16 ">
        <div className="container  mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            {/* Background Image */}
            <img
              src={aboutImg1}
              alt="Background"
              className="rounded-lg shadow-lg  w-[85%]"
            />
            {/* Foreground Image */}
            <div className="absolute bottom-[-40px] left-12 border-4 border-white shadow-lg rounded-lg">
              <img
                src={aboutImg2}
                alt="Foreground"
                className="rounded-lg"
              />
            </div>
           
          </div>
  
          {/* Text Section */}
          <div>
          <h3 className="text-tmt-prim font-jost text-lg pl-16 md:pl-0 font-semibold italic relative  before:w-12 before:h-[2px] before:bg-tmt-prim before:absolute before:top-1/2 before:left-16 md:before:left-0 before:transform before:-translate-x-16">
  About us
</h3>
            <h2 className="text-xl font-lato md:text-2xl font-extrabold text-gray-700 mt-2">
              Why Select Us for <br /> Your Vacation
            </h2>
            <p className="text-gray-600 text-sm mt-4 font-lato leading-relaxed">
            TMT Travel and Tour is a reputable travel agency based in Singapore, offering a wide range of travel services to cater to both individual and corporate clients. With a commitment to excellence, they provide personalized travel solutions, including flight bookings, hotel reservations, tour packages, and visa assistance, ensuring a seamless and enjoyable travel experience for their customers. 
            </p>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default WhySelectUs;
  