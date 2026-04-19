import { useState } from "react";
import { motion } from "motion/react";
import { Clock, ExternalLink, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { SHOP_INFO } from "../constants";

export default function LocationSection() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SHOP_INFO.location)}&output=embed`;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-dark-card p-5 text-white"
          >
            <a
              href={SHOP_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-slate-950 group"
              aria-label="Open shop location in Google Maps"
            >
              {!photoFailed ? (
                <img
                  src={SHOP_INFO.shopImage}
                  alt={`${SHOP_INFO.name} shop front`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary via-slate-900 to-primary-dark">
                  <div className="text-center px-8">
                    <div className="mx-auto mb-5 h-16 w-16 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-accent">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <p className="display-font text-3xl font-bold uppercase">{SHOP_INFO.name}</p>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">{SHOP_INFO.location}</p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5">
                <div className="rounded-lg border border-white/10 bg-slate-950/80 backdrop-blur-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent mb-2">Shop Location</p>
                  <h2 className="display-font text-3xl font-bold uppercase mb-3">{SHOP_INFO.name}</h2>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">{SHOP_INFO.location}</p>
                  <div className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-4 py-3 text-[10px] font-black uppercase tracking-widest shadow-xl">
                    <Navigation className="w-4 h-4" />
                    Open Google Maps
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="space-y-5"
          >
            <div className="premium-card p-6 md:p-8">
              <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-7">
                <div>
                  <p className="section-eyebrow mb-5">Find Our Shop</p>
                  <h2 className="display-font text-3xl md:text-5xl font-bold text-secondary uppercase leading-tight">
                    Reach us directly with Maps
                  </h2>
                </div>
                <a
                  href={SHOP_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button px-5 py-3 text-xs font-black uppercase tracking-widest"
                >
                  Directions <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="relative overflow-hidden rounded-lg border border-slate-200 h-[330px] bg-slate-100">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${SHOP_INFO.name} Google Map`}
                />
                <a
                  href={SHOP_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Open Google Maps directions"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <a href={`tel:${SHOP_INFO.phone}`} className="premium-card p-5 text-center">
                <Phone className="relative w-6 h-6 text-primary mx-auto mb-3" />
                <p className="relative text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call</p>
                <p className="relative text-sm font-black text-secondary">{SHOP_INFO.phone}</p>
              </a>
              <a href={`https://wa.me/${SHOP_INFO.whatsapp}`} className="premium-card p-5 text-center">
                <MessageCircle className="relative w-6 h-6 text-success mx-auto mb-3" />
                <p className="relative text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">WhatsApp</p>
                <p className="relative text-sm font-black text-secondary">Instant Chat</p>
              </a>
              <div className="premium-card p-5 text-center">
                <Clock className="relative w-6 h-6 text-premium mx-auto mb-3" />
                <p className="relative text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Timing</p>
                <p className="relative text-sm font-black text-secondary">10 AM - 9 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
