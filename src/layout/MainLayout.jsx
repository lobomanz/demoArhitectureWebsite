import Header from "../components/Header";
import {StyledMainLayout} from "./styledMainLayout.js";

// Shared componeents which will only be rendered once across all pages

export default function MainLayout({ children }) {

    return (
        <>
            <StyledMainLayout>
              <Header />
              <main>{children}</main>
            </StyledMainLayout>
        </>
    );
};