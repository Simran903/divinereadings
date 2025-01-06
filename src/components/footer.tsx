import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t mt-40">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-6 md:space-y-0">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold flex items-center space-x-2">
              <span>DivineReadings</span>
              {/* Placeholder for the logo */}
              <img src="/path/to/logo.svg" alt="Logo" className="h-5 w-5" />
            </h2>
          </div>

          {/* Links Section */}
          <div className="flex justify-around flex-wrap md:flex-nowrap w-full md:w-auto space-x-24">
            {/* Company Links */}
            <div>
              <h2 className="font-bold mb-4 text-2xl">Company</h2>
              <ul className="space-y-5 text-lg">
                <li>
                  <a href="#services" className="hover:text-teal-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-teal-500">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold mb-4 text-2xl">Follow Me</h3>
              <ul className="space-y-5 text-lg">
                <li>
                  <a href="#instagram" className="hover:text-teal-500">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#youtube" className="hover:text-teal-500">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#facebook" className="hover:text-teal-500">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold mb-4 text-2xl">Legal</h3>
              <ul className="space-y-5 text-lg">
                <li>
                  <a href="/privacypolicy" className="hover:text-teal-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="hover:text-teal-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#refunds-policy" className="hover:text-teal-500">
                    Refunds Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-zinc-800">
          <p className="text-center md:text-left md:text-2xl font-semibold">
            © Copyright DivineReadings 2024. All Rights Reserved
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a
              href="#instagram"
              className="hover:text-teal-500 text-3xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#youtube"
              className="hover:text-teal-500 text-3xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#facebook"
              className="hover:text-teal-500 text-3xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;