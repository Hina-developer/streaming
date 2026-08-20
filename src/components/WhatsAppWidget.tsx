import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronDown } from 'lucide-react';
import { useApp } from '@/context';
import { whatsappLink } from '@/constants';
import whatsapplogo from '@/assets/wlogo.png';

export default function WhatsAppWidget() {
  const { t, lang } = useApp();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; from: 'bot' | 'user' }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { text: t.whatsapp.greeting, from: 'bot' },
        { text: t.whatsapp.greeting2, from: 'bot' },
      ]);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((p) => [...p, { text: userMsg, from: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages((p) => [
        ...p,
        {
          text: lang === 'en'
            ? 'Thanks for your message! Click the button below to continue this chat directly on WhatsApp.'
            : 'شكراً لرسالتك! اضغط على الزر أدناه لمتابعة هذه المحادثة مباشرة على واتساب.',
          from: 'bot',
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-5 end-5 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              {/* ✅ SIZE: w-14 h-14 (MORE BIGGER) */}
              <img 
                src={whatsapplogo} 
                alt="Custom Logo" 
                className="w-14 h-14 object-contain" 
              />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -end-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        )}
      </motion.button>

      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 end-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm glass-card overflow-hidden flex flex-col"
            style={{ height: '28rem' }}
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex items-center gap-3">
              <div className="relative">
                {/* ✅ SIZE: w-16 h-16 (LARGEST) */}
                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center overflow-hidden p-2">
                  <img 
                    src={whatsapplogo} 
                    alt="Custom Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="absolute bottom-0 end-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#075E54]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-white truncate">{t.whatsapp.title}</h3>
                <p className="text-xs text-green-200 truncate">{t.whatsapp.status}</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      msg.from === 'user'
                        ? 'bg-[#25D366] text-black rounded-ee-sm'
                        : 'glass rounded-es-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Open WhatsApp button */}
            <div className="p-3 border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
              <a
                href={whatsappLink(input || (lang === 'en' ? 'Hello! I am interested in your IPTV packages.' : 'مرحبا! أنا مهتم بباقات IPTV الخاصة بكم.'))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#1ebe5d] transition-colors mb-2"
              >
                {/* ✅ SIZE: w-10 h-10 (BIGGER AND BALANCED) */}
                <img src={whatsapplogo} alt="Logo" className="w-10 h-10 object-contain" />
                {t.whatsapp.openChat}
              </a>
              {/* Input */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t.whatsapp.placeholder}
                  className="flex-1 px-3 py-2 rounded-full glass text-sm outline-none focus:border-amber-400/50"
                  style={{ color: 'var(--text-primary)' }}
                />
                <button
                  onClick={handleSend}
                  className="w-9 h-9 rounded-full accent-bg flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity"
                >
                  <Send className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}