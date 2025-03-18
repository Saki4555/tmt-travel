import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";
import { logo } from "../../assets";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 font-jost text-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="w-full md:w-1/3">
            <img src={logo} className="w-20" alt="TMT" />

            <p className="text-gray-400 text-sm mt-3">
              Your trusted travel partner for seamless journeys worldwide.
              Explore the world with us.
            </p>
            <p className="text-tmt-prim mt-2">
              Working Day: Monday - Sunday (9AM - 1PM)
            </p>

            {/* Social Media Icons */}
            <div className="mt-4">
              <h3 className="text-white font-semibold mb-2">Follow Us On:</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/TMTTravelAndTours?mibextid=wwXIfr&rdid=yIcMkKt09SsQT1DG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18eL8T5rvB%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank" className="text-gray-400 hover:text-tmt-prim text-xl transition"
                >
                  <FaFacebook />
                </a>
               
                <a
                  href="#"
                  className="text-gray-400 hover:text-tmt-prim text-xl transition"
                >
                  <FaInstagram />
                </a>
              
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 pt-3">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
             
              <li>
                <Link to='/all-travel-deals' className="hover:text-tmt-prim transition">
                  All Deals
                </Link>
              </li>
             
              <li>
                <Link to='/about' className="hover:text-tmt-prim transition">
                  About
                </Link>
              </li>
             
              <li>
                <Link to='/contact' className="hover:text-tmt-prim transition">
                  Contact
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 pt-3">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="mt-3 space-y-2 text-gray-300">
              <div className="flex items-center space-x-2 hover:text-tmt-prim transition">
                <FaPhoneAlt className="text-tmt-prim" />
                <a
                  href="tel:+6562521461"
                  className="hover:text-tmt-prim transition"
                >
                  +65 62521461
                </a>
              </div>
              <div className="flex items-center space-x-2 hover:text-tmt-prim transition">
                <FaEnvelope className="text-tmt-prim" />
                <a
                  href="mailto:tmtquickservice@yahoo.com.sg"
                  className="hove:text-tmt-prim transition"
                >
                  tmtquickservice@yahoo.com.sg
                </a>
              </div>
              <div className="flex items-center space-x-2 hover:text-tmt-prim transition">
                <FaEnvelope className="text-tmt-prim" />
                <a
                  href="mailto:tmtquick@tmtquickservice.com"
                  className="hove:text-tmt-prim transition"
                >
                  tmtquick@tmtquickservice.com
                </a>
              </div>
              <div className="flex items-center space-x-2 hover:text-tmt-prim transition">
                <FaMapMarkerAlt className="text-tmt-prim" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=60+Benoi+Road+EMS+Building+Singapore+629906"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tmt-prim transition"
                >
                  60 Benoi Road (EMS Building), Unit #02-01, Singapore 629906
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} TMT Travel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
