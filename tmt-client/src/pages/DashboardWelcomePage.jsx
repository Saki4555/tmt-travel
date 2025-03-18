import { FaPlus, FaCog, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router";

const DashboardWelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="bg-tmt-prim text-white py-6 px-8 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome to TMT Travel Dashboard</h1>
        <p className="text-xs md:text-sm opacity-90">Manage travel deals and images seamlessly.</p>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card - Add Deals */}
        <div className="card bg-white shadow-xl p-4">
          <div className="card-body flex items-center text-center">
            <FaPlus className="text-green-500 text-4xl md:text-5xl mb-2 md:mb-4" />
            <h2 className="card-title text-lg md:text-xl font-semibold">Add Deals</h2>
            <p className="text-sm md:text-base">Create and publish new travel deals.</p>
            <button className="btn btn-primary w-full text-sm md:text-base" onClick={() => navigate("/dashboard/add-deals")}>
              Go to Add Deals
            </button>
          </div>
        </div>

        {/* Card - Manage Deals */}
        <div className="card bg-white shadow-xl p-4">
          <div className="card-body flex items-center text-center">
            <FaCog className="text-blue-500 text-4xl md:text-5xl mb-2 md:mb-4" />
            <h2 className="card-title text-lg md:text-xl font-semibold">Manage Deals</h2>
            <p className="text-sm md:text-base">Edit or delete existing deals.</p>
            <button className="btn btn-primary w-full text-sm md:text-base" onClick={() => navigate("/dashboard/manage-deals")}>
              Go to Manage Deals
            </button>
          </div>
        </div>

        {/* Card - Manage Images */}
        <div className="card bg-white shadow-xl p-4">
          <div className="card-body flex items-center text-center">
            <FaVideo className="text-red-500 text-4xl md:text-5xl mb-2 md:mb-4" />
            <h2 className="card-title text-lg md:text-xl font-semibold">Manage Images</h2>
            <p className="text-sm md:text-base">Add and manage travel images.</p>
            <button className="btn btn-primary w-full text-sm md:text-base" onClick={() => navigate("/dashboard/add-images")}>
              Go to Images
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardWelcomePage;
