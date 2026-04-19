import { MapPin, Phone, Smartphone } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const links = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.products'), path: "/products" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <footer className="bg-secondary pt-20 pb-10 text-white border-t border-white/10 overflow-hidden relative">
      <div className="absolute inset-0 premium-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-accent">
                <Smartphone className="w-5 h-5" />
              </span>
              <span className="display-font text-2xl font-bold">
                AL-MADINA<span className="text-accent"> TELECOM</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-accent mb-6">{t('footer.explore')}</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-accent mb-6">{t('footer.expertise')}</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
              {["Mobile Repair", "Watch Repair", "Accessories", "Audio Gear", "Software Fix"].map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-accent mb-6">{t('footer.connect')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span>{SHOP_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>{SHOP_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            &copy; {currentYear} {SHOP_INFO.name}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
