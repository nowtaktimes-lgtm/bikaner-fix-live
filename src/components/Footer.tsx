import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 pb-24 md:pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">{siteConfig.name}</h2>
                        <p className="text-sm text-slate-400 mb-4 max-w-xs">{siteConfig.description}</p>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-blue-400" />
                                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span>Bikaner, Rajasthan</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 text-blue-300 font-semibold transition-colors">About Us</Link></li>
                            <li><Link href="/ac-repair-service" className="hover:text-blue-400 transition-colors">AC Repair</Link></li>
                            <li><Link href="/ro-service-repair" className="hover:text-blue-400 transition-colors">RO Service</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                            <li><Link href="/download" className="hover:text-blue-400 transition-colors text-blue-300 font-semibold">Install App</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/legal/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/legal/refund" className="hover:text-blue-400 transition-colors">Refund & Warranty</Link></li>
                        </ul>
                    </div>

                    {/* Owner's Guarantee Badge */}
                    <div className="md:col-span-3 border-t border-slate-800 pt-8 mt-4">
                        <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                            <Link href="https://www.instagram.com/p/C74WTeDy31g/?igsh=MWZvNWdpeng3MG4wYg%3D%3D" target="_blank" className="relative w-16 h-16 rounded-full bg-slate-600 overflow-hidden flex-shrink-0 border-2 border-blue-500 hover:scale-105 transition-transform">
                                <Image
                                    src="https://ui-avatars.com/api/?name=Aahan&background=2563eb&color=fff&size=200&bold=true"
                                    alt="Aahan - Founder"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </Link>
                            <div>
                                <p className="text-slate-200 italic font-medium text-lg leading-relaxed">
                                    &quot;Agar kaam pasand nahi aaya, to dubara free me karunga. Ye mera waada hai.&quot;
                                </p>
                                <div className="mt-2 text-sm text-blue-400 font-bold uppercase tracking-wider">
                                    - Aahan <span className="text-slate-500 font-normal normal-case ml-2">(Founder, Fix Bikaner)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <p>Made with ❤️ in Bikaner</p>
                </div>
            </div>
        </footer>
    );
}
