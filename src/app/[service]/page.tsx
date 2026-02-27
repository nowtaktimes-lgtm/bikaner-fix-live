import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ServiceRootSchema } from "@/components/seo/ServiceRootSchema";

interface PageProps {
    params: Promise<{
        service: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((s) => ({
        service: s.slug,
    }));
}

export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const service = services.find((s) => s.slug === params.service);

    if (!service) return {};

    return {
        title: `${service.name} Services in Bikaner | Fix Bikaner`,
        description: `Looking for professional ${service.name.toLowerCase()} in Bikaner? Find certified technicians in your specific area. We serve all major residential colonies and wards in Bikaner.`,
        alternates: {
            canonical: `${siteConfig.url}/${service.slug}`,
        }
    };
}

export default async function ServiceRootPage(props: PageProps) {
    const params = await props.params;
    const service = services.find((s) => s.slug === params.service);

    if (!service) {
        notFound();
    }

    // Filter active locations only
    const activeLocations = locations
        .filter(l => siteConfig.activeZones.includes(l.zoneId))
        .sort((a, b) => a.name.localeCompare(b.name));

    // Group locations by segment (e.g. Urban vs Rural) for better UX
    const urbanLocations = activeLocations.filter(l => l.segment === "Urban");
    const ruralLocations = activeLocations.filter(l => l.segment === "Rural");


    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <ServiceRootSchema service={service} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={service.heroImage || "/default-service-image.jpg"}
                        alt={service.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6 flex items-center gap-2 w-max">
                            <MapPin className="w-4 h-4" /> Service Directory
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                            {service.name} <br className="hidden md:block" />
                            <span className="text-blue-400">Locations in Bikaner</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                            We dispatch expert, verified technicians to all major areas and wards in Bikaner. Select your locality below to view specialized pricing, technician details, and accurate arrival times for your area.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-300 font-medium pb-4 border-b border-slate-700/50">
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 30-Min Arrival</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Transparent Pricing</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 30-Day Warranty</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directory Grid */}
            <section className="container mx-auto px-4 md:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 mb-12">

                    {/* Urban Locations */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900">City Areas & Colonies</h2>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {urbanLocations.map((loc) => (
                                <Link
                                    key={loc.id}
                                    href={`/${service.slug}/${loc.slug}`}
                                    className="group flex flex-col justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300"
                                >
                                    <div>
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                                            {loc.name}
                                        </h3>
                                        {loc.landmark && (
                                            <p className="text-xs text-slate-500">Near {loc.landmark}</p>
                                        )}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-500">
                                        View Details
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Rural/Outer Locations */}
                    {ruralLocations.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900">Outer Ranges & Villages</h2>
                                <div className="h-px bg-slate-200 flex-1"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {ruralLocations.map((loc) => (
                                    <Link
                                        key={loc.id}
                                        href={`/${service.slug}/${loc.slug}`}
                                        className="group flex flex-col justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300"
                                    >
                                        <div>
                                            <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                                                {loc.name}
                                            </h3>
                                            {loc.landmark && (
                                                <p className="text-xs text-slate-500">Near {loc.landmark}</p>
                                            )}
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-500">
                                            View Details
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
