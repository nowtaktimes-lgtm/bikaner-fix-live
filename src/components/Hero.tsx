import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface HeroProps {
    heroTitle: string;
    serviceName: string;
    locationName: string;
    mainOffer: string; // e.g. "Technician arriving in 30 mins near {landmark}."
    heroImage: string;
}

export function Hero({ heroTitle, serviceName, locationName, mainOffer, heroImage }: HeroProps) {
    // Replace placeholders in the offer text if they exist dynamically (though they should be pre-processed)
    // For safety, we display the passed prop directly assuming it's already processed by the parent.

    const sectionStyle: React.CSSProperties = { backgroundImage: `url(${heroImage})` };

    const sectionProps = { style: sectionStyle };

    return (
        <section
            className="relative text-white py-12 px-4 md:py-24 md:px-6 bg-slate-900 bg-cover bg-center"
            {...sectionProps}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-slate-900/80 md:bg-slate-900/70"></div>

            <div className="relative max-w-4xl mx-auto text-center z-10">
                <div className="hidden md:inline-block bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                    <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">
                        {locationName}&apos;s #1 {serviceName} Service
                    </span>
                </div>

                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight">
                    {heroTitle}
                </h1>

                <p className="hidden md:block text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                    {mainOffer}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-3 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20 text-sm md:text-base"
                    >
                        <Phone className="w-4 h-4 md:w-6 md:h-6" />
                        <span>Book Now - {siteConfig.pricing.baseVisitCharge} Visit</span>
                    </a>
                </div>

                <p className="hidden md:block mt-4 text-sm text-slate-400">
                    No hidden charges. Pay after service.
                </p>

                {/* Watermark Protection */}
                <div className="absolute bottom-4 right-4 text-white/10 text-xl font-bold rotate-[-12deg] pointer-events-none select-none">
                    {siteConfig.name} • {siteConfig.contact.phone}
                </div>
            </div>
        </section>
    );
}
