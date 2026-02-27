import { FAQ } from "@/types";

interface FAQBlockProps {
    faqs: FAQ[];
    serviceName: string;
    locationName: string;
}

// Rename export to match usage in page.tsx
export default function FAQMap({ faqs, serviceName, locationName }: FAQBlockProps) {
    return (
        <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    Common Questions about {serviceName} in {locationName}
                </h2>
                <div id="faq" className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-3 flex gap-3">
                                <span className="text-blue-500 font-bold">Q{index + 1}.</span>
                                {faq.question}
                            </h3>
                            <p className="text-slate-600 pl-10 leading-relaxed">
                                {faq.answer.replace(/{location}/g, locationName)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { FAQMap as FAQBlock };
