
// ! V2
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
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/email`,
        formData
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
      reset();
    },
    onError: () => {
     toast.error(
  <div className="text-sm">
    <span className="text-red-500 font-medium">Failed to send message.</span>{" "}
    Please try again or contact us at{" "}
    <a
      href="mailto:tmtquickservice@yahoo.com.sg"
      className="underline text-teal-500 hover:text-teal-600"
    >
      tmtquickservice@yahoo.com.sg
    </a>
  </div>
);


    },
  });

  const onSubmit = (data) => {
    sendMessageMutation.mutate(data);
  };

  return (
    <section className="bg-teal-50/40 py-20 flex justify-center px-4">
      <div className="w-full max-w-3xl bg-white/90 shadow-xl shadow-teal-50 rounded-3xl p-8 md:p-10">
        <h2 className="text-3xl  md:text-4xl font-bold text-center mb-10 text-gray-800">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Your Email</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Subject</span>
            </label>
            <div className="relative">
              <FaEdit className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter subject"
                {...register("subject", { required: "Subject is required" })}
                className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300"
              />
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Message</span>
            </label>
            <textarea
              placeholder="Write your message..."
              {...register("message", { required: "Message is required" })}
              className="textarea textarea-bordered w-full h-32 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              disabled={sendMessageMutation.isPending}
              className="btn bg-teal-500 hover:bg-teal-600 text-white w-full md:w-auto flex items-center justify-center gap-2 disabled:cursor-not-allowed"
            >
              <FaPaperPlane />
              {sendMessageMutation.isPending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

