import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe, FaSearch, FaChevronDown, FaShip, FaPlane, FaTruck, FaWarehouse, FaBoxes, FaLink } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '#', hasMega: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Solutions', path: '#', hasMega: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Utility Bar */}
      <div className="bg-[#001F5C] text-white text-[12px] py-1 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center space-x-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaGlobe /> <span>Language</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <span>Region Selector</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaSearch /> <span>Search</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ASI Logistics" className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} />
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter leading-none ${isScrolled ? 'text-xl' : 'text-2xl'} text-[var(--primary)]`}>
                ASI <span className="text-[var(--accent)]">LOGISTICS</span>
              </span>
              <span className="text-[8px] tracking-[0.2em] font-bold text-gray-500 uppercase">Moving Your World Forward</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="group static">
                <Link 
                  to={link.path} 
                  onClick={link.path === '#' ? (e) => e.preventDefault() : undefined}
                  className={`text-[14px] font-bold uppercase tracking-wide flex items-center gap-1 hover:text-[var(--accent)] transition-colors ${isScrolled ? 'text-[var(--text-main)]' : 'text-[var(--primary)]'}`}
                >
                  {link.name}
                  {link.hasMega && <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Mega Menu for Solutions */}
                {link.hasMega && link.name === 'Solutions' && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
                      <div>
                        <h4 className="text-[14px] font-black text-[var(--primary)] uppercase border-b border-gray-200 pb-2 mb-4">Core Solutions</h4>
                        <ul className="space-y-3">
                          <li><Link to="/solutions/on-demand" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaTruck className="text-[var(--primary)]"/> On-Demand Transport</Link></li>
                          <li><Link to="/solutions/house-moving" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaBoxes className="text-[var(--primary)]"/> House Moving</Link></li>
                          <li><Link to="/solutions/mero-upaya" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaLink className="text-[var(--primary)]"/> Mero Upaya Integration</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-black text-[var(--primary)] uppercase border-b border-gray-200 pb-2 mb-4">E-Commerce</h4>
                        <ul className="space-y-3">
                          <li><Link to="/solutions/hyperlocal" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaGlobe className="text-[var(--primary)]"/> Hyperlocal Delivery</Link></li>
                          <li><Link to="/solutions/fulfillment" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaBoxes className="text-[var(--primary)]"/> Fulfillment Services</Link></li>
                        </ul>
                      </div>
                      <div className="col-span-2 bg-gray-50 p-8 rounded-2xl">
                        <h4 className="text-xl font-black text-[var(--primary)] mb-4 uppercase text-emerald-600">Disrupting Logistics</h4>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">Our solution architects are dedicated to building smarter, faster, and more connected networks for Nepal and beyond.</p>
                        <Link to="/solutions" className="text-[var(--accent)] font-bold text-sm hover:underline">Explore Our Solutions →</Link>
                      </div>
                    </div>
                  </div>
                )}

                {link.hasMega && link.name === 'Services' && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
                      <div>
                        <h4 className="text-[14px] font-black text-[var(--primary)] uppercase border-b border-gray-200 pb-2 mb-4">Freight Services</h4>
                        <ul className="space-y-3">
                          <li><Link to="/services/ocean" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaShip className="text-[var(--primary)]"/> Ocean Freight</Link></li>
                          <li><Link to="/services/air" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaPlane className="text-[var(--primary)]"/> Air Freight</Link></li>
                          <li><Link to="/services/road" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaTruck className="text-[var(--primary)]"/> Road Transport</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-black text-[var(--primary)] uppercase border-b border-gray-200 pb-2 mb-4">Logistics Solutions</h4>
                        <ul className="space-y-3">
                          <li><Link to="/services/warehousing" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaWarehouse className="text-[var(--primary)]"/> Warehousing</Link></li>
                          <li><Link to="/services/distribution" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaBoxes className="text-[var(--primary)]"/> Distribution</Link></li>
                          <li><Link to="/services/supply-chain" className="text-sm text-gray-600 hover:text-[var(--accent)] flex items-center gap-2 transition-colors"><FaLink className="text-[var(--primary)]"/> Supply Chain</Link></li>
                        </ul>
                      </div>
                      <div className="col-span-2 bg-gray-50 p-8 rounded-2xl">
                        <h4 className="text-xl font-black text-[var(--primary)] mb-4 uppercase">Need a Custom Solution?</h4>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">Our experts are ready to design a tailored logistics strategy for your complex supply chain needs.</p>
                        <Link to="/contact" className="btn-primary inline-block text-xs">Consult an Expert</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block btn-primary text-sm py-2 px-6">
              Get a Quote
            </Link>
            <button 
              className="lg:hidden text-2xl text-[var(--primary)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 ${isOpen ? 'opacity-100 visible h-auto pb-6 shadow-2xl' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
          <ul className="px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path === '#' ? '/services' : link.path} 
                  className="text-lg font-black text-[var(--primary)] uppercase tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="block btn-primary text-center py-4" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  );
}

