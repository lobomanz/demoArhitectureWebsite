// Site Data - replaces the dynamic Gateway logic
// Uses Vite's glob import to automatically find assets in the src/content folder

/* -------------------------------------------------------
   HOMEPAGE IMAGES
------------------------------------------------------- */
const homepageImages = import.meta.glob(
  "./HomePage/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* -------------------------------------------------------
   PROJECT CARD IMAGES
------------------------------------------------------- */
const projectCardImages = import.meta.glob(
  "./Projects/MainProjectsImages/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* -------------------------------------------------------
   CONTACT FORM IMAGES
------------------------------------------------------- */
const contactFormImages = import.meta.glob(
  "./ContactForm/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* -------------------------------------------------------
   DEEP PROJECT IMAGES (per project gallery)
   Assumes structure: src/content/Projects/<id>/Images/*
------------------------------------------------------- */
const deepProjectImages = import.meta.glob(
  "./Projects/*/Images/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* -------------------------------------------------------
   PROJECT RICH TEXT LINKS
   Assumes structure: src/content/Projects/<id>/Text/*.txt
------------------------------------------------------- */
const projectTextFiles = import.meta.glob(
  "./Projects/*/Text/*.txt",
  { eager: true, as: "raw" }
);

/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */
function parseProjectFileName(fileName) {
  // Format: ProjectName-Date-ID.ext
  const parts = fileName.split("-");
  if (parts.length < 3) return { id: fileName, projectInfo: fileName, projectDate: "" };
  
  const [projectInfo, projectDate, idWithExt] = parts;
  const id = idWithExt?.split(".")[0] ?? "";

  return { id, projectInfo, projectDate };
}

/* -------------------------------------------------------
   EXPORTS
------------------------------------------------------- */

export const getHomepageImages = () => {
  return Object.values(homepageImages).map(mod => mod.default);
};

export const getContactFormImages = () => {
  return Object.values(contactFormImages).map(mod => mod.default);
};

export const getProjects = () => {
  const projects = [];
  for (const path in projectCardImages) {
    const mod = projectCardImages[path];
    const fileName = path.split("/").pop();
    const info = parseProjectFileName(fileName);
    projects.push({ ...info, image: mod.default });
  }
  return projects.sort((a, b) => Number(a.id) - Number(b.id));
};

export const getProjectImages = (projectId) => {
  const base = `./Projects/${projectId}/Images/`;
  return Object.keys(deepProjectImages)
    .filter((p) => p.startsWith(base))
    .map((p) => deepProjectImages[p].default)
    .sort();
};

export async function getProjectRichText(projectId) {
  const base = `./Projects/${projectId}/Text/`;
  const txtPath = Object.keys(projectTextFiles).find((p) => p.startsWith(base));

  if (!txtPath) return { richText: "" };

  const rawLink = projectTextFiles[txtPath].trim();
  if (!rawLink) return { richText: "" };

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
