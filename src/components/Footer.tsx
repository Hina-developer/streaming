import { motion } from 'framer-motion';
import { MessageCircle, Mail, Clock, Tv, ShieldCheck, Sparkles, Lock, Star, ChevronUp, Heart, Zap, Users, Headphones, Rocket, Gift, Camera, Wifi, Play, Film, Gamepad, Music, Banknote } from 'lucide-react';
import { useApp } from '@/context';
import { whatsappLink } from '@/constants';
import darklogo from '@/assets/logo1.png';
import lightlogo from '@/assets/logo2.png';
import stclogo from '@/assets/slogo.png';

export default function Footer() {
  const { t, lang, theme } = useApp();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.pricing, href: '#pricing', icon: Star },
    { label: t.nav.devices, href: '#devices', icon: Tv },
    { label: t.nav.content, href: '#showcase', icon: Zap },
    { label: t.nav.reviews, href: '#testimonials', icon: Users },
    { label: t.nav.faq, href: '#faq', icon: Headphones },
  ];

  const features = [
    { icon: Wifi, label: '4K Ultra HD' },
    { icon: Play, label: 'Instant Access' },
    { icon: Film, label: '1000+ Channels' },
    { icon: Gamepad, label: 'All Sports' },
    { icon: Music, label: 'Premium Content' },
    { icon: ShieldCheck, label: 'Secure' },
  ];

  const logo = theme === 'dark' ? darklogo : lightlogo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      
      {/* Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.08), transparent 40%), radial-gradient(circle at 50% 50%, rgba(236,72,153,0.03), transparent 60%)',
            'radial-gradient(circle at 30% 70%, rgba(99,102,241,0.18), transparent 40%), radial-gradient(circle at 70% 30%, rgba(139,92,246,0.12), transparent 40%), radial-gradient(circle at 50% 50%, rgba(236,72,153,0.05), transparent 60%)',
            'radial-gradient(circle at 20% 80%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.08), transparent 40%), radial-gradient(circle at 50% 50%, rgba(236,72,153,0.03), transparent 60%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl pointer-events-none"
          style={{
            width: 100 + i * 30,
            height: 100 + i * 30,
            background: i % 2 === 0 
              ? `rgba(99,102,241,${0.04 + i * 0.005})` 
              : `rgba(139,92,246,${0.03 + i * 0.005})`,
            left: `${(i * 12) % 90}%`,
            top: `${(i * 8 + 20) % 80}%`,
          }}
          animate={{
            x: [0, 50 + i * 10, 0],
            y: [0, -30 - i * 5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Floating Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Sparkles className="w-2 h-2 text-accent" />
        </motion.div>
      ))}

      {/* Contact CTA - Ultra Premium */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-8 lg:p-12 text-center rounded-3xl overflow-hidden"
          style={{
            background: 'var(--bg-primary)',
            border: '1px solid var(--border)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}
        >
          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(90deg, rgba(99,102,241,0.2), rgba(139,92,246,0.4), rgba(236,72,153,0.2), rgba(99,102,241,0.2))',
              backgroundSize: '300% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-[1px] rounded-3xl" style={{ background: 'var(--bg-primary)' }} />
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-4 h-4 text-accent" />
              </motion.span>
              <span className="text-xs font-semibold text-accent">24/7 SUPPORT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            >
              {t.contact.title}
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block ml-2"
              >
                ✨
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-3 text-lg" style={{ color: 'var(--text-secondary)' }}
            >
              {t.contact.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href={whatsappLink(lang === 'en' ? 'Hello! I have a question about your service.' : 'مرحبا! لدي سؤال حول خدمتكم.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-full flex items-center gap-3 font-bold text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 8px 30px rgba(37, 211, 102, 0.3)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['-200% 0%', '200% 0%'],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t.contact.whatsapp}</span>
                <motion.span
                  className="absolute -top-1 -right-1 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full relative z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  LIVE
                </motion.span>
              </motion.a>

              <motion.a
                href="mailto:prime-streams@outlook.com"
                className="group px-8 py-4 rounded-full flex items-center gap-3 font-bold transition-all duration-300"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-secondary)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(99,102,241,0.5)',
                  boxShadow: '0 8px 30px rgba(99,102,241,0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 accent-text" />
                {t.contact.email}
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Clock className="w-4 h-4 accent-text" />
              </motion.div>
              <span>{t.contact.hours}:</span>
              <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>{t.contact.hoursValue}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ 
                  scale: 1.08,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <img 
                  src={logo}
                  alt="Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-contain"
                />
                <motion.div
                  className="absolute -inset-1 rounded-xl"
                  style={{
                    border: '2px solid rgba(99,102,241,0.3)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    borderRadius: ['12px', '16px', '12px'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.02 }}
                >
                  Prime Streams
                </motion.h3>
                <motion.p
                  className="text-xs"
                  style={{ color: 'var(--text-muted)' }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ★ Premium IPTV Service
                </motion.p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}
            >
              {t.footer.aboutText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mt-4"
            >
              {['Secure', 'Encrypted', 'Trusted'].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.1)',
                    color: 'var(--text-secondary)',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: 'rgba(99,102,241,0.3)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <ShieldCheck className="w-3 h-3 inline mr-1 text-accent" />
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>{t.footer.quickLinks}</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="text-accent"
              >
                ✦
              </motion.span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm"
                    style={{ 
                      color: 'var(--text-secondary)',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: 'rgba(99,102,241,0.08)',
                      x: 5,
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-3.5 h-3.5 accent-text" />
                    </motion.div>
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>Features</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-accent"
              >
                ⚡
              </motion.span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    className="group flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.03)',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    whileHover={{
                      scale: 1.08,
                      borderColor: 'rgba(99,102,241,0.3)',
                      boxShadow: '0 4px 20px rgba(99,102,241,0.1)',
                      y: -2,
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-3.5 h-3.5 accent-text" />
                    </motion.div>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Payment Methods - New Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>{lang === 'en' ? 'Payment Methods' : 'طرق الدفع'}</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-accent"
              >
                💳
              </motion.span>
            </h4>

            <div className="space-y-3">
              {/* Bank Transfer */}
              <motion.div
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(59,130,246,0.05)',
                  border: '1px solid rgba(59,130,246,0.1)',
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(59,130,246,0.3)',
                  boxShadow: '0 4px 20px rgba(59,130,246,0.1)',
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Banknote className="w-5 h-5 text-blue-500" />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {lang === 'en' ? 'Bank Transfer' : 'تحويل بنكي'}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {lang === 'en' ? 'Direct bank transfer' : 'تحويل مباشر'}
                  </p>
                </div>
              </motion.div>

              {/* STC Pay */}
              <motion.div
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(74,14,78,0.08), rgba(255,107,0,0.03))',
                  border: '1px solid rgba(74,14,78,0.15)',
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(74,14,78,0.4)',
                  boxShadow: '0 4px 20px rgba(74,14,78,0.15)',
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 30% 50%, rgba(74,14,78,0.05), transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.img
                  src={stclogo}
                  alt="STC Logo"
                  className="w-8 h-8 object-contain relative z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {lang === 'en' ? 'STC Pay' : 'STC باي'}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {lang === 'en' ? 'STC Bank' : 'بنك STC'}
                  </p>
                  <motion.div
                    className="h-0.5 w-full bg-gradient-to-r from-[#4A0E4E] to-[#FF6B00] mt-1"
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{ border: '1px solid rgba(74,14,78,0.1)' }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-xs text-center"
              style={{ color: 'var(--text-muted)' }}
            >
              {lang === 'en' ? '✓ Secure & Encrypted Payments' : '✓ مدفوعات آمنة ومشفرة'}
            </motion.p>
          </motion.div>
        </div>

        {/* Divider with neon effect */}
        <motion.div
          className="h-px relative"
          style={{ background: 'var(--border)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(139,92,246,0.6), transparent)',
              height: '2px',
              filter: 'blur(4px)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} Prime Streams. {lang === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
          </p>
          
          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full transition-all duration-300"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.1)',
              }}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                borderColor: 'rgba(99,102,241,0.3)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronUp className="w-4 h-4 accent-text" />
            </motion.button>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}