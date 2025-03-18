import { FadeLoader } from "react-spinners";

const DataLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <FadeLoader color="#57B4BA" />
        <p className="mt-4 text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default DataLoading;
