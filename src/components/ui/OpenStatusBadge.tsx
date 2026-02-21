"use client";

import { useState, useEffect } from "react";

export function OpenStatusBadge() {
    const [status, setStatus] = useState<{ isOpen: boolean; text: string; color: string } | null>(null);

    useEffect(() => {
        const hour = new Date().getHours();
        // Open between 8 AM (8) and 9 PM (21)
        const isOpen = hour >= 8 && hour < 21;

        const timer = setTimeout(() => {
            if (isOpen) {
                setStatus({
                    isOpen: true,
                    text: "Open Now • Arriving in 30 Mins",
                    color: "bg-green-100 text-green-700 border-green-200"
                });
            } else {
                setStatus({
                    isOpen: false,
                    text: "Emergency Service Available",
                    color: "bg-red-100 text-red-700 border-red-200"
                });
            }
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    if (!status) return null; // Avoid hydration mismatch

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${status.color} animate-in fade-in zoom-in duration-300`}>
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
            {status.text}
        </div>
    );
}
