import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getPathFromUrl(url: URL) {
  const pathArray = url.pathname.split('/');
  const path = pathArray.slice(2, pathArray.length).join('/');
  if (path.length > 0) return path;
  return '';
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
