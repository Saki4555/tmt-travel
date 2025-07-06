import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

const DealsAndOfferCard = ({ item }) => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-sm group bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-52 group-hover:scale-105 transition duration-300 object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text font-semibold text-gray-900">{item.title}</h3>
        <div className="flex items-center text-white text-xs gap-1 mt-1">
          <FaRegCalendarAlt className="text-tmt-prim text-sm" />
          <span className="text-gray-700">{item.duration}</span>
        </div>

        {/* Price Section */}
        <div className="mt-2 flex items-center space-x-3 mb-2">
          <span className="text font-bold text-blue-950">
            {item.discountedPrice}
          </span>
          <span className=" line-through text-sm text-gray-500">
            {item.originalPrice}
          </span>
        </div>

        <button
          onClick={() => navigate(`/details/${item._id}`, { state: { item } })}
          className="btn btn-sm bg-btn-color cursor-pointer font-semibold text-white  border border-btn-color rounded-4xl transition-colors duration-500 hover:bg-transparent hover:text-btn-color text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DealsAndOfferCard;
