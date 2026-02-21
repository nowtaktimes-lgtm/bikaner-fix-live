import { Service, Location, SEOData } from "@/types";
import { siteConfig } from "@/config/siteConfig";

export const generateSEO = (service: Service, location: Location): SEOData => {
    // 1. Dynamic Text Replacement
    const title = service.heroTitle
        .replace("{location}", location.name)
        .replace("{service}", service.name);

    const description = service.metaDescription
        .replace("{location}", location.name)
        .replace("{landmark}", location.landmark)
        .replace("{service}", service.name);

    // 2. Schema Generation (LocalBusiness + Service)
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness", // Can be dynamic based on service type
        "name": `${service.name} in ${location.name}`,
        "image": "https://www.fixbikaner.in/default-service-image.jpg", // Placeholder
        "@id": `https://www.fixbikaner.in/${service.slug}/${location.slug}`,
        "url": `https://www.fixbikaner.in/${service.slug}/${location.slug}`,
        "telephone": siteConfig.contact.phone,
        "priceRange": service.priceStart,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bikaner",
            "addressRegion": "Rajasthan",
            "postalCode": location.pincode,
            "streetAddress": `${location.name}, Near ${location.landmark}`,
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.coordinates.lat,
            "longitude": location.coordinates.lng,
        },
        "areaServed": {
            "@type": "Place",
            "name": location.name
        },
        "description": description,
        "makesOffer": {
            "@type": "Offer",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "INR",
                "price": service.priceStart.replace(/[^0-9]/g, "") // Extract number from string like "₹199"
            },
            "itemOffered": {
                "@type": "Service",
                "name": service.name
            }
        },
        "faqPage": {
            "@type": "FAQPage",
            "mainEntity": service.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    };

    return {
        title,
        description,
        schema,
    };
};
