import { motion } from 'framer-motion';
import { Check, Crown, Zap, CreditCard } from 'lucide-react';
import { useApp } from '@/context';
import { whatsappLink } from '@/constants';

export default function Pricing() {
  const { t, lang } = useApp();
  const features = [
    t.pricing.features.trial,
    t.pricing.features.liveTv,
    t.pricing.features.movies,
    t.pricing.features.devices,
    t.pricing.features.quality,
  ];

  const cards = [
    { icon: Zap, popular: false },
    { icon: Crown, popular: true },
    { icon: Crown, popular: false },
  ];

  return (
    <section id="pricing" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, i) => {
            const card = cards[i];
            const Icon = card.icon
            const discount = Math.round((1 - plan.now / plan.before) * 100)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative glass-card p-6 lg:p-8 card-glow transition-all ${
                  card.popular ? 'ring-2 ring-amber-400/60 lg:scale-105' : ''
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold accent-bg text-black whitespace-nowrap">
                    {t.pricing.popular}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.popular ? 'accent-bg' : 'glass'}`}>
                    <Icon className={`w-6 h-6 ${card.popular ? 'text-black' : 'accent-text'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171' }}>
                      {t.pricing.save} {discount}%
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-extrabold accent-text">
                      {plan.now}
                    </span>
                    <span className="text-lg font-bold" style={{ color: 'var(--text-secondary)' }}>
                      {lang === 'en' ? 'SAR' : 'ر.س'}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm line-through" style={{ color: 'var(--text-muted)' }}>
                      {plan.before} {lang === 'en' ? 'SAR' : 'ر.س'}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {t.pricing.before}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full accent-bg flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-black" strokeWidth={3} />
                      </div>
                      <span style={{ color: 'var(--text-secondary)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={whatsappLink(
                    lang === 'en'
                      ? `Hello! I want to subscribe to the ${plan.name} plan (${plan.now} SAR).`
                      : `مرحبا! أريد الاشتراك في باقة ${plan.name} (${plan.now} ر.س).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                    card.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Secure payment badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <CreditCard className="w-4 h-4 accent-text" />
            <span className="font-semibold">{t.pricing.securePayment}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['VISA', 'MasterCard', 'Amex', 'Discover'].map((card) => (
              <div
                key={card}
                className="px-4 py-2 rounded-lg glass text-sm font-bold tracking-wide"
                style={{ color: 'var(--text-secondary)' }}
              >
                {card}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
