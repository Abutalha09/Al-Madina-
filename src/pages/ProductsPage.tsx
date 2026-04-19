import Products from '../components/Products';
import { motion } from 'motion/react';
import { Cable, Search, Shield, ShoppingBag, Zap } from 'lucide-react';

export default function ProductsPage() {
  const categories = [
    { title: "Audio Gear", icon: <Zap className="w-5 h-5" />, items: "120+ Products" },
    { title: "Protection", icon: <Shield className="w-5 h-5" />, items: "400+ Covers" },
    { title: "Power", icon: <Cable className="w-5 h-5" />, items: "80+ Cables" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-bg"
    >
      <section className="bg-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 premium-grid opacity-40" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="section-eyebrow mb-5">Premium Shop</p>
              <h1 className="display-font text-4xl md:text-6xl font-bold text-secondary leading-none uppercase">
                Accessories <br /><span className="text-primary">Collection</span>
              </h1>
            </div>
            <div className="secondary-button px-5 py-3 flex items-center gap-3 text-slate-500 font-black text-[10px] uppercase tracking-widest cursor-pointer">
              <Search className="w-3.5 h-3.5" /> Search Items
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="premium-dark-card p-7 text-white group cursor-pointer"
              >
                <div className="relative bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:scale-105 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="relative text-lg font-black uppercase tracking-wider mb-1">{cat.title}</h3>
                <p className="relative text-slate-400 font-bold text-[10px] uppercase tracking-widest">{cat.items}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Products />

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="premium-dark-card p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 premium-grid opacity-20" />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="display-font text-3xl font-bold uppercase leading-tight mb-2">Need Bulk Accessories <br />for your shop?</h3>
            <p className="opacity-80 text-xs font-bold uppercase tracking-widest">Get special wholesale prices on cables and chargers</p>
          </div>
          <button className="relative z-10 bg-white text-primary px-8 py-4 rounded-md font-black uppercase text-xs tracking-widest shadow-xl hover:bg-slate-50 active:scale-95 transition-all inline-flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Contact Wholesale Team
          </button>
        </div>
      </section>
    </motion.div>
  );
}
