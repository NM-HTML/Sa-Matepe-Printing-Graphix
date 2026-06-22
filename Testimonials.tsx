import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Thabo Mokoena',
    role: 'Business Owner',
    text: 'Absolutely outstanding service! The quality of the printed t-shirts for our company event was exceptional. The attention to detail and vibrant colors exceeded our expectations. Highly recommend Sa Matepe for any printing needs.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'School Administrator',
    text: 'We ordered uniforms for our entire school and couldn\'t be happier. The embroidery is flawless, the material is durable, and the delivery was right on time. A truly professional team to work with.',
    rating: 5,
  },
  {
    name: 'David Nkosi',
    role: 'Church Leader',
    text: 'Sa Matepe printed our church event t-shirts and they came out beautifully. The team was helpful in the design process and offered great suggestions. Fair pricing and excellent quality. Thank you!',
    rating: 5,
  },
  {
    name: 'Lindiwe Zulu',
    role: 'Event Planner',
    text: 'As an event planner, I need reliable vendors. Sa Matepe has been consistently delivering top-quality promotional products and banners. My clients are always impressed. A true partner in business.',
    rating: 5,
  },
  {
    name: 'Michael Pretorius',
    role: 'Sports Coach',
    text: 'The team jerseys are exceptional! The quality and durability have been outstanding even after many washes. The players love them. Great communication throughout the process. 10/10 recommend!',
    rating: 5,
  },
  {
    name: 'Nomthandazo Mthembu',
    role: 'Small Business Owner',
    text: 'From logo design to branding materials, Sa Matepe handled everything professionally. My business has a whole new look and I\'ve received so many compliments. Thank you for bringing my vision to life!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-royal-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-royal-blue/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-royal-blue-light text-sm font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            What Our{' '}
            <span className="text-gradient">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            <span className="text-gray-300 font-semibold">4.7</span>
            <span className="text-gray-500">(42 Reviews)</span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div ref={ref} className={`max-w-3xl mx-auto ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-8 -left-4 text-royal-blue/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Card */}
            <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 min-h-[120px] transition-all duration-500">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-royal-blue/30 flex items-center justify-center transition-all duration-300 group"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-royal-blue transition-colors" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-royal-blue/30 flex items-center justify-center transition-all duration-300 group"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-royal-blue transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-royal-blue w-6'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
