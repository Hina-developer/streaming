import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Play, Tv, Film, MonitorPlay, Sparkles, Smartphone, Star } from 'lucide-react';
import { useApp } from '@/context';
import { HERO_VIDEO_SOURCES, HERO_POSTER, whatsappLink } from '@/constants';

export default function Hero() {
  const { t, lang } = useApp();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const badges = [
    { icon: Tv, label: t.hero.stats.channels },
    { icon: Film, label: t.hero.stats.movies },
    { icon: MonitorPlay, label: t.hero.stats.series },
    { icon: Sparkles, label: t.hero.stats.quality },
    { icon: Smartphone, label: t.hero.stats.devices },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          onCanPlay={() => setVideoLoaded(true)}
        >
          {HERO_VIDEO_SOURCES.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>

        {/* Gradient overlays for legibility */}
        <div className="absolute inset-0 z-10" style={{ background: 'var(--hero-overlay)' }} />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        {!videoLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 accent-text fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-white/90">{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            {t.hero.title1}{' '}
            <span className="text-gradient-gold">{t.hero.titleHighlight}</span>
            {t.hero.title2 && (
              <>
                <br className="hidden sm:block" />
                {t.hero.title2}
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl text-white/70 font-medium"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={whatsappLink(lang === 'en' ? 'Hello! I want to subscribe to your 4K Streaming TV packages.' : 'مرحبا! أريد الاشتراك في باقات 4K Streaming TV.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 animate-pulse-glow w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.ctaWhatsapp}
            </a>
            <a
              href={whatsappLink(lang === 'en' ? 'Hello! I would like a free trial of your IPTV service.' : 'مرحبا! أريد تجربة مجانية لخدمة IPTV الخاصة بكم.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Play className="w-5 h-5 accent-text" />
              {t.hero.ctaTrial}
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto"
          >
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card p-3 sm:p-4 flex flex-col items-center gap-2 text-center"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 accent-text" />
                  <span className="text-xs sm:text-sm font-bold text-white">{badge.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
