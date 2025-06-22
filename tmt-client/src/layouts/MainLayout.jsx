import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

const MainLayout = () => {
  return (
    <>
      {/* Top bar (Hidden on Small Screens) */}
      <div className="bg-slate-900  font-lato tracking-wide  text-gray-200 px-6 py-4 text-xs hidden md:flex justify-between items-center">
        {/* Contact Details */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+6562521461"
            className="flex items-center space-x-1 hover:text-tmt-prim"
          >
            <FaPhone /> <span>+65 62521461</span>
          </a>
          <a
            href="mailto:tmtquickservice@yahoo.com.sg"
            className="flex items-center space-x-1 hover:text-tmt-prim"
          >
            <FaEnvelope /> <span>tmtquickservice@yahoo.com.sg</span>
          </a>
          <a
            href="mailto:tmtquick@tmtquickservice.com"
            className="flex items-center space-x-1 hover:text-tmt-prim"
          >
            <FaEnvelope /> <span>tmtquick@tmtquickservice.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex text-base  space-x-3">
          <a
            href="https://www.facebook.com/TMTTravelAndTours?mibextid=wwXIfr&rdid=VkoibUSm9WG27ICS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18eL8T5rvB%2F%3Fmibextid%3DwwXIfr#"
            target="_blank"
            className="hover:text-tmt-prim"
          >
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-tmt-prim">
            <FaInstagram />
          </a>
        </div>
      </div>
       <Navbar /> 
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
