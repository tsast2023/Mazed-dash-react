import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Tableau de bord": "Dashboard",
      "Super Admin": "Super Admin",
      "Google maps": "Google Maps",
      "Open street maps": "Open Street Maps",
      "Catégories": "Categories",
      "Création de catégorie": "Category Creation",
      "Liste de catégories": "Category List",
      "Produits": "Products",
      "Création de produit": "Product Creation",
      "Liste de produits": "Product List",
      // Add more translations here
    }
  },
  // You can add more languages here
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
