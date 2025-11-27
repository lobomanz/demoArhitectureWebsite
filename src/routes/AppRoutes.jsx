import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/About/index.jsx";
import Projects from "../pages/Projects/index.jsx";
// import ProjectSingle from "../pages/Projects/ProjectSingle.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                {/* ROOT MESSAGE */}
                <Route
                    path="/"
                    element={<h2>Pick a website: AktisProjekt, Arhi, StudioAlamat, Vedoza...</h2>}
                />

                {/* DYNAMIC HOMEPAGE */}
                <Route
                    path="/:siteName"
                    element={
                        <MainLayout>
                            <Homepage />
                        </MainLayout>
                    }
                />

                {/* DYNAMIC ABOUT */}
                <Route
                    path="/:siteName/about"
                    element={
                        <MainLayout>
                            <AboutUs />
                        </MainLayout>
                    }
                />

                {/* DYNAMIC PROJECT LIST */}
                <Route
                    path="/:siteName/projects"
                    element={
                        <MainLayout>
                            <Projects />
                        </MainLayout>
                    }
                />

                {/* SINGLE PROJECT (you can enable later) */}
                {/* <Route
                    path="/:siteName/projects/:projectId"
                    element={
                        <MainLayout>
                            <ProjectSingle />
                        </MainLayout>
                    }
                /> */}
            </Routes>
        </BrowserRouter>
    );
}
