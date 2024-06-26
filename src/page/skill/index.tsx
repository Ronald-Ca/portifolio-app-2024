import Footer from "../home-page/footer"
import Header from "../home-page/header"
import Skills from "./skills"

export default function SkillPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Skills />
            <Footer />
        </div>
    )
}