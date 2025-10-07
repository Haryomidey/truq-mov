import { useEffect, useState } from "react";
import { Images } from "../assets/images";
import Button from "./Button";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: "About us", id: "about" },
        { name: "How it Works", id: "how" },
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Faq", id: "faq" },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled || menuOpen
                    ? "bg-white shadow-md"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between py-7 px-6">
                <a
                    href="/"
                    onClick={() => scrollToSection("home")}
                    className="flex items-center space-x-2"
                >
                    <img src={Images.logo} className="max-w-[120px]" alt="Logo" />
                </a>

                <div className="hidden lg:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-700 hover:text-primary font-medium transition"
                        >
                            {item.name}
                        </button>
                    ))}
                    <Button />
                </div>

                <button
                    className="lg:hidden text-gray-700 text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-3 transition-all duration-300">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-700 hover:text-primary font-medium"
                        >
                            {item.name}
                        </button>
                    ))}
                    <button className="bg-primary text-white w-full px-4 py-2 rounded-md hover:bg-[#7d5bf4] transition">
                        Request a Demo
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;