import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { isLocationActive } from "@/lib/zone-utils";
import { generateLocalStory } from "@/lib/content-logic";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { siteConfig } from "@/config/siteConfig";
import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

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

    const canonicalUrl = `${siteConfig.url}/${service.slug}/${location.slug}`;

    // Template: "{service.shortName} in {location.name} | Arriving in 30 Mins | {siteConfig.brandName}"
    const title = `${service.shortName} in ${location.name} | Arriving in 30 Mins | ${siteConfig.name}`;

    // Template: "Looking for {service.name} in {location.name}? Our technician is near {location.landmark}. {service.priceStart} Visit Charge. Call {siteConfig.phone}."
    // Support both siteConfig.phone (root) and siteConfig.contact.phone (legacy)
    const phone = siteConfig.phone || (siteConfig.contact && siteConfig.contact.phone) || "";
    const description = `Looking for ${service.name} in ${location.name}? Our technician is near ${location.landmark}. ${service.priceStart} Visit Charge. Call ${phone}.`;

    const ogTitle = `${service.shortName} in ${location.name}`;
    const ogImage = `${siteConfig.url}/api/og?title=${encodeURIComponent(ogTitle)}&price=${encodeURIComponent(service.priceStart.replace(/[^0-9]/g, ''))}&brand=${encodeURIComponent(siteConfig.name)}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
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
