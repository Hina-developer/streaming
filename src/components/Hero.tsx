import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Play, Tv, Film, MonitorPlay, Sparkles, Smartphone, Star } from 'lucide-react';
import { useApp } from '@/context';
import { HERO_VIDEO_SOURCES, HERO_POSTER, whatsappLink } from '@/constants';
import netflixlogo from '@/assets/nlogo.png'; 
import amazonlogo from '@/assets/amazon.png'; 
import disneylogo from '@/assets/disney.png'; 
import hbologo from '@/assets/hbo.png'; 

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

  // Platform logos data with enhanced properties
  const platforms = [
    { 
      name: 'Netflix', 
      logo: netflixlogo,
      color: '#E50914',
      glow: 'rgba(229, 9, 20, 0.4)'
    },
    { 
      name: 'Amazon Prime', 
      logo: amazonlogo,
      color: '#00A8E1',
      glow: 'rgba(0, 168, 225, 0.4)'
    },
    { 
      name: 'Disney+', 
      logo: disneylogo,
      color: '#113CCF',
      glow: 'rgba(17, 60, 207, 0.4)'
    },
    { 
      name: 'HBO Max', 
      logo: hbologo,
      color: '#5822B4',
      glow: 'rgba(88, 34, 180, 0.4)'
    },
  ];

  // Floating animation variants
  const floatingVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -8, 0, 8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  // Rotating ring animation for each platform
  const ringVariants = {
    initial: { rotate: 0 },
    animate: (i: number) => ({
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "linear"
      }
    })
  };

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
       
        {/* Loading overlay - removed the loading spinner, now just shows poster */}
        {!videoLoaded && (
          <div className="absolute inset-0 z-10 bg-black/60" />
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

          {/* Platform Logos - FULLY ANIMATED & ATTRACTIVE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10 relative"
          >
            {/* Animated gradient line above platforms */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
            />

            <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wider mb-6 font-medium flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-white/10"></span>
              {lang === 'en' ? 'Premium Content Providers' : 'محتوى من كبرى المنصات'}
              <span className="w-8 h-px bg-white/10"></span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  variants={floatingVariants}
                  className="relative group"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glowing ring background */}
                  <motion.div
                    custom={index}
                    variants={ringVariants}
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${platform.glow} 0%, transparent 70%)`,
                      filter: 'blur(20px)',
                    }}
                  />

                  {/* Rotating border ring */}
                  <motion.div
                    custom={index}
                    variants={ringVariants}
                    className="absolute -inset-1 rounded-full border-2 border-transparent group-hover:border-current transition-all duration-500"
                    style={{ 
                      borderColor: platform.color,
                      boxShadow: `0 0 30px ${platform.glow}`,
                      opacity: 0.3
                    }}
                  />

                  {/* Inner glow on hover */}
                  <motion.div
                    className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${platform.glow} 0%, transparent 70%)`,
                      filter: 'blur(10px)',
                    }}
                  />

                  {/* Logo container with glass effect */}
                  <motion.div
                    className="relative z-10 p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-500"
                    whileHover={{
                      boxShadow: `0 8px 32px ${platform.glow}`,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    }}
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-7 sm:h-8 md:h-10 w-auto transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('span');
                          fallback.className = 'text-white/80 text-sm font-bold';
                          fallback.textContent = platform.name;
                          parent.appendChild(fallback);
                        }
                      }}
                    />

                    {/* Animated pulse dot */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                      style={{ backgroundColor: platform.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>

                  {/* Platform name with gradient on hover */}
                  <motion.p
                    className="text-center text-white/40 text-xs font-medium mt-2 group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {platform.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>


    </section>
  );
}