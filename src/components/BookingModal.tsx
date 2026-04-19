import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, CheckCircle, Clock } from "lucide-react";
import React, { useState } from "react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    device: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // In a real app, you'd send this to a backend or WhatsApp
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hello AL Madina Mobile Shop! I'd like to book a repair appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDevice: ${formData.device}\nIssue: ${formData.issue}`;
    window.open(`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden rounded-lg border border-slate-200"
          >
            <div className="flex justify-between items-center bg-secondary px-6 py-4 border-b-3 border-primary">
              <h3 className="text-sm font-black text-white uppercase tracking-[2px] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                {t('hero.cta')}
              </h3>
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-8">
              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-secondary uppercase tracking-widest">{t('contact.form.fullName')}</label>
                      <input
                        required
                        type="text"
                        placeholder={t('contact.form.placeholderName')}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-200 focus:border-primary outline-none transition-all text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-secondary uppercase tracking-widest">{t('contact.form.mobile')}</label>
                      <input
                        required
                        type="tel"
                        placeholder={t('contact.form.placeholderPhone')}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-200 focus:border-primary outline-none transition-all text-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-widest">{t('contact.form.device')}</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. iPhone 13 / Screen Replacement"
                      className="w-full px-4 py-2.5 rounded-md border border-slate-200 focus:border-primary outline-none transition-all text-sm"
                      value={formData.device}
                      onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-widest">{t('contact.form.message')}</label>
                    <textarea
                      required
                      rows={3}
                      placeholder={t('contact.form.placeholderMessage')}
                      className="w-full px-4 py-2.5 rounded-md border border-slate-200 focus:border-primary outline-none transition-all text-sm resize-none"
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="premium-button w-full py-3.5 text-sm font-black uppercase tracking-widest active:scale-95"
                    >
                      {t('hero.cta')}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="text-xl font-black text-secondary mb-2 uppercase tracking-wider">{t('common.success')}</h4>
                  <p className="text-slate-500 mb-8 text-sm max-w-sm mx-auto">
                    We've received your data. Click below to confirm via WhatsApp for instant support.
                  </p>
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-success hover:bg-success/90 text-white py-4 rounded-md text-sm font-black uppercase tracking-widest flex justify-center items-center gap-2 transition-all shadow-md"
                  >
                    {t('common.whatsappNow')}
                  </button>
                </motion.div>
              )}
            </div>
            
            <div className="bg-bg px-8 py-3 flex items-center justify-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> 10 AM - 9 PM
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <Calendar className="w-3.5 h-3.5" /> Open All Days
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
