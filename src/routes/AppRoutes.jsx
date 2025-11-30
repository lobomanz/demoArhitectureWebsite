import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/About/index.jsx";
import Projects from "../pages/Projects/index.jsx";
import ProjectSingle from "../pages/Project/index.jsx"; // <-- your new page

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                {/* ROOT MESSAGE */}
                <Route
                    path="/"
                    element={
                        <h2 style={{ padding: "40px" }}>
                            Pick a website: AktisProjekt, Arhi, StudioAlamat, StudioAlbahari, Vedoza...
                        </h2>
                    }
                />

                {/* HOMEPAGE */}
                <Route
                    path="/:siteName"
                    element={
                        <MainLayout>
                            <Homepage />
                        </MainLayout>
                    }
                />

                {/* ABOUT */}
                <Route
                    path="/:siteName/about"
                    element={
                        <MainLayout>
                            <AboutUs />
                        </MainLayout>
                    }
                />

                {/* PROJECT LIST */}
                <Route
                    path="/:siteName/projects"
                    element={
                        <MainLayout>
                            <Projects />
                        </MainLayout>
                    }
                />

                {/* SINGLE PROJECT (ID-based) */}
                <Route
                    path="/:siteName/projects/:projectId"
                    element={
                        <MainLayout>
                            <ProjectSingle /> 
                        </MainLayout>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}
