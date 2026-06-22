import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  ShieldCheck,
  Printer,
  Wallet,
  Truck,
  Headphones,
  Building,
  CheckCircle2,
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality Materials',
    desc: 'We use only the finest materials and state-of-the-art equipment for exceptional results.',
  },
  {
    icon: Printer,
    title: 'Professional Printing',
    desc: 'Advanced printing technology combined with expert craftsmanship for perfect finishes.',
  },
  {
    icon: Wallet,
    title: 'Affordable Prices',
    desc: 'Premium quality doesn\'t have to break the bank. Competitive pricing for all budgets.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Efficient turnaround times with reliable delivery across Pretoria and beyond.',
  },
  {
    icon: Headphones,
    title: 'Excellent Customer Service',
    desc: 'Dedicated support team ready to assist you from concept to completion.',
  },
  {
    icon: Building,
    title: 'Trusted By Local Businesses',
    desc: 'Preferred partner for schools, teams, churches, and businesses across Pretoria.',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-royal-blue/5 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-royal-blue/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-royal-blue-light text-sm font-semibold tracking-[0.3em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Sa Matepe Is The{' '}
            <span className="text-gradient">Right Choice</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just print — we partner with you to bring your vision to life with
            unmatched quality and service.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${
            isVisible ? 'visible' : ''
          }`}
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-royal-blue/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 border border-royal-blue/20 flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-royal-blue/20">
                  <reason.icon className="w-7 h-7 text-royal-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-royal-blue-light transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-glass-blue border border-royal-blue/20">
            <CheckCircle2 className="w-6 h-6 text-royal-blue-light" />
            <span className="text-gray-300 font-medium">
              Trusted by hundreds of satisfied customers across Pretoria
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
