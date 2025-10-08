import { FaHeadset, FaSearchLocation, FaTruckLoading, FaBox } from "react-icons/fa";
import { Images } from "../assets/images";

const Features = () => {
    const features = [
        {
            icon: <FaHeadset className="text-white text-2xl" />,
            title: "Customer Support",
            description:
                "Dedicated support team available to resolve issues quickly and efficiently.",
            iconBg: "#9772FE",
            mainBg: "#FBFAFF",
        },
        {
            icon: <FaSearchLocation className="text-white text-2xl" />,
            title: "Real-Time Tracking",
            description:
                "Stay informed with instant order visibility for both merchants and customers.",
            iconBg: "#4EDFFE",
            mainBg: "#F0FCFF",
        },
        {
            icon: <FaTruckLoading className="text-white text-2xl" />,
            title: "Warehousing & Fulfillment",
            description:
                "Strategically located hubs to help you store, pack, and ship seamlessly.",
            iconBg: "#F2B8EB",
            mainBg: "#FDF6FD",
        },
        {
            icon: <FaBox className="text-white text-2xl" />,
            title: "Scalable Pricing",
            description:
                "Flexible delivery options that grow with your business — pay for what you use.",
            iconBg: "#ADD6AE",
            mainBg: "#F8FCF8",
        },
    ];

    return (
        <section id='features' className="relative bg-gradient-to-tr from-[#b0ebe31c] via-[#FFFFFF] to-[#b0ebe32a] py-20 px-8 md:px-20 overflow-hidden">
            <img
                src={Images.truckLeft}
                alt="Truck illustration"
                className="absolute top-0 right-0 w-24 md:w-40 opacity-90"
            />

            <div className="relative z-10 text-center mb-12 mt-16">
                <p className="uppercase text-sm font-medium tracking-wider text-green-600 mb-2">
                    Features
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Why Businesses Choose TruqMov
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className="p-8 rounded-xl shadow-sm flex flex-col items-start space-y-4 transition-transform duration-200 hover:scale-[1.03]"
                        style={{ backgroundColor: item.mainBg }}
                    >
                        <div
                            className="p-3 rounded-lg shadow-md inline-flex"
                            style={{ backgroundColor: item.iconBg }}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;