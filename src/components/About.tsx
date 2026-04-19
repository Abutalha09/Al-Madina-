import { useState } from "react";
import { motion } from "motion/react";
import { Award, CheckCircle2, Clock, MapPin, ShieldCheck, User, Users } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [ownerPhotoFailed, setOwnerPhotoFailed] = useState(false);

  const stats = [
    { label: `${t('hero.years')} ${t('common.experience')}`, value: "15+", icon: <Clock className="w-5 h-5" /> },
    { label: "Happy Customers", value: "20k+", icon: <Users className="w-5 h-5" /> },
    { label: t('hero.repairs'), value: "50k+", icon: <User className="w-5 h-5" /> },
    { label: "Service Quality", value: "100%", icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-secondary text-white overflow-hidden relative">
      <div className="absolute inset-0 premium-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="section-eyebrow mb-5">{t('about.subtitle')}</p>
            <h2 className="display-font text-4xl md:text-6xl font-bold mb-8 leading-tight uppercase">
              {t('about.title')}
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {t('about.bio')}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
                >
                  <div className="flex items-center gap-2 text-accent mb-3">
                    {stat.icon}
                    <span className="text-2xl font-black">{stat.value}</span>
                  </div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 flex items-start gap-5">
              <div className="bg-primary/10 text-accent p-3 rounded-lg flex-shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-black mb-1 uppercase tracking-wider">Skilled Technician</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our repair flow focuses on proper inspection, clean fitting, and clear communication before the final quote.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="premium-card p-5 bg-white text-secondary"
          >
            <div className="relative rounded-lg overflow-hidden bg-slate-950 text-white min-h-[520px]">
              <div className="absolute inset-0 premium-grid opacity-25" />
              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">Founder Profile</p>
                    <h3 className="display-font text-3xl font-bold mt-1">{SHOP_INFO.owner}</h3>
                  </div>
                  <div className="h-14 w-14 rounded-lg border border-white/20 bg-white/10 grid place-items-center text-accent font-black">
                    AA
                  </div>
                </div>

                <div className="mx-auto mb-10 w-full max-w-[320px] rounded-lg border border-white/10 bg-gradient-to-b from-slate-800 to-slate-950 shadow-2xl overflow-hidden">
                  <div className="relative aspect-[4/5] bg-slate-900">
                    {!ownerPhotoFailed ? (
                      <img
                        src={SHOP_INFO.ownerImage}
                        alt={`${SHOP_INFO.owner} founder of ${SHOP_INFO.name}`}
                        className="h-full w-full object-cover"
                        onError={() => setOwnerPhotoFailed(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary via-slate-900 to-primary-dark px-8 text-center">
                        <div className="mb-5 h-20 w-20 rounded-lg border border-white/15 bg-white/10 flex items-center justify-center text-accent">
                          <User className="w-10 h-10" />
                        </div>
                        <p className="display-font text-3xl font-bold uppercase">{SHOP_INFO.owner}</p>
                        <p className="mt-2 text-xs font-black uppercase tracking-widest text-accent">{t('about.ownerRole')}</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-slate-950/82 backdrop-blur-md p-4">
                      <p className="display-font text-xl font-bold">{SHOP_INFO.owner}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-accent">{t('about.ownerRole')}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Device inspection before repair",
                    "Customer approval before final work",
                    "Clean delivery with support guidance",
                  ].map((item) => (
                    <div key={item} className="rounded-lg bg-white/[0.06] border border-white/10 p-4 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                      <p className="text-sm font-bold text-white/80">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.06] p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400 leading-relaxed">{SHOP_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
