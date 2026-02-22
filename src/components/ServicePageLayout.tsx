"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Service, Location } from "@/types"; // You might need to export ContentStory from types or just inline it
import { services } from "@/data/services";
import { Hero } from "@/components/Hero";
import { TrustBlock } from "@/components/TrustBlock";
import { TechnicianCard } from "@/components/TechnicianCard";
import { FAQBlock } from "@/components/FAQMap";
import { StickyBottomBar } from "@/components/ui/StickyBottomBar";
import { FomoToast } from "@/components/ui/FomoToast";
import { LeadForm } from "@/components/forms/LeadForm";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PricingCalculator } from "@/components/ui/PricingCalculator";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { NearbyLocations } from "@/components/NearbyLocations";
import { OpenStatusBadge } from "@/components/ui/OpenStatusBadge";
import { ChatTestimonials } from "@/components/ui/ChatTestimonials";
import { RichTextWithLinks } from "@/components/ui/RichTextWithLinks";
import Link from "next/link";
import * as Icons from "lucide-react";

interface ServicePageLayoutProps {
    service: Service;
    location: Location;
    story: { introText: string; problemText: string; whyUsText: string };
    heroTitle: string;
    mainOffer: string;
    nearbyAreas: string[];
}

export function ServicePageLayout({
    service,
    location,
    story,
    heroTitle,
    mainOffer,
    nearbyAreas,
}: ServicePageLayoutProps) {
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
    const [isSeoExpanded, setIsSeoExpanded] = useState(false);
    const [isNearbyExpanded, setIsNearbyExpanded] = useState(false);

    console.log("ServicePageLayout Rendering:", { serviceName: service?.name, locationName: location?.name });

    if (!service || !location) {
        return <div className="p-10 text-red-500 font-bold">Error: Missing Service or Location Data</div>;
    }

    return (
        <div className="w-full flex flex-col md:block bg-slate-50 relative font-sans pb-6 md:pb-0">
            {/* Interactive Elements */}
            <FomoToast locationName={location.name} serviceName={service.name} />
            <LeadForm
                isOpen={isLeadFormOpen}
                onClose={() => setIsLeadFormOpen(false)}
                serviceName={service.name}
            />


            <div className="relative">
                <div className="absolute top-4 left-4 z-10 md:hidden">
                    <OpenStatusBadge />
                </div>
                <div onClick={() => setIsLeadFormOpen(true)}>
                    <Hero
                        heroTitle={heroTitle}
                        serviceName={service.shortName}
                        locationName={location.name}
                        mainOffer={mainOffer}
                        heroImage={service.heroImage}
                    />
                </div>
            </div>

            <TrustBlock
                locationName={location.name}
                nearbyAreas={nearbyAreas.length > 0 ? nearbyAreas : ["Bikaner"]}
            />

            <div className="container mx-auto px-4 py-4 md:py-8">
                {/* SEO Breadcrumbs */}
                <Breadcrumbs
                    items={[
                        { label: "Services", href: "/#services" },
                        { label: service.name, href: `/service-areas` },
                        { label: location.name }
                    ]}
                />

                {/* Interactive Pricing Estimator */}
                <div className="mb-6 md:mb-8 mt-4">
                    <PricingCalculator
                        serviceName={service.name}
                        locationName={location.name}
                        baseVisitCharge={service.priceStart}
                    />
                </div>

                {/* Deep Clean Visual Proof */}
                <div className="mb-6 md:mb-8">
                    <BeforeAfterSlider
                        beforeImage={service.beforeImage}
                        afterImage={service.afterImage}
                    />
                </div>

                {/* Trust Signals Row */}
                <div className="mb-6 md:mb-8">
                    <TrustSignals />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="lg:col-span-2">
                        {/* SEO / Story Section - Accordion on Mobile */}
                        <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 mb-6 md:mb-8">
                            <div
                                className="flex justify-between items-center cursor-pointer md:cursor-auto md:mb-4"
                                onClick={() => setIsSeoExpanded(!isSeoExpanded)}
                            >
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900">About {service.name} in {location.name}</h2>
                                <button className="md:hidden text-blue-600 bg-blue-50 p-1.5 rounded-full" aria-label="Toggle details">
                                    {isSeoExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                            </div>

                            <div className={`${isSeoExpanded ? 'block mt-4 md:mt-0' : 'hidden md:block'}`}>
                                <div id="about-section" className="space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base">
                                    <p><RichTextWithLinks content={story.introText} currentLocationSlug={location.slug} /></p>
                                    <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-4 border-blue-500">
                                        <p className="font-medium text-blue-900 mb-1">The Local Challenge:</p>
                                        <p><RichTextWithLinks content={story.problemText} currentLocationSlug={location.slug} /></p>
                                    </div>
                                    <p><strong>Why Choose Us?</strong> <RichTextWithLinks content={story.whyUsText} currentLocationSlug={location.slug} /></p>
                                </div>

                                <div className="mt-5 pt-5 md:mt-6 md:pt-6 border-t border-slate-100">
                                    <h3 className="font-semibold text-base md:text-lg mb-2 text-slate-800">Why Residents Trust Fix Bikaner?</h3>
                                    <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base text-slate-600 ml-1 md:ml-2">
                                        <li>30 Minutes Arrival Time</li>
                                        <li>Transparent Pricing (Starting {service.priceStart})</li>
                                        <li>Experienced & Verified Technicians</li>
                                        <li>30 Days Service Warranty</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <FAQBlock
                            faqs={service.faqs}
                            serviceName={service.name}
                            locationName={location.name}
                        />
                    </div>
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <TechnicianCard locationName={location.name} serviceName={service.name} />

                            {/* Desktop CTA Trigger */}
                            <button
                                onClick={() => setIsLeadFormOpen(true)}
                                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-xl transition-transform hover:scale-105 hidden lg:block"
                            >
                                Get Instant Quote
                            </button>
                        </div>
                    </div>
                </div>
                <ChatTestimonials testimonials={service.testimonials} />

                {/* Nearby Locations - Toggleable on Mobile */}
                <div className="mt-8 mb-6">
                    <div className="md:hidden flex justify-center mb-4">
                        <button
                            onClick={() => setIsNearbyExpanded(!isNearbyExpanded)}
                            className="flex items-center gap-2 text-blue-600 font-semibold bg-blue-50 px-6 py-2 rounded-full border border-blue-100"
                        >
                            {isNearbyExpanded ? (
                                <>View Less <ChevronUp className="w-4 h-4" /></>
                            ) : (
                                <>View Nearby Service Areas <ChevronDown className="w-4 h-4" /></>
                            )}
                        </button>
                    </div>

                    <div className={`${isNearbyExpanded ? 'block' : 'hidden md:block'}`}>
                        <NearbyLocations
                            currentZoneId={location.zoneId}
                            currentLocationSlug={location.slug}
                            currentServiceSlug={service.slug}
                            currentServiceName={service.shortName}
                        />
                    </div>
                </div>

                {/* Related Services in the Same Location */}
                <div className="mt-8 mb-6 border-t border-slate-200 pt-8">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
                        Other Services in {location.name}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                        {services.filter(s => s.slug !== service.slug).map((relatedService) => {
                            const IconComponent = Icons[relatedService.icon as keyof typeof Icons] as React.ElementType || Icons.Wrench;
                            return (
                                <Link
                                    key={relatedService.slug}
                                    href={`/${relatedService.slug}/${location.slug}`}
                                    className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group"
                                >
                                    <div className="bg-blue-50 text-blue-600 p-3 rounded-full mb-3 group-hover:scale-110 group-hover:bg-blue-100 transition-transform">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 text-center line-clamp-2">
                                        {relatedService.shortName}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>


            <StickyBottomBar serviceName={service.name} locationName={location.name} />
        </div >
    );
}
