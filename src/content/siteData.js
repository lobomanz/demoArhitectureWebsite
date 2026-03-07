import { t } from "../utils/i18n";

/* -------------------------------------------------------
   API CONFIG
------------------------------------------------------- */
const API_BASE_URL = "https://arhit.eu";

/* -------------------------------------------------------
   IMAGE GLOBS (for resolving hashed URLs for local files)
------------------------------------------------------- */
const homepageImagesGlob = import.meta.glob("./HomePage/*.{jpg,jpeg,png,webp}", { eager: true });
const projectCardImagesGlob = import.meta.glob("./Projects/MainProjectsImages/*.{jpg,jpeg,png,webp}", { eager: true });
const contactFormImagesGlob = import.meta.glob("./ContactForm/*.{jpg,jpeg,png,webp}", { eager: true });
const deepProjectImagesGlob = import.meta.glob("./Projects/*/Images/*.{jpg,jpeg,png,webp}", { eager: true });
const aboutImagesGlob = import.meta.glob("./About/*.{jpg,jpeg,png,webp}", { eager: true });

/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */

/**
 * Resolves an image path. 
 * 1. If it's a full URL, return as-is.
 * 2. If it's a path starting with "uploads/", prefix with API_BASE_URL.
 * 3. Try to find it in the provided local glob.
 * 4. Fallback to just the filename (prefixed with API_BASE_URL if it looks like a CMS upload).
 */
const resolveImage = (glob, filename) => {
  if (!filename) return null;

  // 1. Full URL
  if (filename.startsWith("http://") || filename.startsWith("https://")) {
    return filename;
  }

  // 2. CMS Upload path
  if (filename.startsWith("uploads/")) {
    return `${API_BASE_URL}/${filename}`;
  }

  // 3. Local Glob resolution
  for (const path in glob) {
    if (path.endsWith(filename)) {
      return glob[path].default;
    }
  }

  // 4. If it contains a dot but wasn't found in glob, it might be a missing local file 
  // or a CMS file missing the 'uploads/' prefix (some versions might return just the path)
  return null; 
};

/* -------------------------------------------------------
   EXPORTS
------------------------------------------------------- */

export const getHomepageImages = () => {
  const filenames = t("homepage.images") || [];
  return filenames.map(name => resolveImage(homepageImagesGlob, name)).filter(Boolean);
};

export const getContactFormImages = () => {
  const filenames = t("contact_modal.images") || [];
  return filenames.map(name => resolveImage(contactFormImagesGlob, name)).filter(Boolean);
};

export const getAboutImages = () => {
  const images = {};
  // For About page, we often need a map of ALL local images to pick from by key
  // But we also want to support remote URLs directly
  for (const path in aboutImagesGlob) {
    const fileName = path.split("/").pop();
    images[fileName] = aboutImagesGlob[path].default;
  }
  
  // Also add specifically referenced remote images from translations
  const remoteHero = t("about.hero_img");
  if (remoteHero && (remoteHero.startsWith("http") || remoteHero.startsWith("uploads/"))) {
      images[remoteHero] = resolveImage(null, remoteHero);
  }
  const remoteS1 = t("about.section1_img");
  if (remoteS1 && (remoteS1.startsWith("http") || remoteS1.startsWith("uploads/"))) {
      images[remoteS1] = resolveImage(null, remoteS1);
  }
  const remoteS3 = t("about.section3_img");
  if (remoteS3 && (remoteS3.startsWith("http") || remoteS3.startsWith("uploads/"))) {
      images[remoteS3] = resolveImage(null, remoteS3);
  }

  return images;
};

// Helper for AboutUs specifically since it expects a map lookup
export const resolveAboutImage = (filename) => {
    return resolveImage(aboutImagesGlob, filename);
};

export const getProjects = () => {
  const projectsMap = t("projects_data") || {};
  return Object.keys(projectsMap).map(id => {
    const data = projectsMap[id];
    return {
      id,
      ...data,
      image: resolveImage(projectCardImagesGlob, data.thumbnail)
    };
  }).sort((a, b) => {
      // Sort by sortOrder if available, otherwise fallback to ID
      if (a.sortOrder !== undefined && b.sortOrder !== undefined) {
          return a.sortOrder - b.sortOrder;
      }
      return Number(a.id) - Number(b.id);
  });
};

export const getProjectImages = (projectId) => {
  const data = t(`projects_data.${projectId}`);
  if (!data || !data.gallery) return [];
  
  return data.gallery.map(name => {
      // 1. Check if it's already a full URL or CMS path
      const resolved = resolveImage(null, name);
      if (resolved) return resolved;

      // 2. Local deep glob fallback
      for (const path in deepProjectImagesGlob) {
          if (path.includes(`/${projectId}/Images/`) && path.endsWith(name)) {
              return deepProjectImagesGlob[path].default;
          }
      }
      return null;
  }).filter(Boolean);
};

export async function getProjectRichText(projectId) {
  const data = t(`projects_data.${projectId}`);
  if (!data || !data.text_url) return { richText: "" };

  const rawLink = data.text_url.trim();
  
  // If it's a google docs link, try to export as HTML
  if (rawLink.includes("docs.google.com")) {
      const htmlLink = rawLink.replace(/\/edit.*$/, "/export?format=html");
      try {
        const response = await fetch(htmlLink);
        const html = await response.text();
        return { richText: html };
      } catch (err) {
        console.warn("Failed to fetch Google Docs HTML:", err);
        return { richText: "" };
      }
  }
  
  // Otherwise, if it's a URL, maybe just return an iframe or link? 
  // For now, assume it's a text blob or we just return empty
  return { richText: "" };
}
