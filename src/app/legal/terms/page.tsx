import { siteConfig } from "@/config/siteConfig";

export const metadata = {
    title: `Terms of Service | ${siteConfig.name}`,
    description: "Terms and conditions for using Fix Bikaner services.",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <div className="prose prose-slate max-w-none">
                <p>
                    Welcome to {siteConfig.name}! These terms and conditions outline the rules and regulations for the use of our Website and Services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">1. Service Booking</h2>
                <p>
                    By booking a service through {siteConfig.name}, you agree to provide accurate details regarding your location and the nature of the problem. We reserve the right to cancel any booking if the location is outside our active service zones.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">2. Pricing & Payments</h2>
                <p>
                    Our base visit charge is <strong>{siteConfig.pricing.baseVisitCharge}</strong>. This amount is payable if our technician visits your premises and diagnoses the issue, even if you decide not to proceed with the repair. Final repair costs will be provided after diagnosis.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">3. User Responsibilities</h2>
                <p>
                    You agree to ensure a safe environment for our technicians. Aggressive behavior or refusal to pay the agreed charges may result in a permanent ban from our services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">4. Limitation of Liability</h2>
                <p>
                    {siteConfig.name} shall not be held reliable for any indirect damages arising from the use of your appliances. Our warranty covers only the specific part replaced or service performed.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">5. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms.
                </p>
            </div>
        </div>
    );
}
