import { motion } from 'framer-motion';
import { Check, Crown, Zap, CreditCard, Shield, Sparkles, ArrowRight, Lock, Star } from 'lucide-react';
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

  // Floating particles for the payment section
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

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

        {/* ============================================================ */}
        {/* ULTRA ANIMATED PAYMENT SECTION - MAXIMUM ATTRACTIVENESS */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6 relative"
        >
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  background: `radial-gradient(circle, rgba(99,102,241,${Math.random() * 0.3 + 0.1}), transparent)`,
                }}
                animate={{
                  y: [0, -30, 0, 30, 0],
                  x: [0, 20, 0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Animated Divider with Glow */}
          <motion.div 
            className="flex items-center gap-4 w-full max-w-lg relative z-10"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div 
              className="flex-1 h-px relative"
              style={{ background: 'linear-gradient(90deg, transparent, var(--border-color), transparent)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            <motion.div 
              className="flex items-center gap-2 px-5 py-2 rounded-full glass text-xs font-medium relative"
              style={{ 
                color: 'var(--text-secondary)', 
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 40px rgba(99,102,241,0.1)'
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 40px rgba(99,102,241,0.1)',
                  '0 0 60px rgba(99,102,241,0.2)',
                  '0 0 40px rgba(99,102,241,0.1)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-3.5 h-3.5 accent-text" />
              </motion.div>
              <span className="font-bold tracking-wider">{t.pricing.securePayment}</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-1 h-px relative"
              style={{ background: 'linear-gradient(90deg, transparent, var(--border-color), transparent)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Payment Badges - Ultra Animated */}
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            
            {/* ====== BANK TRANSFER - ULTRA ANIMATED ====== */}
            <motion.div
              className="group relative px-7 py-3.5 rounded-2xl border border-white/10 transition-all duration-500 flex items-center gap-3 cursor-default overflow-hidden"
              style={{ 
                color: 'var(--text-secondary)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.25)'
              }}
              initial={{ opacity: 0, x: -30, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.08,
                borderColor: 'rgba(99,102,241,0.4)',
                boxShadow: '0 12px 60px rgba(99,102,241,0.2), inset 0 0 40px rgba(99,102,241,0.05)',
                y: -4
              }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.02))',
                  borderRadius: 'inherit'
                }}
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.02))',
                    'linear-gradient(225deg, rgba(99,102,241,0.12), rgba(139,92,246,0.04))',
                    'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.02))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glow ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  border: '2px solid rgba(99,102,241,0.15)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.1)'
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="w-11 h-11 rounded-xl flex items-center justify-center relative z-10"
                style={{ background: 'rgba(255,255,255,0.06)' }}
                whileHover={{ 
                  rotate: [0, -8, 8, -8, 0],
                  transition: { duration: 0.5 },
                  background: 'rgba(99,102,241,0.15)'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="accent-text">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </motion.div>
              
              <span className="text-sm font-bold tracking-wide relative z-10">Bank Transfer</span>
              
              {/* Floating particles around card */}
              <motion.div
                className="absolute -right-4 -top-4 w-12 h-12 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)' }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -left-3 -bottom-3 w-8 h-8 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent)' }}
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0, 0.2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* ====== STC PAY - ULTRA PREMIUM ANIMATED ====== */}
            <motion.div
              className="group relative px-7 py-3.5 rounded-2xl border border-white/10 transition-all duration-500 flex items-center gap-3 cursor-default overflow-hidden"
              style={{ 
                color: 'var(--text-secondary)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(99,102,241,0.03))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.25)'
              }}
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.08,
                borderColor: 'rgba(99,102,241,0.5)',
                boxShadow: '0 12px 60px rgba(99,102,241,0.25), 0 0 80px rgba(99,102,241,0.05)',
                y: -4
              }}
            >
              {/* Animated shimmer background */}
              <motion.div 
                className="absolute inset-0"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.02), rgba(99,102,241,0.06))',
                  borderRadius: 'inherit'
                }}
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.02), rgba(99,102,241,0.06))',
                    'linear-gradient(225deg, rgba(99,102,241,0.10), rgba(139,92,246,0.04), rgba(99,102,241,0.10))',
                    'linear-gradient(315deg, rgba(99,102,241,0.06), rgba(139,92,246,0.02), rgba(99,102,241,0.06))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  border: '2px solid rgba(99,102,241,0.2)',
                  boxShadow: '0 0 80px rgba(99,102,241,0.1)'
                }}
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden relative z-10 bg-white/5 p-1.5"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(99,102,241,0)',
                    '0 0 30px rgba(99,102,241,0.05)',
                    '0 0 20px rgba(99,102,241,0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img 
                  src={stclogo} 
                  alt="STC" 
                  className="h-7 w-auto object-contain" 
                />
              </motion.div>
              
              <div className="flex flex-col items-start leading-tight relative z-10">
                <motion.span 
                  className="text-sm font-bold tracking-wide"
                  whileHover={{ 
                    color: '#818cf8',
                    transition: { duration: 0.2 }
                  }}
                >
                  STC Pay
                </motion.span>
                <span className="text-[10px] font-medium opacity-50">STC Bank</span>
              </div>

              {/* Pulse ring effect */}
              <motion.div
                className="absolute -inset-1 rounded-2xl"
                style={{ 
                  border: '1px solid rgba(99,102,241,0.1)',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Multiple sparkle particles */}
              <motion.div
                className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-amber-400"
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
              <motion.div
                className="absolute bottom-2 left-1/3 w-1 h-1 rounded-full bg-blue-400"
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.8
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-1 w-1.5 h-1.5 rounded-full bg-purple-400"
                animate={{
                  scale: [0, 1.8, 0],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1.3
                }}
              />
              <motion.div
                className="absolute bottom-1/2 -left-1 w-1 h-1 rounded-full bg-cyan-400"
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
            </motion.div>
          </div>

          {/* Animated secure badge with lock */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="relative z-10"
          >
            <motion.div 
              className="flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{ 
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
              whileHover={{ scale: 1.05 }}
            >
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}