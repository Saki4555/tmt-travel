import { FaShip, FaBolt, FaWrench, FaTools, FaBuilding, FaCheckCircle } from "react-icons/fa";

// Icon mapping object
const serviceIcons = {
  "Marine Services": FaShip,
  "Electrical Services": FaBolt,
  "Mechanical & Piping Services": FaWrench,
  "Instrumentation Services": FaTools,
  "Construction Services": FaBuilding,
};


const ServiceCard = ({ title, color, description, features }) => {
  const Icon = serviceIcons[title]; // Get the corresponding icon from the object

  return (
    <div className="relative font-lato bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${color} text-white shadow-md`}>
        <Icon className="text-3xl" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500  flex-shrink-0" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;