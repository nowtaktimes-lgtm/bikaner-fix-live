"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { triggerHapticMedium } from "@/hooks/useVibrate";

interface StickyBottomBarProps {
    serviceName: string;
    locationName: string;
}

export function StickyBottomBar({ serviceName, locationName }: StickyBottomBarProps) {
    // Format: "Hi, I am looking for {service} in *{location}*. Please quote price."
    const whatsappMessage = `Hi, I am looking for ${serviceName} in *${locationName}*. Please quote price.`;
    const whatsappUrl = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-4 md:hidden">
            <div className="grid grid-cols-2 gap-4">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={triggerHapticMedium}
                    className="flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 font-bold py-3 rounded-lg transition-colors border border-green-200"
                >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </a>
                <a
                    href={`tel:${siteConfig.contact.phone}`}
                    onClick={triggerHapticMedium}
                    className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/30 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
                    <Phone className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10">Call Now</span>
                </a>
            </div>
        </div >
    );
}
