import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Tv, Smartphone, Apple, Flame, Radio, HardDrive, Monitor, Gamepad2 } from 'lucide-react';
import { useApp } from '@/context';

const DEVICE_ICONS = [Tv, Smartphone, Apple, Flame, Radio, HardDrive, Monitor, Gamepad2];

export default function Devices() {
  const { t, isRTL } = useApp();

  // Devices data with added Mi TV and Google Chromecast
  const devices = [
    { name: 'Mi TV', desc: 'Smart TV with built-in Chromecast' },
    { name: 'Google Chromecast', desc: 'Stream content from your phone' },
    { name: 'Apple TV', desc: 'Seamless integration with Apple ecosystem' },
    { name: 'Amazon Fire Stick', desc: 'Affordable streaming device' },
    { name: 'Roku', desc: 'Simple and intuitive interface' },
    { name: 'Samsung Smart TV', desc: 'QLED display with smart features' },
    { name: 'Sony Bravia', desc: 'Premium viewing experience' },
    { name: 'NVIDIA Shield', desc: 'Android TV with gaming capabilities' },
  ];

  // Split devices into 2 rows of 4
  const firstRow = devices.slice(0, 4);
  const secondRow = devices.slice(4, 8);

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

        {/* Grid Layout - 2 rows of 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {firstRow.map((device, i) => {
            const Icon = DEVICE_ICONS[i % DEVICE_ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-card p-6 card-glow transition-all"
              >
                <div className="w-14 h-14 rounded-2xl accent-bg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-black" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold mb-1">{device.name}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{device.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {secondRow.map((device, i) => {
            const Icon = DEVICE_ICONS[(i + 4) % DEVICE_ICONS.length];
            return (
              <motion.div
                key={i + 4}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i + 4) * 0.05 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-card p-6 card-glow transition-all"
              >
                <div className="w-14 h-14 rounded-2xl accent-bg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-black" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold mb-1">{device.name}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{device.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}