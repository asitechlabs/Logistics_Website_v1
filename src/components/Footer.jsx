import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001F5C] text-white pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ASI Logistics" className="h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter leading-none text-white">
                ASI <span className="text-[var(--accent)]">LOGISTICS</span>
              </span>
              <span className="text-[8px] tracking-[0.2em] font-bold text-gray-300 uppercase mt-1">Moving Your World Forward</span>
            </div>
          </Link>
          <p className="text-gray-200 text-sm leading-relaxed">
            Providing enterprise-grade logistics solutions with precision, reliability, and a global reach. We move your world forward.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors">
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-wider text-white">Our Services</h4>
          <ul className="space-y-4 text-sm text-white">
            <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Air Freight</Link></li>
            <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Ocean Freight</Link></li>
            <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Road Transport</Link></li>
            <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Warehousing</Link></li>
            <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Supply Chain Solutions</Link></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white">
            <li><Link to="/about" className="hover:text-[var(--accent)] transition-colors">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-[var(--accent)] transition-colors">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--accent)] transition-colors">Get a Quote</Link></li>
            <li><Link to="/careers" className="hover:text-[var(--accent)] transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-wider text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[var(--accent)]" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[var(--accent)]" />
              <span>+977 1 4XXXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[var(--accent)]" />
              <span>info@asilogistics.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-400 font-medium">
        <p>© {currentYear} ASI Logistics. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
