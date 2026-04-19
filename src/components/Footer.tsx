import { motion } from "motion/react";
import { Smartphone, Facebook, Twitter, Instagram, Send, MapPin, Phone, Mail } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary pt-20 pb-12 text-white border-t-3 border-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight">
                AL-MADINA<span className="text-primary"> TELECOM</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-primary mb-6">{t('footer.explore')}</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
              {[
                { name: t('nav.home'), path: "/" },
                { name: t('nav.services'), path: "/services" },
                { name: t('nav.products'), path: "/products" },
                { name: t('nav.about'), path: "/about" },
                { name: t('nav.contact'), path: "/contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-black uppercase tracking-[2px] text-primary mb-6">{t('footer.expertise')}</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
              {["Mobile Repair", "Watch Repair", "Accessories", "Audio Gear", "Flashing"].map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-primary mb-6">{t('footer.connect')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>{SHOP_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>{SHOP_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:text-left">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} {SHOP_INFO.name}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
