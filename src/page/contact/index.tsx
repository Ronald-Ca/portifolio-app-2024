import Footer from "../home-page/footer"
import Header from "../home-page/header"
import Contact from "./contact"

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Contact />
            <Footer />
        </div>
    )
}