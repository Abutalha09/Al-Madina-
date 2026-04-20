import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';
import { SHOP_INFO } from '../constants';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home({ onBookClick }: { onBookClick: () => void }) {
  const { t } = useLanguage();
  const stats = [
    { label: t('home.stats.expertRepairs'), value: "50k+", color: "text-primary" },
    { label: t('home.stats.happyClients'), value: "20k+", color: "text-success" },
    { label: t('home.stats.phoneBrands'), value: t('home.stats.allBrands'), color: "text-premium" },
    { label: t('home.stats.partSupport'), value: t('home.stats.clearSupport'), color: "text-secondary" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero onBookClick={onBookClick} />

      <section className="py-10 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="premium-card p-5 text-center"
            >
              <span className={`relative block text-3xl font-black ${stat.color} mb-1`}>{stat.value}</span>
              <span className="relative text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <Services />

      <div className="bg-slate-50 pb-16 text-center">
        <Link to="/services" className="secondary-button px-5 py-3 items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
          {t('home.seeAllServices')} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <Testimonials />

      <section className="py-16 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 premium-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="display-font text-3xl md:text-5xl font-bold mb-6 uppercase">
            {t('home.honestRepairs')} <span className="text-accent">{t('home.transparentPricing')}</span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-sm leading-relaxed">
            {t('home.helpChoose')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={onBookClick} className="premium-button px-8 py-4 font-black uppercase text-xs tracking-widest active:scale-95">
              <Phone className="w-4 h-4" /> {t('home.getFreeQuote')}
            </button>
            <a href={`https://wa.me/${SHOP_INFO.whatsapp}`} className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-md font-black uppercase text-xs tracking-widest hover:bg-slate-100 transition-all shadow-lg">
              <MessageCircle className="w-4 h-4 text-success" /> {t('home.whatsappAjaz')}
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
