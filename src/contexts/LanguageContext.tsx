import React, { createContext, useContext, useState, useEffect } from 'react';
import { CONTENT, Language } from '../content';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof CONTENT[Language];
}

const VALID_LANGS: Language[] = ['pt', 'en', 'es', 'fr', 'de'];

function getInitialLanguage(): Language {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang')?.toLowerCase() as Language | undefined;
    if (urlLang && VALID_LANGS.includes(urlLang)) {
      return urlLang;
    }

    const savedLang = localStorage.getItem('ns_lang') as Language | null;
    if (savedLang && VALID_LANGS.includes(savedLang)) {
      return savedLang;
    }
  }
  return 'pt';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('ns_lang', newLang);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (newLang === 'pt') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', newLang);
      }
      window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    }
  };

  useEffect(() => {
    localStorage.setItem('ns_lang', lang);
  }, [lang]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang')?.toLowerCase() as Language | undefined;
      if (urlLang && VALID_LANGS.includes(urlLang)) {
        setLangState(urlLang);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
