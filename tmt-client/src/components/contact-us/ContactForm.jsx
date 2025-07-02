// ! V!
// import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { FaUser, FaEnvelope, FaPaperPlane, FaEdit } from "react-icons/fa";
// import toast from "react-hot-toast";

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const sendMessageMutation = useMutation({
//     mutationFn: async (formData) => {
//       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/email`, formData);
//       return response.data;
//     },
//     onSuccess: () => {
//       toast.success("Message sent successfully!");
//       reset();
//     },
//     onError: () => {
//       toast.error("Failed to send message. Please try again.");
//     },
//   });

//   const onSubmit = (data) => {
//     sendMessageMutation.mutate(data);
//   };

//   return (
//     <div className="flex justify-center items-center py-16 bg-teal-50/70">
//       <div className="container mx-auto lg:px-32 shadow-lg rounded-lg p-6">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Name and Email Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Name Field */}
//             <div className="flex items-center justify-center ">
//               <FaUser className="-mr-7 text-gray-400 z-10" />
//               <input
//                 type="text"
//                 placeholder="Enter Your Name"
//                 {...register("name", { required: "Name is required" })}
//                 className="w-full shadow p-3 pl-10 border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//             </div>

//             {/* Email Field */}
//             <div className="flex  items-center justify-center">
//               <FaEnvelope className="-mr-7 text-gray-400 z-10" />
//               <input
//                 type="email"
//                 placeholder="Enter Your E-Mail"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
//                 })}
//                 className="w-full shadow bg-gray-50 p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//             </div>
//           </div>

//           {/* Subject Field */}
//           <div className="flex    items-center justify-center">
//             <FaEdit className="-mr-7 text-gray-400 z-10" />
//             <input
//               type="text"
//               placeholder="Enter Subject"
//               {...register("subject", { required: "Subject is required" })}
//               className="w-full shadow  p-3 pl-10 border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim"
//             />
//             {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
//           </div>

//           {/* Message Field */}
//           <textarea
//             placeholder="Write Message..."
//             {...register("message", { required: "Message is required" })}
//             className="w-full shadow p-3 border -ml-1 border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-prim h-32"
//           ></textarea>
//           {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={sendMessageMutation.isPending}
//               className="bg-tmt-prim text-sm disabled:cursor-not-allowed btn btn-lg cursor-pointer text-white  rounded-md hover:bg-slate-700 transition duration-200 flex items-center justify-center w-full md:w-auto"
//             >
//               <FaPaperPlane className="mr-2" />
//               {sendMessageMutation.isPending ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

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
      toast.error("Failed to send message. Please try again.");
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

