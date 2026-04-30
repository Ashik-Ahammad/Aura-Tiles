"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#181310] text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-5">
            <h2 className="text-2xl font-bold text-[#C68B5F]">
              Aura Tiles
            </h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Premium tiles crafted for modern interiors. Elevate your
              spaces with durability, elegance, and timeless design.
            </p>

            <div className="flex justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#C68B5F] transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#C68B5F] transition-all duration-300"
              >
                <FaTwitter size={14} />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#C68B5F] transition-all duration-300"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#C68B5F] transition-all duration-300"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-white font-semibold mb-5 uppercase text-sm tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-[#C68B5F]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-tiles" className="hover:text-[#C68B5F]">
                  All Tiles
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-[#C68B5F]">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C68B5F]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-white font-semibold mb-5 uppercase text-sm tracking-wider">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="#">Floor Tiles</Link></li>
              <li><Link href="#">Wall Tiles</Link></li>
              <li><Link href="#">Marble Design</Link></li>
              <li><Link href="#">Wood Finish</Link></li>
              <li><Link href="#">Custom Patterns</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-white font-semibold mb-5 uppercase text-sm tracking-wider">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-white/70 flex flex-col items-center text-center lg:items-start lg:text-left">

              <div className="flex items-center gap-3">
                <IoLocationOutline className="text-[#C68B5F]" />
                <p>
                  Katabon, Shahbag <br />
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <IoMailOutline className="text-[#C68B5F]" />
                <a href="mailto:info@auratiles.com">
                  info@auratiles.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C68B5F]" />
                <a href="tel:+8801234567890">
                  +880 1234 567 890
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-white/50">
          <p>© 2026 Aura Tiles. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;