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
    'nav.toggle.src': './img/eng.avif',
    'nav.toggle.alt': 'UK Flag',
    'nav.toggle.href': '/es',
    'nav.toggle.hreflang': 'es',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mi',
    'nav.toggle.src': './img/esp.avif',
    'nav.toggle.alt': 'ESP Flag',
    'nav.toggle.href': '/en',
    'nav.toggle.hreflang': 'en',
  },
} as const;