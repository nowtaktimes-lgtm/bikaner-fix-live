"use client";

import Link from 'next/link';
import { Phone, Download, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { triggerHaptic, triggerHapticMedium } from '@/hooks/useVibrate';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 px-4 py-2 md:py-4 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full">

                <div className="flex items-center md:hidden mr-3">
                    <button onClick={() => { triggerHapticMedium(); setIsMenuOpen(true); }} className="text-slate-700 p-1 -ml-1 active:bg-slate-100 rounded-full transition-colors" aria-label="Open Menu">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-slate-900 flex-1 text-center md:text-left">
                    Fix<span className="text-blue-600">Bikaner</span>
                </Link>

                {/* Mobile Call CTA (Prevents header from looking 'empty') */}
                <div className="flex md:hidden items-center">
                    <a onClick={triggerHapticMedium} href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1 bg-blue-50/80 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-100 shadow-sm active:scale-95 transition-transform">
                        <Phone className="w-3.5 h-3.5" /> Call
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</Link>
                    <Link href="/#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Reviews</Link>
                    <Link href="/#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</Link>
                    <Link href="/download" className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-full">
                        <Download className="w-4 h-4" /> App
                    </Link>
                </div>

                {/* CTA Button & Actions (Desktop Only since Mobile has BottomNav) */}
                <div className="hidden md:flex items-center gap-3">
                    <a onClick={triggerHapticMedium} href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md">
                        <Phone className="w-4 h-4" />
                        <span>Call Expert</span>
                    </a>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm md:hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                            <span className="font-bold text-lg">Menu</span>
                            <button onClick={() => { triggerHaptic(); setIsMenuOpen(false); }} className="p-1 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-full" aria-label="Close Menu">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
                            <div className="px-3 mb-2 mt-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Links</p>
                            </div>
                            <Link onClick={() => setIsMenuOpen(false)} href="/" className="flex justify-between items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Home <ChevronRight className="w-4 h-4 text-slate-300" /></Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/#services" className="flex justify-between items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">All Services <ChevronRight className="w-4 h-4 text-slate-300" /></Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/service-areas" className="flex justify-between items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Service Areas <ChevronRight className="w-4 h-4 text-slate-300" /></Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/#reviews" className="flex justify-between items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Customer Reviews <ChevronRight className="w-4 h-4 text-slate-300" /></Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/#faq" className="flex justify-between items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">FAQ <ChevronRight className="w-4 h-4 text-slate-300" /></Link>

                            <hr className="my-3 border-slate-100" />

                            <div className="px-3 mb-2 mt-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Legal</p>
                            </div>
                            <Link onClick={() => setIsMenuOpen(false)} href="/legal/privacy" className="px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm">Privacy Policy</Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/legal/terms" className="px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm">Terms of Service</Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/legal/refund" className="px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm">Refund & Warranty</Link>
                        </div>
                        <div className="p-4 border-t border-slate-100">
                            <a onClick={triggerHapticMedium} href={`tel:${siteConfig.contact.phone}`} className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold">
                                <Phone className="w-4 h-4" /> Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
