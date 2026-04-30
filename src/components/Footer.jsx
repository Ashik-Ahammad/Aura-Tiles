"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#1C1613] text-white/70 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Newsletter */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="flex items-center gap-2">
              <h6 className="text-2xl text-amber-600 font-bold uppercase tracking-tighter">
                Aura Tiles
              </h6>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Aura Tiles company, specializing in the production and
              distribution of premium flooring solutions for modern living.
            </p>
            <div className="relative w-full max-w-xs">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white py-4 px-6 rounded-sm text-black outline-none font-medium"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C68B5F] hover:translate-x-1 transition-transform">
                <span className="text-2xl font-bold">→</span>
              </button>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#C68B5F]"></span> Explore
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Recent News
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#C68B5F]"></span> Services
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Carpets & Rugs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Industrial Flooring
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Tiling & Concrete
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Vein Patterns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C68B5F] transition-colors no-underline"
                >
                  Vinyl Plank
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#C68B5F]"></span> Get In Touch
            </h3>
            <div className="space-y-6 text-sm font-medium flex flex-col items-center lg:items-start">
              <p>
                71 Baagi Road
                <br />
                Katabon, Shahbag 1971
              </p>
              <div className="flex items-center gap-3">
                <IoMailOpenOutline className="text-[#C68B5F] text-xl" />
                <a
                  href="mailto:needhelp@aura.com"
                  className="hover:text-white no-underline transition-colors"
                >
                  needhelp@aura.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C68B5F] text-lg" />
                <a
                  href="tel:+9156980036420"
                  className="hover:text-white no-underline transition-colors"
                >
                  +8801234 567890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Manual Social Icons (No Map) */}
          <div className="flex justify-center gap-3">
            <Link
              href="#"
              className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#C68B5F] hover:border-[#C68B5F] transition-all rounded-sm"
            >
              <FaFacebookF size={14} className="text-white" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#C68B5F] hover:border-[#C68B5F] transition-all rounded-sm"
            >
              <FaTwitter size={14} className="text-white" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#C68B5F] hover:border-[#C68B5F] transition-all rounded-sm"
            >
              <FaInstagram size={14} className="text-white" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#C68B5F] hover:border-[#C68B5F] transition-all rounded-sm"
            >
              <FaPinterestP size={14} className="text-white" />
            </Link>
          </div>

          <p className="text-[10px] md:text-xs tracking-widest font-bold uppercase opacity-60 text-center">
            © Copyright 2026 By Aura Tiles All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
