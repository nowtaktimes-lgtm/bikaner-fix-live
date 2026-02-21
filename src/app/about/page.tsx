import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, MapPin, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import { FomoToast } from "@/components/ui/FomoToast";

export const metadata = {
    title: "About Fix Bikaner | #1 Door-to-Door AC Repair Service in Bikaner",
    description: "Learn about Fix Bikaner, Bikaner's premier online home service business. We offer 100% door-to-door repair services for AC, RO, Fridge and more. No physical wait lines!",
};

export default function AboutPage() {
    return (
        <>
            <FomoToast locationName="Bikaner" isRotating={true} />

            {/* HEADER SECTION */}
            <section className="bg-slate-900 text-white pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-blue-200 text-xs md:text-sm font-semibold mb-6 border border-white/20 uppercase tracking-widest">
                        {siteConfig.contact.businessModel}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Bikaner&apos;s Trusted Home Service
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                        Born in Bikaner, built for Bikaner. We bring expert technicians right to your doorstep, so you never have to carry heavy appliances to a shop again.
                    </p>
                </div>
            </section>

            {/* CORE BUSINESS MODEL SECTION (To Satisfy E-E-A-T & GMB) */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Why We Built <span className="text-blue-600">Fix Bikaner</span>
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Reparing home appliances shouldn&apos;t mean wasting your entire Sunday. We noticed that traditional repair shops in Bikaner required customers to unplug heavy ACs or washing machines, hire a rickshaw, and wait days for a fix.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed font-semibold text-lg bg-blue-50 p-4 rounded-xl border border-blue-100">
                                Fix Bikaner is a <span className="text-blue-700">100% Online, Door-to-Door Service Network</span>. We do not have a physical customer storefront. When you book us, the &quot;shop&quot; comes to your house.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full mt-1">
                                        <ShieldCheck className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Verified Pros</h4>
                                        <p className="text-sm text-slate-600">Every technician is background-checked and highly skilled.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full mt-1">
                                        <Zap className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">30-Minute Dispatch</h4>
                                        <p className="text-sm text-slate-600">Our AI dispatch system sends the closest technician to your area instantly.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full mt-1">
                                        <Wrench className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">In-Home Repairs</h4>
                                        <p className="text-sm text-slate-600">90% of all repairs are completed right in front of your eyes at your home.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Address & Trust Card */}
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -z-0 opacity-50"></div>
                            <div className="relative z-10">
                                <MapPin className="w-12 h-12 text-blue-600 mb-6" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Operations Base</h3>
                                <p className="text-slate-500 mb-6 text-sm uppercase tracking-widest font-bold">Registered Office</p>

                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
                                    <p className="text-lg text-slate-800 font-medium leading-relaxed">
                                        {siteConfig.contact.address}
                                    </p>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-8 text-sm text-slate-700">
                                    <strong className="block text-yellow-800 mb-1">Important Notice for Customers:</strong>
                                    {siteConfig.contact.publicAddressDisclaimer} As an online-first business, customers cannot visit this address for repairs. All services are performed at your location.
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors">
                                        WhatsApp Us
                                    </a>
                                    <Link href="/contact" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold py-3 px-6 rounded-xl text-center transition-colors">
                                        Contact Support
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
