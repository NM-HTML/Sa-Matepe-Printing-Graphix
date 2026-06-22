import { Phone, MapPin, Mail, ArrowUp, Send } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-4 h-4'} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-4 h-4'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-4 h-4'} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Custom T-Shirt Printing',
  'Embroidery Services',
  'Business Branding',
  'Graphic Design',
  'Promotional Products',
  'Flyers & Banners',
  'School & Team Apparel',
  'Corporate Clothing',
];

const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-[#050510] to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-royal-blue/30 to-transparent" />

      {/* Top decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-royal-blue to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-blue to-royal-blue-light flex items-center justify-center font-bold text-white">
                S
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Sa Matepe</h3>
                <p className="text-[10px] font-medium text-royal-blue-light tracking-[0.2em] uppercase">
                  Printing & Graphix
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium printing, custom apparel, and graphic design services in Pretoria, 
              South Africa. Bringing your ideas to life through exceptional print quality 
              and creative excellence.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-royal-blue border border-white/10 hover:border-royal-blue flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-500 hover:text-royal-blue-light transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-gray-500 hover:text-royal-blue-light transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-5">Contact</h4>
              <div className="space-y-3">
                <a href="tel:0649409175" className="flex items-center gap-3 text-sm text-gray-500 hover:text-royal-blue-light transition-colors">
                  <Phone className="w-4 h-4 text-royal-blue" />
                  064 940 9175
                </a>
                <a
                  href="https://maps.google.com/?q=3+Mammogale+St+Saulsville+Pretoria+0125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-royal-blue-light transition-colors"
                >
                  <MapPin className="w-4 h-4 text-royal-blue mt-0.5 shrink-0" />
                  3 Mammogale St, Saulsville, Pretoria, 0125
                </a>
                <a href="mailto:info@samatepeprinting.co.za" className="flex items-center gap-3 text-sm text-gray-500 hover:text-royal-blue-light transition-colors">
                  <Mail className="w-4 h-4 text-royal-blue" />
                  info@samatepeprinting.co.za
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-l-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-royal-blue/50"
                />
                <button className="px-4 py-2.5 bg-royal-blue hover:bg-royal-blue-dark text-white rounded-r-xl transition-all duration-300">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sa Matepe Printing And Graphix. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open for Business
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-royal-blue/10 border border-royal-blue/20 flex items-center justify-center hover:bg-royal-blue/20 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-royal-blue group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
