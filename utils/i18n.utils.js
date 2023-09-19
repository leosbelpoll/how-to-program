const translations = {
  SEARCH_FORM_PLACEHOLDER: {
    es: "Qué desea buscar?",
    en: "What would you like to search?",
  },
};

export const getTranslation = (key, language) => translations[key][language];
