"use client";

import { useState, useEffect } from "react";
import { Testimonial } from "@/types";
import { services } from "@/data/services";

const defaultTestimonials: Testimonial[] = [
    {
        name: "Rajesh Ji (JNV Colony)",
        message: "Bhaiya AC ekdum badhiya chal raha hai ab. Cooling fast ho gayi. Thanks!",
        time: "2:30 PM",
        verified: true,
    },
    {
        name: "Amit Gupta (Gangashahar)",
        message: "Late night service ke liye shukriya. Bikaner me proper professional kaam aap hi karte ho.",
        time: "10:15 AM",
        verified: true,
    },
    {
        name: "Suman Devi (Rani Bazar)",
        message: "Price was reasonable. Technician polite tha aur gandagi bhi saaf karke gaya.",
        time: "6:45 PM",
        verified: true,
    },
    {
        name: "Vikram Singh (Sadul Ganj)",
        message: "RO filter change ho gaya, taste acha hai paani ka ab. Recommended!",
        time: "1:20 PM",
        verified: true,
    },
    {
        name: "Pooja Verma (Gopeshwar Basti)",
        message: "Quick response time. 30 min me aa gaye jaisa bola tha.",
        time: "4:10 PM",
        verified: true,
    }
];

export function ChatTestimonials({ testimonials }: { testimonials?: Testimonial[] }) {
    // If testimonials are provided (e.g., on a specific service page), use them.
    // Otherwise (e.g., on the homepage), cycle through all services.
    const isDynamic = !testimonials;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isDynamic || !mounted) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 5000); // Change category every 5 seconds

        return () => clearInterval(interval);
    }, [isDynamic, mounted]);

    // 1. Static Initial Render: Always render exactly the same thing on both Server and Client initially
    const activeTestimonials = testimonials || defaultTestimonials;
    const initialSelected = activeTestimonials.slice(0, 3);

    // 2. Prevent hydration mismatch by rendering static version first, then switching to dynamic interactive version
    if (!mounted) {
        return (
            <section className="py-16 bg-[#e5ddd5] border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Asli Bikaner, Asli Bharosa</h2>
                        <p className="text-slate-600 mb-2">Real chats from happy customers</p>
                    </div>
                    {/* Simplified static skeleton / initial render */}
                    <div className="space-y-6">
                        {initialSelected.map((t, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'items-start' : 'items-end'}`}>
                                <div className={`max-w-[85%] rounded-lg p-3 shadow-sm relative text-sm ${i % 2 === 0 ? 'bg-white rounded-tl-none' : 'bg-[#dcf8c6] rounded-tr-none'}`}>
                                    <div className="font-bold text-xs text-orange-600 mb-1 flex items-center gap-1">{t.name}</div>
                                    <p className="text-slate-800 leading-relaxed">{t.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Determine current dynamic testimonials to show on Client Side
    const dynamicTestimonials = isDynamic
        ? services[currentIndex].testimonials || defaultTestimonials
        : testimonials || defaultTestimonials;

    const selected = dynamicTestimonials.slice(0, 3);
    const serviceName = isDynamic ? services[currentIndex].name : "";

    return (
        <section className="py-16 bg-[#e5ddd5] border-t border-slate-200">
            {/* WhatsApp default BG colorish */}
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Asli Bikaner, Asli Bharosa</h2>
                    <p className="text-slate-600 mb-2">Real chats from happy customers</p>
                    {isDynamic && (
                        <div className="inline-block bg-white/60 px-3 py-1 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 mt-2 transition-all duration-500">
                            Showing reviews for: <span className="text-blue-600">{serviceName}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-6 transition-opacity duration-500" key={currentIndex}>
                    {selected.map((t, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'items-start' : 'items-end'}`}>
                            <div className={`max-w-[85%] rounded-lg p-3 shadow-sm relative text-sm ${i % 2 === 0 ? 'bg-white rounded-tl-none' : 'bg-[#dcf8c6] rounded-tr-none'
                                }`}>
                                {/* Name */}
                                <div className="font-bold text-xs text-orange-600 mb-1 flex items-center gap-1">
                                    {t.name}
                                    {t.verified && <span className="text-blue-500 text-[10px]">✔</span>}
                                </div>

                                {/* Message */}
                                <p className="text-slate-800 leading-relaxed">
                                    {t.message}
                                </p>

                                {/* Time */}
                                <div className="text-[10px] text-slate-400 text-right mt-1">
                                    {t.time}
                                </div>

                                {/* Bubble Tail CSS Triangle (Optional polish) */}
                                <div className={`absolute top-0 w-0 h-0 border-[6px] border-transparent ${i % 2 === 0
                                    ? 'left-[-6px] border-t-white border-r-white'
                                    : 'right-[-6px] border-t-[#dcf8c6] border-l-[#dcf8c6]'
                                    }`} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm text-slate-500 italic">
                        Join 500+ happy families in Bikaner
                    </p>
                </div>
            </div>
        </section>
    );
}
