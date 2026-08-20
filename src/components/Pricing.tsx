import { motion } from 'framer-motion';
import { Check, Crown, Zap, CreditCard, Building2, Smartphone, Banknote } from 'lucide-react';
import { useApp } from '@/context';
import { whatsappLink } from '@/constants';
import stclogo from '@/assets/slogo.png';

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

        {/* Payment Methods - Updated with STC Pay and Bank Transfer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold" style={{ color: 'var(--text-secondary)' }}>
              {lang === 'en' ? 'Payment Methods' : 'طرق الدفع'}
            </h3>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {/* Bank Transfer Card - Larger & Glowier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.2)'
              }}
              className="glass-card p-6 lg:p-8 rounded-2xl flex items-center gap-4 min-w-[200px] justify-center relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.08))',
                border: '2px solid rgba(59,130,246,0.3)',
                boxShadow: '0 0 20px rgba(59,130,246,0.15)'
              }}
            >
              {/* Animated glow background */}
              <motion.div
                className="absolute inset-0"
                style={{ 
                  background: 'radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <Banknote className="w-8 h-8 text-blue-500 relative z-10" />
              <div className="relative z-10">
                <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  {lang === 'en' ? 'Bank Transfer' : 'تحويل بنكي'}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {lang === 'en' ? 'Direct transfer' : 'تحويل مباشر'}
                </p>
              </div>
            </motion.div>

            {/* STC Pay / STC Bank Card - Larger & Glowier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 0 40px rgba(74,14,78,0.5), 0 0 80px rgba(74,14,78,0.25), 0 0 120px rgba(255,107,0,0.15)'
              }}
              className="glass-card p-6 lg:p-8 rounded-2xl flex items-center gap-4 min-w-[220px] justify-center relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(74,14,78,0.2), rgba(255,107,0,0.08))',
                border: '2px solid rgba(74,14,78,0.4)',
                boxShadow: '0 0 30px rgba(74,14,78,0.2), 0 0 60px rgba(74,14,78,0.1)'
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0"
                style={{ 
                  background: 'radial-gradient(circle at 40% 50%, rgba(74,14,78,0.25), rgba(255,107,0,0.1), transparent 70%)'
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Secondary glow pulse */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ 
                  background: 'radial-gradient(circle at 60% 50%, rgba(255,107,0,0.15), transparent 60%)'
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* STC PNG Logo with Animation */}
              <motion.img
                src={stclogo}
                alt="STC Logo"
                className="w-12 h-12 object-contain relative z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  {lang === 'en' ? 'STC Pay' : 'STC باي'}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {lang === 'en' ? 'STC Bank' : 'بنك STC'}
                </p>
                <motion.div
                  className="h-0.5 w-full bg-gradient-to-r from-[#4A0E4E] via-[#FF6B00] to-[#4A0E4E] mt-1.5"
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Animated pulse ring border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ border: '2px solid rgba(74,14,78,0.3)' }}
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Additional outer glow ring */}
              <motion.div
                className="absolute inset-[-4px] rounded-2xl"
                style={{ border: '1px solid rgba(255,107,0,0.15)' }}
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
            </motion.div>
          </div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            {lang === 'en' 
              ? 'Secure payment options available' 
              : 'خيارات دفع آمنة متاحة'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}