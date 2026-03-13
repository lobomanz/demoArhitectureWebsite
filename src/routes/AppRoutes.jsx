import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateTranslations } from "../utils/i18n";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/About/index.jsx";
import Projects from "../pages/Projects/index.jsx";
import ProjectSingle from "../pages/Project/index.jsx";

/**
 * DataLoader component
 * Fetches data from the API based on :siteName and updates localization.
 */
const DataLoader = () => {
  const { siteName } = useParams();
  
  // Initialize loading as true only if we have a siteName to fetch
  const [loading, setLoading] = useState(!!siteName);
  const [error, setError] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);

  useEffect(() => {
    // If we don't have a siteName or we already fetched this specific site, do nothing
    if (!siteName || siteName === lastFetched) {
      return;
    }

    let isMounted = true;

    const fetchData = async () => {
      // Avoid redundant state updates if already in correct state
      setError(null);
      setLoading(true);

      try {
        const res = await fetch(`https://arhit.eu/api/PreviewSites/${siteName}`);
        
        if (!res.ok) {
          throw new Error(`Failed to load site "${siteName}" (Status: ${res.status})`);
        }
        
        const data = await res.json();
        
        if (isMounted) {
          updateTranslations(data);
          setLastFetched(siteName);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("DataLoader Error:", err);
          setError(err instanceof Error ? err.message : "An unknown error occurred");
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [siteName, lastFetched]);

  if (loading) {
    return (
      <div style={{ 
        height: "100vh", display: "flex", flexFlow: "column", justifyContent: "center", 
        alignItems: "center", backgroundColor: "#1e1e1e", color: "white" 
      }}>
        <div style={{ fontSize: "24px", marginBottom: "10px" }}>Loading Site Data...</div>
        <div style={{ fontSize: "14px", color: "#888" }}>Fetching configuration for: {siteName}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        height: "100vh", display: "flex", flexFlow: "column", justifyContent: "center", 
        alignItems: "center", backgroundColor: "#1e1e1e", color: "#ff6b6b" 
      }}>
        <div style={{ fontSize: "24px", marginBottom: "10px" }}>Oops! Something went wrong.</div>
        <div style={{ fontSize: "16px", color: "#ddd", marginBottom: "20px" }}>{error}</div>
        <button 
          onClick={() => window.location.reload()}
          style={{ 
            padding: "10px 20px", borderRadius: "4px", border: "none", 
            backgroundColor: "#333", color: "white", cursor: "pointer" 
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return <Outlet />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/demo-projekt/homepage" replace />} />

        <Route path="/:siteName" element={<DataLoader />}>
            <Route index element={<Navigate to="homepage" replace />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ProjectSingle />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
