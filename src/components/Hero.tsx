import { motion } from "motion/react";
import {
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  const { t } = useLanguage();
  const diagnostics = [
    { label: "Display", value: "98%", color: "bg-primary" },
    { label: "Battery", value: "Good", color: "bg-success" },
    { label: "Board", value: "Stable", color: "bg-premium" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pb-20 min-h-[720px] flex items-center overflow-hidden bg-bg">
      <div className="premium-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-secondary/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-[1.03fr_0.97fr] gap-12 xl:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-eyebrow mb-6">
            <ShieldCheck className="w-3 h-3" />
            <span>{t('hero.tagline')}</span>
          </div>
          
          <h1 className="display-font text-4xl md:text-6xl xl:text-7xl font-bold text-secondary leading-[1.04] mb-6 uppercase">
            {t('hero.title')}
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={onBookClick}
              className="premium-button px-8 py-4 text-sm font-black uppercase tracking-widest active:scale-95"
            >
              {t('hero.cta')} <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex gap-3">
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="secondary-button flex-1 sm:flex-none px-6 py-4 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{t('hero.call')}</span>
              </a>
              <a
                href={`https://wa.me/${SHOP_INFO.whatsapp}`}
                className="secondary-button flex-1 sm:flex-none px-6 py-4 font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 text-success" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 max-w-xl">
            <div className="premium-card p-4 text-center md:text-left">
              <span className="relative block text-2xl font-black text-primary">{SHOP_INFO.experience}</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('hero.years')}</span>
            </div>
            <div className="premium-card p-4 text-center md:text-left">
              <span className="relative block text-2xl font-black text-primary">50k+</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('hero.repairs')}</span>
            </div>
            <div className="premium-card p-4 text-center md:text-left">
              <span className="relative block text-2xl font-black text-primary">5/5</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('hero.rating')}</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative min-h-[560px]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="premium-dark-card h-full min-h-[560px] p-5 sm:p-7 text-white"
          >
            <div className="relative z-10 h-full rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="absolute inset-0 premium-grid opacity-20" />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-black">Live Repair Desk</p>
                  <p className="text-sm text-white/60">Diagnostics in progress</p>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-success/10 px-3 py-1.5 text-success text-[10px] font-black uppercase tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  Open
                </div>
              </div>

              <div className="relative z-10 grid md:grid-cols-[0.9fr_1.1fr] gap-6 p-5 sm:p-7 items-center h-[calc(100%-73px)]">
                <div className="relative mx-auto w-[210px] max-w-full">
                  <div className="absolute -left-8 top-12 premium-card p-3 text-secondary hidden sm:block">
                    <div className="relative flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Fast Fix</p>
                        <p className="text-xs font-black">Same Day</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-[2rem] border-[10px] border-slate-950 bg-slate-900 p-2 shadow-2xl shadow-black/40">
                    <div className="relative aspect-[9/18] rounded-[1.45rem] overflow-hidden bg-gradient-to-b from-slate-800 via-slate-950 to-slate-900 border border-white/10">
                      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
                      <div className="absolute inset-x-5 top-14 h-px bg-accent/60 animate-scan shadow-[0_0_24px_rgba(56,189,248,0.75)]" />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="w-24 h-24 rounded-lg border border-accent/25 bg-accent/10 grid place-items-center">
                          <Smartphone className="w-12 h-12 text-accent" />
                        </div>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 space-y-2">
                        {diagnostics.map((item, index) => (
                          <div key={item.label} className="rounded-md bg-white/10 border border-white/10 p-2">
                            <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-white/60 mb-1">
                              <span>{item.label}</span>
                              <span>{item.value}</span>
                            </div>
                            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: index === 0 ? "98%" : index === 1 ? "76%" : "88%" }}
                                transition={{ duration: 1.2, delay: 0.35 + index * 0.15 }}
                                className={`h-full ${item.color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-10 bottom-16 premium-card p-3 text-secondary hidden sm:block">
                    <div className="relative flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Parts</p>
                        <p className="text-xs font-black">Quality Checked</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: <Wrench className="w-5 h-5" />, title: "Screen, battery, speaker", text: "Careful replacement with clean fitting." },
                    { icon: <Cpu className="w-5 h-5" />, title: "Board diagnostics", text: "Deep checks before quoting final repair." },
                    { icon: <BatteryCharging className="w-5 h-5" />, title: "Accessories desk", text: "Chargers, cables, covers, glass, audio gear." },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.1 }}
                      className="rounded-lg border border-white/10 bg-white/[0.06] p-4"
                    >
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-md bg-primary/10 text-accent flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-wider">{item.title}</h3>
                          <p className="text-xs text-white/60 mt-1 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
