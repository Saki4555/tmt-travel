import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import useImagesData from "../hooks/useImagesData";
import { DataLoading } from "../components";
import TitleProvider from "../providers/TitleProvider";

const AddImage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // Extract errors from formState
  } = useForm();

  // Use the custom hook
  const { images, isLoading, isError, refetch } = useImagesData();

  const uploadMutation = useMutation({
    mutationFn: async (data) => {
      const token = localStorage.getItem("access-token"); // Retrieve token from storage

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/images/upload`,
        { 
          imageUrl: data.imageUrl, 
          name: data.name, 
          description: data.description // Include description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Image uploaded successfully!");
      reset();
      refetch(); // Refetch images after uploading
    },
    onError: () => {
      toast.error("Failed to upload image. Try again.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = localStorage.getItem("access-token"); // Retrieve token

      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/v1/images/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Image deleted successfully!");
      refetch(); // Refetch images after deletion
    },
    onError: () => {
      toast.error("Failed to delete image.");
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    uploadMutation.mutate(data);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <TitleProvider title="Add Image" />
      {/* Upload Section */}
      <div className="card w-full md:w-3/4 lg:w-1/2 bg-base-100 shadow-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-center mb-2">Upload an Image</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Image Name Input */}
          <input
            type="text"
            placeholder="Enter Image Name"
            {...register("name", { required: "Image name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} {/* Error Message */}

          {/* Image URL Input */}
          <input
            type="text"
            placeholder="Enter Image URL"
            {...register("imageUrl", {
              required: "Image URL is required",
              pattern: {
                value: /(?:https?:\/\/.*\.(?:jpeg|jpg|gif|png|webp))(?:\?.*)?$/i,
                message: "Please enter a valid image URL",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>} {/* Error Message */}

          {/* Image Description Input */}
          <textarea
            placeholder="Enter Image Description"
            {...register("description", { required: "Image description is required" })}
            className="textarea textarea-bordered w-full"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>} {/* Error Message */}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={uploadMutation.isPending}
          >
            {uploadMutation.isPending ? "Uploading..." : "Upload Image"}
          </button>
        </form>
      </div>

      {/* Images List */}
      <div className="w-full md:w-3/4 lg:w-2/3">
        <h2 className="text-lg font-bold text-center mb-4 mt-5">
          Uploaded Images
        </h2>
        {isLoading ? (
          <div className="flex justify-center">
            <DataLoading />
          </div>
        ) : isError ? (
          <p className="text-center text-red-500">Failed to fetch images.</p>
        ) : images.length === 0 ? (
          <p className="text-center">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image._id} className="card bg-base-100 shadow-lg">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-36 rounded-lg"
                />
                <div className="p-4">
                  <p className="truncate w-full font-semibold">{image.name}</p>
                  <p className="text-gray-500 text-sm">{image.description}</p> {/* Display description */}
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => deleteMutation.mutate(image._id)}
                      disabled={deleteMutation.isPending}
                      className="btn btn-error btn-sm"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddImage;
