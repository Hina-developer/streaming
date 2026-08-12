import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Tv, Smartphone, Apple, Flame, Radio, HardDrive } from 'lucide-react';
import { useApp } from '@/context';

const DEVICE_ICONS = [Tv, Smartphone, Apple, Flame, Radio, HardDrive];

export default function Devices() {
  const { t, isRTL } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 300;
    const direction = isRTL ? (dir === 'left' ? 'right' : 'left') : dir;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="devices" className="section-pad relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t.devices.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.devices.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass items-center justify-center hover:border-amber-400/50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass items-center justify-center hover:border-amber-400/50 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
          >
            {t.devices.items.map((item, i) => {
              const Icon = DEVICE_ICONS[i % DEVICE_ICONS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="snap-start shrink-0 w-64 sm:w-72 glass-card p-6 card-glow transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl accent-bg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-black" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
