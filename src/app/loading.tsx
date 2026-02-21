"use client";

import { useEffect, useState } from "react";

export default function Loading() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full h-full min-h-screen bg-slate-50 relative flex flex-col pointer-events-none">
            {/* Skeleton Navbar */}
            <div className="fixed top-0 w-full z-50 px-4 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200 flex justify-between items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
                <div className="w-32 h-6 rounded-md bg-slate-200 animate-pulse" />
                <div className="w-24 h-8 rounded-full bg-slate-200 animate-pulse" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 w-full pt-[72px] pb-[80px] md:pb-0 px-4 mt-4 max-w-7xl mx-auto">

                {/* Skeleton Hero Banner */}
                <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl bg-slate-200 animate-pulse mb-6" />

                {/* Skeleton Trust Badges */}
                <div className="flex gap-3 mb-8 overflow-hidden">
                    <div className="w-32 h-10 rounded-lg bg-slate-200 animate-pulse flex-shrink-0" />
                    <div className="w-32 h-10 rounded-lg bg-slate-200 animate-pulse flex-shrink-0" />
                    <div className="w-32 h-10 rounded-lg bg-slate-200 animate-pulse flex-shrink-0" />
                </div>

                {/* Skeleton Content Blocks */}
                <div className="space-y-4 mb-8">
                    <div className="w-full h-24 rounded-xl bg-slate-200 animate-pulse" />
                    <div className="w-full h-40 rounded-xl bg-slate-200 animate-pulse" />
                </div>

            </div>

            {/* Skeleton Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white border-t border-slate-200 p-4 md:hidden">
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-12 rounded-lg bg-slate-200 animate-pulse w-full" />
                    <div className="h-12 rounded-lg bg-slate-200 animate-pulse w-full" />
                </div>
            </div>
        </div>
    );
}
