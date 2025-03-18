import { CHOOSE_US_DATA } from "../../../contants/indes";
import ChooseUsCard from "./ChooseUsCard";
import { FaPlane, FaShieldAlt, FaHeadset, FaStar } from "react-icons/fa";



const ChooseUs = () => {
 
    return (
        <section className="py-20 px-6 font-lato bg-teal-50/70">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-600 mb-4 ">Why Choose Us?</h2>
        <p className="text-gray-600 mb-8">Experience the best travel services with unmatched reliability.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHOOSE_US_DATA.map((item, index) => (
            <ChooseUsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
    );
};

export default ChooseUs;