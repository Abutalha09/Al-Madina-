import { motion } from "motion/react";
import { BatteryCharging, Cable, Headphones, MessageCircle, Shield, ShoppingBag, Star } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      name: "Premium Wireless Neckband",
      price: "Rs 799",
      tag: "Best Seller",
      description: "40 hours playtime, deep bass, water resistant.",
      icon: <Headphones className="w-12 h-12" />,
      tone: "from-slate-900 to-primary",
    },
    {
      name: "Fast Charging USB-C Cable",
      price: "Rs 249",
      tag: "Essential",
      description: "Military grade braided cable, 60W power delivery.",
      icon: <Cable className="w-12 h-12" />,
      tone: "from-primary-dark to-accent",
    },
    {
      name: "Magnetic Mobile Cover",
      price: "Rs 450",
      tag: "New Arrival",
      description: "Shockproof protection with camera guard.",
      icon: <Shield className="w-12 h-12" />,
      tone: "from-slate-800 to-premium",
    },
    {
      name: "Ultra HD Tempered Glass",
      price: "Rs 199",
      tag: "Quality",
      description: "9H hardness, smudge-free coating.",
      icon: <BatteryCharging className="w-12 h-12" />,
      tone: "from-success to-primary",
    },
  ];

  const handleOrder = (name: string) => {
    const message = `Hello, I'm interested in buying the ${name}. Is it available?`;
    window.open(`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-eyebrow mb-5"
            >
              {t('products.subtitle')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-font text-4xl md:text-5xl font-bold text-slate-950 uppercase"
            >
              {t('products.title')}
            </motion.h2>
          </div>
          <button className="secondary-button px-5 py-3 font-black text-xs uppercase tracking-widest group">
            Browse All <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="premium-card group"
            >
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${product.tone} flex items-center justify-center text-white`}>
                <div className="absolute inset-0 premium-grid opacity-20" />
                <motion.div
                  whileHover={{ rotate: -4, scale: 1.06 }}
                  className="relative w-24 h-24 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl"
                >
                  {product.icon}
                </motion.div>
                <div className="absolute top-3 right-3 bg-white/90 text-secondary text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                  {product.tag}
                </div>
              </div>

              <div className="relative p-5">
                <h3 className="font-black text-secondary text-sm mb-2 uppercase tracking-wider">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed min-h-[36px] mb-4">{product.description}</p>
                <div className="text-primary font-black text-base mb-4">{product.price}</div>

                <button
                  onClick={() => handleOrder(product.name)}
                  className="w-full bg-slate-50 border border-slate-200 hover:bg-success hover:text-white text-slate-700 py-3 rounded-md font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Order via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 premium-dark-card p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-10 group">
          <div className="absolute inset-0 premium-grid opacity-20" />
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-bold ml-2">5 Star Service</span>
            </div>
            <h3 className="display-font text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Looking for a specific model cover or charger?
            </h3>
            <p className="text-white/80 text-lg mb-8">
              We have a massive stock of accessories for old and new models. Just ping us on WhatsApp.
            </p>
            <a
              href={`https://wa.me/${SHOP_INFO.whatsapp}`}
              className="inline-flex items-center gap-3 bg-white text-primary px-7 py-4 rounded-md font-black text-sm uppercase tracking-widest shadow-xl shadow-black/10 hover:-translate-y-1 transition-transform"
            >
              Ask Inventory
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <div className="relative z-10 lg:w-1/3 w-full max-w-sm">
            <div className="grid grid-cols-2 gap-3 rotate-2 group-hover:rotate-0 transition-transform duration-500">
              {["Cables", "Covers", "Glass", "Audio"].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/20 bg-white/10 p-5 text-center">
                  <div className="mx-auto mb-3 h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-accent">
                    {index === 0 ? (
                      <Cable className="w-5 h-5" />
                    ) : index === 1 ? (
                      <Shield className="w-5 h-5" />
                    ) : index === 2 ? (
                      <ShoppingBag className="w-5 h-5" />
                    ) : (
                      <Headphones className="w-5 h-5" />
                    )}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
