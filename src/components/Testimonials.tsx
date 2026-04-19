import { motion } from "motion/react";
import { Star, MessageCircle, Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const reviews = [
  {
    name: "Mohammad Irfan",
    role: "Regular Customer",
    content: "Best shop in town for mobile repairs! They fixed my broken iPhone screen in just 45 minutes. Highly recommended and very professional.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Local Resident",
    content: "The technician at AL Madina is extremely skilled. I had a motherboard issue that others couldn't fix, but they did it perfectly at a fair price.",
    rating: 5,
  },
  {
    name: "Shakeel Ahmed",
    role: "Business Owner",
    content: "Great collection of accessories. I always buy my chargers and neckbands from here. 15+ years of trust really shows in their service.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            {t('nav.about')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
          >
            {t('testimonials.title')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="vibrant-card p-8 rounded-lg flex flex-col relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
              
              <div className="flex gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-slate-600 text-sm italic mb-8 flex-grow leading-relaxed">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-3">
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
