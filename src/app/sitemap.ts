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

    // 2. Dynamic Service Pages (Filtered by Active Zones)
    services.forEach((service) => {
        locations.forEach((location) => {
            // THE FILTER: Only include if zone is active
            if (siteConfig.activeZones.includes(location.zoneId)) {
                routes.push({
                    url: `${baseUrl}/${service.slug}/${location.slug}`,
                    lastModified: new Date(),
                    changeFrequency: "weekly",
                    priority: 0.9,
                });
            }
        });

        // Also add Service Main Pages if we had them (e.g. /ac-repair)
        // For now, we only have the leaf nodes [service]/[location]
    });

    return routes;
}
