import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import useTravelDealsData from "../hooks/userTravelDealsData";

const AddDeals = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { refetch } = useTravelDealsData();
  const token = localStorage.getItem("access-token");
  const mutation = useMutation({
    mutationFn: (newDeal) =>
      axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/travel-deals`,
        newDeal,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        }
      ),
    onSuccess: () => {
      toast.success("Deal added successfully");
      refetch();
      reset(); // Only reset the form after a successful submission
    },
    onError: () => {
      toast.error("Failed to add Deal. Try again.");
    },
  });

  const onSubmit = (data) => {
    console.log("Before Conversion:", data.topDeal); // Debugging

    mutation.mutate({
      ...data,
      originalPrice: Number(data.originalPrice),
      discountedPrice: Number(data.discountedPrice),
      inclusions: data.inclusions.split(",").map((item) => item.trim()),
      exclusions: data.exclusions.split(",").map((item) => item.trim()),
      topDeal: JSON.parse(data.topDeal), // ✅ Converts "true" -> true, "false" -> false
    });

    console.log("After Conversion:", JSON.parse(data.topDeal)); // Debugging
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Deal</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            placeholder="Title"
            className="input input-bordered w-full"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Destination
          </label>
          <input
            {...register("destination", {
              required: "Destination is required",
            })}
            placeholder="Destination"
            className="input input-bordered w-full"
          />
          {errors.destination && (
            <p className="text-red-500">{errors.destination.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            {...register("image", {
              required: "Image URL is required",
              pattern: {
                value:
                  /(?:https?:\/\/.*\.(?:jpeg|jpg|gif|png|webp))(?:\?.*)?$/i,
                message: "Please enter a valid image URL",
              },
            })}
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        {/* Original & Discounted Price - Placed in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Original Price
            </label>
            <input
              type="number"
              {...register("originalPrice", {
                required: "Original Price is required",
              })}
              placeholder="Original Price"
              className="input input-bordered w-full"
            />
            {errors.originalPrice && (
              <p className="text-red-500">{errors.originalPrice.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discounted Price
            </label>
            <input
              type="number"
              {...register("discountedPrice", {
                required: "Discounted Price is required",
              })}
              placeholder="Discounted Price"
              className="input input-bordered w-full"
            />
            {errors.discountedPrice && (
              <p className="text-red-500">{errors.discountedPrice.message}</p>
            )}
          </div>
        </div>

        {/* Top Deal */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Top Deal
          </label>
          <select
            {...register("topDeal")}
            className="select select-bordered w-full"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration
          </label>
          <input
            {...register("duration", { required: "Duration is required" })}
            placeholder="Duration (e.g., 3 Days, 2 Nights)"
            className="input input-bordered w-full"
          />
          {errors.duration && (
            <p className="text-red-500">{errors.duration.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Inclusions */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Inclusions
          </label>
          <input
            {...register("inclusions", { required: "Inclusions are required" })}
            placeholder="Inclusions (comma separated)"
            className="input input-bordered w-full"
          />
          {errors.inclusions && (
            <p className="text-red-500">{errors.inclusions.message}</p>
          )}
        </div>

        {/* Exclusions */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Exclusions
          </label>
          <input
            {...register("exclusions", { required: "Exclusions are required" })}
            placeholder="Exclusions (comma separated)"
            className="input input-bordered w-full"
          />
          {errors.exclusions && (
            <p className="text-red-500">{errors.exclusions.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`btn  btn-primary $ w-full`}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Adding..." : "Add Deal"}
        </button>
      </form>
    </div>
  );
};

export default AddDeals;
