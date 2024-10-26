import Footer from "./Footer";
import Nav from "./Nav";

export default function Pagina({ children }: any) {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <Nav />

            <div className="flex-1">
                {children}
            </div>

            <Footer />
        </div>
    );
}