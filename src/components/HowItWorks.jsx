import { FaStore, FaTruck, FaSearchLocation, FaSmile } from "react-icons/fa";
import { Images } from "../assets/images";
import Button from "./Button";

const HowItWorks = () => {
    const features = [
        {
            icon: <FaStore className="text-white text-2xl" />,
            title: "Integrate Your Store",
            description:
                "Connect your e-commerce platform or send delivery requests directly via the TruqMov dashboard.",
            iconBg: "#9772FE",
            mainBg: "#FBFAFF",
        },
        {
            icon: <FaTruck className="text-white text-2xl" />,
            title: "We Handle Fulfillment",
            description:
                "Our network of verified riders and truck partners pick up, sort, and move your goods efficiently.",
            iconBg: "#4EDFFE",
            mainBg: "#F0FCFF",
        },
        {
            icon: <FaSearchLocation className="text-white text-2xl" />,
            title: "Track in Real-Time",
            description:
                "Monitor every shipment from pickup to delivery — no more missing waybills or guessing where your order is.",
            iconBg: "#F2B8EB",
            mainBg: "#FDF6FD",
        },
        {
            icon: <FaSmile className="text-white text-2xl" />,
            title: "Deliver Delight",
            description:
                "Faster delivery times, satisfied customers, and lower logistics costs — that's the TruqMov effect.",
            iconBg: "#ADD6AE",
            mainBg: "#F8FCF8",
        },
    ];

    return (
        <section id='how' className="relative bg-gradient-to-tr from-[#b0ebe31c] via-[#FFFFFF] to-[#b0ebe32a] py-20 px-8 md:px-20">
            <img
                src={Images.truckRight}
                alt="Truck illustration"
                className="absolute top-0 left-0 w-40 md:w-60 opacity-90"
            />

            <div className="relative z-10 text-center mb-8 mt-12 sm:mt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    How TruqMov Works
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className="p-8 rounded-xl shadow-sm flex flex-col items-start space-y-4 transition-transform duration-200 hover:scale-[1.02]"
                        style={{ backgroundColor: item.mainBg }}
                    >
                        <div
                            className="p-3 rounded-lg shadow-md inline-flex"
                            style={{ backgroundColor: item.iconBg }}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                            {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex justify-center relative z-10">
                <Button />
            </div>
        </section>
    );
};

export default HowItWorks;