import { motion } from "motion/react";
import { ShieldCheck, Users, Award, MapPin, Smartphone, Clock } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t('hero.years') + " " + t('common.experience'), value: "15+", icon: <Clock className="w-5 h-5" /> },
    { label: "Happy Customers", value: "20k+", icon: <Users className="w-5 h-5" /> },
    { label: t('hero.repairs'), value: "50k+", icon: <Smartphone className="w-5 h-5" /> },
    { label: "Service Quality", value: "100%", icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t('about.subtitle')}</p>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tight">
                {t('about.title')}
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed italic">
                {t('about.bio')}
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-2 text-primary mb-2">
                      {stat.icon}
                      <span className="text-3xl font-black">{stat.value}</span>
                    </div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex items-center gap-6">
                 <div className="bg-primary p-4 rounded-2xl flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-white" />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold mb-1">Skilled Technicians</h4>
                   <p className="text-slate-400 text-sm">Our lead technician has {SHOP_INFO.experience} years of deep expertise in smartphone micro-repairing.</p>
                 </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden border-4 border-slate-700 shadow-2xl"
            >
              <img
                src="input_file_0.png"
                alt={SHOP_INFO.owner}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 vibrant-card rounded-md">
                 <p className="text-secondary font-black text-sm">{SHOP_INFO.owner}</p>
                 <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{t('about.ownerRole')}</p>
              </div>
            </motion.div>
            
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary rounded-xl blur-[100px] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
