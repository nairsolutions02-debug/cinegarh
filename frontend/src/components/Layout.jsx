import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Twitter } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/originals', label: 'Originals' },
    { path: '/records', label: 'Records' },
    { path: '/experience', label: 'Experience' },
    { path: '/community', label: 'Community' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled ? 'bg-[#0B1C2D]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative group">
              <span className="text-2xl font-light tracking-[0.4em] text-[#C9A24D] transition-all duration-500 group-hover:tracking-[0.5em]">
                CINEGARH
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A24D] transition-all duration-500 group-hover:w-full"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:text-[#C9A24D] ${
                    location.pathname === link.path ? 'text-[#C9A24D]' : 'text-white/70'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C9A24D]"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#C9A24D] transition-transform duration-300 hover:scale-110"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#0B1C2D]/98 backdrop-blur-lg transition-all duration-700 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg tracking-[0.2em] uppercase transition-all duration-500 ${
                  location.pathname === link.path ? 'text-[#C9A24D]' : 'text-white/70'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0B1C2D] border-t border-[#C9A24D]/20 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-light tracking-[0.4em] text-[#C9A24D] mb-4">
                CINEGARH
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Stories that echo beyond time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-[0.2em] uppercase text-white/70 mb-4">Explore</h4>
              <div className="space-y-3">
                {['Originals', 'Records', 'Experience', 'Community'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="block text-sm text-white/50 hover:text-[#C9A24D] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm tracking-[0.2em] uppercase text-white/70 mb-4">Connect</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-white/50 hover:text-[#C9A24D] transition-all duration-300 hover:scale-110">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/50 hover:text-[#C9A24D] transition-all duration-300 hover:scale-110">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-white/50 hover:text-[#C9A24D] transition-all duration-300 hover:scale-110">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#C9A24D]/10 text-center">
            <p className="text-white/30 text-xs tracking-[0.2em]">
              © 2024 CINEGARH. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;