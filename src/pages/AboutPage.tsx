import React from 'react';
import About from '../components/About';
import { motion } from 'motion/react';
import { SHOP_INFO } from '../constants';
import { Award, ShieldCheck, MapPin, Phone } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-bg"
    >
      <div className="bg-secondary py-20 text-white relative overflow-hidden border-b-3 border-primary">
         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-bold tracking-[6px] uppercase text-[10px] mb-4">Our Legacy</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Built on <span className="text-accent underline decoration-primary">Trust.</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed font-medium">
               AL-MADINA TELECOM is more than a repair shop. It's a decade and a half of technical mastery and community service led by Ajaz Ahmad.
            </p>
         </div>
      </div>

      <div className="py-20">
         <About />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <h2 className="text-3xl font-black text-secondary uppercase tracking-tight leading-none">The Story of <br /><span className="text-primary">Ajaz Ahmad</span></h2>
               <p className="text-slate-500 text-sm leading-relaxed">
                  Starting in 2009, Ajaz saw the rapid growth of mobile technology in India. He realized that while everyone had a phone, very few places offered honest, deep-level technical repair. He opened AL-MADINA with a single desk and a soldering iron. 
               </p>
               <p className="text-slate-500 text-sm leading-relaxed">
                  Today, he is known across the region for his ability to fix what others claim is "dead". His philosophy is simple: Fix it once, fix it right, and use the best parts available in the market.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                  { title: "Founded", val: "2009", color: "bg-primary" },
                  { title: "Certification", val: "Expert", color: "bg-accent" },
                  { title: "Team", val: "AIAssist", color: "bg-success" },
                  { title: "Success", val: "99.9%", color: "bg-secondary" }
               ].map((box, i) => (
                  <div key={i} className={`${box.color} p-8 rounded-xl text-white`}>
                     <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-2">{box.title}</p>
                     <p className="text-xl font-black">{box.val}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </motion.div>
  );
}
