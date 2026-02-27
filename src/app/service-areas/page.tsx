"use client";

import { locations } from "@/data/locations";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, ArrowRight, ShieldCheck, Home } from "lucide-react";

export default function ServiceAreasPage() {
    // 1. Get ALL locations to show scale, regardless of active zone
    // We will conditionally disable links for inactive zones
    const allLocations = locations;

    // 2. Separate by Zone Activeness
    const activeLocations = allLocations.filter(l => siteConfig.activeZones.includes(l.zoneId));
    const inactiveLocations = allLocations.filter(l => !siteConfig.activeZones.includes(l.zoneId));

    // 3. Group Active by Segment
    const activeUrban = activeLocations.filter(l => l.segment === "Urban").sort((a, b) => a.name.localeCompare(b.name));
    const activeRural = activeLocations.filter(l => l.segment === "Rural").sort((a, b) => a.name.localeCompare(b.name));

    // 4. Group Inactive by Segment
    const inactiveUrban = inactiveLocations.filter(l => l.segment === "Urban").sort((a, b) => a.name.localeCompare(b.name));
    const inactiveRural = inactiveLocations.filter(l => l.segment === "Rural").sort((a, b) => a.name.localeCompare(b.name));

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        Serving 500+ Neighborhoods
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Bikaner Home Service Areas
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From the historic lanes of the old city to the modern outskirts, Fix Bikaner&apos;s verified expert technicians are available everywhere for AC Repair, RO Service, and more in less than 45 minutes.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* --- ACTIVE ZONES --- */}
                <div className="mb-20">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Currently Active Service Areas</h2>
                        <p className="text-slate-600 text-lg">
                            We currently provide lightning-fast, 45-minute doorstep service across all major urban and prominent rural zones in Bikaner. Select your neighborhood below to book top-rated electricians, AC mechanics, or RO repair experts instantly.
                        </p>
                    </div>

                    {/* Active Urban Areas */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3 block">
                            <Home className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800">Bikaner City & Urban Centers</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {activeUrban.map((loc) => (
                                <a
                                    key={loc.id}
                                    href={`/ac-repair-service/${loc.slug}`}
                                    className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-md transition-all flex items-center justify-between"
                                >
                                    <div>
                                        <div className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{loc.name}</div>
                                        <div className="text-xs text-slate-400 mt-1">{loc.pincode} • Near {loc.landmark}</div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Active Rural / Suburbs */}
                    {activeRural.length > 0 && (
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3 block">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Suburbs & Rural Limits</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {activeRural.map((loc) => (
                                    <a
                                        key={loc.id}
                                        href={`/ac-repair-service/${loc.slug}`}
                                        className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-500 hover:shadow-md transition-all flex items-center justify-between"
                                    >
                                        <div>
                                            <div className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{loc.name}</div>
                                            <div className="text-xs text-slate-400 mt-1">{loc.pincode} • Extra Travel Time</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>


                {/* --- FUTURE ZONES --- */}
                <div className="pt-20 border-t-2 border-dashed border-slate-200">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Expanding Soon</div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Upcoming Expansion Neighborhoods</h2>
                        <p className="text-slate-600 text-lg">
                            We are rapidly building our technician fleet to cover every single corner of Bikaner district. The following 450+ neighborhoods are currently in our expansion phase. If you live here, hold tight—premium home services are coming directly to you soon!
                        </p>
                    </div>

                    {/* Inactive Urban Areas */}
                    {inactiveUrban.length > 0 && (
                        <div className="mb-16">
                            <h3 className="text-lg font-bold text-slate-500 mb-6 uppercase tracking-wider">Future Urban Zones</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {inactiveUrban.map((loc) => (
                                    <div key={loc.id} className="bg-slate-100/50 border border-slate-200/60 rounded-lg p-3">
                                        <div className="font-semibold text-slate-500 text-sm truncate">{loc.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Inactive Rural Areas */}
                    {inactiveRural.length > 0 && (
                        <div className="mb-16">
                            <h3 className="text-lg font-bold text-slate-500 mb-6 uppercase tracking-wider">Future Rural Zones</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {inactiveRural.map((loc) => (
                                    <div key={loc.id} className="bg-slate-100/50 border border-slate-200/60 rounded-lg p-3">
                                        <div className="font-semibold text-slate-500 text-sm truncate">{loc.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Trust Footer inside page */}
                <div className="bg-gradient-to-r from-blue-700 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white mt-12 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-blue-300" />
                    <h3 className="text-3xl font-extrabold mb-4">Can&apos;t find your exact area?</h3>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        We have expanded! Fix Bikaner now covers up to 60km around Bikaner city, Nokha, and Deshnoke, reaching 500+ regional neighborhoods directly at your doorstep.
                    </p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="inline-flex items-center justify-center bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-white/10 active:scale-95">
                        Call to Confirm Booking
                    </a>
                </div>

            </div>
        </main>
    );
}
