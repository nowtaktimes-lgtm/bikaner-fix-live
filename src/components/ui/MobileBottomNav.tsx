"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Wrench, PhoneCall, User } from 'lucide-react';
import { triggerHaptic, triggerHapticMedium } from '@/hooks/useVibrate';
import { siteConfig } from '@/config/siteConfig';

export function MobileBottomNav() {
    const pathname = usePathname();

    // Map routes to highlight states
    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname?.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.05)] transition-transform duration-300 translate-y-0">
            <div className="flex justify-around items-center h-[72px] px-2">
                {/* Home */}
                <Link
                    href="/"
                    onClick={triggerHaptic}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <div className={`p-1.5 rounded-2xl transition-all duration-200 ${isActive('/') ? 'bg-blue-50/80 scale-110' : 'active:scale-95'}`}>
                        <Home className="w-[22px] h-[22px]" strokeWidth={isActive('/') ? 2.5 : 2} />
                    </div>
                    <span className="text-[10px] font-semibold">Home</span>
                </Link>

                {/* Services */}
                <Link
                    href="/#services"
                    onClick={triggerHaptic}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/services') || pathname?.includes('/#services') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <div className={`p-1.5 rounded-2xl transition-all duration-200 ${isActive('/services') ? 'bg-blue-50/80 scale-110' : 'active:scale-95'}`}>
                        <Wrench className="w-[22px] h-[22px]" strokeWidth={isActive('/services') ? 2.5 : 2} />
                    </div>
                    <span className="text-[10px] font-semibold">Services</span>
                </Link>

                {/* Make Action Prominent */}
                <div className="flex flex-col items-center justify-center w-full h-full -mt-5">
                    <a
                        href={`tel:${siteConfig.contact.phone}`}
                        onClick={triggerHapticMedium}
                        className="bg-blue-600 text-white rounded-full p-3.5 shadow-lg shadow-blue-500/40 active:scale-95 transition-transform duration-200"
                        aria-label="Call to book"
                        title="Book now"
                    >
                        <PhoneCall className="w-6 h-6" strokeWidth={2.5} />
                    </a>
                    <span className="text-[10px] font-semibold text-slate-800 mt-1.5">Book</span>
                </div>

                {/* Reviews / Profile equivalent */}
                <Link
                    href="/#reviews"
                    onClick={triggerHaptic}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/#reviews') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <div className={`p-1.5 rounded-2xl transition-all duration-200 ${isActive('/#reviews') ? 'bg-blue-50/80 scale-110' : 'active:scale-95'}`}>
                        <User className="w-[22px] h-[22px]" strokeWidth={isActive('/#reviews') ? 2.5 : 2} />
                    </div>
                    <span className="text-[10px] font-semibold">Reviews</span>
                </Link>
            </div>
        </div>
    );
}
