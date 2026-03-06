import { t } from "../utils/i18n";

/* -------------------------------------------------------
   IMAGE GLOBS (for resolving hashed URLs)
------------------------------------------------------- */
const homepageImagesGlob = import.meta.glob("./HomePage/*.{jpg,jpeg,png,webp}", { eager: true });
const projectCardImagesGlob = import.meta.glob("./Projects/MainProjectsImages/*.{jpg,jpeg,png,webp}", { eager: true });
const contactFormImagesGlob = import.meta.glob("./ContactForm/*.{jpg,jpeg,png,webp}", { eager: true });
const deepProjectImagesGlob = import.meta.glob("./Projects/*/Images/*.{jpg,jpeg,png,webp}", { eager: true });
const aboutImagesGlob = import.meta.glob("./About/*.{jpg,jpeg,png,webp}", { eager: true });

/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */
const resolveImage = (glob, filename) => {
  for (const path in glob) {
    if (path.endsWith(filename)) {
      return glob[path].default;
    }
  }
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
  for (const path in aboutImagesGlob) {
    const fileName = path.split("/").pop();
    images[fileName] = aboutImagesGlob[path].default;
  }
  return images;
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
  }).sort((a, b) => Number(a.id) - Number(b.id));
};

export const getProjectImages = (projectId) => {
  const data = t(`projects_data.${projectId}`);
  if (!data || !data.gallery) return [];
  
  return data.gallery.map(name => {
      // Gallery images are in ./Projects/<id>/Images/
      // The glob has paths like ./Projects/111/Images/img.png
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
