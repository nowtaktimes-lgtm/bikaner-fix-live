import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Fix Bikaner",
    description: "Contact Fix Bikaner for AC Repair, RO Service, and Home Appliance Repair. Call 8946874020.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
                    <p className="text-slate-600 text-lg">
                        Need help with your home appliances? We are just a call away.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
                        <h2 className="text-xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Phone</h3>
                                    <p className="text-slate-500 text-sm mb-1">Mon-Sun, 8am - 8pm</p>
                                    <a href={`tel:${siteConfig.contact.phone}`} className="text-lg font-bold text-blue-600 hover:underline">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Email</h3>
                                    <p className="text-slate-500 text-sm mb-1">For queries & support</p>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-bold text-blue-600 hover:underline">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Office Address</h3>
                                    <p className="text-slate-600 mb-3">
                                        {siteConfig.contact.address}
                                    </p>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg text-xs text-slate-700 font-medium">
                                        {siteConfig.contact.publicAddressDisclaimer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Action Card */}
                    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-4">Emergency Repair?</h2>
                            <p className="text-slate-300 mb-6">
                                If you need urgent AC or Fridge repair, don&apos;t wait for emails. Call our hotline directly for 30-minute arrival.
                            </p>
                            <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-8">
                                <Clock className="w-5 h-5" />
                                <span>30 Minute Arrival Guarantee</span>
                            </div>
                        </div>

                        <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-center shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-3"
                        >
                            <Phone className="w-6 h-6 animate-pulse" />
                            Call {siteConfig.contact.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
