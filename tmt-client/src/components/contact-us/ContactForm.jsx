import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FaUser, FaEnvelope, FaPaperPlane, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendMessageMutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/email`, formData);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
      reset();
    },
    onError: () => {
      toast.error("Failed to send message. Please try again.");
    },
  });

  const onSubmit = (data) => {
    sendMessageMutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center py-16 bg-teal-50/70">
      <div className="container mx-auto lg:px-32 shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="flex items-center justify-center">
              <FaUser className="-mr-7 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="flex items-center justify-center">
              <FaEnvelope className="-mr-7 text-gray-400 z-10" />
              <input
                type="email"
                placeholder="Enter Your E-Mail"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Subject Field */}
          <div className="flex items-center justify-center">
            <FaEdit className="-mr-7 text-gray-400 z-10" />
            <input
              type="text"
              placeholder="Enter Subject"
              {...register("subject", { required: "Subject is required" })}
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
          </div>

          {/* Message Field */}
          <textarea
            placeholder="Write Message..."
            {...register("message", { required: "Message is required" })}
            className="w-full p-3 border -ml-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim h-32"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={sendMessageMutation.isPending}
              className="bg-tmt-prim text-sm disabled:cursor-not-allowed btn btn-lg cursor-pointer text-white  rounded-md hover:bg-slate-700 transition duration-200 flex items-center justify-center w-full md:w-auto"
            >
              <FaPaperPlane className="mr-2" />
              {sendMessageMutation.isPending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
