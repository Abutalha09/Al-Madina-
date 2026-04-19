import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle } from "lucide-react";
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
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              {t('contact.subtitle')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tight leading-tight"
            >
              {t('contact.title')}
            </motion.h2>
            <p className="text-slate-500 text-lg mb-10 max-w-md">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              <a 
                href={`tel:${SHOP_INFO.phone}`}
                className="flex items-center gap-6 group p-6 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
              >
                <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('contact.info.call')}</p>
                   <p className="text-xl font-bold text-slate-900">{SHOP_INFO.phone}</p>
                </div>
              </a>

              <a 
                href={`https://wa.me/${SHOP_INFO.whatsapp}`}
                className="flex items-center gap-6 group p-6 rounded-3xl hover:bg-green-50 border border-transparent hover:border-green-100 transition-all"
              >
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('contact.info.whatsapp')}</p>
                   <p className="text-xl font-bold text-slate-900">{t('common.whatsappNow')}</p>
                </div>
              </a>

              <a 
                href={SHOP_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group p-6 rounded-3xl border border-slate-100 hover:bg-slate-50 transition-all"
              >
                <div className="w-14 h-14 bg-slate-100 text-slate-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('contact.info.location')}</p>
                   <p className="text-sm font-bold text-slate-900 leading-tight mt-1">{SHOP_INFO.location}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            {formState === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 vibrant-card rounded-xl"
              >
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-2 uppercase tracking-tight">{t('common.success')}</h3>
                <p className="text-slate-500 mb-8 text-sm">We'll get back to you inside 1 hour.</p>
                <button 
                  onClick={() => setFormState("idle")}
                  className="text-primary font-extrabold uppercase text-xs tracking-widest border-b-2 border-primary"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                className="vibrant-card p-10 rounded-xl flex flex-col gap-5 bg-white shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-[2px]">{t('contact.form.fullName')}</label>
                    <input 
                      required
                      type="text" 
                      placeholder={t('contact.form.placeholderName')}
                      className="w-full px-4 py-3 rounded-md border border-border-vibrant outline-none focus:border-primary transition-all text-secondary text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-[2px]">{t('contact.form.mobile')}</label>
                    <input 
                      required
                      type="tel" 
                      placeholder={t('contact.form.placeholderPhone')}
                      className="w-full px-4 py-3 rounded-md border border-border-vibrant outline-none focus:border-primary transition-all text-secondary text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-black text-secondary uppercase tracking-[2px]">{t('contact.form.message')}</label>
                   <textarea 
                     required
                     rows={4}
                     placeholder={t('contact.form.placeholderMessage')}
                     className="w-full px-4 py-3 rounded-md border border-border-vibrant outline-none focus:border-primary transition-all text-secondary text-sm resize-none"
                   ></textarea>
                </div>
                <button 
                  disabled={formState === "submitting"}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-md font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50 active:scale-[0.98]"
                >
                  {formState === "submitting" ? t('common.sending') : t('common.send')}
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            )}
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-20 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-100 h-[600px] relative group">
           <iframe 
            src={`https://www.google.com/maps?q=${encodeURIComponent(SHOP_INFO.location)}&output=embed`}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location"
           ></iframe>
           <div className="absolute top-6 left-6 p-0 bg-white/95 backdrop-blur-md rounded-xl max-w-sm shadow-2xl border border-slate-100 transform group-hover:-translate-y-1 transition-transform overflow-hidden">
              <div className="w-full h-48 overflow-hidden bg-secondary">
                 <img 
                   src="input_file_4.png" 
                   alt="Al-Madina Telecom Shop Location" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <p className="font-black text-secondary text-xs uppercase tracking-widest">{t('contact.info.visitUs')}</p>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed mb-4">{SHOP_INFO.location}</p>
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
