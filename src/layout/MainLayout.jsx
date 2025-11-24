import Header from "../components/Header";
import { StyledMainLayout } from "./styledMainLayout.js";
import { GlobalStyles } from "./globalStyles";

export default function MainLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <StyledMainLayout>
        <Header />
        <main>{children}</main>
      </StyledMainLayout>
    </>
  );
}
