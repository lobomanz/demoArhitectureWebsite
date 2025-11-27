const homepageImages = import.meta.glob(
  "./DemoWebPages/**/HomePage/Images/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

function getHomepageImages(siteName) {
  const basePath = `./DemoWebPages/${siteName}/HomePage/Images/`;

  console.log("🔍 ALL IMPORTED IMAGE PATHS:");
  Object.keys(homepageImages).forEach((p) => console.log(" →", p));
  console.log("🔎 Looking for:", basePath);

  const images = [];

  for (const path in homepageImages) {
    if (path.startsWith(basePath)) {
      const module = homepageImages[path];

      // Vite eager glob returns an object with "default" key
      images.push(module.default); // << FIX HERE
    }
  }

  if (images.length === 0) {
    console.warn(
      `⚠ No images found for site "${siteName}". Checked path: ${basePath}`
    );
  }

  return images;
}

export default {
  getHomepageImages,
};
