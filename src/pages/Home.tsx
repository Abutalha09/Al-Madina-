import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';
import { SHOP_INFO } from '../constants';
import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home({ onBookClick }: { onBookClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero onBookClick={onBookClick} />
      
      {/* Quick Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Expert Repairs", value: "50k+", color: "text-primary" },
            { label: "Happy Clients", value: "20k+", color: "text-accent" },
            { label: "Phone Brands", value: "ALT", color: "text-success" },
            { label: "Parts Warranty", value: "Genuine", color: "text-secondary" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <span className={`block text-3xl font-black ${stat.color} mb-1 group-hover:scale-110 transition-transform`}>{stat.value}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-end mb-12">
          <div>
             <p className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Our Solutions</p>
             <h2 className="text-3xl font-black text-secondary uppercase tracking-tight">Main Services</h2>
          </div>
          <Link to="/services" className="hidden md:flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary hover:gap-4 transition-all">
            See All Services <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <Services />
      </div>

      <Testimonials />

      {/* Trust Banner */}
      <section className="py-16 bg-secondary text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight">
              Honest Repairs. <span className="text-primary">Transparent Pricing.</span>
            </h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-sm">
              We don't just fix phones; we restore your connection to the world. Using the highest quality tools and 15+ years of experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button onClick={onBookClick} className="bg-primary text-white px-8 py-3 rounded-md font-black uppercase text-xs tracking-widest hover:bg-primary-dark transition-all shadow-lg active:scale-95">
                 Get Free Quote
               </button>
               <a href={`https://wa.me/${SHOP_INFO.whatsapp}`} className="bg-white text-secondary px-8 py-3 rounded-md font-black uppercase text-xs tracking-widest hover:bg-slate-100 transition-all shadow-lg">
                 WhatsApp Ajaz
               </a>
            </div>
         </div>
      </section>
    </motion.div>
  );
}
