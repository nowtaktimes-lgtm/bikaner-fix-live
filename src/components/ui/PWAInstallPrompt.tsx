"use client";

import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";

export function PWAInstallPrompt() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);

            // Wait slightly before showing the install prompt to avoid overwhelming user immediately
            setTimeout(() => {
                setShowPrompt(true);
            }, 3000);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        setShowPrompt(false);
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        await deferredPrompt.userChoice;

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] flex items-center justify-between sm:justify-center sm:gap-8 animate-in slide-in-from-bottom-full duration-500">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-inner flex-shrink-0 border border-blue-500">
                    <span className="text-white font-extrabold text-lg">FB</span>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-[15px]">Install Fix Bikaner App</p>
                    <p className="text-sm text-slate-500">Faster booking & easy access!</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={handleInstallClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                    <Download className="w-4 h-4" />
                    Install
                </button>
                <button
                    onClick={() => setShowPrompt(false)}
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors active:bg-slate-200"
                    aria-label="Close prompt"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
