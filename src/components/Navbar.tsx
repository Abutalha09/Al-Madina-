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
          ? "bg-secondary/90 backdrop-blur-xl py-2 shadow-2xl shadow-slate-950/20 border-b border-white/10"
          : "bg-secondary/98 py-3 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-accent shadow-lg">
              <Smartphone className="w-5 h-5" />
            </span>
            <span className="display-font text-lg sm:text-xl font-bold text-white">
              AL-MADINA<span className="text-accent"> TELECOM</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `relative text-xs font-extrabold uppercase tracking-widest transition-colors py-2 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-accent"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md text-[10px] font-black uppercase tracking-widest transition-all border border-white/20"
            >
              <Languages className="w-3.5 h-3.5 text-accent" />
              {language === 'en' ? 'Hindi' : 'English'}
            </button>

            <motion.button
              onClick={onBookClick}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="premium-button px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest"
            >
              {t('nav.bookNow')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 bg-white/10 text-white rounded-md border border-white/20"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5 text-accent" />
            </button>
            <button
              onClick={onBookClick}
              className="bg-primary text-white p-2 rounded-md shadow-md"
              aria-label="Book appointment"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
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
            transition={{ duration: 0.24 }}
            className="md:hidden bg-secondary/98 border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `block px-3 py-4 text-sm font-black uppercase tracking-widest border-l-4 rounded-md ${
                      isActive ? "bg-primary/10 border-accent text-white" : "border-transparent text-white/60"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex gap-4 px-3">
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="flex-1 bg-white/10 text-white py-3 rounded-md flex justify-center items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                  <Phone className="w-4 h-4" /> {t('hero.call')}
                </a>
                <a
                  href={`https://wa.me/${SHOP_INFO.whatsapp}`}
                  className="flex-1 bg-success text-white py-3 rounded-md flex justify-center items-center gap-2 text-[10px] font-black uppercase tracking-widest"
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
