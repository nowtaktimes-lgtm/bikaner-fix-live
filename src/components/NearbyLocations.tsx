import Link from "next/link";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { siteConfig } from "@/config/siteConfig";

interface NearbyLocationsProps {
    currentZoneId: number;
    currentLocationSlug: string;
    currentServiceSlug: string;
    currentServiceName?: string;
}

export function NearbyLocations({ currentZoneId, currentLocationSlug, currentServiceSlug, currentServiceName = "Service" }: NearbyLocationsProps) {
    // 1. Filter: Same Zone, Active, Not Current
    const nearby = locations
        .filter(l =>
            l.zoneId === currentZoneId &&
            l.slug !== currentLocationSlug &&
            siteConfig.activeZones.includes(l.zoneId)
        )
        // 2. Deterministic Sort (by Name) to prevent Hydration Errors
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 8); // Show max 8

    if (nearby.length === 0) return null;

    return (
        <section className="py-12 bg-white rounded-3xl shadow-sm border border-slate-100 mb-8 mt-4 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">
                    Serving Nearby Areas
                </h3>
                <p className="text-sm text-slate-500 mb-6">Can&apos;t find your exact location? Check our service availability in adjacent wards and colonies.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                    {nearby.map((loc) => (
                        <Link
                            key={loc.id}
                            href={`/${currentServiceSlug}/${loc.slug}`}
                            prefetch={false}
                            className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
                        >
                            {/* Make the anchor text rich for SEO */}
                            {currentServiceName} in {loc.name}
                        </Link>
                    ))}
                </div>

                <div className="pt-6 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Other Popular Services</h4>
                    <div className="flex flex-wrap items-center gap-3 gap-y-2">
                        {services
                            .filter(s => s.slug !== currentServiceSlug)
                            .slice(0, 4)
                            .map((s, index, arr) => (
                                <div key={s.id} className="flex items-center gap-3">
                                    <Link href={`/${s.slug}/${currentLocationSlug || 'bikaner'}`} className="text-sm text-blue-600 hover:underline">
                                        {s.name}
                                    </Link>
                                    {index < arr.length - 1 && <span className="text-slate-300">•</span>}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
