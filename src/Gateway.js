/* -------------------------------------------------------
   HOMEPAGE IMAGES
------------------------------------------------------- */
const homepageImages = import.meta.glob(
  "./DemoWebPages/**/HomePage/Images/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* -------------------------------------------------------
   PROJECT CARD IMAGES (MainProjectsImages)
   Thumbnail images used on project listing page
------------------------------------------------------- */
const projectImages = import.meta.glob(
  "./DemoWebPages/**/Projects/MainProjectsImages/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* -------------------------------------------------------
   Parse file names in MainProjectsImages
   Format: ProjectName-12.03.2023-444.webp
------------------------------------------------------- */
function parseProjectFileName(fileName) {
  const [projectInfo, projectDate, idWithExt] = fileName.split("-");
  const id = idWithExt.split(".")[0]; // the number (e.g. 444)

  return {
    id,
    projectInfo,
    projectDate,
  };
}

/* -------------------------------------------------------
   Get Project Cards for a given site
------------------------------------------------------- */
function getSiteProjects(siteName) {
  const basePath = `./DemoWebPages/${siteName}/Projects/MainProjectsImages/`;

  const projects = [];

  for (const path in projectImages) {
    if (path.startsWith(basePath)) {
      const mod = projectImages[path];
      const imageUrl = mod.default;
      const fileName = path.split("/").pop();
      const info = parseProjectFileName(fileName);

      projects.push({
        ...info,
        image: imageUrl,
      });
    }
  }

  // Sort numerically by ID
  projects.sort((a, b) => Number(a.id) - Number(b.id));

  return projects;
}

/* -------------------------------------------------------
   DEEP PROJECT IMAGES (per project gallery)
   Loads images from:
   /DemoWebPages/<siteName>/Projects/<id>/Images/*
------------------------------------------------------- */
const deepProjectImages = import.meta.glob(
  "./DemoWebPages/**/Projects/*/Images/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

function getProjectImages(siteName, projectId) {
  const base = `./DemoWebPages/${siteName}/Projects/${projectId}/Images/`;

  return Object.keys(deepProjectImages)
    .filter((p) => p.startsWith(base))
    .map((p) => deepProjectImages[p].default)
    .sort();
}

/* -------------------------------------------------------
   PROJECT RICH TEXT (Google Docs link in TXT file)
   Loads from:
   /DemoWebPages/<siteName>/Projects/<id>/Text/<whatever>.txt
------------------------------------------------------- */
const projectTextFiles = import.meta.glob(
  "./DemoWebPages/**/Projects/*/Text/*.txt",
  { eager: true, as: "raw" }
);

async function getProjectRichText(siteName, projectId) {
  const base = `./DemoWebPages/${siteName}/Projects/${projectId}/Text/`;

  // Locate the text file
  const txtPath = Object.keys(projectTextFiles).find((p) =>
    p.startsWith(base)
  );

  if (!txtPath) {
    console.warn(`No text file found for project ${projectId}`);
    return { richText: "" };
  }

  const rawLink = projectTextFiles[txtPath].trim();
  if (!rawLink) return { richText: "" };

  // Convert Google Docs edit link to HTML export
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

/* -------------------------------------------------------
   EXPORT API
------------------------------------------------------- */
export default {
  // Homepage images
  getHomepageImages: (siteName) => {
    const basePath = `./DemoWebPages/${siteName}/HomePage/Images/`;
    return Object.keys(homepageImages)
      .filter((p) => p.startsWith(basePath))
      .map((p) => homepageImages[p].default);
  },

  // Project cards (thumbnails)
  getSiteProjects,

  // Per-project gallery images
  getProjectImages,

  // Per-project Google Docs rich text
  getProjectRichText,
};
