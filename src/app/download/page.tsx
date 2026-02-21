"use client";

import { useState, useEffect } from "react";
import { Download, CheckCircle2, Smartphone, Apple, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function DownloadAppPage() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        // Detect iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIOS(isIosDevice);

        // Detect if already installed / running as PWA
        const isPWA = window.matchMedia('(display-mode: standalone)').matches;
        setIsStandalone(isPWA);

        // Listen for the install prompt event
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) {
            // If the prompt isn't available, we might be on a browser that doesn't support it 
            // or it's already installed. It's safe to alert them.
            if (isIOS) {
                alert("Please follow the iOS instructions below.");
            } else {
                alert("To install, use your browser's menu and select 'Install app' or 'Add to Home screen'.");
            }
            return;
        }

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        setDeferredPrompt(null);
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Smartphone className="w-4 h-4" />
                        Official Web App
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Get Fix Bikaner on your Phone
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Experience lightning-fast bookings, exclusive app-only discounts, and easy access to Bikaner's #1 home service experts right from your home screen.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    {/* Visual/Card Area */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>

                        <div className="flex justify-center mb-8 relative z-10">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner text-4xl font-extrabold">
                                FB
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-6 text-center">App Benefits</h2>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                                Lightweight - Requires less than 1MB of storage
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                                Faster loading times than the website
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                                One-tap access to book technicians
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                                View contact numbers offline
                            </li>
                        </ul>
                    </div>

                    {/* Action Area */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Installation Steps</h2>
                        <p className="text-slate-600 mb-8 text-sm">Follow the instructions for your device below.</p>

                        {isStandalone ? (
                            <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center mb-8">
                                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                                <h3 className="font-bold text-green-800 text-lg">App is Installed!</h3>
                                <p className="text-green-700 text-sm mt-1">You are currently using the Fix Bikaner App.</p>
                                <Link href="/" className="inline-flex mt-4 items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
                                    Book a Service <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ) : (
                            <>
                                {/* Android / General button */}
                                <div className={`mb-8 ${isIOS ? 'opacity-50 grayscale' : ''}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Smartphone className="w-6 h-6 text-blue-600" />
                                        <h3 className="font-bold text-slate-900 text-lg">Android / Chrome</h3>
                                    </div>
                                    <button
                                        onClick={handleInstallClick}
                                        disabled={isIOS && !deferredPrompt}
                                        className="w-full relative group overflow-hidden rounded-xl bg-blue-600 px-6 py-4 text-white font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] hover:shadow-blue-500/40 active:scale-95 disabled:px-6 disabled:py-4 disabled:bg-slate-300 disabled:shadow-none disabled:hover:scale-100 disabled:text-slate-500"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <Download className="w-5 h-5" />
                                            Install App Now
                                        </span>
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    </button>
                                </div>

                                {/* iOS Instructions */}
                                <div className={`pt-8 border-t border-slate-100 ${!isIOS ? 'opacity-50 grayscale' : ''}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Apple className="w-6 h-6 text-slate-900" />
                                        <h3 className="font-bold text-slate-900 text-lg">iPhone / Safari</h3>
                                    </div>
                                    <ol className="list-decimal list-inside space-y-3 text-slate-700 font-medium">
                                        <li>Tap the <strong>Share icon</strong> (square with up arrow) at the bottom.</li>
                                        <li>Scroll down and tap <strong>"Add to Home Screen"</strong>.</li>
                                        <li>Tap <strong>"Add"</strong> in the top right corner.</li>
                                    </ol>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="text-center text-slate-500 text-sm">
                    Having trouble? Call our support at <a href={`tel:${siteConfig.phone}`} className="font-bold text-blue-600">{siteConfig.phone}</a>
                </div>
            </div>
        </main>
    );
}
