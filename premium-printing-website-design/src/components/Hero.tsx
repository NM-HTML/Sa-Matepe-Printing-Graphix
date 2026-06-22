import { Star, Shield, Zap, Award } from 'lucide-react';

const trustBadges = [
  { icon: Star, label: '4.7-Star Rating' },
  { icon: Shield, label: 'Quality Printing' },
  { icon: Zap, label: 'Fast Turnaround' },
  { icon: Award, label: 'Professional Service' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Sa Matepe Printing Studio"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-royal-blue/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-blue text-royal-blue-light text-xs font-semibold tracking-wider uppercase mb-8 animate-fadeIn">
          <Shield className="w-3.5 h-3.5" />
          Premium Quality Guaranteed
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-5xl mx-auto">
          Bringing Your{' '}
          <span className="text-gradient">Ideas To Life</span>{' '}
          Through Print.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Premium printing, custom apparel, and graphic design services trusted by
          customers across Pretoria.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('#contact')}
            className="group relative px-8 py-4 bg-royal-blue hover:bg-royal-blue-dark text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-royal-blue/30 hover:scale-105 text-lg"
          >
            <span className="relative z-10">Get a Quote</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer" />
          </button>
          <button
            onClick={() => scrollTo('#services')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-lg backdrop-blur-sm"
          >
            View Our Services
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-gray-300 group"
            >
              <badge.icon className="w-5 h-5 text-royal-blue transition-all duration-300 group-hover:scale-110 group-hover:text-royal-blue-light" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-royal-blue animate-pulse" />
        </div>
      </div>
    </section>
  );
}
