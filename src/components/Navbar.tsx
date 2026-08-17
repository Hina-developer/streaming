import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, MessageCircle, Zap, Tv, Globe } from 'lucide-react';
import { useApp } from '@/context';
import { whatsappLink } from '@/constants';
import darklogo from '@/assets/logo1.png'; // ✅ Dark theme logo
import lightlogo from '@/assets/logo2.png'; // ✅ Light theme logo

export default function Navbar() {
  const { t, lang, toggleLang, theme, toggleTheme, isRTL } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.devices, href: '#devices' },
    { label: t.nav.content, href: '#showcase' },
    { label: t.nav.reviews, href: '#testimonials' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 350);
  };

  // Select logo based on theme
  const logo = theme === 'dark' ? darklogo : lightlogo;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Increased size */}
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <div className="relative">
                <img 
                  src={logo}
                  alt="Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg object-contain"
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Flash Sale Pill */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(239,68,68,0.15))',
                  border: '1px solid rgba(251,191,36,0.3)',
                  color: 'var(--accent)',
                }}
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>{t.flashSale}</span>
              </motion.div>

              {/* Language Switcher */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg glass text-sm font-semibold hover:border-amber-400/50 transition-all"
                title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                <Globe className="w-4 h-4 accent-text" />
                <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg glass hover:border-amber-400/50 transition-all"
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun className="w-4 h-4 accent-text" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon className="w-4 h-4 accent-text" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Live Chat */}
              <a
                href={whatsappLink(lang === 'en' ? 'Hello! I would like to chat about your IPTV packages.' : 'مرحبا! أريد الدردشة عن باقات IPTV الخاصة بكم.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg btn-primary text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden xl:inline">{t.nav.liveChat}</span>
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((p) => !p)}
                className="lg:hidden p-2 rounded-lg glass"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden glass border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="block w-full text-start px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href={whatsappLink(lang === 'en' ? 'Hello! I would like to chat about your IPTV packages.' : 'مرحبا! أريد الدردشة عن باقات IPTV الخاصة بكم.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg btn-primary text-sm mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.nav.liveChat}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}