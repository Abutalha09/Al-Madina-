import Services from '../components/Services';
import { motion } from 'motion/react';
import { Clock, Headphones, Settings, ShieldCheck, Smartphone, Watch, Zap } from 'lucide-react';
import { SHOP_INFO } from '../constants';

export default function ServicesPage() {
  const deepServices = [
    {
      title: "Display & Glass",
      desc: "Shattered screens, bleeding LCDs, and cracked glass are handled with clean fitting and high-grade replacements.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Battery & Power",
      desc: "Battery health checks, charging port fixes, and power issue diagnosis for all major smartphone brands.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Watch Servicing",
      desc: "Battery changes, strap work, glass fixes, and careful servicing for analog and smart watches.",
      icon: <Watch className="w-6 h-6" />,
    },
    {
      title: "Audio & Speaker",
      desc: "Speaker distortion, earpiece issues, neckband pairing, and audio accessory support.",
      icon: <Headphones className="w-6 h-6" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-bg"
    >
      <section className="bg-secondary py-20 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 premium-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <p className="section-eyebrow mx-auto mb-5">Precision Repair</p>
          <h1 className="display-font text-4xl md:text-6xl font-bold uppercase mb-6">
            Expert Service <span className="text-accent">Catalog</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            From minor screen chips to complex diagnostics, our {SHOP_INFO.experience} years of experience covers the everyday tech support your device needs.
          </p>
        </div>
      </section>

      <Services />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {deepServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="premium-card p-7 flex gap-5 items-start"
            >
              <div className="relative p-4 bg-primary text-white rounded-lg shadow-lg flex-shrink-0">
                {service.icon}
              </div>
              <div className="relative">
                <h3 className="text-lg font-black text-secondary uppercase tracking-wider mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 premium-card p-8 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <div className="relative md:w-1/3">
            <h2 className="display-font text-2xl md:text-3xl font-bold text-secondary leading-tight uppercase">Our Quality Guarantee</h2>
          </div>
          <div className="relative flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <ShieldCheck className="w-6 h-6 text-primary mx-auto md:mx-0" />
              <p className="font-black text-[10px] uppercase tracking-widest text-secondary">Quality Parts</p>
            </div>
            <div className="space-y-2">
              <Clock className="w-6 h-6 text-accent mx-auto md:mx-0" />
              <p className="font-black text-[10px] uppercase tracking-widest text-secondary">Fast Delivery</p>
            </div>
            <div className="space-y-2">
              <Settings className="w-6 h-6 text-success mx-auto md:mx-0" />
              <p className="font-black text-[10px] uppercase tracking-widest text-secondary">Post-Fix Support</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
