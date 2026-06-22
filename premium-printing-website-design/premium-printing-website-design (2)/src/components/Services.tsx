import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Shirt,
  PenTool,
  Briefcase,
  Palette,
  Gift,
  FileText,
  Users,
  Building2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Shirt,
    title: 'Custom T-Shirt Printing',
    desc: 'Premium quality custom t-shirts using state-of-the-art screen printing and DTG technology. Perfect for events, teams, businesses, and personal use.',
    color: '#0057FF',
  },
  {
    icon: PenTool,
    title: 'Embroidery',
    desc: 'Professional embroidery services for caps, polo shirts, jackets, and more. Intricate designs with premium thread quality.',
    color: '#0066FF',
  },
  {
    icon: Briefcase,
    title: 'Business Branding',
    desc: 'Complete branding solutions including business cards, letterheads, signage, and corporate identity packages.',
    color: '#0077FF',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Creative graphic design services from logos to full brand identities. Our designers bring your vision to life.',
    color: '#3388FF',
  },
  {
    icon: Gift,
    title: 'Promotional Products',
    desc: 'Custom promotional items including mugs, pens, keychains, bags, and more to boost your brand visibility.',
    color: '#5599FF',
  },
  {
    icon: FileText,
    title: 'Flyers, Posters & Banners',
    desc: 'High-quality large format printing for flyers, posters, banners, and signage. Vibrant colors and sharp details.',
    color: '#77AAFF',
  },
  {
    icon: Users,
    title: 'School & Team Apparel',
    desc: 'Custom uniforms and apparel for schools, sports teams, and clubs. Durable materials with your colors and logos.',
    color: '#0057FF',
  },
  {
    icon: Building2,
    title: 'Corporate Clothing',
    desc: 'Professional corporate wear including branded uniforms, workwear, and executive apparel for your team.',
    color: '#0044CC',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-[#0A0A1A]" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-royal-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-royal-blue/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-royal-blue-light text-sm font-semibold tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Premium{' '}
            <span className="text-gradient">Printing Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From custom apparel to complete branding solutions, we offer everything you need
            to make your mark.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children ${
            isVisible ? 'visible' : ''
          }`}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-royal-blue/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color}15 0%, transparent 100%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${service.color}25, ${service.color}10)`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon
                  className="w-7 h-7 transition-all duration-300"
                  style={{ color: service.color }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-royal-blue-light transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-royal-blue-light hover:text-white transition-all duration-300 group/btn"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${service.color}20 50%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
