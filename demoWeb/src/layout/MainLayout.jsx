import Header from "../components/Header";

// Shared componeents which will only be rendered once across all pages

export default function MainLayout({ children }) {
    return (
        <>
        <Header />
        <main>{children}</main>
        </>
    );
};