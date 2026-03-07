import en from '../locales/en.json';

// We start with the local en.json as the default
let translations = {
  en: JSON.parse(JSON.stringify(en)), // Deep copy of the default
};

let currentLang = 'en';

/**
 * Deep merge utility to replace only non-empty fields
 */
function mergeDeep(target, source) {
  if (!source) return target;

  for (const key in source) {
    const sourceValue = source[key];
    
    // If it's an object (and not an array), recurse
    if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
      if (!target[key]) target[key] = {};
      mergeDeep(target[key], sourceValue);
    } 
    // Only replace if source value is not empty/null/undefined
    else if (sourceValue !== "" && sourceValue !== null && sourceValue !== undefined) {
      target[key] = sourceValue;
    }
  }
  return target;
}

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
      return key;
    }
  }
  return value;
};

/**
 * updateTranslations(newData)
 * Merges new API data into the existing localization object
 */
export const updateTranslations = (newData, lang = 'en') => {
  // We merge into a fresh copy of the original en.json to ensure 
  // we don't carry over stale data from a previous site's fetch
  console.log("Updating translations with API data:", newData);
  const base = JSON.parse(JSON.stringify(en));
  translations[lang] = mergeDeep(base, newData);
  console.log("Updated translations:", translations[lang]);
};

export default { t, updateTranslations };
