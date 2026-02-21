import { siteConfig } from "@/config/siteConfig";

export const metadata = {
    title: `Refund & Warranty Policy | ${siteConfig.name}`,
    description: "Understand our 30-day service warranty and refund/cancellation policies.",
};

export default function RefundPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Refund & Warranty Policy</h1>

            <div className="prose prose-slate max-w-none">
                <p>
                    At {siteConfig.name}, we strive for 100% customer satisfaction. However, we understand that issues may arise.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                    <h3 className="font-bold text-green-800 text-lg">30-Day Service Warranty</h3>
                    <p className="text-green-700">
                        We provide a 30-day warranty on all repairs and parts replaced by us. If the same issue explicitly reoccurs within 30 days, we will fix it for FREE.
                    </p>
                </div>

                <h2 className="text-xl font-semibold mt-6 mb-3">Cancellation Policy</h2>
                <p>
                    You can cancel your booking anytime before the technician arrives. Once the technician reaches your location, the base visit charge ({siteConfig.pricing.baseVisitCharge}) is applicable.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">Refund Eligibility</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li><strong>Spare Parts:</strong> Refunds on spare parts are subject to the manufacturer&apos;s warranty policy.</li>
                    <li><strong>Service Charges:</strong> Service charges are non-refundable once the service is satisfactorily completed.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-3">How to Claim Warranty</h2>
                <p>
                    To claim a warranty service, simply call us at <strong>{siteConfig.contact.phone}</strong> or message us on WhatsApp with your previous booking details.
                </p>
            </div>
        </div>
    );
}
