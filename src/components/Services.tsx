import { motion } from "motion/react";
import { Smartphone, Watch, Headphones, Zap, ShieldCheck, Clock, Settings, HardDrive, Battery, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      icon: <Smartphone className="w-8 h-8" />,
      features: [t('hero.repairs'), "Original Parts", "Quick Service"],
      color: "bg-blue-500",
    },
    {
      title: t('services.watch.title'),
      description: t('services.watch.desc'),
      icon: <Watch className="w-8 h-8" />,
      features: ["Battery Change", "Strap Repair", "Glass Fix"],
      color: "bg-slate-700",
    },
    {
      title: t('services.accessories.title'),
      description: t('services.accessories.desc'),
      icon: <Headphones className="w-8 h-8" />,
      features: ["Chargers", "Cables", "Covers"],
      color: "bg-purple-500",
    },
    {
      title: t('services.audio.title'),
      description: t('services.audio.desc'),
      icon: <Settings className="w-8 h-8" />,
      features: ["Neckbands", "Earphones", "Bluetooth"],
      color: "bg-emerald-500",
    },
  ];
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="vibrant-card p-6 rounded-lg hover:border-primary/50 transition-all flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">
                {service.icon}
              </div>
              
              <h3 className="text-sm font-extrabold text-secondary uppercase tracking-wider mb-2">
                {service.title}
              </h3>
              
              <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-1 mt-auto">
                {service.features.map(f => (
                  <span key={f} className="text-[9px] font-bold uppercase tracking-tighter bg-slate-100 text-slate-400 px-2 py-0.5 rounded">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quick Highlights */}
        <div className="mt-20 bg-secondary px-8 py-10 rounded-xl grid md:grid-cols-3 gap-8 text-center md:text-left border-b-3 border-primary shadow-xl">
          <div className="space-y-3">
            <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center text-primary mx-auto md:mx-0">
              <ShieldCheck className="w-5 h-5 font-black" />
            </div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest">15+ {t('hero.years')} {t('common.experience')}</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed uppercase tracking-tighter">Serving the local community with honesty and expert technical skill since 2009.</p>
          </div>
          <div className="space-y-3">
            <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center text-accent mx-auto md:mx-0">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest">Quick Turnaround</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed uppercase tracking-tighter">We value your time. Most repairs like screen or battery swaps are done in 1 hour.</p>
          </div>
          <div className="space-y-3">
            <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center text-success mx-auto md:mx-0">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest">Best Price</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed uppercase tracking-tighter">Get premium repair service without breaking the bank. Transparent pricing always.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
