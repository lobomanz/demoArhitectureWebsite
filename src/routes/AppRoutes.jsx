import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/About/index.jsx";
import Projects from "../pages/Projects/index.jsx";
import ProjectSingle from "../pages/Project/index.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Redirect root to homepage */}
                <Route path="/" element={<Navigate to="/homepage" replace />} />

                {/* HOMEPAGE */}
                <Route path="/homepage" element={<Homepage/>} />

                {/* ABOUT */}
                <Route path="/about" element={<AboutUs/>} />

                {/* PROJECT LIST */}
                <Route path="/projects" element={<Projects/>} />

                {/* SINGLE PROJECT (ID-based) */}
                <Route path="/projects/:projectId" element={<ProjectSingle/>} />
            </Routes>
        </BrowserRouter>
    );
}
