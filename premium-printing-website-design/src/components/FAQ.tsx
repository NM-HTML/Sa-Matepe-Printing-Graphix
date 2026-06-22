import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How long do orders typically take?',
    a: 'Most standard orders are completed within 3-7 business days. Complex or bulk orders may take 7-14 business days. We always provide a precise timeline during the quote process and strive to accommodate urgent requests when possible.',
  },
  {
    q: 'Are there minimum order quantities?',
    a: 'We accept orders of all sizes! While we love working with large bulk orders, we\'re happy to help with small quantities too, even single items. Contact us for a personalized quote based on your specific needs.',
  },
  {
    q: 'Do you offer delivery services?',
    a: 'Yes! We offer kerbside pickup at our Pretoria location, delivery within Pretoria, and can arrange shipping to other areas in South Africa. Delivery fees depend on location and order size.',
  },
  {
    q: 'Can you create custom designs from scratch?',
    a: 'Absolutely! Our professional graphic design team can create custom designs based on your ideas, sketches, or references. We\'ll work with you to develop the perfect design for your project.',
  },
  {
    q: 'What products can be printed on?',
    a: 'We print on a wide variety of products including t-shirts, hoodies, caps, bags, mugs, pens, business cards, banners, flyers, corporate gifts, and much more. Contact us to discuss your specific requirements.',
  },
  {
    q: 'Do you provide design assistance if I only have a rough idea?',
    a: 'Yes! Many of our clients come to us with just a concept. Our experienced designers will help refine your ideas and create professional, print-ready artwork that brings your vision to life.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, EFT (electronic funds transfer), and other convenient payment options. Payment terms are discussed during the quoting process.',
  },
  {
    q: 'Can I visit your store in person?',
    a: 'Yes! We welcome walk-in customers at our location: 3 Mammogale St, Saulsville, Pretoria, 0125. You can discuss your requirements, see samples of our work, and get personalized assistance.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-[#0A0A1A] to-dark" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-royal-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-royal-blue-light text-sm font-semibold tracking-[0.3em] uppercase">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about our printing services. Can't find what you're
            looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div ref={ref} className={`space-y-4 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? 'bg-royal-blue/5 border-royal-blue/20'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-white font-semibold pr-4 text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-royal-blue shrink-0 transition-all duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-royale-blue/30 transition-all duration-300"
          >
            <HelpCircle className="w-5 h-5 text-royal-blue" />
            Still Have Questions? Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
