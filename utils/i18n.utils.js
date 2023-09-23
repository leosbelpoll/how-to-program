const translations = {
  SEARCH_FORM_PLACEHOLDER: {
    es: "Qué desea buscar?",
    en: "What would you like to search?",
  },
  LEARNING_PATHS: {
    es: "Rutas de aprendizaje",
    en: "Learning paths"
  },
  'LEARNING_PATHS.ALL': {
    es: "Todas",
    en: "All"
  },
  READ_MORE: {
    es: "Leer más",
    en: "Read more",
  },
  APP_TITLE: {
    es: "Como Programar",
    en: "How to Code",
  }
};

export const getTranslation = (key, language) => translations[key][language];
