import { motion } from "motion/react";
import { CheckCircle2, Clock, Headphones, Settings, ShieldCheck, Smartphone, Watch } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      icon: <Smartphone className="w-8 h-8" />,
      features: t('services.mobile.features'),
      tone: "text-primary bg-primary/10",
    },
    {
      title: t('services.watch.title'),
      description: t('services.watch.desc'),
      icon: <Watch className="w-8 h-8" />,
      features: t('services.watch.features'),
      tone: "text-secondary bg-slate-100",
    },
    {
      title: t('services.accessories.title'),
      description: t('services.accessories.desc'),
      icon: <Headphones className="w-8 h-8" />,
      features: t('services.accessories.features'),
      tone: "text-premium bg-premium/10",
    },
    {
      title: t('services.audio.title'),
      description: t('services.audio.desc'),
      icon: <Settings className="w-8 h-8" />,
      features: t('services.audio.features'),
      tone: "text-success bg-success/10",
    },
  ];
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow mx-auto mb-5"
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-font text-4xl md:text-5xl font-bold text-slate-950 mb-5 uppercase"
          >
            {t('services.title')}
          </motion.h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-sm leading-relaxed">
            Clean diagnosis, transparent quotation, and reliable repair workflow for everyday devices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="premium-card p-6 flex flex-col min-h-[300px]"
            >
              <div className={`relative w-14 h-14 mb-6 rounded-lg flex items-center justify-center ${service.tone}`}>
                {service.icon}
              </div>
              
              <h3 className="relative text-sm font-extrabold text-secondary uppercase tracking-wider mb-3">
                {service.title}
              </h3>
              
              <p className="relative text-sm text-slate-500 leading-relaxed mb-5">
                {service.description}
              </p>
              
              <div className="relative flex flex-wrap gap-2 mt-auto">
                {service.features.map(f => (
                  <span key={f} className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quick Highlights */}
        <div className="mt-16 premium-dark-card px-6 md:px-8 py-8 grid md:grid-cols-3 gap-6 text-center md:text-left relative z-10">
          <div className="relative space-y-3">
            <div className="bg-primary/10 w-11 h-11 rounded-lg flex items-center justify-center text-accent mx-auto md:mx-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest">15+ {t('hero.years')} {t('common.experience')}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Serving the local community with honest guidance and skilled technical repairs since 2009.</p>
          </div>
          <div className="relative space-y-3">
            <div className="bg-primary/10 w-11 h-11 rounded-lg flex items-center justify-center text-accent mx-auto md:mx-0">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest">Quick Turnaround</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Most common repairs like screen, battery, and charging fixes are handled quickly after diagnosis.</p>
          </div>
          <div className="relative space-y-3">
            <div className="bg-success/10 w-11 h-11 rounded-lg flex items-center justify-center text-success mx-auto md:mx-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest">Clear Quote</h4>
            <p className="text-slate-400 text-sm leading-relaxed">You get the repair price and part details upfront, before any final work starts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
