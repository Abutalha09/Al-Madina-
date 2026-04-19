import { motion } from "motion/react";
import { ShoppingBag, Star, MessageCircle } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      name: "Premium Wireless Neckband",
      image: "https://picsum.photos/seed/neckband/400/400",
      price: "₹799",
      tag: "Best Seller",
      description: "40 hours playtime, deep bass, water resistant.",
    },
    {
      name: "Fast Charging USB-C Cable",
      image: "https://picsum.photos/seed/usbc/400/400",
      price: "₹249",
      tag: "Essential",
      description: "Military grade braided cable, 60W power delivery.",
    },
    {
      name: "Magnetic Mobile Cover",
      image: "https://picsum.photos/seed/case/400/400",
      price: "₹450",
      tag: "New Arrival",
      description: "Shockproof protection with camera guard.",
    },
    {
      name: "Ultra HD Tempered Glass",
      image: "https://picsum.photos/seed/glass/400/400",
      price: "₹199",
      tag: "Quality",
      description: "9H hardness, smudge-free coating.",
    },
  ];
  const handleOrder = (name: string) => {
    const message = `Hello, I'm interested in buying the ${name}. Is it available?`;
    window.open(`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              {t('products.subtitle')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
            >
              {t('products.title')}
            </motion.h2>
          </div>
          <button className="text-primary font-bold hover:translate-x-2 transition-transform flex items-center gap-2 group">
            Browse All <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="vibrant-card rounded-lg overflow-hidden group hover:border-primary transition-all"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-primary text-white text-[8px] font-black uppercase px-2 py-0.5 rounded">
                  {product.tag}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-secondary text-sm mb-1 uppercase tracking-tight">
                  {product.name}
                </h3>
                <div className="text-primary font-black text-sm mb-3">{product.price}</div>
                
                <button 
                   onClick={() => handleOrder(product.name)}
                   className="w-full bg-slate-50 border border-slate-200 hover:bg-success hover:text-white text-slate-700 py-2 rounded-md font-bold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Order via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Banner */}
        <div className="mt-20 relative rounded-[3rem] overflow-hidden bg-primary p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 transform translate-x-1/4" />
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              <span className="font-bold ml-2">5 Star Service</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Looking for a specific model cover or charger?
            </h3>
            <p className="text-white/80 text-lg mb-8">
              We have a massive stock of accessories for all old and new models. Just ping us on WhatsApp!
            </p>
            <a 
              href={`https://wa.me/${SHOP_INFO.whatsapp}`}
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-black/10 hover:scale-105 transition-transform"
            >
              Ask Inventory
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          
          <div className="relative z-10 lg:w-1/3 flex justify-center">
             <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
                <img 
                  src="https://picsum.photos/seed/stock/500/500" 
                  alt="Stock" 
                  className="relative w-full max-w-[300px] aspect-square rounded-[3rem] object-cover rotate-6 group-hover:rotate-0 transition-transform duration-700 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
