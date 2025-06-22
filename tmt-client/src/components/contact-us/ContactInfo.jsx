import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="bg-teal-50/70 font-lato pt-16 px-4">
       <h2 className="text-xl  font-semibold text-gray-700 text-center pb-10">
            Contact Us
          </h2>
      <div className="container px-7 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Number */}
       
        <div className="flex items-center gap-4 shadow p-3">
          <div className="flex  items-center justify-center w-10 h-10 border-2 border-tmt-prim rounded-full">
            <FaPhoneAlt className="text-tmt-prim  text-2xl" />
          </div>
          <div>
            <h3 className=" font-semibold text-gray-800">Phone:</h3>
            <a href="tel:+6562521461" className="text-gray-600 hover:text-tmt-prim transition">
              (+65) 62521461
            </a>
          </div>
        </div>

        {/* Email Addresses */}
        <div className="flex items-center gap-4 shadow p-3">
          <div className="flex items-center justify-center w-10 h-10 border-2 border-tmt-prim rounded-full">
            <FaEnvelope className="text-tmt-prim text-2xl" />
          </div>
          <div>
            <h3 className=" font-semibold text-gray-800">Email:</h3>
            <a href="mailto:tmtquickservice@yahoo.com.sg" className="text-gray-600 text-sm  hover:text-tmt-prim transition">
              tmtquickservice@yahoo.com.sg
            </a>
            <br />
            <a href="mailto:tmtquick@tmtquickservice.com" className="text-gray-600 text-sm hover:text-tmt-prim transition">
              tmtquick@tmtquickservice.com
            </a>
          </div>
        </div>

        {/* Location (Fixed Icon Shape) */}
        <div className="flex  items-center gap-4 p-3 shadow">
          <div className="flex items-center justify-center w-10 h-10 border-2 border-tmt-prim rounded-full">
            <FaMapMarkerAlt className="text-tmt-prim text-2xl" />
          </div>
          <div>
            <h3 className=" font-semibold text-gray-800">Location:</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=60+Benoi+Road,+Singapore+629906"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm hover:text-tmt-prim transition"
            >
              60 Benoi Road (EMS Building), <br />
              Unit #02-01, Singapore 629906
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
