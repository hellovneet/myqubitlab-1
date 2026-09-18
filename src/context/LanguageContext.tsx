import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, TRANSLATIONS, TranslationDictionary } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  strings: TranslationDictionary;
  isHindi: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'qubitlab-language';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  try {
    const session = window.sessionStorage.getItem(STORAGE_KEY);
    if (session === 'hi' || session === 'en') return session;
    const local = window.localStorage.getItem(STORAGE_KEY);
    if (local === 'hi' || local === 'en') return local;
  } catch {
    // Storage access might be restricted
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, lang);
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, language);
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore
    }
    // Update document language attribute for accessibility
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const strings = TRANSLATIONS[language] || TRANSLATIONS.en;
  const isHindi = language === 'hi';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, strings, isHindi }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type { Language };
