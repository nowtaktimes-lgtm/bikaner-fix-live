"use client";

import { useState } from "react";
import { Calculator, Settings, AlertCircle, Wrench, ArrowRight } from "lucide-react";

interface ServiceProblem {
    id: string;
    name: string;
    estPrice: string;
    type: "repair" | "service" | "installation";
}

interface PricingCalculatorProps {
    serviceName: string;
    locationName: string;
    baseVisitCharge: string;
}

// Pseudo-database for the estimator
const commonProblems: Record<string, ServiceProblem[]> = {
    "ac-repair": [
        { id: "ac-1", name: "Not Cooling", estPrice: "₹499 - ₹899", type: "repair" },
        { id: "ac-2", name: "Water Leakage", estPrice: "₹299 - ₹599", type: "repair" },
        { id: "ac-3", name: "Deep Foam Jet Servicing", estPrice: "₹599", type: "service" },
        { id: "ac-4", name: "Gas Refilling (Full)", estPrice: "₹2199", type: "repair" },
    ],
    "ro-service": [
        { id: "ro-1", name: "Filter Change", estPrice: "₹399 - ₹899", type: "service" },
        { id: "ro-2", name: "Water Not Purifying", estPrice: "₹499", type: "repair" },
        { id: "ro-3", name: "Motor/Pump Dead", estPrice: "₹1200 - ₹1800", type: "repair" },
    ],
    "washing-machine": [
        { id: "wm-1", name: "Drum Not Spinning", estPrice: "₹899 - ₹1499", type: "repair" },
        { id: "wm-2", name: "Makes Loud Noise", estPrice: "₹499 - ₹999", type: "repair" },
        { id: "wm-3", name: "Water Not Draining", estPrice: "₹399 - ₹699", type: "repair" },
    ],
    "geyser-repair": [
        { id: "gey-1", name: "Not Heating Water", estPrice: "₹499 - ₹899", type: "repair" },
        { id: "gey-2", name: "Water Leakage", estPrice: "₹399 - ₹699", type: "repair" },
        { id: "gey-3", name: "Thermostat Issue", estPrice: "₹599", type: "repair" },
    ],
    "electrician": [
        { id: "elec-1", name: "Switchboard Installation", estPrice: "₹199 - ₹399", type: "service" },
        { id: "elec-2", name: "Fan Regulator Issue", estPrice: "₹149 - ₹299", type: "repair" },
        { id: "elec-3", name: "MCB Tripping", estPrice: "₹299 - ₹599", type: "repair" },
    ],
    "cctv": [
        { id: "cctv-1", name: "Camera Installation", estPrice: "₹499 - ₹999", type: "service" },
        { id: "cctv-2", name: "No Signal / Video Loss", estPrice: "₹399 - ₹599", type: "repair" },
        { id: "cctv-3", name: "DVR Beeping Issue", estPrice: "₹499", type: "repair" },
    ]
};

export function PricingCalculator({ serviceName, locationName, baseVisitCharge }: PricingCalculatorProps) {
    // Infer the category from the name, default to AC if not found to avoid empty states
    const nameLower = serviceName.toLowerCase();
    const categoryKey = nameLower.includes("ac") ? "ac-repair"
        : nameLower.includes("ro ") || nameLower.includes("water purifier") ? "ro-service"
            : nameLower.includes("washing") ? "washing-machine"
                : nameLower.includes("geyser") || nameLower.includes("heater") ? "geyser-repair"
                    : nameLower.includes("electrician") ? "electrician"
                        : nameLower.includes("cctv") || nameLower.includes("camera") ? "cctv"
                            : "ac-repair";

    const problems = commonProblems[categoryKey] || commonProblems["ac-repair"];
    const [selectedProblem, setSelectedProblem] = useState<ServiceProblem | null>(null);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
            <div className="bg-slate-900 border-b border-slate-200 p-4 flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <Calculator className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white text-lg">Instant Price Estimator</h3>
                    <p className="text-slate-400 text-xs">Check repair costs in {locationName} instantly</p>
                </div>
            </div>

            <div className="p-4 md:p-6">
                {!selectedProblem ? (
                    <div>
                        <p className="text-sm font-medium text-slate-700 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-blue-600" /> What issue are you facing?
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {problems.map(prob => (
                                <button
                                    key={prob.id}
                                    onClick={() => setSelectedProblem(prob)}
                                    className="flex items-center justify-between text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all active:scale-[0.98] group"
                                >
                                    <div className="flex items-center gap-2">
                                        {prob.type === "repair" ? <AlertCircle className="w-4 h-4 text-orange-500" /> : <Settings className="w-4 h-4 text-green-500" />}
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{prob.name}</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="mb-4">
                            <button
                                onClick={() => setSelectedProblem(null)}
                                className="text-xs text-blue-600 font-bold mb-2 flex items-center gap-1 hover:underline"
                            >
                                ← Change Problem
                            </button>
                            <h4 className="text-lg font-bold text-slate-900">{selectedProblem.name}</h4>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-600">Estimated Cost</span>
                                <span className="text-xl font-black text-blue-700">{selectedProblem.estPrice}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs text-slate-500">
                                <span>Visiting Charge (If no repair done)</span>
                                <span className="font-semibold line-through mr-1 text-red-400">₹299</span>
                                <span className="font-bold text-emerald-600">{baseVisitCharge}</span>
                            </div>
                        </div>

                        <div className="bg-slate-50 text-xs p-3 rounded-lg text-slate-500 flex items-start gap-2 mb-4 border border-slate-100">
                            <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                            <p>Prices shown are estimates. Final price will be quoted by the technician after physical inspection in {locationName}.</p>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                            <Wrench className="w-5 h-5" />
                            Book Technician Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
