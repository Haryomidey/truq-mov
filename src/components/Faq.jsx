import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaQuestion } from "react-icons/fa";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Who can use Run?",
            answer:
                "TruqMov provides end-to-end logistics solutions, including pickup, warehousing, last-mile delivery, real-time tracking, and API integrations for e-commerce platforms. Whether you're a small seller or a large retailer, we help streamline your delivery operations.",
        },
        {
            question: "How can I integrate TruqMov with my online store?",
            answer:
                "You can connect your e-commerce platform directly through our dashboard or via API. We support major platforms like Shopify, WooCommerce, and custom solutions — making it easy to automate your deliveries.",
        },
        {
            question: "What areas does TruqMov cover?",
            answer:
                "TruqMov currently operates across major cities in Nigeria, with regional expansion across Africa in progress. We handle both intra-city and inter-state deliveries.",
        },
        {
            question: "How much does TruqMov cost?",
            answer:
                "Our pricing is flexible — you only pay for what you move. We offer Starter, Growth, and Enterprise plans, depending on your delivery volume. Visit our pricing section or Request a Demo to get a custom quote.",
        },
        {
            question: "How do I track my deliveries?",
            answer:
                "Every package shipped through TruqMov can be tracked in real time via our dashboard or tracking link. You'll see pickup, transit, and delivery status — all updated automatically.",
        },
    ];

    return (
        <section id='faq' className="py-16 px-8 md:px-20 bg-white text-center">
            <div className="max-w-4xl mx-auto">
                <h4 className="text-sm tracking-widest uppercase text-primary mb-2">
                    FAQ
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg shadow-sm overflow-hidden transition ${
                                openIndex === index
                                    ? "border-primary"
                                    : "border-gray-200"
                            }`}
                        >
                            <button
                                className="w-full flex justify-between items-center px-6 py-4 bg-[#FBFAFF] hover:bg-[#f3efff] transition"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary text-white p-2 rounded-md flex items-center justify-center w-7 h-7 flex-shrink-0">
                                        <FaQuestion className="text-sm" />
                                    </div>

                                    <span className="font-medium text-gray-900 text-left">
                                        {faq.question}
                                    </span>
                                </div>

                                {openIndex === index ? (
                                    <ChevronUp className="text-primary" />
                                ) : (
                                    <ChevronDown className="text-primary" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;