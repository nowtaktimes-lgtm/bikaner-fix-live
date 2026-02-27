import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { siteConfig } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // 1. Static Routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
    ];

    const staticPages = [
        "/about",
        "/contact",
        "/service-areas",
        "/legal/privacy",
        "/legal/terms",
        "/legal/refund"
    ];

    staticPages.forEach((page) => {
        routes.push({
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        });
    });

    // 2. Service Directory Hub Pages (e.g. /ac-repair-service)
    services.forEach((service) => {
        routes.push({
            url: `${baseUrl}/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        });

        // 3. Dynamic Location Service Pages (e.g. /ac-repair-service/bikaner)
        locations.forEach((location) => {
            if (siteConfig.activeZones.includes(location.zoneId)) {
                routes.push({
                    url: `${baseUrl}/${service.slug}/${location.slug}`,
                    lastModified: new Date(),
                    changeFrequency: "weekly",
                    priority: 0.7, // Lower priority than Hub Page
                });
            }
        });
    });

    return routes;
}
