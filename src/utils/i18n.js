import en from '../locales/en.json';

// We start with the local en.json as the default
let translations = {
  en: JSON.parse(JSON.stringify(en)), // Deep copy of the default
};

let currentLang = 'en';

/**
 * Normalizes API data to match the structure of en.json
 */
function normalizeData(data) {
  if (!data) return null;

  // Handle either PascalCase or camelCase from API
  const site = data.site || data.Site || {};
  const header = data.header || data.Header || {};
  const footer = data.footer || data.Footer || {};
  const homepage = data.homepage || data.Homepage || {};
  const contactModal = data.contact_modal || data.contactModal || data.ContactModal || {};
  const about = data.about || data.About || {};
  const projectLabels = data.project || data.Project || {};
  const galleryLabels = data.gallery || data.Gallery || {};
  const months = data.months || data.Months || [];
  const projectsDataRaw = data.projects_data || data.projects_Data || data.Projects_Data || {};

  const normalized = {
    site: {
      name: site.name || data.name || data.Name,
      email: site.email,
      phone: site.phone
    },
    header: {
      projects: header.projects,
      about: header.about,
      contact: header.contact
    },
    footer: {
      contact_us: footer.contactUs || footer.contact_us,
      or_at: footer.orAt || footer.or_at,
      copyright: footer.copyright
    },
    homepage: {
      no_images: homepage.noImages || homepage.no_images,
      images: homepage.images
    },
    contact_modal: {
      title: contactModal.title,
      name_placeholder: contactModal.namePlaceholder || contactModal.name_placeholder,
      email_placeholder: contactModal.emailPlaceholder || contactModal.email_placeholder,
      message_placeholder: contactModal.messagePlaceholder || contactModal.message_placeholder,
      send_button: contactModal.sendButton || contactModal.send_button,
      images: contactModal.images
    },
    about: {
      hero_title: about.heroTitle || about.hero_title,
      hero_img: about.heroImg || about.hero_img,
      section1_title: about.section1Title || about.section1_title,
      section1_desc: about.section1Desc || about.section1_desc,
      section1_img: about.section1Img || about.section1_img,
      section2_title: about.section2Title || about.section2_title,
      section2_desc: about.section2Desc || about.section2_desc,
      section3_img: about.section3Img || about.section3_img,
      section3_title1: about.section3Title1 || about.section3_title1,
      section3_desc1: about.section3Desc1 || about.section3_desc1,
      section3_title2: about.section3Title2 || about.section3_title2,
      section3_desc2: about.section3Desc2 || about.section3_desc2
    },
    project: {
        untitled: projectLabels.untitled
    },
    gallery: {
        previous: galleryLabels.previous,
        next: galleryLabels.next
    },
    months: months,
    projects_data: {}
  };

  // Map projects_data
  Object.keys(projectsDataRaw).forEach(key => {
    const proj = projectsDataRaw[key];
    normalized.projects_data[key] = {
      title: proj.title || proj.Title,
      date: proj.date || proj.Date,
      thumbnail: proj.thumbnailUrl || proj.thumbnail_url || proj.thumbnail || proj.Thumbnail,
      gallery: proj.galleryImageUrls || proj.gallery_image_urls || proj.gallery || proj.Gallery,
      text_url: proj.textUrl || proj.text_url || proj.TextUrl
    };
  });

  return normalized;
}

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
      // If the source is an empty array and the target is a non-empty array, do not overwrite
      if (Array.isArray(sourceValue) && sourceValue.length === 0 && 
          Array.isArray(target[key]) && target[key].length > 0) {
        continue;
      }
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
  console.log("Updating translations with API data:", newData);
  
  // Normalize the data first to match our en.json structure
  const normalizedData = normalizeData(newData);
  
  // We merge into a fresh copy of the original en.json to ensure 
  // we don't carry over stale data from a previous site's fetch
  const base = JSON.parse(JSON.stringify(en));
  translations[lang] = mergeDeep(base, normalizedData);
  
  console.log("Updated translations applied:", translations[lang]);
};

export default { t, updateTranslations };
