import React from 'react';
import Services from '../components/Services';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Clock, Zap, Smartphone, Watch, Headphones } from 'lucide-react';
import { SHOP_INFO } from '../constants';

export default function ServicesPage() {
  const deepServices = [
    {
       title: "Display & Glass",
       desc: "We fix shattered screens, bleeding LCDs, and cracked front/back glass using original adhesive and high-grade replacements.",
       icon: <Smartphone className="w-6 h-6" />
    },
    {
       title: "Battery & Power",
       desc: "Quick battery health diagnostic and replacement for all major brands. We also fix charging port issues and power IC failures.",
       icon: <Zap className="w-6 h-6" />
    },
    {
       title: "Watch Servicing",
       desc: "Precision repair for analog and smart watches. From battery changes to complex mechanical fixes.",
       icon: <Watch className="w-6 h-6" />
    },
    {
       title: "Audio & Speaker",
       desc: "Solving distorted sound, broken ear-speakers, and neckband pairing issues. We carry a wide range of audio repair parts.",
       icon: <Headphones className="w-6 h-6" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-bg"
    >
      <div className="bg-secondary py-20 text-white relative overflow-hidden mb-20 border-b-3 border-primary">
         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-bold tracking-[4px] uppercase text-xs mb-4">Precision Repair</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Expert Service <span className="text-accent underline decoration-primary">Catalog</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              From minor screen chips to complex motherboard micro-soldering, our {SHOP_INFO.experience} years of experience covers everything your tech needs to survive.
            </p>
         </div>
         <div className="absolute top-0 left-0 w-full h-full opacity-10 flex justify-center items-center pointer-events-none">
            <Smartphone className="w-96 h-96 transform rotate-12" />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
         <Services />
         
         <div className="mt-24">
            <div className="grid md:grid-cols-2 gap-8">
               {deepServices.map((s, i) => (
                 <div key={i} className="vibrant-card p-10 rounded-xl flex gap-6 items-start">
                    <div className="p-4 bg-primary text-white rounded-lg shadow-lg flex-shrink-0">
                       {s.icon}
                    </div>
                    <div>
                       <h3 className="text-lg font-black text-secondary uppercase tracking-tight mb-2">{s.title}</h3>
                       <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-tighter">{s.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Quality Assurance */}
         <div className="mt-20 p-10 bg-white border border-border-vibrant rounded-xl flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="md:w-1/3">
               <h2 className="text-2xl font-black text-secondary leading-tight uppercase tracking-tight">Our Quality Guarantee</h2>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
               <div className="space-y-2">
                  <ShieldCheck className="w-6 h-6 text-primary mx-auto md:mx-0" />
                  <p className="font-black text-[10px] uppercase tracking-widest text-secondary">Original Parts</p>
               </div>
               <div className="space-y-2">
                  <Clock className="w-6 h-6 text-accent mx-auto md:mx-0" />
                  <p className="font-black text-[10px] uppercase tracking-widest text-secondary">1-Hour Fix</p>
               </div>
               <div className="space-y-2">
                  <Settings className="w-6 h-6 text-success mx-auto md:mx-0" />
                  <p className="font-black text-[10px] uppercase tracking-widest text-secondary">Post-Fix Support</p>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
