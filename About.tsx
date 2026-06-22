import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Shield, Sparkles, Heart, Target, Eye, Clock } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Quality Products', desc: 'Premium materials and state-of-the-art printing technology ensure every product exceeds expectations.' },
  { icon: Sparkles, title: 'Creative Excellence', desc: 'Our design team brings artistic vision and attention to detail to every project.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: 'Your happiness is our priority. We go above and beyond to deliver exactly what you envision.' },
  { icon: Target, title: 'Reliability', desc: 'Consistent quality, on-time delivery, and dependable service you can count on every time.' },
  { icon: Eye, title: 'Attention to Detail', desc: 'Every stitch, print, and finish is meticulously checked for perfection before delivery.' },
  { icon: Clock, title: 'Quick Turnaround', desc: 'Fast, efficient service without compromising on the premium quality you deserve.' },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-blue/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div ref={ref} className={`relative ${isVisible ? 'fade-in-left visible' : 'fade-in-left'}`}>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/about-team.jpg"
                alt="Sa Matepe Printing Workshop"
                className="w-full h-[500px] object-cover rounded-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-glass-dark rounded-2xl p-5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-royal-blue flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4.7</p>
                  <p className="text-xs text-gray-400">Trusted Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-right visible' : 'fade-in-right'}`}>
            <div>
              <span className="text-royal-blue-light text-sm font-semibold tracking-[0.3em] uppercase">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Printing Excellence With{' '}
                <span className="text-gradient">A Personal Touch</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              At Sa Matepe Printing And Graphix, we believe every design tells a story. 
              Located in the heart of Pretoria, we've been bringing creative visions to life 
              through premium printing, custom apparel, and professional branding solutions.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Whether you're a business looking to elevate your brand, a school needing team 
              uniforms, or an individual with a creative vision, we combine technical expertise 
              with artistic passion to deliver results that exceed expectations. Every project 
              receives the same dedication to quality, from a single custom t-shirt to a 
              full corporate branding package.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.slice(0, 4).map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <value.icon className="w-5 h-5 text-royal-blue mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{value.title}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
