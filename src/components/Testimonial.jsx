import { VscQuote } from "react-icons/vsc";

const Testimonial = () => {
    const testimonials = [
        {
            quote: "TruqMov has completely transformed our delivery operations. Fast, transparent, and customer-focused.",
            name: "Adeola O.",
            title: "Founder, NaijaMarket",
        },
        {
            quote: "We used to struggle with late deliveries. With TruqMov, we now offer same-day delivery in Lagos – and our customers love it.",
            name: "Kemi A.",
            title: "Operations Lead, SwiftShop Africa",
        },
    ];

    return (
        <section id='testimonials' className="py-16 px-8 md:px-20 bg-gradient-to-b from-green-700 to-green-800 text-white text-center">
            <div className="max-w-5xl mx-auto">
                <h4 className="text-sm tracking-widest uppercase text-green-200 mb-2">
                    Testimonials
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    What Our Clients Are Saying
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-800 rounded-xl shadow-md p-8 relative"
                        >
                            <div className="absolute top-4 left-1/2 text-green-600 opacity-20">
                                <VscQuote className="text-4xl" />
                            </div>
                            <p className="italic leading-relaxed m-6 max-w-[350px] mx-auto">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-2 justify-center">
                                <p className="font-semibold text-gray-900">
                                    {t.name}
                                </p>
                                <p className="text-gray-600 text-sm">{t.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;