import { motion } from "motion/react";
import { Phone, MessageCircle, ChevronRight, Smartphone, ShieldCheck, Clock } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 min-h-[600px] flex items-center overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-md text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3 h-3" />
            <span>{t('hero.tagline')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-secondary leading-tight mb-6 uppercase tracking-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={onBookClick}
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-md text-sm font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
            >
              {t('hero.cta')}
            </button>
            <div className="flex gap-3">
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="flex-1 sm:flex-none px-6 py-3.5 bg-white hover:bg-slate-50 text-secondary border border-border-vibrant rounded-md font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{t('hero.call')}</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-8 py-6 border-t border-border-vibrant">
            <div className="text-center md:text-left">
              <span className="block text-2xl font-black text-primary">15+</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('hero.years')}</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-2xl font-black text-primary">10k+</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('hero.repairs')}</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-2xl font-black text-primary">5/5</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('hero.rating')}</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative lg:h-[550px]"
        >
          <div className="relative z-10 h-full vibrant-gradient p-1 rounded-xl shadow-2xl flex flex-col justify-center text-white overflow-hidden">
             <div className="relative z-10 w-full h-full rounded-lg overflow-hidden border-2 border-white/30 bg-secondary">
                <img
                  src="input_file_2.png"
                  alt="Al-Madina Telecom Shop Front"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
             {/* Overlay Badge */}
             <div className="absolute top-8 right-8 bg-primary text-white p-4 rounded-xl shadow-2xl border border-white/20 backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-[3px] opacity-70">Experience</p>
                <p className="text-2xl font-black">{SHOP_INFO.experience} Years</p>
             </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
