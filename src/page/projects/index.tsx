import Footer from "../home-page/footer";
import Header from "../home-page/header";
import Projects from "./projects";

export default function ProjectPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Projects />
            <Footer />
        </div>
    )
}