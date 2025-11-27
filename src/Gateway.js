// HOMEPAGE IMAGES (already working)
const homepageImages = import.meta.glob(
  "./DemoWebPages/**/HomePage/Images/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

// PROJECT IMAGES
const projectImages = import.meta.glob(
  "./DemoWebPages/**/Projects/MainProjectsImages/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* -----------------------------------------
   Project Image Parser
   Filename format MUST BE: 
   ProjectName-ProjectDate-SortNumber.webp

   Example:
   Bridge-12.03.2023-1.webp 
----------------------------------------- */

function parseProjectFileName(fileName) {
  const [projectInfo, projectDate, sortNumberWithExt] = fileName.split("-");
  const sort = parseInt(sortNumberWithExt.split(".")[0], 10);

  return {
    id: `${projectInfo}-${projectDate}-${sort}`,
    projectInfo,
    projectDate,
    sort,
  };
}

/* -----------------------------------------
   Get all project cards for a given siteName
----------------------------------------- */

function getSiteProjects(siteName) {
  const basePath = `./DemoWebPages/${siteName}/Projects/MainProjectsImages/`;

  const projects = [];

  for (const path in projectImages) {
    if (path.startsWith(basePath)) {
      const mod = projectImages[path];
      const url = mod.default;
      const file = path.split("/").pop();

      const info = parseProjectFileName(file);

      projects.push({
        ...info,
        image: url,
      });
    }
  }

  // sort by SortNumber
  projects.sort((a, b) => a.sort - b.sort);

  console.log("🧱 Loaded projects:", projects);

  return projects;
}

export default {
  getHomepageImages: (siteName) => {
    const basePath = `./DemoWebPages/${siteName}/HomePage/Images/`;
    return Object.keys(homepageImages)
      .filter((p) => p.startsWith(basePath))
      .map((p) => homepageImages[p].default);
  },
  getSiteProjects,
};
