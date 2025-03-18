import React from 'react';
import { FaPlane, FaShieldAlt, FaHeadset, FaStar } from "react-icons/fa";
const getIcon = (iconName) => {
  switch (iconName) {
    case "plane":
      return <FaPlane className="text-tmt-prim text-4xl" />;
    case "shield":
      return <FaShieldAlt className="text-tmt-prim text-4xl" />;
    case "headset":
      return <FaHeadset className="text-tmt-prim text-4xl" />;
    case "star":
      return <FaStar className="text-tmt-prim text-4xl" />;
    default:
      return null;
  }
};

const ChooseUsCard = ({item}) => {
    return (
      
        <div
          className="bg-white p-6 border border-tmt-prim rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-full"
        >
          <div className="mb-4">{getIcon(item.icon)}</div>
          <h3 className="text font-semibold text-gray-800 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>

      
      
    );
};

export default ChooseUsCard;