"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { TECHNICIAN_NAMES, getStringHash } from "@/lib/utils";

interface FomoToastProps {
    locationName: string;
    serviceName?: string;
    isRotating?: boolean;
}

const ROTATION_LOCATIONS = ["JNV Colony", "Sadul Ganj", "Bikaner City", "Pawanpuri", "Gangashahar", "Naya Shahar", "Civil Lines"];
const ROTATION_SERVICES = ["AC Repair", "RO Service", "Washing Machine Repair", "Electrician", "Geyser Repair"];

export function FomoToast({ locationName, serviceName = "", isRotating = false }: FomoToastProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Static state (if not rotating)
    const staticNameIndex = getStringHash(locationName + serviceName) % TECHNICIAN_NAMES.length;
    const initialName = TECHNICIAN_NAMES[staticNameIndex];

    const [currentName, setCurrentName] = useState(initialName);
    const [currentLocation, setCurrentLocation] = useState(locationName);
    const [currentService, setCurrentService] = useState(serviceName);

    // Animation state
    const [isFading, setIsFading] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        // Initial delay before first show (to not clash with hero load)
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        let intervalId: NodeJS.Timeout;

        // If it's the homepage, cycle values every 5.5 seconds
        if (isRotating) {
            intervalId = setInterval(() => {
                // Start cross-fade 
                setIsFading(true);

                setTimeout(() => {
                    setCurrentName(TECHNICIAN_NAMES[Math.floor(Math.random() * TECHNICIAN_NAMES.length)]);
                    setCurrentLocation(ROTATION_LOCATIONS[Math.floor(Math.random() * ROTATION_LOCATIONS.length)]);
                    setCurrentService(ROTATION_SERVICES[Math.floor(Math.random() * ROTATION_SERVICES.length)]);
                    setIsFading(false);
                }, 400); // Change text halfway through the 800ms fade transition

            }, 5500);
        }

        return () => {
            clearTimeout(showTimer);
            if (intervalId) clearInterval(intervalId);
        };
    }, [isRotating, isMounted]);

    if (!isMounted || !isVisible) return null;

    return (
        <div className="fixed bottom-[100px] md:bottom-8 right-4 md:right-8 z-40 max-w-[280px] md:max-w-sm w-full animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-3 md:p-4 flex items-start gap-3 md:gap-4 relative overflow-hidden">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 z-10"
                    aria-label="Close notification"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="flex-shrink-0 relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg md:text-xl border-2 border-white shadow-sm">
                        👨‍🔧
                    </div>
                    {/* Pulsing indicator */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 md:w-3.5 md:h-3.5 bg-green-500 border-2 border-white rounded-full">
                        <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-75"></div>
                    </div>
                </div>

                <div className={`transition-opacity duration-400 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-[11px] md:text-sm text-slate-800 leading-snug">
                        <span className="font-bold text-blue-700">{currentName}</span> just finished a {currentService ? <span className="font-semibold text-slate-600 lowercase">{currentService}</span> : "job"} in <span className="font-bold">{currentLocation}</span>. He is available nearby!
                    </p>
                    <p className="text-[10px] md:text-xs text-red-600 font-bold mt-1.5 flex items-center gap-1">
                        <span>⏱️</span> Book in next 10 mins to save ₹50.
                    </p>
                </div>
            </div>
        </div>
    );
}
