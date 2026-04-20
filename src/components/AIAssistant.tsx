import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User, Loader2, Calendar } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { SHOP_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const geminiApiKey = process.env.GEMINI_API_KEY;
const ai = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const getFallbackAnswer = (question: string) => {
  const q = question.toLowerCase();
  if (/(screen|display|glass|touch|broken|crack)/.test(q)) {
    return "Screen repair ke liye pehle inspection karenge. Agar display cracked hai to exact model aur spare part availability ke hisaab se quote diya jayega. WhatsApp par photo bhej kar fast estimate lein.";
  }
  if (/(battery|charge|charging|power|power on|shut down)/.test(q)) {
    return "Battery ya charging issue me sabse pehle charger aur port check karte hain. Agar battery weak ho gayi ho to replacement recommend karte hain. Exact rate ke liye WhatsApp par phone details bhejein.";
  }
  if (/(speaker|mic|audio|sound|call)/.test(q)) {
    return "Speaker ya microphone issue me hum internal cleaning aur component test karte hain. Agar part replace karna pade to original ya quality-compatible part use karte hain. Please WhatsApp par model bhejein.";
  }
  if (/(camera|photo|focus|flash)/.test(q)) {
    return "Camera problem me pehle lens aur module inspection hoti hai. Agar module replacement zaroori ho to genuine spare part lagate hain. WhatsApp par issue detail bhejein.";
  }
  if (/(price|cost|how much|charge)/.test(q)) {
    return `Exact cost problem aur device model par depend karta hai. Sabse tez tareeka hai WhatsApp par model aur problem bhejna: https://wa.me/${SHOP_INFO.whatsapp}`;
  }
  return `AI assistant is currently running in local fallback mode because the cloud API key is not configured. Please ask your question once more or contact us directly on WhatsApp: https://wa.me/${SHOP_INFO.whatsapp}`;
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { t, language } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([]);

  // Initialize messages when component mounts or language changes
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { role: 'bot', text: t('ai.welcome') }
      ]);
    }
  }, [language, t]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!ai) {
        const fallbackText = getFallbackAnswer(userMessage);
        setMessages(prev => [
          ...prev,
          { role: 'bot', text: fallbackText },
        ]);
        return;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => (m.role === 'user' ? `User: ${m.text}` : `Assistant: ${m.text}`)),
          `User: ${userMessage}`
        ],
        config: {
          systemInstruction: `You are an expert repair assistant for AL-MADINA TELECOM (Owner: ${SHOP_INFO.owner}, Experience: ${SHOP_INFO.experience} years).
          Location: ${SHOP_INFO.location}.
          Current Website Language: ${language === 'en' ? 'English' : 'Hindi'}.
          IMPORTANT: Respond in ${language === 'en' ? 'English' : 'Hindi'}.
          STRICT FORMATTING RULES:
          1. CLEAN TEXT: DO NOT use asterisks (**) for bolding or any other markdown symbols like # or >.
          2. STRUCTURE: Use a clean, professional structure using the following sections if applicable:
             - Summary: (What is the issue?)
             - Suggested Steps: (Use numbered list 1, 2, 3...)
             - Expert Recommendation: (What should they do next?)
          3. NO UNNECESSARY FILLER: Be direct and concise.
          4. NAVIGATION: Refer to /services, /products, /about, or /contact only indexically.
          5. WHATSAPP: Always mention booking an appointment via WhatsApp for a final quote.
          
          Tone: Helpful, Professional, Expert.
          Language: ${language === 'en' ? 'English' : 'Hindi'} (with a natural mix as common in local shops).`,
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or contact us on WhatsApp.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Maaf kijiye, connection me dikkat hai. Direct WhatsApp par sampark karein." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookRedirect = () => {
    const message = "Hi, I'm interested in booking a repair appointment after chatting with your AI assistant.";
    window.open(`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-[60] premium-button text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle repair assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-secondary text-white px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border-r-4 border-primary">
            {t('ai.button')}
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-6 z-[60] w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-border-vibrant h-[550px]"
          >
            {/* Header */}
            <div className="bg-secondary p-4 flex items-center justify-between border-b-3 border-primary">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-md">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-white text-xs font-black uppercase tracking-widest">Repair Assistant</h3>
                  <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Proper Guidance / Clean Solutions</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg scroll-smooth mt-1 pt-4"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-4 rounded-lg text-xs leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-primary text-white font-medium rounded-tr-none shadow-md' 
                      : 'bg-white border border-slate-200 text-secondary rounded-tl-none shadow-sm'
                  }`}>
                    {m.role === 'bot' ? (
                      <div className="prose prose-slate prose-xs max-w-none">
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed font-medium">{children}</p>,
                            ul: ({ children }) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal pl-4 mb-2">{children}</ol>,
                            li: ({ children }) => <li className="mb-1">{children}</li>,
                            strong: ({ children }) => <span className="font-black text-primary uppercase text-[10px] tracking-wider">{children}</span>,
                          }}
                        >
                          {m.text}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      m.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{t('common.analysing')}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action */}
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-100">
              <button 
                onClick={handleBookRedirect}
                className="w-full bg-success/10 hover:bg-success/20 text-success py-2.5 rounded-md text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all border border-success/20"
              >
                <Calendar className="w-3.5 h-3.5" /> {t('common.whatsappNow')}
              </button>
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('ai.placeholder')}
                className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 rounded-md text-xs outline-none focus:border-primary transition-all shadow-inner"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-primary hover:bg-primary-dark text-white px-4 rounded-md shadow-lg disabled:opacity-50 transition-all flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
