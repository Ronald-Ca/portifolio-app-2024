import { useState } from "react";
import Body from "./home-page/body";
import Footer from "./home-page/footer";
import Header from "./home-page/header";
import Projects from "./projects/projects";
import Skills from "./skill/skills";
import Contact from "./contact/contact";
import About from "./about/about";

export default function HomePage() {
    const [section, setSection] = useState('body')

    const renderSection = () => {
        switch (section) {
            case 'projects':
                return <Projects />
            case 'skills':
                return <Skills />
            case 'contact':
                return <Contact />
            case 'about':
                return <About />
            default:
                return <Body />
        }
    }

    return (
        <div className="h-screen flex flex-col">
            <Header setSection={setSection} />
            <div className="flex-grow">{renderSection()}</div>
            <Footer />
        </div>
    )
}
