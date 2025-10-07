import { Images } from "../assets/images";

const Hero = () => {
    return (
        <section
            className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-center px-6"
            style={{
                backgroundImage: `url(${Images.heroImage})`,
            }}
        >
            <div className="absolute inset-0 bg-[#ffffffc9] backdrop-blur-[1px]"></div>

            <div className="relative z-10 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Smarter Logistics for Africa's Growing E-commerce Market
                </h1>
                <p className="text-gray-800 mb-6">
                    TruqMov helps businesses move goods faster, smarter, and more affordably.
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition">
                    Request a Demo
                </button>
            </div>
        </section>
    );
};

export default Hero;
