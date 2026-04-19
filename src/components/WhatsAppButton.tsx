import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SHOP_INFO } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${SHOP_INFO.whatsapp}?text=Hello AL Madina Mobile Shop! I'd like to inquire about...`, "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsApp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[60] bg-success text-white w-14 h-14 rounded-full shadow-xl shadow-green-900/20 flex items-center justify-center group"
      aria-label="Open WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-secondary text-white px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border-r-4 border-primary">
        {t('common.whatsappNow')}
      </span>
    </motion.button>
  );
}
