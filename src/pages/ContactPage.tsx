import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'motion/react';
import { SHOP_INFO } from '../constants';
import { Phone, MessageCircle, MapPin, Clock, Calendar } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-bg"
    >
      <div className="bg-bg py-20">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
               <p className="text-primary font-bold tracking-[8px] uppercase text-[10px] mb-4">Location & Help</p>
               <h1 className="text-4xl md:text-7xl font-black text-secondary uppercase tracking-tight leading-none mb-6">Let's <span className="text-primary italic">Connect.</span></h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
               <div className="vibrant-card p-10 rounded-xl text-center border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-6">
                     <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-secondary uppercase tracking-widest text-[10px] mb-2">Voice Call</h3>
                  <p className="text-lg font-black text-secondary">{SHOP_INFO.phone}</p>
               </div>
               <div className="vibrant-card p-10 rounded-xl text-center border-b-4 border-success">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center text-success mx-auto mb-6">
                     <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-secondary uppercase tracking-widest text-[10px] mb-2">WhatsApp</h3>
                  <p className="text-lg font-black text-secondary">Instant Response</p>
               </div>
               <div className="vibrant-card p-10 rounded-xl text-center border-b-4 border-accent">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mx-auto mb-6">
                     <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-secondary uppercase tracking-widest text-[10px] mb-2">Work Timings</h3>
                  <p className="text-lg font-black text-secondary">10 AM - 9 PM</p>
               </div>
            </div>

            <Contact />
         </div>
      </div>
    </motion.div>
  );
}
