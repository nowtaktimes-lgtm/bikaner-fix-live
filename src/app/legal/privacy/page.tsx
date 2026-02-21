import { siteConfig } from "@/config/siteConfig";

export const metadata = {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: "Read our privacy policy to understand how we handle your data.",
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-slate-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-slate max-w-none">
                <p>
                    At {siteConfig.name}, accessible from {siteConfig.url}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {siteConfig.name} and how we use it.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
                <p>
                    When you use our &quot;Get Quote&quot; or &quot;Book Now&quot; features, we may ask for your Name, Phone Number, and Address to provide the requested service. We do not sell this data to third parties.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>To provide and operate our services (AC Repair, RO Service, etc.).</li>
                    <li>To improve, personalize, and expand our website.</li>
                    <li>To communicate with you regarding your booking or inquiry.</li>
                    <li>To send you updates or promotional offers (only if you opt-in).</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-3">Log Files</h2>
                <p>
                    {siteConfig.name} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services&apos; analytics.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
                <p>
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
                <p className="mt-2">
                    <strong>Email:</strong> {siteConfig.contact.email}<br />
                    <strong>Phone:</strong> {siteConfig.contact.phone}
                </p>
            </div>
        </div>
    );
}
