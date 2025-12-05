import Header from "../components/Header";
import {StyledMainLayout} from "./styledMainLayout.js";
import {GlobalStyles} from "./globalStyles";
import Footer from "../components/Footer";

export default function MainLayout({children}) {
    return (
        <>
            <GlobalStyles/>
            <StyledMainLayout>
                <Header/>
                <main>{children}</main>
            </StyledMainLayout>
        </>
    );
}
