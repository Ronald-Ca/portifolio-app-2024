import Body from "./home-page/body";
import Footer from "./home-page/footer";
import Header from "./home-page/header";

export default function HomePage() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
