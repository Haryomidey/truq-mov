import About from "./components/About";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

const App = () => {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <HowItWorks />
            <Features />
            <Pricing />
            <Testimonial />
            <Faq />
            <Footer />
        </main>
    )
}

export default App;