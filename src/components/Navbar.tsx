import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, Menu, X, Smartphone, Languages } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md py-2 shadow-lg border-b-3 border-primary"
          : "bg-secondary py-3 border-b-3 border-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-white tracking-tighter">
              AL-MADINA<span className="text-accent underline decoration-primary decoration-4 underline-offset-4"> TELECOM</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-accent underline decoration-primary decoration-2 underline-offset-4" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-[10px] font-black uppercase tracking-widest transition-all border border-white/20"
            >
              <Languages className="w-3 h-3 text-primary" />
              {language === 'en' ? 'Hindi' : 'English'}
            </button>

            <button
              onClick={onBookClick}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md text-xs font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              {t('nav.bookNow')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 bg-white/10 text-white rounded-md border border-white/20"
            >
              <Languages className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={onBookClick}
              className="bg-primary text-white p-2 rounded-md shadow-md"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `block px-3 py-4 text-base font-black uppercase tracking-widest border-l-4 ${
                      isActive ? "bg-primary/10 border-primary text-white" : "border-transparent text-white/60"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex gap-4 px-3">
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="flex-1 bg-white/10 text-white py-3 rounded-md flex justify-center items-center gap-2 text-xs font-black uppercase tracking-widest"
                >
                  <Phone className="w-4 h-4" /> {t('hero.call')}
                </a>
                <a
                  href={`https://wa.me/${SHOP_INFO.whatsapp}`}
                  className="flex-1 bg-success text-white py-3 rounded-md flex justify-center items-center gap-2 text-xs font-black uppercase tracking-widest"
                >
                  <MessageCircle className="w-4 h-4" /> {t('common.whatsappNow')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
