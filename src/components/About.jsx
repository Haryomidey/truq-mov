import { Images } from "../assets/images";
import Button from "./Button";

const About = () => {
    return (
        <section id='about' className="flex flex-col md:flex-row items-center justify-between px-8 mb-16 md:px-20 py-16 bg-white">
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About us</h2>

                <p className="text-gray-700 leading-relaxed">
                    TruqMov is a technology-driven 3PL (Third-Party Logistics)
                    company built for Africa's fast-growing e-commerce ecosystem.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    We bridge the gap between online stores and customers with a seamless logistics network powered by data, transparency, and trust.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Our mission is simple - to make moving goods across Africa easy, reliable, and scalable for every business, from startups to enterprise retailers.
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nationwide and cross-border delivery</li>
                    <li>Smart routing & dispatch optimization</li>
                    <li>Real-time order tracking for merchants and customers</li>
                    <li>Scalable warehousing & fulfillment solutions</li>
                </ul>

                <Button />
            </div>

            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <img
                    src={Images.truckStorage}
                    alt="Logistics truck illustration"
                    className="w-full max-w-lg rounded-lg"
                />
            </div>
        </section>
    );
};

export default About;