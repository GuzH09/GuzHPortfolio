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
    'portfolio.button.site': 'Visit Site',
    'portfolio.button.details': 'Site Details',
    'portfolio.filter.all': 'All',
    'portfolio.filter.fun': 'Fun Projects',
    'portfolio.filter.ecommerce': 'E-Commerces & Web Apps',
    'portfolio.filter.landing': 'Landing Pages & Static Sites',
    'portfolio.filter.mobile': 'Mobile Apps',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mi',
    'nav.toggle.href': '/en',
    'nav.toggle.hreflang': 'en',
    'nav.project.home': 'Volver al Inicio',
    'portfolio.button.site': 'Visitar Sitio',
    'portfolio.button.details': 'Detalles',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.fun': 'Proyectos Divertidos',
    'portfolio.filter.ecommerce': 'E-Commerces & Web Apps',
    'portfolio.filter.landing': 'Landing Pages & Sitios Estáticos',
    'portfolio.filter.mobile': 'Apps Móviles',
  },
} as const;
