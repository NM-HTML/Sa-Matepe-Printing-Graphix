import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Expand, Star } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Custom T-Shirts',
    category: 'T-Shirts',
    image: '/images/portfolio-1.jpg',
    description: 'Premium custom printed t-shirts with vibrant, long-lasting designs.',
  },
  {
    id: 2,
    title: 'Embroidered Apparel',
    category: 'Embroidery',
    image: '/images/portfolio-2.jpg',
    description: 'Professional embroidery on caps, polos, and corporate wear.',
  },
  {
    id: 3,
    title: 'Business Branding',
    category: 'Branding',
    image: '/images/portfolio-3.jpg',
    description: 'Complete branding packages for businesses of all sizes.',
  },
  {
    id: 4,
    title: 'Promotional Products',
    category: 'Promotional',
    image: '/images/portfolio-4.jpg',
    description: 'Custom promotional items to boost brand awareness.',
  },
  {
    id: 5,
    title: 'Team Uniforms',
    category: 'Uniforms',
    image: '/images/portfolio-5.jpg',
    description: 'Professional team uniforms for sports, schools, and organizations.',
  },
];

const categories = ['All', 'T-Shirts', 'Embroidery', 'Branding', 'Promotional', 'Uniforms'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollAnimation();

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1A] via-dark to-dark" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-royal-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-royal-blue-light text-sm font-semibold tracking-[0.3em] uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Featured{' '}
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Take a look at some of our recent projects. Every piece tells a story of quality
            and craftsmanship.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-royal-blue text-white shadow-lg shadow-royal-blue/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${
            isVisible ? 'visible' : ''
          }`}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <button
                    onClick={() => {
                      const el = document.querySelector('#contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-royal-blue-light hover:text-white transition-all duration-300"
                  >
                    Request Similar
                    <Expand className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Category Tag */}
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-glass text-xs font-medium text-white rounded-full backdrop-blur-sm">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-royal-blue hover:bg-royal-blue-dark text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-royal-blue/30 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
