import { useState } from "react";
import { Images } from "../assets/images";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "About us", id: "about" },
        { name: "How it Wors", id: "how" },
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

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between py-7 px-6">
                <a
                    href="/"
                    onClick={() => scrollToSection("home")}
                    className="flex items-center space-x-2"
                >
                    <img src={Images.logo} className="max-w-[120px]" />
                </a>

                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-700 hover:text-primary font-medium"
                        >
                            {item.name}
                        </button>
                    ))}

                    <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                        Request a Demo
                    </button>
                </div>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-3">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-700 hover:text-primary font-medium"
                        >
                            {item.name}
                        </button>
                    ))}
                    <button className="bg-primary text-white w-full px-4 py-2 rounded-md hover:bg-green-700 transition">
                        Request a Demo
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;