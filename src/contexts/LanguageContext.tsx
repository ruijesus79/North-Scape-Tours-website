import React, { createContext, useContext, useState, useEffect } from 'react';
import { CONTENT, Language } from '../content';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof CONTENT[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    // Check if there's a saved language in localStorage
    const savedLang = localStorage.getItem('ns_lang') as Language;
    if (savedLang && Object.keys(CONTENT).includes(savedLang)) {
      return savedLang;
    }
    
    // Default is 100% Portuguese; only explicit language selection changes it
    return 'pt';
  });

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('ns_lang', lang);
  }, [lang]);

  const t = CONTENT[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
