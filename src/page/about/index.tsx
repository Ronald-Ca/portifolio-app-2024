import Footer from "../home-page/footer"
import Header from "../home-page/header"
import About from "./about"

export default function AboutPage() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <About />
            <Footer />
        </div>
    )
}