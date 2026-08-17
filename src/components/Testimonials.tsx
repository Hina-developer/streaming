import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useApp } from '@/context';

export default function Testimonials() {
  const { t } = useApp();

  // Female names list
  const femaleNames = ['Nora', 'Fatima', 'Aisha', 'Zara', 'Leila', 'Sofia', 'Maya', 'Layla'];

  const getAvatarUrl = (name) => {
    const isFemale = femaleNames.some(fName => name.includes(fName));
    // Using UI Avatars API with gender-specific styling
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${isFemale ? 'fce4ec' : 'e3f2fd'}&color=${isFemale ? 'c62828' : '1565c0'}&size=128&rounded=true&bold=true&font-size=0.5`;
  };

  return (
    <section id="testimonials" className="section-pad relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 card-glow transition-all"
            >
              <Quote className="w-8 h-8 accent-text opacity-30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 accent-text fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                "{item.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={getAvatarUrl(item.name)}
                  alt={item.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/30"
                />
                <div>
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}