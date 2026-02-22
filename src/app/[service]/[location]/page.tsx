import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { isLocationActive } from "@/lib/zone-utils";
import { generateLocalStory } from "@/lib/content-logic";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { siteConfig } from "@/config/siteConfig";
import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getWeeklySeed } from "@/lib/dynamicEngine";

// Defines params as a Promise for Next.js 15+ Compatibility
interface PageProps {
    params: Promise<{
        service: string;
        location: string;
    }>;
}

// 0. ISR Configuration
export const dynamicParams = false; // Strictly enforce generating only active areas
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
    // Only pre-build pages for active zones configured in siteConfig to save build time
    // Other zones will be server-rendered on demand when they become active
    const paths: { service: string; location: string }[] = [];

    services.forEach((service) => {
        locations.forEach((location) => {
            if (siteConfig.activeZones.includes(location.zoneId)) {
                paths.push({
                    service: service.slug,
                    location: location.slug,
                });
            }
        });
    });

    return paths;
}

// 1. Dynamic Metadata Generation
export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const service = services.find((s) => s.slug === params.service);
    const location = locations.find((l) => l.slug === params.location);

    if (!service || !location || !isLocationActive(location.zoneId)) {
        return {};
    }

    const serviceSlug = service.slug;
    const locationSlug = location.slug;
    const serviceName = service.name || service.shortName || "Service";
    const locationName = location.name || "Bikaner";
    const visitCharge = service.priceStart.replace(/[^0-9]/g, '') || "199";
    const phone = siteConfig.phone || (siteConfig.contact && siteConfig.contact.phone) || "8946874020";

    // Get the weekly deterministic seed for this specific location
    const seed = getWeeklySeed(locationSlug);

    // --- HIGH-CTR TITLE TEMPLATES ---
    const titleTemplates = [
        `Expert ${serviceName} in ${locationName} - ₹${visitCharge} Visit | Fix Bikaner`,
        `Top-Rated ${serviceName} in ${locationName} | 30 Min Arrival`,
        `#1 ${serviceName} in ${locationName} | 30-Day Warranty`,
        `Fast ${serviceName} in ${locationName} - Just ₹${visitCharge} | Fix Bikaner`
    ];

    // --- HIGH-CTR DESCRIPTION TEMPLATES ---
    const descTemplates = [
        `Looking for ${serviceName} in ${locationName}? Get expert repair in 30 minutes. ₹${visitCharge} visit charge + 30-day warranty. Call Fix Bikaner now at ${phone}!`,
        `Fast & reliable ${serviceName} in ${locationName}. Our verified technicians arrive in 30 mins. 100% genuine parts and 30-day warranty. Book today!`,
        `Fix your appliance today! Expert ${serviceName} in ${locationName} starting at just ₹${visitCharge} for visit. 30-Day service guarantee. Call ${phone}.`,
        `Trusted ${serviceName} in ${locationName} (${location.landmark || 'Bikaner'}). AI-dispatched pros, transparent pricing (₹${visitCharge}), and 30-day warranty. Call ${phone}.`
    ];

    // Select templates based on the weekly seed
    const selectedTitle = titleTemplates[seed % titleTemplates.length];
    const selectedDesc = descTemplates[seed % descTemplates.length];

    const canonicalUrl = `${siteConfig.url}/${serviceSlug}/${locationSlug}`;
    const ogTitle = `${service.shortName} in ${location.name}`;
    const ogImage = `${siteConfig.url}/api/og?title=${encodeURIComponent(ogTitle)}&price=${encodeURIComponent(visitCharge)}&brand=${encodeURIComponent(siteConfig.name)}`;

    return {
        title: selectedTitle,
        description: selectedDesc,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: selectedTitle,
            description: selectedDesc,
            url: canonicalUrl,
            siteName: siteConfig.name || 'Fix Bikaner',
            locale: 'en_IN',
            type: 'website',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: ogTitle,
                }
            ]
        }
    };
}


// 2. The Master Page Component
export default async function DynamicServicePage(props: PageProps) {
    const params = await props.params;

    // Validate Parameters
    const service = services.find((s) => s.slug === params.service);
    const location = locations.find((l) => l.slug === params.location);

    // Validation Logic: 404 if invalid service/location/inactive zone
    if (!service || !location || !isLocationActive(location.zoneId)) {
        notFound();
    }

    // Smart Content Generation
    const story = generateLocalStory(service, location);

    // Dynamic Content Preparation
    const heroTitle = service.heroTitle
        .replace("{location}", location.name)
        .replace("{service}", service.name);


    const offerText = "Technician arriving in 30 mins near {landmark}. 100% Satisfaction Guaranteed."
        .replace("{landmark}", location.landmark);

    // Nearby Locations logic
    const nearbyAreas = locations
        .filter(l => l.zoneId === location.zoneId && l.id !== location.id)
        .slice(0, 3)
        .map(l => l.name);

    return (
        <>
            <SchemaMarkup service={service} location={location} />
            <ServicePageLayout
                service={service}
                location={location}
                story={story}
                heroTitle={heroTitle}
                mainOffer={offerText}
                nearbyAreas={nearbyAreas}
            />
        </>
    );
}
