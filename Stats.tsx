import { useState, useEffect, useRef } from 'react';
import { Star, MessageSquare, Package, Users } from 'lucide-react';

const stats = [
  { icon: MessageSquare, value: 42, suffix: '+', label: 'Customer Reviews', color: '#0057FF' },
  { icon: Star, value: 4.7, suffix: '', label: 'Star Rating', color: '#F5A623', decimal: true },
  { icon: Package, value: 500, suffix: '+', label: 'Successful Orders', color: '#0057FF' },
  { icon: Users, value: 300, suffix: '+', label: 'Happy Customers', color: '#0066FF' },
];

function Counter({ target, suffix, decimal = false }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/10 via-dark to-royal-blue/5" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:border-royal-blue/30 transition-all duration-500">
                <stat.icon
                  className="w-8 h-8 transition-all duration-300"
                  style={{ color: stat.color }}
                />
              </div>
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                <Counter target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
