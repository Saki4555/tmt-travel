import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import useVideosData from "../hooks/useVideosData";
import { DataLoading } from "../components";

const AddVideo = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  // Use the custom hook
  const { videos, isLoading, isError, refetch } = useVideosData();
  // console.log(videos);

  const uploadMutation = useMutation({
    mutationFn: async (formData) => {
      const token = localStorage.getItem("access-token"); // Retrieve token from storage

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/videos/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Video uploaded successfully!");
      reset();
      refetch(); // Refetch videos after uploading
    },
    onError: () => {
      toast.error("Failed to upload video. Try again.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = localStorage.getItem("access-token"); // Retrieve token

      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/v1/videos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Video deleted successfully!");
      refetch(); // Refetch videos after deletion
    },
    onError: () => {
      toast.error("Failed to delete video.");
    },
  });

  const onSubmit = async (data) => {
    const file = data.video[0];

    if (file.size > 50 * 1024 * 1024) {
      // 50MB limit
      toast.error("File size exceeds 50MB limit.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    uploadMutation.mutate(formData);
  };
  // console.log("Mutation Loading:", uploadMutation.isLoading);
  console.log("Upload Mutation Object:", uploadMutation);
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      {/* Upload Section */}
      <div className="card w-full md:w-3/4 lg:w-1/2 bg-base-100 shadow-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-center mb-2">Upload a Video</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="file"
            accept="video/*"
            {...register("video", { required: "Video file is required" })}
            className="file-input file-input-bordered w-full"
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={uploadMutation.isPending}
          >
            {uploadMutation.isPending ? "Uploading..." : "Upload Video"}
          </button>
        </form>
      </div>

      {/* Videos List */}
      <div className="w-full md:w-3/4 lg:w-2/3">
        <h2 className="text-lg font-bold text-center mb-4 mt-5">
          Uploaded Videos
        </h2>
        {isLoading ? (
          <div className="flex justify-center">
            {" "}
            <DataLoading />
          </div>
        ) : isError ? (
          <p className="text-center text-red-500">Failed to fetch videos.</p>
        ) : videos.length === 0 ? (
          <p className="text-center">No videos uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video._id} className="card bg-base-100 shadow-lg">
                <video controls muted className="w-full rounded-lg">
                  <source
                    src={`${import.meta.env.VITE_BASE_URL}${video.url}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 flex justify-between items-center">
                  <p className="truncate w-4/5">{video.name}</p>
                  <button
                    onClick={() => deleteMutation.mutate(video._id)}
                    disabled={deleteMutation.isPending}
                    className="btn btn-error btn-sm"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddVideo;
