"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function HomeBookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        service: "AC Repair", // Default
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Format: "Hi, I want to book {service}. Name: {name}, Mobile: {mobile}."
        const message = `Hi, I want to book *${formData.service}*. Name: ${formData.name}, Mobile: ${formData.mobile}. Please confirm.`;
        const whatsappUrl = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="py-12 bg-white relative z-20 -mt-8 mx-4 rounded-3xl shadow-xl border border-slate-100 max-w-5xl md:mx-auto">
            <div className="px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            Book a Repair in <span className="text-blue-600">60 Seconds</span>
                        </h2>
                        <p className="text-slate-500">
                            No account needed. Just fill details & we will call you back.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full font-semibold text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Response time: ~5 Mins</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="md:col-span-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Your Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-800"
                            placeholder="Ex: Aahan Kumar"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Mobile Number</label>
                        <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-800"
                            placeholder="Ex: 9876543210"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        />
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Service Type</label>
                        <div className="relative">
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-800 appearance-none bg-white"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                title="Service Type"
                            >
                                <option value="AC Repair">AC Repair/Service</option>
                                <option value="RO Service">RO Water Purifier</option>
                                <option value="Washing Machine">Washing Machine</option>
                                <option value="Geyser Repair">Geyser/Heater</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Other">Other Inquiry</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex items-end">
                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-2"
                        >
                            <span>Book Now</span>
                            <MessageCircle className="w-5 h-5 text-green-400" />
                        </button>
                    </div>
                </form>

                <div className="mt-4 flex items-center justify-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" /> No Advance Payment
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" /> Verified Experts
                    </div>
                </div>
            </div>
        </section>
    );
}
