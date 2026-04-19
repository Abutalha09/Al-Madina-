import React from 'react';
import Products from '../components/Products';
import { motion } from 'motion/react';
import { ShoppingBag, Zap, Shield, Search } from 'lucide-react';

export default function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-bg"
    >
      <div className="bg-bg py-16">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
               <div className="max-w-xl">
                  <p className="text-primary font-bold tracking-[3px] uppercase text-[10px] mb-3">Premium Shop</p>
                  <h1 className="text-4xl md:text-5xl font-black text-secondary leading-none uppercase tracking-tight">Accessories <br /><span className="text-primary">Collection.</span></h1>
               </div>
               <div className="flex gap-4">
                  <div className="px-6 py-2 bg-white border border-border-vibrant rounded-md flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:border-primary">
                     <Search className="w-3.5 h-3.5" /> Search Items
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               {[
                 { title: "Audio Gear", icon: <Zap className="w-5 h-5" />, items: "120+ Products" },
                 { title: "Protection", icon: <Shield className="w-5 h-5" />, items: "400+ Covers" },
                 { title: "Power", icon: <ShoppingBag className="w-5 h-5" />, items: "80+ Cables" }
               ].map((cat, i) => (
                 <div key={i} className="bg-secondary p-8 rounded-xl text-white group cursor-pointer border-b-4 border-transparent hover:border-primary transition-all">
                    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                       {cat.icon}
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-1">{cat.title}</h3>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{cat.items}</p>
                 </div>
               ))}
            </div>

            <Products />

            {/* Bulk Buy Banner */}
            <div className="mt-24 vibrant-gradient p-12 rounded-xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
               <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight mb-2">Need Bulk Accessories <br />for your shop?</h3>
                  <p className="opacity-80 text-xs font-bold uppercase tracking-widest">Get special wholesale prices on cables & chargers</p>
               </div>
               <button className="relative z-10 bg-white text-primary px-10 py-4 rounded-md font-black uppercase text-xs tracking-widest shadow-xl hover:bg-slate-50 active:scale-95 transition-all">
                  Contact Wholesale Team
               </button>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
