import Contact from '../components/Contact';
import { motion } from 'motion/react';
import { SHOP_INFO } from '../constants';
import { Clock, MessageCircle, Phone } from 'lucide-react';

export default function ContactPage() {
  const cards = [
    { title: "Voice Call", value: SHOP_INFO.phone, icon: <Phone className="w-5 h-5" />, border: "border-primary", tone: "text-primary bg-primary/10" },
    { title: "WhatsApp", value: "Instant Response", icon: <MessageCircle className="w-5 h-5" />, border: "border-success", tone: "text-success bg-success/10" },
    { title: "Work Timings", value: "10 AM - 9 PM", icon: <Clock className="w-5 h-5" />, border: "border-accent", tone: "text-accent bg-accent/10" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-bg"
    >
      <section className="bg-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 premium-grid opacity-40" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="section-eyebrow mx-auto mb-5">Location & Help</p>
            <h1 className="display-font text-4xl md:text-7xl font-bold text-secondary uppercase leading-none mb-6">
              Let's <span className="text-primary">Connect</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`premium-card p-7 text-center border-b-4 ${card.border}`}
              >
                <div className={`relative w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 ${card.tone}`}>
                  {card.icon}
                </div>
                <h3 className="relative font-extrabold text-secondary uppercase tracking-widest text-[10px] mb-2">{card.title}</h3>
                <p className="relative text-lg font-black text-secondary">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </motion.div>
  );
}
