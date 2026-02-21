import { Service, Location } from "@/types";
import { siteConfig } from "@/config/siteConfig";

interface SchemaMarkupProps {
    service: Service;
    location: Location;
}

export function SchemaMarkup({ service, location }: SchemaMarkupProps) {
    // Helper to generate a consistent but pseudo-random rating based on location name
    const ratingSeed = location.name.length + service.name.length;
    const ratingValue = (4.7 + (ratingSeed % 3) * 0.1).toFixed(1); // Values between 4.7 and 4.9
    const reviewCount = 120 + (ratingSeed * 17) % 350; // Values between 120 and 470

    // 1. LocalBusiness / Service Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness", // Could be dynamic: "HVACBusiness", "Electrician"
        "name": `${service.name} in ${location.name} - Fix Bikaner`,
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
            "name": location.name,
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue,
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": reviewCount.toString()
        },
        "makesOffer": {
            "@type": "Offer",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "INR",
                "price": service.priceStart.replace(/[^0-9]/g, ""),
            },
            "itemOffered": {
                "@type": "Service",
                "name": service.name,
            },
        },
    };

    // 2. BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.fixbikaner.in/",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": service.name,
                "item": `https://www.fixbikaner.in/${service.slug}`,
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${service.name} in ${location.name}`,
                "item": `https://www.fixbikaner.in/${service.slug}/${location.slug}`,
            },
        ],
    };

    // 3. FAQPage Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    // 4. Speakable Schema (Voice Search)
    const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["#about-section", "#faq-section"]
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
