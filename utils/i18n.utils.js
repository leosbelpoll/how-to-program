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
    en: "Learning paths",
  },
  "LEARNING_PATHS.ALL": {
    es: "Todas",
    en: "All",
  },
  READ_MORE: {
    es: "Leer más",
    en: "Read more",
  },
  TOPIC: {
    es: "Tema",
    en: "Topic",
  },
  MENU_HOME: {
    es: "Inicio",
    en: "Home",
  },
  MENU_LEARNING_PATHS: {
    es: "Rutas",
    en: "Paths",
  },
  MENU_COURSES: {
    es: "Cursos",
    en: "Courses",
  },
  MENU_RESOURCES: {
    es: "Recursos",
    en: "Resources",
  },
  MENU_BOOKMARKERS: {
    es: "Marcadores",
    en: "Bookmarkers",
  },
  MENU_FEEDBACK: {
    es: "Sugerencias",
    en: "Give feedback",
  },
};

export const getTranslation = (key, language) => translations[key][language];
export const getTranslations = (key) => translations[key];
