"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
}

// Global mapping of Categories to their relevant Brands/Appliance Types
const categoryBrands: Record<string, string[]> = {
    "AC Repair & Service": ["Voltas", "LG", "Daikin", "Lloyd", "Hitachi", "Samsung", "Blue Star", "Carrier", "Panasonic", "Godrej", "Haier", "Other"],
    "RO Water Purifier Service": ["Kent", "Aquaguard", "Pureit", "Livpure", "Havells", "V-Guard", "A.O. Smith", "Other"],
    "Washing Machine Repair": ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Panasonic", "Godrej", "Other"],
    "Geyser & Heater Repair": ["Bajaj", "Crompton", "Havells", "V-Guard", "A.O. Smith", "Racold", "Other"],
    "CCTV Installation & Dealer": ["CP Plus", "Hikvision", "Dahua", "Godrej", "Zebronics", "Other"],
    "Expert Electrician": ["Fan/Cooler repair", "Inverter wiring", "Switchboard / MCB", "Full House Wiring", "General Fault", "Other Appliance"]
};

// Global mapping of Categories to their relevant Standard Problems
const categoryProblems: Record<string, string[]> = {
    "AC Repair & Service": ["Not Cooling / Working", "Water Leakage", "Making Noise", "Gas Refill / Topup", "Installation / Uninstallation", "Other / Not Sure"],
    "RO Water Purifier Service": ["Filter Need Change", "Not Purifying Water", "Making Noise", "Water Leakage", "Installation", "Other / Not Sure"],
    "Washing Machine Repair": ["Not Spinning / Washing", "Not Draining Water", "Making Loud Noise", "Power / Display Issue", "Other / Not Sure"],
    "Geyser & Heater Repair": ["Water Not Heating", "Water Leakage", "Power Issue / Short Circuit", "Installation", "Other / Not Sure"],
    "CCTV Installation & Dealer": ["New Installation", "Camera Not Working", "DVR / Storage Issue", "Wiring Issue", "Other / Not Sure"],
    "Expert Electrician": ["Short Circuit / Sparking", "Wiring / Fan Fitting", "MCB Tripping", "Inverter Setup", "Other / Not Sure"]
};

// Extracted list of all available service categories
const CATEGORIES = Object.keys(categoryBrands);

export function LeadForm({ isOpen, onClose, serviceName }: LeadFormProps) {
    // Determine the initial category gracefully. If the injected `serviceName` isn't in our dictionary (e.g., general homepage click), default to the first.
    const initialCategory = CATEGORIES.includes(serviceName) ? serviceName : CATEGORIES[0];

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        category: initialCategory,
        brand: categoryBrands[initialCategory][0] || "Other",
        problem: categoryProblems[initialCategory]?.[0] || "Other / Not Sure",
    });

    // When the component re-opens, or `serviceName` dynamically changes, auto-align the category lock
    useEffect(() => {
        if (isOpen && CATEGORIES.includes(serviceName)) {
            const timer = setTimeout(() => {
                setFormData(prev => ({
                    ...prev,
                    category: serviceName,
                    brand: categoryBrands[serviceName]?.[0] || "Other",
                    problem: categoryProblems[serviceName]?.[0] || "Other / Not Sure"
                }));
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [isOpen, serviceName]);

    // Handle Category changes: Reset the brand to the first item of the newly selected category
    const handleCategoryChange = (newCategory: string) => {
        setFormData(prev => ({
            ...prev,
            category: newCategory,
            brand: categoryBrands[newCategory]?.[0] || "Other",
            problem: categoryProblems[newCategory]?.[0] || "Other / Not Sure"
        }));
    };

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Format: "Hi, I am looking for {Category}. Brand: {brand}. My name is {name}. Problem: {problem}. Please quote price."
        const message = `Hi, I am looking for ${formData.category}. \nName: ${formData.name}. \nBrand/Appliance: ${formData.brand}. \nProblem: ${formData.problem}. \nPlease quote price.`;
        const whatsappUrl = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative max-h-[90vh] flex flex-col">

                {/* Header */}
                <div className="bg-blue-600 p-4 flex justify-between items-center text-white shrink-0">
                    <h3 className="font-bold text-lg">Get Instant Quote</h3>
                    <button onClick={onClose} className="hover:bg-blue-700 p-1 rounded-full transition-colors" aria-label="Close form">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 overflow-y-auto">
                    <p className="text-sm text-slate-500 mb-6 text-center">
                        Share your details and our expert will call you within 5 minutes.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* 1. Category Field */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Select Service</label>
                            <select
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white"
                                value={formData.category}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                title="Select Service"
                            >
                                {CATEGORIES.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* 2. Brand / Appliance Field */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                {formData.category === "Expert Electrician" ? "Appliance / Issue Type" : "Select Brand"}
                            </label>
                            <select
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white"
                                value={formData.brand}
                                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                title="Select Brand or Appliance"
                            >
                                {categoryBrands[formData.category]?.map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        {/* 3. Problem Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Standard Problem Type</label>
                            <select
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white"
                                value={formData.problem}
                                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                title="Standard Problem Type"
                            >
                                {categoryProblems[formData.category]?.map(prob => (
                                    <option key={prob} value={prob}>{prob}</option>
                                ))}
                            </select>
                        </div>

                        {/* 4. Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* 5. Mobile */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
                            <input
                                type="tel"
                                required
                                pattern="[0-9]{10}"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900"
                                placeholder="10 digit number"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 pt-4 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-lg sticky bottom-0"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Get Quote on WhatsApp
                        </button>
                    </form>
                </div>

                {/* Footer disclaimer */}
                <div className="bg-slate-50 p-3 text-center text-xs text-slate-500 border-t border-slate-100 shrink-0">
                    Safe & Secure. We don&apos;t spam.
                </div>

            </div>
        </div>
    );
}
