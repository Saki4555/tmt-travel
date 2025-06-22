import { FadeLoader } from "react-spinners";

const DataLoading = () => {
  return (
    <div className="flex justify-center   items-center w-full ">
      <div className="flex flex-col items-center">
        <FadeLoader color="#57B4BA" />
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-600 text-center">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default DataLoading;
