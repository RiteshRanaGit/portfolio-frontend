import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';

// Language configuration - Only English and Hindi
export const languages = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸', region: 'international' },
  hi: { name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳', region: 'indian' }
};

// Geolocation to language mapping - Only suggest Hindi for India, English for others
export const countryToLanguage = {
  'IN': ['hi'], // India - suggest Hindi
  // All other countries default to English
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations }
    }
  });

export default i18n;