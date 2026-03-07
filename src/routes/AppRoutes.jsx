import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateTranslations } from "../utils/i18n";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/About/index.jsx";
import Projects from "../pages/Projects/index.jsx";
import ProjectSingle from "../pages/Project/index.jsx";

/**
 * DataLoader component
 * Fetches data from the API based on :siteName and updates localization
 */
const DataLoader = ({ children }) => {
  const { siteName } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!siteName) return;

    // setLoading(true);
    fetch(`https://arhit.eu/api/PreviewSites/${siteName}`)
      .then((res) => {
        if (!res.ok) throw new Error("API call failed");
        return res.json();
      })
      .then((data) => {
        // Assume data from API matches our en.json structure
        updateTranslations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("API Error:", err);
        // On error, fallback to default local en.json (already set in i18n.js)
        setLoading(false);
      });
  }, [siteName]);

  if (loading) {
    return (
      <div style={{ 
        height: "100vh", display: "flex", justifyContent: "center", 
        alignItems: "center", backgroundColor: "#1e1e1e", color: "white" 
      }}>
        Loading Site Data...
      </div>
    );
  }

  return children;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to a default site name or show an error */}
        <Route path="/" element={<Navigate to="/aktis-projekt/homepage" replace />} />

        {/* Nested routes under :siteName */}
        <Route path="/:siteName" element={<DataLoader><Navigate to="homepage" replace /></DataLoader>} />
        
        <Route path="/:siteName/homepage" element={<DataLoader><Homepage /></DataLoader>} />
        <Route path="/:siteName/about" element={<DataLoader><AboutUs /></DataLoader>} />
        <Route path="/:siteName/projects" element={<DataLoader><Projects /></DataLoader>} />
        <Route path="/:siteName/projects/:projectId" element={<DataLoader><ProjectSingle /></DataLoader>} />
      </Routes>
    </BrowserRouter>
  );
}
