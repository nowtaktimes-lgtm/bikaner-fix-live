import { Service } from "@/types";
import { siteConfig } from "@/config/siteConfig";

interface ServiceRootSchemaProps {
    service: Service;
}

export function ServiceRootSchema({ service }: ServiceRootSchemaProps) {
    // 1. LocalBusiness / Service Schema without specific location
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": `${service.name} Services in Bikaner - Fix Bikaner`,
        "image": service.heroImage ? service.heroImage : `${siteConfig.url}/default-service-image.jpg`,
        "@id": `${siteConfig.url}/${service.slug}#localbusiness`,
        "url": `${siteConfig.url}/${service.slug}`,
        "telephone": siteConfig.contact.phone,
        "priceRange": service.priceStart,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bikaner",
            "addressRegion": "Rajasthan",
            "postalCode": "334001",
            "streetAddress": "Bikaner City",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.0229,
            "longitude": 73.3119,
        },
        "areaServed": {
            "@type": "City",
            "name": "Bikaner",
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "214"
        }
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
                "item": `${siteConfig.url}/`,
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": service.name,
                "item": `${siteConfig.url}/${service.slug}`,
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
