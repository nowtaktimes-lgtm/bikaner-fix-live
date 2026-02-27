import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { applianceProblems } from "@/data/seo/applianceProblems";
import { siteConfig } from "@/config/siteConfig";
import { ServiceRootSchema } from "@/components/seo/ServiceRootSchema";
import { Hero } from "@/components/Hero";
import { TrustBlock } from "@/components/TrustBlock";
import { TechnicianCard } from "@/components/TechnicianCard";
import { FAQBlock } from "@/components/FAQMap";
import { StickyBottomBar } from "@/components/ui/StickyBottomBar";
import { ChatTestimonials } from "@/components/ui/ChatTestimonials";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FomoToast } from "@/components/ui/FomoToast";
import * as Icons from "lucide-react";


interface PageProps {
    params: Promise<{
        service: string;
        problem: string;
        location: string;
    }>;
}


// Pre-render the most important locations and problems to save build time
export async function generateStaticParams() {
    type ParamType = {
        service: string;
        problem: string;
        location: string;
    }
    const params: ParamType[] = [];
    const highPriorityZones = siteConfig.activeZones; // Only prebuild active zones

    services.forEach((service) => {
        const problems = applianceProblems[service.slug] || [];
        locations.forEach((location) => {
            if (highPriorityZones.includes(location.zoneId)) {
                problems.forEach((problem) => {
                    params.push({
                        service: service.slug,
                        problem: problem.id,
                        location: location.slug
                    });
                });
            }
        });
    });

    return params;
}


export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const service = services.find((s) => s.slug === params.service);
    const location = locations.find((l) => l.slug === params.location);
    const problems = applianceProblems[params.service] || [];
    const problem = problems.find((p) => p.id === params.problem);

    if (!service || !location || !problem) return {};

    const baseTitle = `${problem.name} Fix in ${location.name} | ${service.shortName}`;

    return {
        title: baseTitle,
        description: `Facing ${problem.name.toLowerCase()} issues? Fix Bikaner provides fast, verified ${service.shortName} near ${location.name}. ${problem.estimatedCostPreview}.`,
        alternates: {
            canonical: `${siteConfig.url}/${service.slug}/${problem.id}/${location.slug}`,
        }
    };
}


export default async function ProgrammaticProblemPage(props: PageProps) {
    const params = await props.params;

    const service = services.find((s) => s.slug === params.service);
    const location = locations.find((l) => l.slug === params.location);
    const problems = applianceProblems[params.service] || [];
    const problemRecord = problems.find((p) => p.id === params.problem);

    if (!service || !location || !problemRecord) {
        notFound();
    }

    // Dynamic problem-solving text
    const localizedHeroTitle = `Fastest Fix for ${problemRecord.name} in ${location.name}`;
    const mappedNearbyAreas = locations
        .filter((l) => l.zoneId === location.zoneId && l.slug !== location.slug)
        .slice(0, 3)
        .map((l) => l.name);

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">
            {/* Note: In a real environment, you might create a more specific schema for problem articles */}
            <ServiceRootSchema service={service} />
            <FomoToast locationName={location.name} serviceName={service.name} />

            <div className="relative">
                <Hero
                    heroTitle={localizedHeroTitle}
                    serviceName={service.shortName}
                    locationName={location.name}
                    mainOffer={problemRecord.estimatedCostPreview}
                    heroImage={service.heroImage}
                />
            </div>

            <TrustBlock
                locationName={location.name}
                nearbyAreas={mappedNearbyAreas.length > 0 ? mappedNearbyAreas : ["Bikaner"]}
            />

            <div className="container mx-auto px-4 py-4 md:py-8">
                <Breadcrumbs
                    items={[
                        { label: service.shortName, href: `/${service.slug}` },
                        { label: location.name, href: `/${service.slug}/${location.slug}` },
                        { label: problemRecord.name }
                    ]}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
                    <div className="lg:col-span-2">

                        {/* SEO Content Injection Block */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                                Is your {service.shortName} {problemRecord.name.toLowerCase()} in {location.name}?
                            </h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-slate-600 font-medium mb-6">
                                    {problemRecord.shortDescription}
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg mb-6">
                                    <h3 className="text-red-800 font-semibold mb-2 flex items-center gap-2">
                                        <Icons.AlertTriangle className="w-5 h-5" />
                                        Urgency: {problemRecord.urgency} Action Required
                                    </h3>
                                    <p className="text-red-700 text-sm">Ignoring this issue might lead to permanent machine failure or higher electricity bills. Immediate inspection is recommended.</p>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3 block">How we fix it:</h3>
                                <p className="text-slate-600 mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    {problemRecord.solutionPreview}
                                </p>

                                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">Pricing Guide:</h4>
                                        <p className="text-green-700 font-bold font-mono bg-green-50 px-3 py-1 rounded inline-block">
                                            {problemRecord.estimatedCostPreview}
                                        </p>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform hover:scale-105">
                                        Book Inspector Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <TrustSignals />
                        </div>

                        <FAQBlock
                            faqs={service.faqs}
                            serviceName={service.name}
                            locationName={location.name}
                        />

                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <TechnicianCard locationName={location.name} serviceName={service.shortName} />
                        </div>
                    </div>
                </div>

                <ChatTestimonials testimonials={service.testimonials} />
            </div>

            <StickyBottomBar serviceName={problemRecord.name} locationName={location.name} />
        </div>
    );
}
