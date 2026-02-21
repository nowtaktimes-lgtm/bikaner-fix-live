import { siteConfig } from "@/config/siteConfig";

export const isLocationActive = (zoneId: number) => {
    return siteConfig.activeZones.includes(zoneId);
};

export const getActiveLocations = (locations: any[]) => {
    return locations.filter((loc) => isLocationActive(loc.zoneId));
};
