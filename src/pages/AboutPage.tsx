import About from '../components/About';
import { motion } from 'motion/react';

export default function AboutPage() {
  const milestones = [
    { title: "Founded", val: "2009", color: "bg-primary" },
    { title: "Speciality", val: "Repair", color: "bg-secondary" },
    { title: "Support", val: "AI Assist", color: "bg-success" },
    { title: "Success", val: "99.9%", color: "bg-premium" },
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
          <p className="section-eyebrow mx-auto mb-5">Our Legacy</p>
          <h1 className="display-font text-4xl md:text-6xl font-bold uppercase mb-6">
            Built on <span className="text-accent">Trust</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed font-medium">
            AL-MADINA TELECOM is a decade and a half of technical mastery and community service led by Ajaz Ahmad.
          </p>
        </div>
      </section>

      <About />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <h2 className="display-font text-3xl md:text-4xl font-bold text-secondary uppercase leading-tight">
              The Story of <br /><span className="text-primary">Ajaz Ahmad</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Starting in 2009, Ajaz saw the rapid growth of mobile technology in India. He realized that while everyone had a phone, very few places offered honest, deep-level technical repair.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Today, he is known across the region for careful diagnosis and practical repair guidance. The philosophy is simple: explain clearly, fix cleanly, and support the customer after delivery.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {milestones.map((box, i) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`${box.color} p-7 rounded-lg text-white shadow-xl`}
              >
                <p className="text-[9px] font-black uppercase tracking-widest opacity-70 mb-2">{box.title}</p>
                <p className="text-xl font-black">{box.val}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
