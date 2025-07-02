//! V1
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function ContactInfo() {
//   return (
//     <div className="bg-teal-50/70 font-lato pt-16 px-4">
//        <h2 className="text-xl  font-semibold text-gray-700 text-center pb-10">
//             Contact Us
//           </h2>
//       <div className="container px-7 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Phone Number */}

//         <div className="flex items-center gap-4 shadow p-3">
//           <div className="flex  items-center justify-center w-10 h-10 border-2 border-tmt-prim rounded-full">
//             <FaPhoneAlt className="text-tmt-prim  text-2xl" />
//           </div>
//           <div>
//             <h3 className=" font-semibold text-gray-800">Phone:</h3>
//             <a href="tel:+6562521461" className="text-gray-600 hover:text-tmt-prim transition">
//               (+65) 62521461
//             </a>
//           </div>
//         </div>

//         {/* Email Addresses */}
//         <div className="flex items-center gap-4 shadow p-3">
//           <div className="flex items-center justify-center w-10 h-10 border-2 border-tmt-prim rounded-full">
//             <FaEnvelope className="text-tmt-prim text-2xl" />
//           </div>
//           <div>
//             <h3 className=" font-semibold text-gray-800">Email:</h3>
//             <a href="mailto:tmtquickservice@yahoo.com.sg" className="text-gray-600 text-sm  hover:text-tmt-prim transition">
//               tmtquickservice@yahoo.com.sg
//             </a>
//             <br />
//             <a href="mailto:tmtquick@tmtquickservice.com" className="text-gray-600 text-sm hover:text-tmt-prim transition">
//               tmtquick@tmtquickservice.com
//             </a>
//           </div>
//         </div>

//         {/* Location (Fixed Icon Shape) */}
//         <div className="flex  items-center gap-4 p-3 shadow">
//           <div className="flex items-center justify-center w-10 h-10 border-2 border-tmt-prim rounded-full">
//             <FaMapMarkerAlt className="text-tmt-prim text-2xl" />
//           </div>
//           <div>
//             <h3 className=" font-semibold text-gray-800">Location:</h3>
//             <a
//               href="https://www.google.com/maps/search/?api=1&query=60+Benoi+Road,+Singapore+629906"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 text-sm hover:text-tmt-prim transition"
//             >
//               60 Benoi Road (EMS Building), <br />
//               Unit #02-01, Singapore 629906
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ! V2
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="bg-teal-50/40  py-20 px-4">
      <h2 className="text-3xl  md:text-4xl font-bold font-lato text-gray-800 text-center mb-14">
        Contact Us
      </h2>

      <div className="container font-jost mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-20">
        {/* Phone */}
        <div className="group flex flex-col items-start gap-5 bg-white/90 rounded-3xl p-7 shadow-md border border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-400 text-white rounded-2xl shadow-md group-hover:scale-105 transition-transform">
            <FaPhoneAlt className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone:</h3>
            <a
              href="tel:+6562521461"
              className="text-gray-700 text-base md:text-lg hover:text-teal-500 transition"
            >
              (+65) 62521461
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="group flex flex-col items-start gap-5 bg-white/90 rounded-3xl p-7 shadow-md border border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-400 text-white rounded-2xl shadow-md group-hover:scale-105 transition-transform">
            <FaEnvelope className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email:</h3>
            <a
              href="mailto:tmtquickservice@yahoo.com.sg"
              className="text-gray-700 text-base md:text-lg hover:text-teal-500 transition break-all block"
            >
              tmtquickservice@yahoo.com.sg
            </a>
            <a
              href="mailto:tmtquick@tmtquickservice.com"
              className="text-gray-700 text-base md:text-lg hover:text-teal-500 transition break-all block mt-0.5"
            >
              tmtquick@tmtquickservice.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="group flex flex-col items-start gap-5 bg-white/90 rounded-3xl p-7 shadow-md border border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-400 text-white rounded-2xl shadow-md group-hover:scale-105 transition-transform">
            <FaMapMarkerAlt className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Location:
            </h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=60+Benoi+Road,+Singapore+629906"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-base md:text-lg hover:text-teal-500 transition"
            >
              60 Benoi Road (EMS Building), <br />
              Unit #02-01, Singapore 629906
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
