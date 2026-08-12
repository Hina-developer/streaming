import { motion } from 'framer-motion';
import { Play, Trophy, Star } from 'lucide-react';
import { useApp } from '@/context';
import { MOVIE_POSTERS, SPORTS_POSTERS, SERIES_POSTERS } from '@/constants';

interface CarouselRowProps {
  title: string;
  posters: string[];
  titles: string[];
  icon: typeof Play;
  delay?: number;
}

function CarouselRow({ title, posters, titles, icon: Icon, delay = 0 }: CarouselRowProps) {
  const items = [...posters, ...posters];
  const labels = [...titles, ...titles];

  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center gap-2 mb-5"
      >
        <Icon className="w-6 h-6 accent-text" />
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -50 * (posters.length * 8 + 4)] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {items.map((poster, i) => (
            <div
              key={i}
              className="group relative shrink-0 w-36 sm:w-44 lg:w-48 aspect-[2/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={poster}
                alt={labels[i % labels.length]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full accent-bg flex items-center justify-center">
                  <Play className="w-5 h-5 text-black fill-black" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3">
                <p className="text-sm font-bold text-white truncate">{labels[i % labels.length]}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const { t } = useApp();

  return (
    <section id="showcase" className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t.showcase.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.showcase.subtitle}
          </p>
        </motion.div>

        <CarouselRow title={t.showcase.movies} posters={MOVIE_POSTERS} titles={t.showcase.movieTitles} icon={Play} />
        <CarouselRow title={t.showcase.sports} posters={SPORTS_POSTERS} titles={t.showcase.sportsItems} icon={Trophy} delay={0.1} />
        <CarouselRow title={t.showcase.series} posters={SERIES_POSTERS} titles={t.showcase.seriesTitles} icon={Star} delay={0.2} />
      </div>
    </section>
  );
}
