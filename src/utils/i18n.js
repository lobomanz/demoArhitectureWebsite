import en from '../locales/en.json';

const translations = {
  en: en,
};

// Current language (could be dynamic later)
const currentLang = 'en';

export const t = (key) => {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      return key;
    }
  }
  return value;
};

export default { t };
