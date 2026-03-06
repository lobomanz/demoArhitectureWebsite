import en from '../locales/en.json';

// We start with the local en.json as the default
let translations = {
  en: en,
};

let currentLang = 'en';

/**
 * t(key) - The translation function
 */
export const t = (key) => {
  const keys = key.split('.');
  let value = translations[currentLang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key; // Fallback to the key itself if not found
    }
  }
  return value;
};

/**
 * updateTranslations(newData)
 * Call this after your API fetch to update the whole site at runtime!
 */
export const updateTranslations = (newData, lang = 'en') => {
  translations[lang] = newData;
};

export default { t, updateTranslations };
