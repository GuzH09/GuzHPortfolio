export const languages = {
  en: 'English',
  es: 'Spanish',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.toggle.srcEn': '/img/eng.avif',
    'nav.toggle.srcEs': '/img/esp.avif',
    'nav.toggle.altEn': 'UK Flag',
    'nav.toggle.altEs': 'ESP Flag',
    'nav.toggle.href': '/es',
    'nav.toggle.hreflang': 'es',
    'nav.project.home': 'Back to Home',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mi',
    'nav.toggle.href': '/en',
    'nav.toggle.hreflang': 'en',
    'nav.project.home': 'Volver al Inicio',
  },
} as const;
