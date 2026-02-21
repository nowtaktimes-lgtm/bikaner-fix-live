"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { siteConfig } from "@/config/siteConfig";

export default function QRGenerator() {
    const [selectedLocation, setSelectedLocation] = useState(locations[0].slug);
    const [selectedService, setSelectedService] = useState(services[0].slug);

    const currentLocation = locations.find(l => l.slug === selectedLocation);
    const currentService = services.find(s => s.slug === selectedService);

    const qrUrl = `${siteConfig.url}/${selectedService}/${selectedLocation}`;

    return (
        <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-8">Offline QR Generator</h1>

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Controls */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Select Service</label>
                        <select
                            className="w-full p-3 border border-slate-300 rounded-lg"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            title="Select Service"
                        >
                            {services.map(s => (
                                <option key={s.id} value={s.slug}>{s.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Select Location</label>
                        <select
                            className="w-full p-3 border border-slate-300 rounded-lg"
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            title="Select Location"
                        >
                            {locations.map(l => (
                                <option key={l.id} value={l.slug}>{l.name} (Zone {l.zoneId})</option>
                            ))}
                        </select>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
                        <strong>Target URL:</strong><br />
                        <a href={qrUrl} target="_blank" className="underline break-all">{qrUrl}</a>
                    </div>

                    <button
                        onClick={() => window.print()}
                        className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors print:hidden"
                    >
                        Print Sticker
                    </button>
                </div>

                {/* Preview Area (This is what gets printed) */}
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl p-8 bg-white print:border-none print:p-0">
                    <div className="text-center space-y-4">
                        <div className="bg-white p-4 inline-block">
                            <QRCode value={qrUrl} size={200} />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                                Scan for Service
                            </h2>
                            <p className="text-lg text-blue-600 font-bold mt-1">
                                {currentService?.name}
                            </p>
                            <p className="text-sm text-slate-500">
                                in {currentLocation?.name}
                            </p>
                            <p className="mt-4 font-mono font-bold text-slate-400">
                                {siteConfig.contact.phone}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 w-full">
                            <p className="text-xs text-slate-400">
                                {siteConfig.name} • 100% Satisfaction Guarantee
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
