import { useState } from "react";
import Button from "./Button";

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState("Starter");

    const plans = [
        {
            name: "Starter",
            price: "₦30,000 /mo.",
            features: [
                "On-demand deliveries",
                "Access to TruqMov dashboard",
                "Pay-per-delivery pricing",
                "Small e-commerce stores",
            ],
        },
        {
            name: "Growth",
            price: "₦85,000 /mo.",
            features: [
                "Discounted bulk rates",
                "Smart dispatch optimization",
                "Basic warehousing support",
                "Mid-size merchants scaling across cities",
            ],
        },
        {
            name: "Enterprise",
            price: "Custom Quote",
            features: [
                "Dedicated account manager",
                "Full API integration",
                "Advanced fulfillment & analytics",
                "High-volume or nationwide logistics",
            ],
        },
    ];

    return (
        <section id='pricing' className="py-16 bg-gradient-to-b from-white to-green-50 text-center">
            <div className="px-8 md:px-20">
                <h4 className="text-sm tracking-widest text-primary font-semibold mb-2">
                    PRICING
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Flexible Pricing for Every Business
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => {
                        const isSelected = selectedPlan === plan.name;

                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedPlan(plan.name)}
                                className={`rounded-2xl border cursor-pointer transition-all duration-200 ${
                                    isSelected
                                        ? "border-primary bg-white shadow-md scale-[1.02]"
                                        : "border-gray-200 bg-white hover:shadow-sm"
                                } p-6 text-left`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                                                isSelected
                                                    ? "border-primary"
                                                    : "border-gray-300"
                                            }`}
                                        >
                                            {isSelected && (
                                                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {plan.name}
                                        </h3>
                                    </div>

                                    <p className="text-gray-800 font-medium">
                                        {plan.price}
                                    </p>
                                </div>

                                <ul className="space-y-2 mb-4 text-gray-700">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-4">
                    <Button />
                </div>
            </div>
        </section>
    );
};

export default Pricing;