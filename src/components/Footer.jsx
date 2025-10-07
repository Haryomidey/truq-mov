import { Facebook, Twitter, Instagram } from "lucide-react";
import { Images } from "../assets/images";

const Footer = () => {
    return (
        <footer className="bg-white py-10 px-8 md:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-gray-700">
                <div className="space-y-2">
                    <img src={Images.logo} className="max-w-[120px]" />
                    <p className="text-sm text-gray-500">
                        © TruqMov Technologies, {new Date().getFullYear()}
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#home" className="hover:text-green-600">Home</a></li>
                        <li><a href="#about" className="hover:text-green-600">About us</a></li>
                        <li><a href="#how" className="hover:text-green-600">How it works</a></li>
                        <li><a href="#features" className="hover:text-green-600">Features</a></li>
                        <li><a href="#pricing" className="hover:text-green-600">Pricing</a></li>
                        <li><a href="#testimonials" className="hover:text-green-600">Testimonials</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                    <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                            <Twitter size={16} /> X (formerly Twitter)
                        </li>
                        <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                            <Instagram size={16} /> Instagram
                        </li>
                        <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                            <Facebook size={16} /> Facebook
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;