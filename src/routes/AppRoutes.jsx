import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layout/MainLayout.jsx";
import AboutUs from "../pages/About/index.jsx";


// Page components go here,hug them in layout and set correct path, tnx
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <MainLayout>
                        <Homepage/>
                    </MainLayout>
                }/>
                <Route path="/about" element={
                    <MainLayout>
                        <AboutUs/>
                    </MainLayout>
                }/>
            </Routes>
        </BrowserRouter>
    );
};