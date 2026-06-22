import { useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, MapPin, Mail, Clock, Send, Upload } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { ref, isVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Sa Matepe! I'd like to get a quote.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}%0A%0ACan you please provide a quote?`;
    window.open(`https://wa.me/27769409175?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-blue/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-royal-blue-light text-sm font-semibold tracking-[0.3em] uppercase">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's Bring Your{' '}
            <span className="text-gradient">Ideas To Life</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your project? Get in touch with us today for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div
            ref={ref}
            className={`${isVisible ? 'fade-in-left visible' : 'fade-in-left'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue/50 focus:ring-1 focus:ring-royal-blue/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue/50 focus:ring-1 focus:ring-royal-blue/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="064 940 9175"
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue/50 focus:ring-1 focus:ring-royal-blue/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white focus:outline-none focus:border-royal-blue/50 focus:ring-1 focus:ring-royal-blue/30 transition-all duration-300"
                  >
                    <option value="" className="bg-dark">Select a service</option>
                    <option value="Custom T-Shirts" className="bg-dark">Custom T-Shirts</option>
                    <option value="Embroidery" className="bg-dark">Embroidery</option>
                    <option value="Business Branding" className="bg-dark">Business Branding</option>
                    <option value="Graphic Design" className="bg-dark">Graphic Design</option>
                    <option value="Promotional Products" className="bg-dark">Promotional Products</option>
                    <option value="Flyers, Posters & Banners" className="bg-dark">Flyers, Posters & Banners</option>
                    <option value="School & Team Apparel" className="bg-dark">School & Team Apparel</option>
                    <option value="Corporate Clothing" className="bg-dark">Corporate Clothing</option>
                    <option value="Other" className="bg-dark">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe what you need printed, quantities, colors, deadline, etc."
                  className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue/50 focus:ring-1 focus:ring-royal-blue/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Your Design / Logo (Optional)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-3 px-4 py-4 bg-white/[0.03] border border-dashed border-white/10 rounded-xl cursor-pointer hover:border-royal-blue/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <Upload className="w-5 h-5 text-royal-blue" />
                  <span className="text-sm text-gray-400">
                    {fileName || 'Click to upload design file (PNG, JPG, AI, PDF)'}
                  </span>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".png,.jpg,.jpeg,.ai,.pdf,.svg,.eps"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-royal-blue hover:bg-royal-blue-dark text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-royal-blue/30 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Quote Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-right visible' : 'fade-in-right'}`}>
            {/* Info Cards */}
            <div className="space-y-4">
              <a
                href="tel:0649409175"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-royal-blue/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-blue/10 border border-royal-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-royal-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                  <p className="text-lg font-semibold text-white">064 940 9175</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=3+Mammogale+St+Saulsville+Pretoria+0125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-royal-blue/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-blue/10 border border-royal-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-royal-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Address</h4>
                  <p className="text-lg font-semibold text-white">
                    3 Mammogale St, Saulsville<br />
                    Pretoria, 0125
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-royal-blue/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-royal-blue/10 border border-royal-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-5 h-5 text-royal-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Business Hours</h4>
                  <p className="text-base text-white font-medium">
                    Mon - Fri: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-base text-white font-medium">
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                  <p className="text-base text-gray-500">Sun: Closed</p>
                </div>
              </div>

              <a
                href="mailto:info@samatepeprinting.co.za"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-royal-blue/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-blue/10 border border-royal-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-royal-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                  <p className="text-lg font-semibold text-white">info@samatepeprinting.co.za</p>
                </div>
              </a>
            </div>

            {/* In-store features */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20">
              <h4 className="text-white font-bold mb-4">Our Services Include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['In-store Shopping', 'Kerbside Pickup', 'Delivery Available'].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-royal-blue" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5!2d28.0!3d-25.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ4JzAwLjAiUyAyOMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sa Matepe Printing Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
