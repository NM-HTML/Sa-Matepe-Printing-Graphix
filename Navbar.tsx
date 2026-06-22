import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-glass-dark shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-blue to-royal-blue-light flex items-center justify-center font-bold text-white text-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-royal-blue/30">
              S
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white leading-tight">
                Sa Matepe
              </h1>
              <p className="text-[10px] font-medium text-royal-blue-light tracking-[0.2em] uppercase">
                Printing & Graphix
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-royal-blue transition-all duration-300 group-hover:w-1/2" />
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="ml-4 px-6 py-2.5 bg-royal-blue hover:bg-royal-blue-dark text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-royal-blue/30 hover:scale-105"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/5 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-glass-dark mx-4 mb-4 rounded-2xl p-4 border border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:0649409175"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-royal-blue" />
              064 940 9175
            </a>
            <a
              href="https://maps.google.com/?q=3+Mammogale+St+Saulsville+Pretoria+0125"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-royal-blue" />
              3 Mammogale St, Saulsville
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
