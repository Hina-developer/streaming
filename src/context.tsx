import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type Theme, type Translation } from '@/i18n';

interface AppContextValue {
  lang: Lang;
  theme: Theme;
  t: Translation;
  isRTL: boolean;
  toggleLang: () => void;
  toggleTheme: () => void;
  setLang: (l: Lang) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const value: AppContextValue = {
    lang,
    theme,
    t: translations[lang],
    isRTL: lang === 'ar',
    toggleLang: () => setLang((p) => (p === 'en' ? 'ar' : 'en')),
    toggleTheme: () => setTheme((p) => (p === 'dark' ? 'light' : 'dark')),
    setLang,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
