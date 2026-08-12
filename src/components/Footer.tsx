import { motion } from 'framer-motion';
import { MessageCircle, Mail, Clock, Tv, ShieldCheck } from 'lucide-react';
import { useApp } from '@/context';
import { whatsappLink } from '@/constants';

export default function Footer() {
  const { t, lang } = useApp();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.devices, href: '#devices' },
    { label: t.nav.content, href: '#showcase' },
    { label: t.nav.reviews, href: '#testimonials' },
    { label: t.nav.faq, href: '#faq' },
  ];

  const legalLinks = [t.footer.terms, t.footer.privacy, t.footer.refund];

  return (
    <footer id="contact" className="relative pt-20 pb-8" style={{ background: 'var(--bg-secondary)' }}>
      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 lg:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.contact.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink(lang === 'en' ? 'Hello! I have a question about your service.' : 'مرحبا! لدي سؤال حول خدمتكم.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t.contact.whatsapp}
            </a>
            <a href="mailto:support@4kstreamingtv.com" className="btn-secondary flex items-center gap-2">
              <Mail className="w-5 h-5 accent-text" />
              {t.contact.email}
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <Clock className="w-4 h-4 accent-text" />
            <span>{t.contact.hours}:</span>
            <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>{t.contact.hoursValue}</span>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg accent-bg flex items-center justify-center">
                <Tv className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-lg">
                4K <span className="accent-text">Streaming</span> TV
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              {t.footer.aboutText}
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              <ShieldCheck className="w-4 h-4 accent-text" />
              <span>Secure & encrypted payments</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:accent-text transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:accent-text transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'var(--border)' }} />

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} 4K Streaming TV. {t.footer.rights}
          </p>
          <div className="flex items-center gap-3">
            {['VISA', 'MasterCard', 'Amex', 'Discover'].map((c) => (
              <span key={c} className="text-xs font-bold px-2 py-1 rounded glass" style={{ color: 'var(--text-muted)' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
