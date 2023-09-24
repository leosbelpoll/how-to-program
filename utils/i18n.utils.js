const translations = {
    APP_TITLE: {
        es: "Como Programar",
        en: "How to Code",
      },
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
  TOPIC: {
    es: 'Tema',
    en: 'Topic',
  }
};

export const getTranslation = (key, language) => translations[key][language];
