import { motion } from "motion/react";
import { CheckCircle, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 900);
  };

  const contactItems = [
    {
      label: t('contact.info.call'),
      value: SHOP_INFO.phone,
      href: `tel:${SHOP_INFO.phone}`,
      icon: <Phone className="w-6 h-6" />,
      tone: "text-primary bg-primary/10",
    },
    {
      label: t('contact.info.whatsapp'),
      value: t('common.whatsappNow'),
      href: `https://wa.me/${SHOP_INFO.whatsapp}`,
      icon: <MessageCircle className="w-6 h-6" />,
      tone: "text-success bg-success/10",
    },
    {
      label: t('contact.info.location'),
      value: SHOP_INFO.location,
      href: SHOP_INFO.mapsUrl,
      icon: <MapPin className="w-6 h-6" />,
      tone: "text-premium bg-premium/10",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-14 lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-eyebrow mb-5"
            >
              {t('contact.subtitle')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-font text-4xl md:text-6xl font-bold text-slate-950 mb-7 uppercase leading-tight"
            >
              {t('contact.title')}
            </motion.h2>
            <p className="text-slate-500 text-lg mb-10 max-w-md leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="premium-card p-5 flex items-start gap-5 group"
                >
                  <div className={`relative w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${item.tone}`}>
                    {item.icon}
                  </div>
                  <div className="relative min-w-0">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm sm:text-base font-black text-secondary leading-snug break-words">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[480px] flex flex-col items-center justify-center text-center p-8 premium-card"
              >
                <div className="relative w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="relative text-xl font-black text-secondary mb-2 uppercase tracking-wider">{t('common.success')}</h3>
                <p className="relative text-slate-500 mb-8 text-sm">We will get back to you inside 1 hour.</p>
                <button
                  onClick={() => setFormState("idle")}
                  className="relative secondary-button px-6 py-3 font-black uppercase text-xs tracking-widest"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-card p-6 sm:p-8 flex flex-col gap-5 bg-white"
              >
                <div className="relative grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-[2px]">{t('contact.form.fullName')}</label>
                    <input
                      required
                      type="text"
                      placeholder={t('contact.form.placeholderName')}
                      className="w-full px-4 py-3 rounded-md border border-border-vibrant outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-secondary text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-[2px]">{t('contact.form.mobile')}</label>
                    <input
                      required
                      type="tel"
                      placeholder={t('contact.form.placeholderPhone')}
                      className="w-full px-4 py-3 rounded-md border border-border-vibrant outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-secondary text-sm"
                    />
                  </div>
                </div>
                <div className="relative space-y-1.5">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-[2px]">{t('contact.form.message')}</label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t('contact.form.placeholderMessage')}
                    className="w-full px-4 py-3 rounded-md border border-border-vibrant outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-secondary text-sm resize-none"
                  />
                </div>
                <button
                  disabled={formState === "submitting"}
                  className="relative premium-button w-full py-4 font-black text-sm uppercase tracking-widest disabled:opacity-50 active:scale-[0.98]"
                >
                  {formState === "submitting" ? t('common.sending') : t('common.send')}
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            )}
          </div>
        </div>

        <div className="mt-20 rounded-lg overflow-hidden shadow-2xl border border-slate-200 h-[560px] relative group bg-slate-100">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(SHOP_INFO.location)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location"
          />
          <div className="absolute top-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md rounded-lg max-w-sm shadow-2xl border border-slate-200 transform group-hover:-translate-y-1 transition-transform overflow-hidden">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="font-black text-secondary text-xs uppercase tracking-widest">{t('contact.info.visitUs')}</p>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">{SHOP_INFO.location}</p>
              <a
                href={SHOP_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all"
              >
                {t('contact.info.getDirections')} <Send className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
