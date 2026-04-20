import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const reviews = t('testimonials.reviews');

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
      <div className="absolute inset-0 premium-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow mx-auto mb-5"
          >
            {t('nav.about')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-font text-4xl md:text-5xl font-bold text-slate-950 uppercase"
          >
            {t('testimonials.title')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="premium-card p-7 flex flex-col min-h-[300px]"
            >
              <Quote className="relative w-8 h-8 text-primary/20 mb-5" />

              <div className="relative flex gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-premium text-premium" />
                ))}
              </div>

              <p className="relative text-slate-600 text-sm mb-8 flex-grow leading-relaxed">
                "{review.content}"
              </p>

              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary text-white rounded-md flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
